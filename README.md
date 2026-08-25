# Raj Portfolio

React + TypeScript + Vite portfolio site.

## Local development

```bash
npm install
npm run dev
```

## Vercel deployment

Import this repository into Vercel. Vercel will detect Vite automatically and use:

- Build command: `npm run build`
- Output directory: `dist`

For the chatbot, add this environment variable in Vercel Project Settings:

```text
VITE_GEMINI_API_KEY=your_gemini_api_key
```

The chatbot also works without the variable, but displays an API-key-missing message when used.
