export type PortfolioEvent =
  | "cta_click"
  | "project_open"
  | "resume_download"
  | "copy_email";

type EventPayload = Record<string, string | number | boolean>;

declare global {
  interface Window {
    portfolioEvents?: Array<{
      event: PortfolioEvent;
      payload?: EventPayload;
      timestamp: string;
    }>;
  }
}

export function trackEvent(event: PortfolioEvent, payload?: EventPayload) {
  if (typeof window === "undefined") {
    return;
  }

  const entry = {
    event,
    payload,
    timestamp: new Date().toISOString(),
  };

  window.portfolioEvents = window.portfolioEvents ?? [];
  window.portfolioEvents.push(entry);
  window.dispatchEvent(new CustomEvent("portfolio:event", { detail: entry }));
}
