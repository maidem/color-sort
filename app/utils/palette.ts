// Marker colour hex values – only the colours physically shown on the three cards:
//   • Ohuhu Honolulu / Honolulu B / Honolulu S  (48 colours)
//   • Ohuhu Honolulu S – Illustration          (60 colours)
//   • HOTU 60 Colors Marker Set
//
// Hex values are community-measured approximations.
// Use the hex-override in the app to correct individual colours if needed.
//
// Note: a few codes appear in both Ohuhu and HOTU with different colour names
// (e.g. R213, WG04, BG03). The Ohuhu value is used for those entries.
export const ohuhuPalette: Record<string, string> = {
  // ════════════════════════════════════════════════════════════════════════
  // Ohuhu Honolulu / Honolulu B / Honolulu S  (48 colours)
  // ════════════════════════════════════════════════════════════════════════

  // ── Yellow ───────────────────────────────────────────────────────────────
  Y02: "#F5F2C6", // Lemon Chiffon
  Y14: "#EAF1BD", // Pale Lemon Yellow
  Y45: "#FAEDCA", // Cream
  Y55: "#F8E1B9", // Golden Champagne
  Y62: "#EFE6D6", // Sandy Beige
  Y69: "#E6D3B8", // Milk Tea

  // ── Yellow-Red / Orange ──────────────────────────────────────────────────
  YR06: "#F6D9BA", // Raw Cashew
  YR11: "#FAD2BC", // Peachy Blush
  YR43: "#F7D1C9", // Pale Cherry Pink
  YR52: "#F0CFB5", // Cameo Rose
  YR55: "#F9D2C9", // Pink Lemonade
  YR59: "#FABE9F", // Cantaloupe

  // ── Earth / Brown ────────────────────────────────────────────────────────
  E05: "#DCE3C9", // Pale Moss
  E14: "#E8E2D2", // Khaki Beige
  E26: "#EBE8C7", // Pale Celery
  E46: "#F3CEAA", // Coral Sand
  E85: "#D8C2BE", // Cherry Taupe
  E92: "#E3CDC6", // Ash Rose

  // ── Red ──────────────────────────────────────────────────────────────────
  R15: "#FAD4DA", // Lychee Juice
  R22: "#FADAE1", // Ballet Pink
  R27: "#F4B3C0", // Pink Satin
  R54: "#EBDCE6", // Lavender Fog

  // ── Red-Violet ───────────────────────────────────────────────────────────
  RV04: "#F0BED8", // Light Orchid
  RV05: "#E8A2C8", // Pink Pearl
  RV25: "#DDB2D6", // Rosy Lilac
  RV33: "#DFBCE4", // Thistle
  RV34: "#E5C2E2", // Faded Lilac

  // ── Violet ───────────────────────────────────────────────────────────────
  V14: "#DACEE6", // Pale Purple
  V22: "#D9CFEC", // Lavender Wisp

  // ── Blue-Violet ──────────────────────────────────────────────────────────
  BV05: "#B2B6DE", // Cornflower
  BV32: "#D0DEEF", // Pale Sky Blue
  BV35: "#A1C6E6", // Arctic Blue

  // ── Blue ─────────────────────────────────────────────────────────────────
  B03: "#CDE3F0", // Frost
  B05: "#86C5DA", // Robin Egg Blue
  B21: "#CBD8E8", // Porcelain Blue
  B28: "#90B8D9", // Smoke Blue

  // ── Blue-Green / Teal ────────────────────────────────────────────────────
  BG24: "#A9DFD1", // Sea Glass Blue
  BG310: "#82CBB9", // Seafoam Green

  // ── Green ────────────────────────────────────────────────────────────────
  G34: "#CDE9C2", // Pale Green
  G47: "#A1E198", // Spring Green

  // ── Greys ────────────────────────────────────────────────────────────────
  BGY00: "#E4E7E8", // Cashmere Grey
  CG01: "#DFE2E4", // Cloud Grey
  CG24: "#B7BDBF", // Grey
  GG24: "#CBD0CD", // Wispy Grey
  WG01: "#DFDEE5", // Lite Lavender
  WG04: "#CDCCDA", // Icy Lavender  (HOTU: Warm Grey 4)
  YGY02: "#E4E3E1", // Abalone Grey
  YGY13: "#D9DFD8", // Oyster Grey

  // ════════════════════════════════════════════════════════════════════════
  // Ohuhu Honolulu S – Illustration  (60 colours)
  // ════════════════════════════════════════════════════════════════════════

  // ── Yellow ───────────────────────────────────────────────────────────────
  // Y02 / Y69 shared with 48-colour set above
  Y28: "#FBE06D", // Corn Yellow
  Y43: "#F5E8C8", // Warm Beige
  Y48: "#F8D8A8", // Light Apricot
  Y213: "#E89020", // Dark Marigold
  Y216: "#F0C878", // Caramel
  Y315: "#C8B050", // Olive Yellow
  Y416: "#C07A18", // Golden Brown

  // ── Yellow-Red / Orange ──────────────────────────────────────────────────
  // YR47 / YR59 shared above
  YR02: "#FBCFAA", // Pen Silk
  YR29: "#F7C19D", // Grapefruit
  YR47: "#F5CBBA", // Dusty Peach
  YR313: "#B06030", // Potato Brown
  YR513: "#FABC90", // Papaya

  // ── Earth / Brown ────────────────────────────────────────────────────────
  // E66 / E49 / E81 shared or added here
  E49: "#CC9576", // Honey Brown
  E66: "#BA8A7C", // Light Fawn
  E81: "#D8C0A8", // Spanish Pink
  E313: "#786838", // Swamp Mud
  E514: "#3C1C08", // Dark Chocolate
  E612: "#983C20", // Brick Brown
  E713: "#682018", // Red Bean

  // ── Red ──────────────────────────────────────────────────────────────────
  R28: "#F198AF", // Pink Carnation
  R38: "#E05870", // Rose Pink
  R210: "#F46A7A", // Deep Blush
  R213: "#EB4B62", // Pomegranate  (HOTU: Rose Buvard)
  R215: "#780818", // Morello Cherry
  R015: "#B81428", // Crimson

  // ── Red-Violet ───────────────────────────────────────────────────────────
  RV57: "#B18BBF", // Dark Lilac
  RV212: "#CB287A", // Rich Raspberry
  RV311: "#682880", // Pansy
  RV314: "#8E266E", // Grape Juice

  // ── Violet ───────────────────────────────────────────────────────────────
  V010: "#B090C8", // Faded Violet
  V32: "#C0C0E0", // Icy Periwinkle
  V38: "#5868A8", // Deep Periwinkle

  // ── Blue-Violet ──────────────────────────────────────────────────────────
  BV315: "#3858A8", // Cobalt Blue
  BV58: "#5878C0", // Crystal Blue

  // ── Blue ─────────────────────────────────────────────────────────────────
  B08: "#71C2E8", // Cotton Candy Blue
  B111: "#3CA1E1", // Pool Blue
  B115: "#226FB3", // Classic Blue
  B315: "#2050A0", // Deep Cerulean
  B415: "#162848", // Stormy Night

  // ── Blue-Green / Teal ────────────────────────────────────────────────────
  BG311: "#12B4B2", // Turquoise

  // ── Green ────────────────────────────────────────────────────────────────
  G310: "#20A040", // Shamrock Green
  G313: "#188038", // Green
  G315: "#106030", // Dark Emerald

  // ── Yellow-Green ─────────────────────────────────────────────────────────
  YG212: "#8A9830", // Guacamole
  YG510: "#9CD368", // Bud Green

  // ── Greys ────────────────────────────────────────────────────────────────
  // CG01 / YGY02 shared above
  BGY15: "#7888A0", // Blue Steel Grey
  BGY24: "#9098A0", // Storm Grey
  CG25: "#787878", // Deep Grey
  GG05: "#6A7270", // Evergreen Fog
  GG11: "#A1A7AB", // Fog Grey
  WG10: "#ECECE8", // Porcelain
  WG38: "#2A2020", // Caviar
  YGY11: "#C0BAB0", // Collingwood Grey
  "120": "#1A1A1A", // Black

  // ════════════════════════════════════════════════════════════════════════
  // HOTU 60 Colors Marker Set
  // ════════════════════════════════════════════════════════════════════════

  // ── Yellow / Orange / Brown ───────────────────────────────────────────────
  Y003: "#F9E840", // Canaria Yellow
  Y025: "#E4DC7A", // Pale Olive
  Y107: "#F5F268", // Lightning Yellow
  Y211: "#D8CC80", // Grayish Yellow
  Y314: "#F2D020", // Yellow
  Y503: "#F8EDD0", // Pale Cream
  Y608: "#F06820", // Orange
  Y611: "#C87040", // Morin
  Y623: "#A86838", // Potato Brown
  Y823: "#964030", // Henna
  Y900: "#F8E4D8", // Baby Skin Pink
  Y906: "#E83020", // Rouge Orange

  // ── Red ──────────────────────────────────────────────────────────────────
  // R213 / R706 shared with Ohuhu entries above
  R043: "#703020", // Cameo Brown
  R101: "#F4C49A", // Flesh
  R105: "#EE8888", // Coral Pink
  R107: "#DE4830", // Reddish Yellow
  R218: "#E02840", // Geranium
  R302: "#F5B0C0", // Fruit Pink
  R304: "#F2BECE", // Pastel Rose
  R400: "#F8ECEC", // Cherry White
  R502: "#F08AA8", // Medium Pink
  R503: "#F5C4D0", // Pastel Pink
  R607: "#F04090", // Vivid Pink

  // ── Red-Violet / Violet ───────────────────────────────────────────────────
  R702: "#886080", // Mauve Shadow
  R703: "#D0ACDC", // Pastel Violet
  R706: "#673D82", // Deep Violet
  R839: "#582880", // Pansy (HOTU)
  R910: "#B8BEDD", // Pastel Grey Blue

  // ── Blue ─────────────────────────────────────────────────────────────────
  // B201 / B203 shared below
  B002: "#DCE8F5", // Pale Blue Light
  B003: "#68BAD8", // Sky Blue
  B114: "#7AAAD8", // Cornflower
  B118: "#2840A8", // Ultramarine
  B201: "#AEE2DC", // Mint Blue
  B203: "#92D3E3", // Pastel Blue
  B205: "#4480C0", // Cerulean Blue
  B227: "#1C3270", // Indian Blue
  B258: "#181C38", // Blue Black

  // ── Blue-Green / Teal ────────────────────────────────────────────────────
  // BG03 Pastel Blue (HOTU) – same code as Ohuhu BG family, using Ohuhu value
  BG03: "#B4DDE2", // Pastel Blue

  // ── Green ────────────────────────────────────────────────────────────────
  G012: "#A0C898", // Horizon Green
  G318: "#30A068", // Ocean Green
  G406: "#28A050", // Veronese Green
  G515: "#48C038", // Grass Green
  G523: "#C0E898", // Milk Green
  G702: "#E0F0C8", // Sugarcane
  G902: "#D4E8A8", // Anise
  G915: "#A8D020", // Chartreuse Green
  G965: "#285860", // Sea Pine

  // ── Warm Grey ─────────────────────────────────────────────────────────────
  WG00: "#F0EEEA", // Warm Grey 0
  WG02: "#D8D2CC", // Warm Grey 2
  WG06: "#A8A098", // Warm Grey 6

  // ── Neutral / Toner / Cool Grey ───────────────────────────────────────────
  NG02: "#D0CCCC", // Neutral Grey 2
  TG02: "#DED8C8", // Toner Grey 2
  CGII01: "#E8E8EE", // Cool Grey II 1
  CGII03: "#BEBEC8", // Cool Grey II 3
  CGII05: "#9090A0", // Cool Grey II 5
  CGII07: "#686878", // Cool Grey II 7

  // ── Special ───────────────────────────────────────────────────────────────
  "0": "#FFFFFF", // Colorless Blender
  S: "#181818", // Black
};

export function normalizeCode(input: string): string {
  return input.trim().toUpperCase().replace(/\s+/g, "");
}

export function lookupColor(code: string): string | null {
  const key = normalizeCode(code);
  return ohuhuPalette[key] ?? null;
}
