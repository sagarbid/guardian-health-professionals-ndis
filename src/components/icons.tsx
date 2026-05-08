export function Icon({
  name,
  className,
  title,
}: {
  name:
    | "shield"
    | "heart"
    | "home"
    | "bus"
    | "spark"
    | "people"
    | "building"
    | "check";
  className?: string;
  title?: string;
}) {
  const common = {
    className,
    "aria-hidden": title ? undefined : true,
    role: title ? "img" : undefined,
  } as const;

  switch (name) {
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          {title ? <title>{title}</title> : null}
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          {title ? <title>{title}</title> : null}
          <path
            d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          {title ? <title>{title}</title> : null}
          <path
            d="M12 21s-7-4.4-9.5-9C.7 8.5 2.4 5 6 5c2 0 3.3 1.1 4 2 0 0 1.7-2 4-2 3.6 0 5.3 3.5 3.5 7-2.5 4.6-9.5 9-9.5 9z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          {title ? <title>{title}</title> : null}
          <path
            d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "bus":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          {title ? <title>{title}</title> : null}
          <path
            d="M6 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M7 18v3M17 18v3M6 7h12M6 11h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="8" cy="15" r="1" fill="currentColor" />
          <circle cx="16" cy="15" r="1" fill="currentColor" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          {title ? <title>{title}</title> : null}
          <path
            d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "people":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          {title ? <title>{title}</title> : null}
          <path
            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="9"
            cy="7"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M22 21v-2a4 4 0 0 0-3-3.9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 3.1a3 3 0 0 1 0 5.8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "building":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          {title ? <title>{title}</title> : null}
          <path
            d="M4 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M16 10h2a2 2 0 0 1 2 2v10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 6h4M8 10h4M8 14h4M10 22v-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

