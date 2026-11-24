export function SkillIcon({ name, className = "w-6 h-6" }) {
  switch (name) {
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm3.9 14.4L9.7 8.4v7.1H8.3V7h1.6l5.9 7.6V7h1.4v9.4h-1.3Z" />
        </svg>
      );
    case "laravel":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 7l4-2 4 2v6l4-2 4 2v5l-4 2-4-2v-3l-4 2-4-2V7z" />
          <path d="M8 5v6l4 2m4-2v5" />
        </svg>
      );
    case "django":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M11 4h2.5v11.5c-1.3.25-2.3.35-3.4.35-3.2 0-4.9-1.45-4.9-4.2 0-2.65 1.8-4.35 4.5-4.35.45 0 .85.05 1.3.15V4Zm0 5.5c-.35-.1-.65-.15-1-.15-1.4 0-2.25.85-2.25 2.3 0 1.4.8 2.2 2.2 2.2.35 0 .65-.03 1.05-.1V9.5ZM15.5 7.5H18v8.4c0 2.9-.2 4.3-.95 5.45-.7 1.1-1.7 1.8-3.65 2.65l-2.3-1.1c1.9-.9 2.8-1.5 3.35-2.45.55-.9.75-2 .75-4.7V7.5Zm0-3.5H18v2.4h-2.5V4Z" />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 3c-3 0-3.5 1.3-3.5 2.8V8h4.5v1H7c-2 0-3.5 1.2-3.5 3.5S5 16 7 16h1.5v-2.2c0-1.6 1.2-2.8 3-2.8h4c1.4 0 2.5-1.1 2.5-2.5V5.8C18 4.2 16.5 3 12 3z" />
          <path d="M12 21c3 0 3.5-1.3 3.5-2.8V16H11v-1h6c2 0 3.5-1.2 3.5-3.5S19 8 17 8h-1.5v2.2c0 1.6-1.2 2.8-3 2.8h-4C7.1 13 6 14.1 6 15.5v2.7C6 19.8 7.5 21 12 21z" />
          <circle cx="10.2" cy="5.7" r="0.7" fill="currentColor" />
          <circle cx="13.8" cy="18.3" r="0.7" fill="currentColor" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M10.5 11v4.5a1.5 1.5 0 0 1-3 0" />
          <path d="M16.5 12c-.5-.7-1.4-1-2.2-.7-.8.3-1 1.2-.3 1.7.7.5 2.3.7 2.5 1.9.2 1.1-.8 2-2 1.9-.9-.1-1.6-.5-2-1.1" />
        </svg>
      );
    case "html5":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z" />
          <path d="M8.5 8h7l-.3 2.5H9l.3 3h5.4l-.4 3-2.3.7-2.3-.7-.1-1.5" />
        </svg>
      );
    case "css3":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z" />
          <path d="M8 8h8l-.5 3H9.5l5.5 1-.4 3.5-2.6.8-2.6-.8-.2-1.5" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.39 10.84 14.53 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.16 14.47 6 12 6Zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.84 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.16 9.47 12 7 12Z" />
        </svg>
      );
    case "office":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 6.5L13.5 3 19 4.8v14.4L13.5 21 5 17.5l8.5 1.2V6.8L8.5 8.5v7L5 17.5V6.5z" />
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <ellipse cx="12" cy="6.5" rx="7" ry="3" />
          <path d="M5 6.5v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" />
          <path d="M5 11.5v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" />
        </svg>
      );
    case "postgre":
    case "postgresql":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 4c-3.8 0-6.5 2.4-6.5 5.8 0 2.1.9 3.9 2.3 5l-.3 4.2c0 .6.5 1 1.1 1 .8 0 1.4-.6 1.4-1.4v-2.2c.6.2 1.3.3 2 .3s1.4-.1 2-.3v2.2c0 .8.6 1.4 1.4 1.4.6 0 1.1-.4 1.1-1l-.3-4.2c1.4-1.1 2.3-2.9 2.3-5C18.5 6.4 15.8 4 12 4z" />
          <circle cx="9.8" cy="9.2" r="0.8" fill="currentColor" />
          <circle cx="14.2" cy="9.2" r="0.8" fill="currentColor" />
          <path d="M12 11v4" />
        </svg>
      );
    case "leadership":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="7" r="3" />
          <path d="M5 20a7 7 0 0 1 14 0" />
          <path d="M12 2v2m4.5 1.5L15 7M7.5 5.5L9 7" />
        </svg>
      );
    case "speaking":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="3" width="6" height="10" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3m-4 0h8" />
        </svg>
      );
    case "teamwork":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="9" cy="8" r="2.5" />
          <circle cx="16" cy="9" r="2" />
          <path d="M3.5 19a5.5 5.5 0 0 1 11 0M14.5 19a4.5 4.5 0 0 1 6-3" />
        </svg>
      );
    case "problem-solving":
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 2.5" />
        </svg>
      );
  }
}
