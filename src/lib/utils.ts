import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* can only be used in client components */
export const isSafari = () => {
  return true;
  // const ua = navigator.userAgent.toLowerCase();
  // return ua.includes("safari") && !ua.includes("chrome");
};
