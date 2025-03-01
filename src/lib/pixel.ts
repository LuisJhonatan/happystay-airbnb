export const META_PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export const pageview = () => {
  window.fbq("track", "PageView");
};

export const event = (name: string, options: Record<string, unknown> = {}) => {
  window.fbq("track", name, options);
};

export const viewContent = () => {
  window.fbq("track", "ViewContent");
};

export const trackLead = () => {
  window.fbq("track", "Lead");
};