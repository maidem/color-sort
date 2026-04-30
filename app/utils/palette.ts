// Approximate Ohuhu marker hex values for the codes shown in the reference photo.
// Unknown codes will fall back to a neutral grey and the user can override the hex.
export const ohuhuPalette: Record<string, string> = {
  Y02: '#E8E29A',
  Y14: '#EFE7B0',
  YR52: '#F0CFB5',
  YR11: '#E8C9A6',
  YR43: '#E8B79A',
  YR59: '#F0954C',
  R15: '#EFB69E',
  YR55: '#E9A88B',
  R22: '#F1B8B8',
  RV05: '#F098B5',
  RV04: '#F098B0',
  R27: '#E54A6A',
  RV33: '#D9B7CF',
  RV34: '#C9A6CB',
  V22: '#B6B6E0',
  RV25: '#D86AA0',
  V14: '#A98BC9',
  BV05: '#7C77BE',
  E92: '#A39079',
  R54: '#C49696',
  E85: '#B47A6E',
  G34: '#9CD2B0',
  BG24: '#9CC9BD',
  E05: '#C9C9A0',
  BG310: '#1FA89A',
  G47: '#46B85A',
  B21: '#B7D2E0',
  BV32: '#B8C5DD',
  B03: '#84B6D0',
  B05: '#7CB3D2',
  BV35: '#7DA8C9',
  B28: '#3E7DB0'
}

export function normalizeCode(input: string): string {
  return input.trim().toUpperCase().replace(/\s+/g, '')
}

export function lookupColor(code: string): string | null {
  const key = normalizeCode(code)
  return ohuhuPalette[key] ?? null
}
