// Color helpers
export function isValidHex(hex: string): boolean {
  return (
    /^#?[0-9a-fA-F]{6}$/.test(hex.trim()) ||
    /^#?[0-9a-fA-F]{3}$/.test(hex.trim())
  );
}

export function normalizeHex(hex: string): string {
  let v = hex.trim().replace(/^#/, "");
  if (v.length === 3)
    v = v
      .split("")
      .map((c) => c + c)
      .join("");
  return "#" + v.toLowerCase();
}

// Perceived brightness (Rec. 709 luma 0..255)
export function brightness(hex: string): number {
  const v = hex.replace("#", "");
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastText(hex: string): string {
  return brightness(hex) > 140 ? "#111" : "#fff";
}
