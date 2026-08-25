import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { GoogleGenAI } from "@google/genai";
import { Send, Sparkles, X } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// PROFILE DATA — replace the placeholder with Raj's full documentation
// ─────────────────────────────────────────────────────────────────────────────
const SANJEET_PROFILE_DATA = `
Name: Raj Kumar Nishad (Sanjeet)
Role: Android / Mobile Software Developer (Fresher)
Education: Bachelor of Computer Applications (BCA) — Currently Pursuing

Contact:
- GitHub: https://github.com/raj-9693
- LinkedIn: http://www.linkedin.com/in/raj-kumar-nishad
- Email: rajnishad96930@gmail.com
- Phone: 9693057161

Skills:
Languages: Kotlin, JavaScript (ES6+), Java
Mobile Frameworks: React Native, Android SDK
Architecture: MVVM, Component Lifecycle, Hooks & State Management
Networking: Retrofit, Axios, REST APIs
Local Storage: Room Database, SQLite, AsyncStorage
UI/UX: Material Design, ConstraintLayout, Flexbox
Tools: Android Studio, VS Code, Expo CLI, Git & GitHub, Firebase

React Native:
- React Native CLI, React Navigation (Stack, Bottom Tab, Auth Flow)
- Context API, Axios, REST API Integration
- Responsive UI, AsyncStorage
- Android Build Process, Gradle, Firebase Basics

Stats:
- 20+ GitHub Repositories
- 5+ Android/Mobile Projects

Projects:
- Android apps: Kotlin + MVVM + Firebase
- REST API apps: Retrofit integration
- Local DB apps: Room DB + SQLite
- React Native: Data-Filtering Search Component (conditional array filtering)
- React Native: Digital Drawing Canvas App (layered logic, pencil tools, eraser states)
- React Native: Local DB storage utilities (SQLite transactions)

Looking for:
- Android / Mobile Developer Internship or Entry-level role
`;

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

/** Shape stored in localStorage — Gemini native roles */
interface HistoryMessage {
  role: "user" | "model";
  content: string;
}

interface DisplayMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
const LS_KEY = "raj_chatbot_history";
const MAX_HISTORY = 20; // keep last 20 turns — sufficient context, lower token cost

// Module-level constants — defined once, never recreated per call
const BLOCKED_REASONS = new Set(["SAFETY", "RECITATION", "BLOCKLIST", "PROHIBITED_CONTENT"]);
const RENDERABLE_REASONS = new Set(["STOP", "MAX_TOKENS", "OTHER", ""]);

const SUGGESTION_CHIPS = [
  { label: "Who are you?", text: "Who are you and what can you help me with?" },
  { label: "Your Skills", text: "What are Raj's technical skills and expertise?" },
  { label: "Your Projects?", text: "Tell me about Raj's projects and what he has built." },
  { label: "Hire you", text: "How can I hire Raj or get in touch with him?" },
  { label: "Contact info?", text: "What is Raj's contact information?" },
  { label: "Education", text: "Tell me about Raj's education and background." },
];

const SYSTEM_INSTRUCTION = `
You are Raj's portfolio assistant. Answer questions using ONLY the PROFILE_DATA below.

RULES:
1. Use only information from PROFILE_DATA. Never invent or assume anything.
2. If the answer is not in PROFILE_DATA, reply exactly: "This information is not available in Raj's profile."
3. Never include contact details (GitHub, LinkedIn, email, phone) unless the user explicitly asks.
4. Never repeat information already given in this conversation.
5. Never use marketing language, exaggerations, or emojis.
6. Answer only what the user asked. Nothing more.

RESPONSE:
- Default length: 20–60 words.
- Max length: 80 words.
- Use bullet points for lists of skills, projects, or technologies.
- Only give a detailed answer if the user uses words like "explain", "elaborate", or "tell me more".

${SANJEET_PROFILE_DATA}
`;

