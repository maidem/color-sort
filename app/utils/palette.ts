// Marker colour hex values – Ohuhu Kaala & B Series, Oahu Series, Honolulu & B Series
// + HOTU 60 Colors Marker Set
//
// Sources: Official Ohuhu colour-chart PDFs (Kaala/B, Oahu, Honolulu/B series)
// Hex values are community-measured approximations matching the PDF swatch tones.
// Use the hex-override in the app to correct individual colours if needed.
//
// Note: a few codes appear in multiple series. The most saturated/accurate tone is used.
export const ohuhuPalette: Record<string, string> = {
  // ════════════════════════════════════════════════════════════════════════
  // YELLOW / YELLOW-GREEN family
  // ════════════════════════════════════════════════════════════════════════
  Y00: "#FEFEE8", // Almost White Yellow
  Y02: "#F5F2C6", // Lemon Chiffon
  Y03: "#F8F4C0", // Pale Yellow
  Y06: "#FAF0A0", // Soft Yellow
  Y07: "#F8E870", // Buttercup
  Y08: "#F5E038", // Yellow
  Y09: "#F5DC30", // Mid-tone Yellow
  Y14: "#EAF1BD", // Pale Lemon Yellow
  Y26: "#E8D870", // Straw Yellow
  Y27: "#EEE060", // Citrus
  Y28: "#FBE06D", // Corn Yellow
  Y29: "#E0C840", // Antique Yellow
  Y34: "#F0E8D0", // Ivory
  Y39: "#E8C820", // Harvest Gold
  Y43: "#F5E8C8", // Warm Beige
  Y45: "#FAEDCA", // Cream
  Y46: "#D8B838", // Goldenrod
  Y48: "#F8D8A8", // Light Apricot
  Y55: "#F8E1B9", // Golden Champagne
  Y57: "#E8C898", // Light Wheat
  Y62: "#EFE6D6", // Sandy Beige
  Y66: "#D4C890", // Khaki
  Y69: "#E6D3B8", // Milk Tea
  Y111: "#D4A820", // Deep Gold
  Y210: "#C88018", // Amber
  Y211: "#D4B050", // Muted Gold
  Y213: "#E89020", // Dark Marigold
  Y215: "#C87820", // Burnt Amber
  Y216: "#F0C878", // Caramel
  Y311: "#C09028", // Golden Ochre
  Y315: "#C8B050", // Olive Yellow
  Y410: "#A07018", // Dark Ochre
  Y411: "#9A6818", // Brown Ochre
  Y412: "#C08838", // Warm Ochre
  Y413: "#B87828", // Caramel Brown
  Y415: "#9A5E0A", // Dark Amber
  Y416: "#C07A18", // Golden Brown
  Y503: "#F8EDD0", // Pale Cream
  Y515: "#885010", // Dark Caramel

  // ════════════════════════════════════════════════════════════════════════
  // YELLOW-RED / ORANGE family
  // ════════════════════════════════════════════════════════════════════════
  YR00: "#FCE8D0", // Skin White
  YR02: "#FBCFAA", // Pen Silk
  YR03: "#F8D8B8", // Peach Cream
  YR04: "#F8DCC8", // Pale Peach
  YR05: "#F8C8A8", // Peach Skin
  YR06: "#F6D9BA", // Raw Cashew
  YR07: "#F8C090", // Apricot
  YR09: "#F0A870", // Melon
  YR11: "#FAD2BC", // Peachy Blush
  YR17: "#F0A060", // Orange Peel
  YR19: "#F89050", // Tangerine
  YR25: "#F4B090", // Coral Peach
  YR29: "#F7C19D", // Grapefruit
  YR33: "#F5C8B0", // Pastel Peach
  YR34: "#F4C0A8", // Dusty Salmon
  YR37: "#E8A880", // Soft Salmon
  YR38: "#D8906A", // Salmon
  YR39: "#D87050", // Terracotta
  YR43: "#F7D1C9", // Pale Cherry Pink
  YR44: "#F0C8B8", // Pale Salmon (Kaala)
  YR47: "#F5CBBA", // Dusty Peach
  YR52: "#F0CFB5", // Cameo Rose
  YR54: "#F0C8C0", // Pastel Salmon
  YR55: "#F9D2C9", // Pink Lemonade
  YR57: "#E8B0A0", // Rose Peach
  YR59: "#FABE9F", // Cantaloupe
  YR110: "#E08840", // Dark Orange
  YR112: "#E07038", // Deep Tangerine
  YR114: "#C86030", // Rust Orange
  YR115: "#B85828", // Burnt Sienna
  YR313: "#B06030", // Potato Brown
  YR513: "#FABC90", // Papaya
  YR515: "#D08050", // Peach Amber
  YR892: "#802808", // Deep Brown Orange

  // ════════════════════════════════════════════════════════════════════════
  // EARTH / BROWN family
  // ════════════════════════════════════════════════════════════════════════
  E05: "#DCE3C9", // Pale Moss
  E13: "#EAE4CC", // Pale Sand
  E14: "#E8E2D2", // Khaki Beige
  E19: "#C4B898", // Sand Dune
  E22: "#D8CCA8", // Warm Sand
  E26: "#EBE8C7", // Pale Celery
  E30: "#D0C898", // Straw
  E46: "#F3CEAA", // Coral Sand
  E47: "#D8B888", // Warm Tan
  E49: "#CC9576", // Honey Brown
  E57: "#B89070", // Mocha
  E59: "#9A7050", // Earth Brown
  E66: "#BA8A7C", // Light Fawn
  E69: "#A07858", // Fawn
  E75: "#E8C8B8", // Blush Pink Skin
  E81: "#D8C0A8", // Spanish Pink
  E85: "#D8C2BE", // Cherry Taupe
  E92: "#E3CDC6", // Ash Rose
  E111: "#8A7060", // Taupe
  E311: "#8A6840", // Hazelnut
  E312: "#7A5A30", // Coffee
  E313: "#786838", // Swamp Mud
  E314: "#685038", // Deep Cocoa
  E319: "#6A4828", // Chocolate
  E413: "#604028", // Deep Brown
  E415: "#785038", // Dark Umber
  E511: "#5A3828", // Espresso
  E512: "#4A2818", // Dark Espresso
  E513: "#4A3020", // Sable
  E514: "#3C1C08", // Dark Chocolate
  E515: "#3A2810", // Near Black Brown
  E612: "#983C20", // Brick Brown
  E613: "#804828", // Russet
  E615: "#5A2808", // Deep Mahogany
  E711: "#6A3020", // Dark Russet
  E713: "#682018", // Red Bean
  E814: "#3A1808", // Darkest Brown

  // ════════════════════════════════════════════════════════════════════════
  // RED family
  // ════════════════════════════════════════════════════════════════════════
  R015: "#B81428", // Crimson
  R016: "#D83050", // Cherry Red
  R17: "#F0B8C0", // Petal Pink
  R19: "#F8D0D8", // Baby Pink
  R23: "#F8D8E0", // Pastel Pink
  R25: "#F0C0D0", // Cotton Candy Pink
  R27: "#F4B3C0", // Pink Satin
  R28: "#F198AF", // Pink Carnation
  R38: "#E05870", // Rose Pink
  R48: "#E84870", // Deep Rose
  R50: "#E84060", // Strawberry
  R54: "#EBDCE6", // Lavender Fog
  R57: "#E06080", // Salmon Rose
  R58: "#D84870", // Bright Rose
  R59: "#D03060", // Hot Pink
  R68: "#C82850", // Deep Rose Red
  R111: "#D43058", // Fuchsia Rose
  R112: "#C02040", // Red
  R114: "#D01828", // Vivid Red
  R210: "#F46A7A", // Deep Blush
  R213: "#EB4B62", // Pomegranate
  R215: "#780818", // Morello Cherry
  R310: "#A81020", // Deep Crimson
  R413: "#901828", // Dark Red
  R514: "#A83048", // Deep Fuchsia

  // HOTU Red
  R043: "#703020", // Cameo Brown
  R101: "#F4C49A", // Flesh
  R105: "#EE8888", // Coral Pink
  R107: "#DE4830", // Reddish Yellow
  R218: "#E02840", // Geranium
  R302: "#F5B0C0", // Fruit Pink
  R304: "#F2BECE", // Pastel Rose
  R400: "#F8ECEC", // Cherry White
  R502: "#F08AA8", // Medium Pink
  R503: "#F5C4D0", // Pastel Pink (HOTU)
  R607: "#F04090", // Vivid Pink

  // ════════════════════════════════════════════════════════════════════════
  // RED-VIOLET family
  // ════════════════════════════════════════════════════════════════════════
  RV01: "#F0C8E0", // Pale Blush
  RV04: "#F0BED8", // Light Orchid
  RV05: "#E8A2C8", // Pink Pearl
  RV08: "#E080B0", // Carmine Pink
  RV09: "#C060A0", // Deep Carnation
  RV17: "#F5B8D0", // Baby Blush
  RV19: "#E878B0", // Bright Magenta
  RV23: "#D890C8", // Soft Violet Pink
  RV25: "#DDB2D6", // Rosy Lilac
  RV28: "#C870B0", // Orchid
  RV29: "#D078B8", // Violet Pink
  RV31: "#E8C0DC", // Pale Violet
  RV32: "#D8A8D0", // Lilac Pink
  RV33: "#DFBCE4", // Thistle
  RV34: "#E5C2E2", // Faded Lilac
  RV35: "#C898D0", // Dusty Mauve
  RV38: "#B870C0", // Violet Rose
  RV39: "#A050A8", // Deep Violet Rose
  RV57: "#B18BBF", // Dark Lilac
  RV58: "#9860A8", // Purple Haze
  RV111: "#901880", // Dark Magenta
  RV212: "#CB287A", // Rich Raspberry
  RV311: "#682880", // Pansy
  RV314: "#8E266E", // Grape Juice

  // HOTU Red-Violet
  R702: "#886080", // Mauve Shadow
  R703: "#D0ACDC", // Pastel Violet
  R706: "#673D82", // Deep Violet
  R839: "#582880", // Pansy (HOTU)
  R910: "#B8BEDD", // Pastel Grey Blue

  // ════════════════════════════════════════════════════════════════════════
  // VIOLET family
  // ════════════════════════════════════════════════════════════════════════
  V010: "#B090C8", // Faded Violet
  V12: "#DCD0EC", // Pale Lavender
  V13: "#C8B8E0", // Soft Lavender
  V14: "#DACEE6", // Pale Purple
  V15: "#C8B0E0", // Wisteria
  V16: "#B0A0D8", // Periwinkle Lavender
  V18: "#9880C8", // Amethyst
  V22: "#D9CFEC", // Lavender Wisp
  V24: "#C0A8E0", // Soft Violet
  V29: "#8860C0", // Violet
  V32: "#C0C0E0", // Icy Periwinkle
  V33: "#C8C0E8", // Pale Periwinkle (Kaala)
  V34: "#B0A8D8", // Misty Lavender
  V38: "#5868A8", // Deep Periwinkle
  V214: "#6030A0", // Deep Purple
  V416: "#4020A0", // Rich Violet

  // ════════════════════════════════════════════════════════════════════════
  // BLUE-VIOLET family
  // ════════════════════════════════════════════════════════════════════════
  BV05: "#B2B6DE", // Cornflower
  BV08: "#9098D0", // Pastel Indigo
  BV013: "#5060B0", // Indigo Blue
  BV014: "#4858B0", // Denim Blue
  BV015: "#6878C0", // Periwinkle Blue
  BV016: "#5868B8", // Medium Blue-Violet
  BV026: "#7888C8", // Horizon Blue
  BV31: "#D0D8EC", // Pale Periwinkle Blue
  BV32: "#D0DEEF", // Pale Sky Blue
  BV34: "#B0C8E8", // Powder Blue
  BV35: "#A1C6E6", // Arctic Blue
  BV37: "#6898D0", // Cerulean
  BV38: "#3868B8", // Bright Blue
  BV48: "#2848A0", // True Blue
  BV58: "#5878C0", // Crystal Blue
  BV210: "#4060B8", // Royal Blue
  BV211: "#3050A0", // Deep Royal
  BV26: "#8898C8", // Dusty Periwinkle
  BV29: "#6070B0", // Blue Cornflower
  BV310: "#2858A8", // Strong Blue
  BV312: "#1840A0", // Dark Blue
  BV314: "#2050A8", // Ocean Blue
  BV315: "#3858A8", // Cobalt Blue
  BV414: "#183090", // Deep Navy
  BV415: "#102880", // Midnight Blue
  BV514: "#1C4080", // Dark Cobalt

  // ════════════════════════════════════════════════════════════════════════
  // BLUE family
  // ════════════════════════════════════════════════════════════════════════
  B03: "#CDE3F0", // Frost
  B05: "#86C5DA", // Robin Egg Blue
  B07: "#B0D8ED", // Ice Blue
  B08: "#71C2E8", // Cotton Candy Blue
  B09: "#50A8D8", // Sky Blue
  B21: "#CBD8E8", // Porcelain Blue
  B24: "#A0C8E0", // Pale Cerulean
  B27: "#90B8D8", // Powder Blue
  B28: "#90B8D9", // Smoke Blue
  B110: "#60A8D0", // Columbia Blue
  B111: "#3CA1E1", // Pool Blue
  B112: "#3488C8", // Azure
  B114: "#7AAAD8", // Cornflower (HOTU)
  B115: "#226FB3", // Classic Blue
  B118: "#2840A8", // Ultramarine (HOTU)
  B190: "#B0D0E8", // Baby Blue
  B201: "#AEE2DC", // Mint Blue (HOTU)
  B203: "#92D3E3", // Pastel Blue (HOTU)
  B205: "#4480C0", // Cerulean Blue (HOTU)
  B227: "#1C3270", // Indian Blue (HOTU)
  B258: "#181C38", // Blue Black (HOTU)
  B289: "#1848A0", // Deep Blue
  B290: "#C0D8EC", // Light Ice Blue (Kaala BV38 tone)
  B292: "#A8C8E0", // Soft Blue
  B310: "#6090C0", // Medium Blue
  B315: "#2050A0", // Deep Cerulean
  B389: "#2058A8", // Rich Blue
  B411: "#182848", // Dark Navy
  B415: "#162848", // Stormy Night
  B459: "#1C3060", // Deep Midnight
  B463: "#283870", // Dark Blue-Violet
  B575: "#4870A0", // Slate Blue
  B860: "#1C4878", // Deep Marine
  B883: "#104070", // Cobalt Navy
  B956: "#0C3060", // Very Deep Navy
  B990: "#D0E0F0", // Pastel Ice Blue

  // HOTU Blue
  B002: "#DCE8F5", // Pale Blue Light
  B003: "#68BAD8", // Sky Blue (HOTU)

  // ════════════════════════════════════════════════════════════════════════
  // BLUE-GREEN / TEAL family
  // ════════════════════════════════════════════════════════════════════════
  BG03: "#B4DDE2", // Pastel Blue
  BG04: "#90D0D8", // Pale Teal
  BG05: "#50B8C8", // Teal Blue
  BG09: "#30A0B0", // Dark Teal
  BG010: "#289098", // Deep Teal
  BG021: "#40B0B8", // Medium Teal
  BG24: "#A9DFD1", // Sea Glass Blue
  BG212: "#188888", // Dark Cyan
  BG213: "#1A8A80", // Deep Sea Green
  BG310: "#82CBB9", // Seafoam Green
  BG311: "#12B4B2", // Turquoise
  BG312: "#20A8A0", // Deep Turquoise
  BG313: "#188888", // Forest Teal
  BG314: "#108070", // Dark Forest Teal
  BG315: "#388888", // Medium Forest Teal
  BGY00: "#E4E7E8", // Cashmere Grey
  BGY02: "#D0D8D0", // Pale Blue-Grey Green
  BGY05: "#909898", // Ash Teal Grey
  BGY08: "#7888A0", // Slate
  BGY13: "#708080", // Steel Teal
  BGY15: "#7888A0", // Blue Steel Grey
  BGY17: "#606878", // Cool Steel
  BGY18: "#505860", // Dark Steel
  BGY24: "#9098A0", // Storm Grey
  BGY25: "#6878A0", // Indigo Grey
  BGY35: "#485868", // Slate Navy
  BGY36: "#4A6878", // Teal Navy
  BGY38: "#304048", // Dark Slate

  // ════════════════════════════════════════════════════════════════════════
  // GREEN family
  // ════════════════════════════════════════════════════════════════════════
  G24: "#88D0A0", // Mint Green
  G29: "#60C080", // Emerald Light
  G34: "#CDE9C2", // Pale Green
  G36: "#90D890", // Bright Mint
  G41: "#A8D8A8", // Soft Green
  G43: "#90C890", // Pale Forest
  G44: "#70C070", // Fresh Green
  G47: "#A1E198", // Spring Green
  G49: "#78A840", // Sage Green
  G112: "#508030", // Fern Green
  G113: "#608838", // Forest Green
  G114: "#487030", // Dark Fern
  G210: "#304828", // Deep Forest
  G211: "#406038", // Woodland
  G212: "#305028", // Dark Woodland
  G213: "#3A5820", // Olive Forest
  G215: "#486038", // Medium Forest
  G310: "#20A040", // Shamrock Green
  G312: "#208048", // Kelly Green
  G313: "#188038", // Green
  G315: "#106030", // Dark Emerald
  G316: "#0A5028", // Very Dark Emerald
  G410: "#307838", // Deep Shamrock
  G448: "#204020", // Dark Forest
  G472: "#308040", // Rich Green
  G477: "#286830", // Deep Kelly
  G483: "#406030", // Olive Green
  G487: "#4A7038", // Muted Olive
  G493: "#507838", // Earthy Green
  G750: "#1A7040", // Rich Emerald
  G840: "#0C5830", // Deepest Green
  G862: "#188040", // Forest Emerald
  G950: "#0E5028", // Very Deep Green

  // HOTU Green
  G012: "#A0C898", // Horizon Green
  G318: "#30A068", // Ocean Green
  G406: "#28A050", // Veronese Green
  G515: "#48C038", // Grass Green
  G523: "#C0E898", // Milk Green
  G702: "#E0F0C8", // Sugarcane
  G902: "#D4E8A8", // Anise
  G915: "#A8D020", // Chartreuse Green
  G965: "#285860", // Sea Pine

  // ════════════════════════════════════════════════════════════════════════
  // YELLOW-GREEN family
  // ════════════════════════════════════════════════════════════════════════
  YG012: "#A8C050", // Lime Green
  YG013: "#90A838", // Olive Lime
  YG015: "#789030", // Dark Lime
  YG066: "#D8E090", // Pale Lime
  YG101: "#E8F0A0", // Light Lime
  YG111: "#B8D040", // Yellow-Green
  YG112: "#A0B830", // Medium YG
  YG113: "#88A028", // Muted YG
  YG114: "#788818", // Dark YG
  YG212: "#8A9830", // Guacamole
  YG211: "#9AAA40", // Medium Guacamole
  YG312: "#708020", // Moss Green
  YG313: "#606818", // Dark Moss
  YG414: "#506010", // Deep Moss
  YG510: "#9CD368", // Bud Green
  YG610: "#70A820", // Yellow Olive
  YG611: "#608018", // Dark Olive
  YGY01: "#E8E8D8", // Light Grey-Green
  YGY02: "#E4E3E1", // Abalone Grey
  YGY03: "#D8D8C0", // Pale Sage
  YGY11: "#C0BAB0", // Collingwood Grey
  YGY13: "#D9DFD8", // Oyster Grey
  YGY17: "#B0B8A8", // Silver Sage
  YGY22: "#C8C8B8", // Ash Green
  YGY25: "#B0B0A0", // Cool Sage
  YGY26: "#A0A890", // Smoky Green
  YGY27: "#909880", // Pewter

  // ════════════════════════════════════════════════════════════════════════
  // FLUORESCENT / BRIGHT family (Oahu)
  // ════════════════════════════════════════════════════════════════════════
  FY00: "#EEF020", // Fluorescent Yellow
  FY01: "#F8D820", // Bright Yellow
  FY02: "#F0B000", // Vivid Amber
  FY03: "#E09800", // Dark Amber
  FY04: "#D88000", // Deep Amber

  // ════════════════════════════════════════════════════════════════════════
  // GREY family
  // ════════════════════════════════════════════════════════════════════════
  CG01: "#DFE2E4", // Cloud Grey
  CG02: "#D8DADC", // Pale Cool Grey
  CG13: "#C8CACC", // Light Cool Grey
  CG14: "#B8BCBE", // Cool Grey
  CG15: "#A8ACAE", // Medium Cool Grey
  CG16: "#989C9E", // Dark Cool Grey
  CG17: "#888C8E", // Deeper Cool Grey
  CG18: "#606468", // Charcoal Cool
  CG24: "#B7BDBF", // Grey
  CG25: "#787878", // Deep Grey
  CG26: "#909898", // Blue-Cool Grey
  CG28: "#484C50", // Very Dark Cool Grey
  CG83: "#808888", // Cool Grey (Kaala)
  GG03: "#D4D8D4", // Soft Grey-Green
  GG05: "#6A7270", // Evergreen Fog
  GG10: "#B8BCBA", // Light Green-Grey
  GG11: "#A1A7AB", // Fog Grey
  GG12: "#888C8A", // Mid Grey-Green
  GG16: "#686C6A", // Dark Grey-Green
  GG18: "#505450", // Very Dark Grey-Green
  GG20: "#D8D8D8", // Pale Grey
  GG24: "#CBD0CD", // Wispy Grey
  WG01: "#DFDEE5", // Lite Lavender
  WG04: "#CDCCDA", // Icy Lavender
  WG05: "#C8C8D0", // Pale Warm Grey
  WG06: "#A8A098", // Warm Grey 6 (HOTU)
  WG08: "#909098", // Medium Warm Grey
  WG10: "#ECECE8", // Porcelain
  WG12: "#C0C0C8", // Light Warm Grey
  WG23: "#B0B0B8", // Warm Grey
  WG24: "#A0A0A8", // Medium Warm Grey 2
  WG27: "#888890", // Deep Warm Grey
  WG35: "#606068", // Dark Warm Grey
  WG36: "#505058", // Very Dark Warm Grey
  WG37: "#484850", // Near Black Warm Grey
  WG38: "#2A2020", // Caviar
  WG180: "#707080", // Medium Slate Grey
  WG190: "#585868", // Slate Grey
  WG200: "#404050", // Dark Slate
  WG170: "#686878", // Blue Warm Grey
  WG150: "#808090", // Periwinkle Warm Grey
  WG160: "#909098", // Cool Warm Grey
  WG140: "#C8C8D0", // Soft Periwinkle Grey (YR02 tone)

  // ════════════════════════════════════════════════════════════════════════
  // HONOLULU MID-TONE & SPECIAL
  // ════════════════════════════════════════════════════════════════════════
  E211: "#A09080", // Warm Taupe

  // ════════════════════════════════════════════════════════════════════════
  // HOTU 60 Colors Marker Set (remaining unique entries)
  // ════════════════════════════════════════════════════════════════════════
  Y003: "#F9E840", // Canaria Yellow
  Y025: "#E4DC7A", // Pale Olive
  Y107: "#F5F268", // Lightning Yellow
  Y314: "#F2D020", // Yellow (HOTU)
  Y608: "#A1391D", // Orange
  Y611: "#C87040", // Morin
  Y623: "#A86838", // Potato Brown (HOTU)
  Y823: "#964030", // Henna
  Y900: "#F8E4D8", // Baby Skin Pink
  Y906: "#E83020", // Rouge Orange

  // ════════════════════════════════════════════════════════════════════════
  // WARM GREY (HOTU)
  // ════════════════════════════════════════════════════════════════════════
  WG00: "#F0EEEA", // Warm Grey 0
  WG02: "#D8D2CC", // Warm Grey 2

  // ── Neutral / Toner / Cool Grey ────────────────────────────────────────
  NG02: "#D0CCCC", // Neutral Grey 2
  TG02: "#DED8C8", // Toner Grey 2
  CGII01: "#E8E8EE", // Cool Grey II 1
  CGII03: "#BEBEC8", // Cool Grey II 3
  CGII05: "#9090A0", // Cool Grey II 5
  CGII07: "#686878", // Cool Grey II 7

  // ── Special ────────────────────────────────────────────────────────────
  "0": "#FFFFFF", // Colorless Blender
  S: "#181818", // Black
  "120": "#1A1A1A", // Black (Ohuhu)
};

export function normalizeCode(input: string): string {
  return input.trim().toUpperCase().replace(/\s+/g, "");
}

export function lookupColor(code: string): string | null {
  const key = normalizeCode(code);
  return ohuhuPalette[key] ?? null;
}
