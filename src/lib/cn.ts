type ClassPart = string | false | null | undefined;

/** Tiny className joiner: cn("a", cond && "b") -> "a b" */
export function cn(...parts: ClassPart[]): string {
  return parts.filter(Boolean).join(" ");
}
