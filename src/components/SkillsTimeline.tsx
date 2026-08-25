import type { ReactNode } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
interface Skill {
  name: string;
  icon: ReactNode;
}

interface SkillCategory {
  id: string;
  label: string;
  categoryIcon: ReactNode;
  /** Tailwind gradient classes for the track line */
  trackGradient: string;
  /** CSS box-shadow value for the neon glow on the track */
  trackGlow: string;
  /** Tailwind bg class for the dot */
  dotBg: string;
  /** CSS box-shadow value for the dot glow on hover */
  dotGlow: string;
  /** Tailwind text/border accent colour class */
  accent: string;
  skills: Skill[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Skill SVG Icons
// ─────────────────────────────────────────────────────────────────────────────
const KotlinIcon = () => (
  <img
    src={`${import.meta.env.BASE_URL}images/kotlin-programming-language-icon.svg`}
    alt="Kotlin"
    className="w-5 h-5 object-contain"
  />
);



const ReactNativeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2.4" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" fill="none" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4"
      fill="none" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4"
      fill="none" transform="rotate(120 12 12)" />
  </svg>
);



const RoomDbIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="#4CAF50" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="#4CAF50" strokeWidth="1.6" fill="none" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#4CAF50" strokeWidth="1.6" fill="none" />
    <circle cx="12" cy="12" r="1.5" fill="#A5D6A7" />
  </svg>
);

const SqliteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="#1976D2" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="#1976D2" strokeWidth="1.6" fill="none" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#1976D2" strokeWidth="1.6" fill="none" />
    <text x="6.5" y="14" fontSize="5.5" fill="#90CAF9" fontWeight="bold" fontFamily="monospace">SQL</text>
  </svg>
);

const RetrofitIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      stroke="#FF6B35" strokeWidth="1.5" fill="rgba(255,107,53,0.15)" />
    <polyline points="7.5 4.21 12 6.81 16.5 4.21" stroke="#FF6B35" strokeWidth="1.4" />
    <polyline points="7.5 19.79 7.5 14.6 3 12" stroke="#FF6B35" strokeWidth="1.4" />
    <polyline points="21 12 16.5 14.6 16.5 19.79" stroke="#FF6B35" strokeWidth="1.4" />
    <line x1="12" y1="22.08" x2="12" y2="12" stroke="#FF6B35" strokeWidth="1.4" />
  </svg>
);

const FirebaseIcon = () => (
  <img
    src={`${import.meta.env.BASE_URL}images/google-firebase-icon.svg`}
    alt="Firebase"
    className="w-5 h-5 object-contain"
  />
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#e2e8f0">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const AndroidStudioIcon = () => (
  <img
    src={`${import.meta.env.BASE_URL}images/android-studio-icon.svg`}
    alt="Android Studio"
    className="w-5 h-5 object-contain"
  />
);

const AndroidSdkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.637.637 0 0 0-.83-.22c-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"
      fill="#3DDC84" />
  </svg>
);

const CodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const JavaIcon = () => (
  <img
    src={`${import.meta.env.BASE_URL}images/java-programming-language-icon.svg`}
    alt="Java"
    className="w-5 h-5 object-contain"
  />
);

const JavaScriptIcon = () => (
  <img
    src={`${import.meta.env.BASE_URL}images/javascript-programming-language-icon.svg`}
    alt="JavaScript"
    className="w-5 h-5 object-contain"
  />
);

const AxiosIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M4 5h16v14H4z" fill="#00d1ff" fillOpacity="0.12" />
    <path d="M7 7h10v2H7zM7 11h10v2H7zM7 15h6v2H7z" stroke="#00d1ff" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const AsyncStorageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="#34d399" strokeWidth="1.6" fill="rgba(52,211,153,0.14)" />
    <path d="M8 8h8M8 12h8M8 16h5" stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ReduxIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 3c4.8 0 8 2.2 8 5 0 2.2-2.1 3.9-4.8 4.6l-2.4 1.2c-1.2.6-2 1.8-2 3.1 0 1.4 1.2 2.6 3.1 2.6 1.4 0 2.8-.5 3.7-1.4" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 21c-4.8 0-8-2.2-8-5 0-2.2 2.1-3.9 4.8-4.6l2.4-1.2c1.2-.6 2-1.8 2-3.1 0-1.4-1.2-2.6-3.1-2.6-1.4 0-2.8.5-3.7 1.4" stroke="#8b5cf6" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ContextIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="3" stroke="#a78bfa" strokeWidth="1.6" />
    <path d="M8 10h8M8 14h5" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="8" cy="8" r="1" fill="#a78bfa" />
  </svg>
);

const StateHookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="3" stroke="#a78bfa" strokeWidth="1.6" />
    <path d="M8 8h8M8 16h8" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M10 12h4" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const NavIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M4 7h16M4 12h16M4 17h10" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M20 17l-2-2m2 2l-2 2" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const StackNavIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 6h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" stroke="#38bdf8" strokeWidth="1.6" />
    <path d="M8 10h8M8 14h5" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const TabNavIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#38bdf8" strokeWidth="1.6" />
    <path d="M6 8v8M12 8v8M18 8v8" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const DrawerNavIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#38bdf8" strokeWidth="1.6" />
    <path d="M7 8h10M7 12h10M7 16h6" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const LifecycleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M7 4v4M17 4v4M5 8h14" stroke="#2dd4bf" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="5" y="8" width="14" height="12" rx="2" stroke="#2dd4bf" strokeWidth="1.6" />
    <path d="M8 12h8" stroke="#2dd4bf" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const HooksIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M8 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" stroke="#2dd4bf" strokeWidth="1.6" />
    <path d="M8 12h8" stroke="#2dd4bf" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const MvvmIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M4 8l8-4 8 4-8 4-8-4z" stroke="#2dd4bf" strokeWidth="1.6" />
    <path d="M4 16l8-4 8 4-8 4-8-4z" stroke="#2dd4bf" strokeWidth="1.6" />
    <path d="M12 4v16" stroke="#2dd4bf" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const FlexboxIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#f472b6" strokeWidth="1.6" />
    <path d="M8 8h8v8H8z" stroke="#f472b6" strokeWidth="1.6" />
    <path d="M8 12h8" stroke="#f472b6" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const MaterialIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M3 6l9-3 9 3v6c0 5-3.6 7.8-9 9-5.4-1.2-9-4-9-9V6z" stroke="#f472b6" strokeWidth="1.6" />
    <path d="M7 10l5 3 5-3" stroke="#f472b6" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ComponentsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="5" width="16" height="14" rx="2" stroke="#f472b6" strokeWidth="1.6" />
    <path d="M8 9h8M8 13h5" stroke="#f472b6" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);


const CursorIcon = () => (
  <img
    src={`${import.meta.env.BASE_URL}images/cursor-ai-code-icon.svg`}
    alt="JavaScript"
    className="w-5 h-5 object-contain"
  />
);



const PostmanIcon = () => (
  <img
    src={`${import.meta.env.BASE_URL}images/postman-icon.svg`}
    alt="JavaScript"
    className="w-5 h-5 object-contain"
  />
);

const VSCodeIcon = () => (
  <img
    src={`${import.meta.env.BASE_URL}images/Vscode.svg`}
    alt="VS Code"
    className="w-5 h-5 object-contain"
  />
);

const GitIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="2" fill="#f97316" />
    <circle cx="18" cy="6" r="2" fill="#f97316" />
    <circle cx="12" cy="18" r="2" fill="#f97316" />
    <path d="M8 6l4 12M16 6l-4 12" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Category header icons