// ─────────────────────────────────────────────────────────────────────────────
// Gemini SDK config — the key is passed only through SDK initialization.
// ─────────────────────────────────────────────────────────────────────────────
const GEMINI_API_KEY = (import.meta.env.VITE_GEMINI_API_KEY as string | undefined)?.trim();
const GEMINI_CLIENT = GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: GEMINI_API_KEY })
  : null;
const GEMINI_MODEL = "gemini-3.6-flash";

// ─────────────────────────────────────────────────────────────────────────────
// Message formatting — lightweight inline Markdown for bot replies
// ─────────────────────────────────────────────────────────────────────────────
const INLINE_FORMAT_REGEX =
  /\*\*([^*]+)\*\*|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

function renderInlineFormatting(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  INLINE_FORMAT_REGEX.lastIndex = 0;
  while ((match = INLINE_FORMAT_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      nodes.push(
        <strong key={key++} className="font-semibold text-white break-all">
          {match[1]}
        </strong>
      );
    } else if (match[2]) {
      nodes.push(
        <strong key={key++} className="font-semibold text-blue-300 break-all">
          {match[2]}
        </strong>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}

function FormattedMessage({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <>
      {lines.map((line, lineIdx) => (
        <React.Fragment key={lineIdx}>
          {renderInlineFormatting(line)}
          {lineIdx < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tiny sub-components
// ─────────────────────────────────────────────────────────────────────────────
const ThinkingDots = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-2 h-2 rounded-full bg-blue-400"
        style={{
          animation: `thinkingBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
        }}
      />
    ))}
  </div>
);

const AnimatedRobotAvatar = ({
  size = "md",
  animate = true,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}) => {
  const boxClass =
    size === "sm"
      ? "w-6 h-6"
      : size === "lg"
        ? "w-10 h-10"
        : size === "xl"
          ? "w-[60px] h-[60px]"
          : "w-8 h-8";
  const iconSize = size === "sm" ? 16 : size === "lg" ? 26 : size === "xl" ? 38 : 19;

  return (
    <div
      className={`${boxClass} shrink-0 flex items-center justify-center overflow-visible rounded-2xl`}
      style={{
        background: "linear-gradient(145deg, #ec4899 0%, #8b5cf6 48%, #3b82f6 100%)",
        boxShadow: "0 4px 18px rgba(139,92,246,0.42)",
      }}
      aria-hidden
    >
      <Sparkles
        size={iconSize}
        strokeWidth={2.25}
        className={animate ? "ai-logo-float text-white" : "text-white"}
        aria-label="AI assistant"
      />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Helper — load history from localStorage
// ─────────────────────────────────────────────────────────────────────────────
function loadHistory(): HistoryMessage[] {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      localStorage.removeItem(LS_KEY);
      return [];
    }
    const valid = parsed.filter(
      (m): m is HistoryMessage =>
        (m.role === "user" || m.role === "model") &&
        typeof m.content === "string"
    );
    // Strip dangling user turn — previous send failed mid-flight
    while (valid.length > 0 && valid[valid.length - 1].role === "user") {
      valid.pop();
    }
    return valid;
  } catch {
    localStorage.removeItem(LS_KEY);
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ── Load history ONCE at mount — single source of truth ──────────────────
  const initialHistory = useRef<HistoryMessage[]>(loadHistory());

  // Conversation history (source of truth for API) — user/assistant turns only
  const [chatHistory, setChatHistory] = useState<HistoryMessage[]>(
    () => initialHistory.current
  );

  // Display messages built from the same single load — no extra loadHistory() calls
  const [displayMessages, setDisplayMessages] = useState<DisplayMessage[]>(
    () =>
      initialHistory.current.map((m, i) => ({
        id: `loaded-${i}`,
        role: m.role,
        text: m.content,
        timestamp: Date.now() - (initialHistory.current.length - i) * 1000,
      }))
  );

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const appendBotReply = useCallback((text: string, history: HistoryMessage[]) => {
    const now = Date.now();
    const msg: DisplayMessage = {
      id: `model-${now}`,
      role: "model",
      text,
      timestamp: now,
    };
    setDisplayMessages((prev) => [...prev, msg]);
    setChatHistory([...history, { role: "model" as const, content: text }]);
  }, []);

  // Handle API call for both regular messages and suggestions.
  // `history` MUST already contain the new user turn as its last entry.
  // The full history is sent so Gemini has complete conversation context.
  const handleAPICall = useCallback(async (history: HistoryMessage[]) => {
    if (!GEMINI_CLIENT) {
      setError("API key missing. Add VITE_GEMINI_API_KEY to your .env file.");
      return;
    }

    // Guard: last entry must be a user turn — never send a dangling model turn
    if (history.length === 0 || history[history.length - 1].role !== "user") {
      setError("History is malformed. Last entry must be a user message.");
      return;
    }

    setIsThinking(true);
    setError(null);

    try {
      const contents = history.map((message) => ({
        role: message.role,
        parts: [{ text: message.content }],
      }));

      const data = await GEMINI_CLIENT.models.generateContent({
        model: GEMINI_MODEL,
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.3,
          maxOutputTokens: 1024,
          topP: 0.9,
        },
      });

      // ── Blocked at prompt level (no candidates produced at all) ───────────
      if (!data?.candidates || data.candidates.length === 0) {
        if (data?.promptFeedback?.blockReason) {
          appendBotReply("This information is not available in Raj's profile.", history);
          return;
        }
        appendBotReply("The AI server is currently busy. Please try again in a few moments.", history);
        return;
      }

      // ── Finish-reason constants are defined at module level ───────────────
      // BLOCKED_REASONS: SAFETY, RECITATION, BLOCKLIST, PROHIBITED_CONTENT
      // RENDERABLE_REASONS: STOP, MAX_TOKENS, OTHER, ""

      // ── Iterate every candidate, collect all text parts ───────────────────
      // Gemini may return multiple candidates; we join text from all of them
      // in order so no content is silently dropped.
      let responseText = "";

      for (const candidate of data.candidates) {
        const finishReason: string = candidate?.finishReason ?? "";

        // Hard block — return safe fallback immediately, skip remaining candidates
        if (BLOCKED_REASONS.has(finishReason)) {
          appendBotReply("This information is not available in Raj's profile.", history);
          return;
        }

        // Only proceed if the finish reason indicates renderable content
        if (!RENDERABLE_REASONS.has(finishReason)) {
          continue;
        }

        const parts: Array<{ text?: string } | undefined> =
          candidate?.content?.parts ?? [];

        // Join every text part from this candidate — no trimming so whitespace
        // between parts (e.g. code blocks, line breaks) is preserved exactly
        const candidateText = parts
          .map((part) => part?.text ?? "")
          .join("");

        responseText += candidateText;
      }

      // ── Empty response after processing all candidates ────────────────────
      if (!responseText.trim()) {
        appendBotReply("The AI server is currently busy. Please try again in a few moments.", history);
        return;
      }

      // ── Commit to display and history ─────────────────────────────────────
      const now = Date.now();
      const modelDisplay: DisplayMessage = {
        id: `model-${now}`,
        role: "model",
        text: responseText,
        timestamp: now,
      };
      setDisplayMessages((prev) => [...prev, modelDisplay]);

      setChatHistory([
        ...history,
        { role: "model" as const, content: responseText },
      ]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Try again.";
      const fallbackMessage = "The AI server is currently busy. Please try again in a few moments.";

      if (/401|403|503|5\d\d|fetch/i.test(msg)) {
        appendBotReply(fallbackMessage, history);
      } else {
        setError(msg);
      }
    } finally {
      setIsThinking(false);
    }
  }, [appendBotReply]);

  // Send suggestion chip text as a user message
  const sendSuggestion = useCallback((suggestionText: string) => {
    if (isThinking) return;
    setInput("");

    const userDisplay: DisplayMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: suggestionText,
      timestamp: Date.now(),
    };
    setDisplayMessages((prev) => [...prev, userDisplay]);

    // Build updated history with the new user turn appended, trimmed to MAX_HISTORY.
    // Do NOT call setChatHistory here — handleAPICall commits the full round-trip
    // (user + model) in one write, avoiding a redundant intermediate localStorage flush.
    const updatedHistory: HistoryMessage[] = [
      ...chatHistory,
      { role: "user" as const, content: suggestionText },
    ].slice(-MAX_HISTORY);

    handleAPICall(updatedHistory);
  }, [chatHistory, isThinking, handleAPICall]);

  // Persist history to localStorage — debounced so rapid state updates
  // (user turn then model turn) collapse into a single write per round-trip.
  // Skip the very first mount write — data was just read FROM localStorage.
  const isMountedWrite = useRef(false);
  const lsWriteTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!isMountedWrite.current) {
      isMountedWrite.current = true;
      return;
    }
    if (lsWriteTimer.current) clearTimeout(lsWriteTimer.current);
    lsWriteTimer.current = setTimeout(() => {
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(chatHistory));
      } catch {
        const trimmed = chatHistory.slice(-10);
        try { localStorage.setItem(LS_KEY, JSON.stringify(trimmed)); } catch { /* ignore */ }
      }
    }, 300);
    return () => {
      if (lsWriteTimer.current) clearTimeout(lsWriteTimer.current);
    };
  }, [chatHistory]);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [displayMessages, isThinking]);

  // Focus input when window opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isThinking) return;
    if (!GEMINI_CLIENT) {
      setError("API key missing. Add VITE_GEMINI_API_KEY to your .env file.");
      return;
    }

    setError(null);
    setInput("");

    // Optimistic user message for display
    const userDisplay: DisplayMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text,
      timestamp: Date.now(),
    };
    setDisplayMessages((prev) => [...prev, userDisplay]);

    // Append the new user turn to the existing history and trim to MAX_HISTORY.
    // This updatedHistory is passed directly to handleAPICall so the full
    // conversation context (not just the latest message) is sent to Gemini.
    const updatedHistory: HistoryMessage[] = [
      ...chatHistory,
      { role: "user" as const, content: text },
    ].slice(-MAX_HISTORY);

    setChatHistory(updatedHistory);
    await handleAPICall(updatedHistory);
  }, [input, isThinking, chatHistory, handleAPICall]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearHistory = () => {
    setChatHistory([]);
    setDisplayMessages([]);
    localStorage.removeItem(LS_KEY);
  };

  // ── Render ──────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Inject keyframe ── */}
      <style>{`
        @keyframes thinkingBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40%           { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes robotFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }
        @keyframes robotBlink {
          0%, 44%, 46%, 100% { transform: scaleY(1); }
          45%                 { transform: scaleY(0.1); }
        }
        .ai-logo-float {
          animation: robotFloat 3.2s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      {/* ── Chat window ── */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] flex flex-col rounded-2xl overflow-hidden"
          style={{
            background: "rgba(15, 23, 42, 0.80)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow:
              "0 0 0 1px rgba(59,130,246,0.12), 0 0 40px rgba(59,130,246,0.18), 0 25px 50px rgba(0,0,0,0.6)",
            height: "min(520px, 75vh)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{
              background: "rgba(30, 41, 59, 0.70)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <AnimatedRobotAvatar size="md" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white leading-none">
                  Raj AI Assistant
                </p>
                <p className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Online. Portfolio
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {displayMessages.length > 0 && (
                <button
                  onClick={clearHistory}
                  title="Clear chat"
                  className="text-white/30 hover:text-white/70 transition-colors duration-200 p-1.5 rounded-lg hover:bg-white/5 text-[10px] font-medium tracking-wide"
                >
                  CLEAR
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors duration-200 p-1.5 rounded-lg hover:bg-white/5"
              >
                <X size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin">
            {displayMessages.length === 0 && !isThinking && (
              <div className="flex flex-col items-center justify-center gap-4 text-center pb-4 px-2 flex-1">
                <AnimatedRobotAvatar size="lg" />
                <div>
                  <p className="text-white/70 text-sm font-medium">
                    Hey! I'm Raj
                  </p>
                  <p className="text-white/35 text-xs leading-relaxed max-w-[240px] mt-1">
                    Ask me anything about Raj's skills, projects, or experience.
                  </p>
                </div>

                {/* Suggestion Chips */}
                <div className="grid grid-cols-2 gap-2 w-full max-w-xs mt-2">
                  {SUGGESTION_CHIPS.map((chip) => (
                    <button
                      key={chip.label}
                      onClick={() => sendSuggestion(chip.text)}
                      disabled={isThinking}
                      className="group px-3 py-2.5 rounded-lg text-xs font-medium text-white/80 transition-all duration-200 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 text-center h-fit"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                        e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                      }}
                    >
                      <span>{chip.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {displayMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "model" && (
                  <div className="mr-2 mt-0.5">
                    <AnimatedRobotAvatar size="sm" />
                  </div>
                )}
                <div
                  className={`
                    max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed break-words overflow-wrap-break-word
                    ${msg.role === "user"
                      ? "rounded-tr-sm text-white"
                      : "rounded-tl-sm text-white/85"
                    }
                  `}
                  style={
                    msg.role === "user"
                      ? {
                        background:
                          "linear-gradient(135deg, #3b82f6, #6366f1)",
                        boxShadow: "0 2px 12px rgba(99,102,241,0.35)",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        hyphens: "auto",
                      }
                      : {
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        hyphens: "auto",
                      }
                  }
                >
                  {msg.role === "model" ? (
                    <FormattedMessage text={msg.text} />
                  ) : (
                    msg.text.split("\n").map((line, i, arr) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))
                  )}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex justify-start">
                <div className="mr-2 mt-0.5">
                  <AnimatedRobotAvatar size="sm" />
                </div>
                <div
                  className="rounded-2xl rounded-tl-sm"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <ThinkingDots />
                </div>
              </div>
            )}

            {error && (
              <div className="text-xs text-red-400/80 bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2 text-center">
                {error}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="px-3 py-3 shrink-0"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div
              className="flex items-center gap-2 rounded-xl px-3 py-2.5"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about skills, projects, or experience..."
                disabled={isThinking}
                className="flex-1 min-w-0 bg-transparent text-sm text-white placeholder-white/35 outline-none disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isThinking}
                className="
                  w-8 h-8 rounded-lg flex items-center justify-center shrink-0
                  transition-all duration-200
                  disabled:opacity-30 disabled:cursor-not-allowed
                  hover:scale-110 active:scale-95
                "
                style={{
                  background: input.trim() && !isThinking
                    ? "linear-gradient(135deg, #3b82f6, #6366f1)"
                    : "rgba(255,255,255,0.08)",
                  boxShadow: input.trim() && !isThinking
                    ? "0 0 14px rgba(99,102,241,0.5)"
                    : "none",
                }}
              >
                <Send size={16} strokeWidth={2.25} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating bubble ── */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="
          fixed bottom-6 right-6 z-50
          flex items-center justify-center
          border-0 p-0
          transition-transform duration-300
          hover:scale-110 active:scale-95
        "
        style={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        {isOpen ? (
          <X
            size={28}
            strokeWidth={2.5}
            className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
          />
        ) : (
          <AnimatedRobotAvatar size="xl" animate />
        )}

        {/* Unread pulse — only when closed and has messages */}
        {!isOpen && displayMessages.length > 0 && (
          <span
            className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950"
            style={{ animation: "thinkingBounce 2s ease-in-out infinite" }}
          />
        )}
      </button>
    </>
  );
};

export default ChatBot;
