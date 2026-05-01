type ClassValue = string | false | null | undefined;

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}

export function isPlaceholder(value: string) {
  return value.includes("{{") && value.includes("}}");
}

export function resolveContent(value: string, fallback: string) {
  return isPlaceholder(value) ? fallback : value;
}