// ─────────────────────────────────────────────────────────────────────────────
const LangCatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const MobileCatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
  </svg>
);
const DbCatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);
const NetworkCatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 4v3" />
    <path d="M12 17v3" />
    <path d="M4 12h3" />
    <path d="M17 12h3" />
    <path d="M6.5 6.5l2 2" />
    <path d="M15.5 15.5l2 2" />
    <path d="M6.5 17.5l2-2" />
    <path d="M15.5 8.5l2-2" />
  </svg>
);
const ToolsCatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const StateCatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18" />
    <path d="M4 8c2.2-2.4 5.2-3.8 8-3.8 2.8 0 5.8 1.4 8 3.8" />
    <path d="M4 16c2.2 2.4 5.2 3.8 8 3.8 2.8 0 5.8-1.4 8-3.8" />
  </svg>
);
const NavCatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h10" />
    <path d="M20 17l-2-2" />
    <path d="M20 17l-2 2" />
  </svg>
);
const ArchCatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 8h8" />
    <path d="M8 12h8" />
    <path d="M8 16h5" />
  </svg>
);
const UiCatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 8h8" />
    <path d="M8 12h8" />
    <path d="M8 16h5" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const categories: SkillCategory[] = [
  {
    id: "languages",
    label: "LANGUAGES",
    categoryIcon: <CodeIcon />,
    trackGradient: "from-violet-600 via-purple-500 to-violet-900",
    trackGlow: "0 0 12px 3px rgba(139,92,246,0.55)",
    dotBg: "bg-violet-400",
    dotGlow: "0 0 16px 5px rgba(167,139,250,0.9)",
    accent: "text-violet-400 border-violet-500/30",
    skills: [
      { name: "Kotlin", icon: <KotlinIcon /> },
      { name: "Java", icon: <JavaIcon /> },
      { name: "JavaScript", icon: <JavaScriptIcon /> },
    ],
  },
  {
    id: "mobile",
    label: "MOBILE FRAMEWORKS",
    categoryIcon: <MobileCatIcon />,
    trackGradient: "from-sky-500 via-blue-400 to-sky-900",
    trackGlow: "0 0 12px 3px rgba(56,189,248,0.55)",
    dotBg: "bg-sky-400",
    dotGlow: "0 0 16px 5px rgba(125,211,252,0.9)",
    accent: "text-sky-400 border-sky-500/30",
    skills: [
      { name: "React Native", icon: <ReactNativeIcon /> },
      { name: "Android SDK", icon: <AndroidSdkIcon /> },
    ],
  },
  {
    id: "state-management",
    label: "STATE MANAGEMENT",
    categoryIcon: <StateCatIcon />,
    trackGradient: "from-violet-600 via-fuchsia-500 to-violet-900",
    trackGlow: "0 0 12px 3px rgba(167,139,250,0.55)",
    dotBg: "bg-violet-400",
    dotGlow: "0 0 16px 5px rgba(192,132,252,0.9)",
    accent: "text-violet-400 border-violet-500/30",
    skills: [
      { name: "Redux Toolkit (RTK)", icon: <ReduxIcon /> },
      { name: "Context API", icon: <ContextIcon /> },
      { name: "useState / useEffect", icon: <StateHookIcon /> },
    ],
  },
  {
    id: "navigation",
    label: "NAVIGATION",
    categoryIcon: <NavCatIcon />,
    trackGradient: "from-sky-500 via-blue-400 to-cyan-700",
    trackGlow: "0 0 12px 3px rgba(56,189,248,0.55)",
    dotBg: "bg-sky-400",
    dotGlow: "0 0 16px 5px rgba(96,165,250,0.9)",
    accent: "text-sky-400 border-sky-500/30",
    skills: [
      { name: "React Navigation", icon: <NavIcon /> },
      { name: "Stack Navigator", icon: <StackNavIcon /> },
      { name: "Tab Navigator", icon: <TabNavIcon /> },
      { name: "Drawer Navigator", icon: <DrawerNavIcon /> },
    ],
  },
  {
    id: "architecture",
    label: "ARCHITECTURE & PATTERNS",
    categoryIcon: <ArchCatIcon />,
    trackGradient: "from-teal-500 via-emerald-400 to-teal-800",
    trackGlow: "0 0 12px 3px rgba(207, 190, 78, 0.55)",
    dotBg: "bg-teal-400",
    dotGlow: "0 0 16px 5px rgba(215, 239, 56, 0.9)",
    accent: "text-teal-400 border-teal-500/30",
    skills: [
      { name: "Component Lifecycle", icon: <LifecycleIcon /> },
      { name: "Hooks", icon: <HooksIcon /> },
      { name: "MVVM", icon: <MvvmIcon /> },
    ],
  },
  {
    id: "database",
    label: "DATABASE & STORAGE",
    categoryIcon: <DbCatIcon />,
    trackGradient: "from-emerald-500 via-teal-400 to-emerald-900",
    trackGlow: "0 0 12px 3px rgba(52,211,153,0.55)",
    dotBg: "bg-emerald-400",
    dotGlow: "0 0 16px 5px rgba(110,231,183,0.9)",
    accent: "text-emerald-400 border-emerald-500/30",
    skills: [
      { name: "Room DB", icon: <RoomDbIcon /> },
      { name: "SQLite", icon: <SqliteIcon /> },
      { name: "Firebase", icon: <FirebaseIcon /> },
      { name: "AsyncStorage", icon: <AsyncStorageIcon /> },
    ],
  },
  {
    id: "networking",
    label: "NETWORKING & APIs",
    categoryIcon: <NetworkCatIcon />,
    trackGradient: "from-cyan-400 via-sky-400 to-blue-600",
    trackGlow: "0 0 12px 3px rgba(56,189,248,0.7)",
    dotBg: "bg-cyan-400",
    dotGlow: "0 0 16px 5px rgba(56,189,248,0.9)",
    accent: "text-cyan-400 border-cyan-500/30",
    skills: [
      { name: "REST APIs / Retrofit", icon: <RetrofitIcon /> },
      { name: "Axios", icon: <AxiosIcon /> },
    ],
  },
  {
    id: "ui-ux",
    label: "UI/UX DEVELOPMENT",
    categoryIcon: <UiCatIcon />,
    trackGradient: "from-pink-500 via-rose-400 to-orange-600",
    trackGlow: "0 0 12px 3px rgba(244,114,182,0.55)",
    dotBg: "bg-pink-400",
    dotGlow: "0 0 16px 5px rgba(251,146,60,0.9)",
    accent: "text-pink-400 border-pink-500/30",
    skills: [
      { name: "Flexbox (React Native Styling)", icon: <FlexboxIcon /> },
      { name: "Material Design", icon: <MaterialIcon /> },
      { name: "Custom Components", icon: <ComponentsIcon /> },
    ],
  },
  {
    id: "tools",
    label: "TOOLS & WORKSPACE",
    categoryIcon: <ToolsCatIcon />,
    trackGradient: "from-orange-500 via-amber-400 to-orange-900",
    trackGlow: "0 0 12px 3px rgba(251,146,60,0.55)",
    dotBg: "bg-orange-400",
    dotGlow: "0 0 16px 5px rgba(253,186,116,0.9)",
    accent: "text-orange-400 border-orange-500/30",
    skills: [
      { name: "VS Code", icon: <VSCodeIcon /> },
      { name: "Android Studio", icon: <AndroidStudioIcon /> },
      { name: "GitHub", icon: <GithubIcon /> },
      { name: "Git", icon: <GitIcon /> },
      { name: "Cursor", icon: <CursorIcon /> },
      { name: "Postman", icon: <PostmanIcon /> },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Skill card + node — sits above the track line
// ─────────────────────────────────────────────────────────────────────────────
const SkillNode = ({
  skill,
  dotBg,
  dotGlow,
  accent,
}: {
  skill: Skill;
  dotBg: string;
  dotGlow: string;
  accent: string;
}) => (
  <div className="group flex flex-col items-center gap-2 cursor-default select-none">
    {/* pill card */}
    <div
      className={`skills-timeline-card
        flex items-center gap-2 px-4 py-2 rounded-xl
        bg-white/[0.04] border border-white/[0.08]
        backdrop-blur-sm
        transition-all duration-300
        group-hover:scale-105
        group-hover:bg-white/[0.09]
        group-hover:border-white/20
        group-hover:shadow-lg
      `}
    >
      <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">
        {skill.icon}
      </span>
      <span
        className={`
          text-xs font-medium tracking-wide whitespace-nowrap
          text-white/55 transition-colors duration-300
          group-hover:text-white
        `}
      >
        {skill.name}
      </span>
    </div>

    {/* connector stem — links card to dot */}
    <div className="w-px h-4 bg-white/10 group-hover:bg-white/25 transition-colors duration-300" />

    {/* dot node — centered on the track */}
    <div
      className={`
        relative w-3 h-3 rounded-full ${dotBg} shrink-0
        transition-all duration-300
        group-hover:scale-[1.6]
      `}
      style={{ boxShadow: "none" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = dotGlow;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* inner bright core */}
      <span className="absolute inset-[3px] rounded-full bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// One full category row
// ─────────────────────────────────────────────────────────────────────────────
const TimelineRow = ({ category }: { category: SkillCategory }) => (
  <div className="flex min-w-0 items-start gap-3 md:gap-10">
    {/* ── Left: category label ── */}
    <div className="flex flex-col items-center gap-2.5 w-[92px] sm:w-[140px] md:w-[170px] shrink-0 pt-1">
      <div
        className={`
          w-11 h-11 rounded-2xl
          bg-white/[0.05] border ${category.accent.split(" ")[1]}
          flex items-center justify-center
          shadow-lg
        `}
      >
        {category.categoryIcon}
      </div>
      <span
        className={`
          text-xs font-semibold tracking-widest uppercase text-center leading-tight
          ${category.accent.split(" ")[0]}
        `}
      >
        {category.label}
      </span>
    </div>

    {/* ── Right: timeline track + nodes ── */}
    <div className="flex-1 min-w-0 flex flex-col justify-end">
      {/* skill cards row */}
      <div className="flex flex-wrap items-end gap-x-6 gap-y-4 mb-0">
        {category.skills.map((skill) => (
          <SkillNode
            key={skill.name}
            skill={skill}
            dotBg={category.dotBg}
            dotGlow={category.dotGlow}
            accent={category.accent}
          />
        ))}
      </div>

      {/* static neon track line — glow applied to all categories */}
      <div
        className={`h-[3px] w-full rounded-full bg-gradient-to-r ${category.trackGradient}`}
        style={{ boxShadow: category.trackGlow }}
      />
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────────────────────────────────────
const SkillsTimeline = () => (
  <div
    className="
      w-full min-w-0
      rounded-2xl border border-white/10
      bg-[#0d1527]/60 backdrop-blur-md
      py-12 px-4 md:px-10
      shadow-2xl shadow-black/50
      relative overflow-hidden
    "
  >
    {/* subtle ambient glow blob in the background */}
    <div
      className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full
        bg-blue-700/10 blur-[80px]"
    />
    <div
      className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full
        bg-indigo-700/10 blur-[80px]"
    />

    {/* ── Header ── */}
    <div className="relative flex items-center gap-4 mb-12">
      <div
        className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25
          flex items-center justify-center shadow-lg shadow-blue-500/10"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      </div>
      <div>
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400/80 mb-0.5">
          Overview
        </p>
        <h3 className="text-xl font-semibold tracking-tight text-white">
          Technical Skills
        </h3>
      </div>
      {/* decorative rule */}
      <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
    </div>

    {/* ── Rows ── */}
    <div className="relative space-y-16">
      {categories.map((cat) => (
        <TimelineRow key={cat.id} category={cat} />
      ))}
    </div>
  </div>
);

export default SkillsTimeline;
