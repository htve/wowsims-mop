const DEFAULT_LANG_ID = 0;

//refer to Wowhead locale Ids
const LANG_ID_MAP: Record<string, number> = {
  ko: 1,
  fr: 2,
  de: 3,
  cn: 4,
  es: 6,
  ru: 7,
  pt: 8,
  it: 9,
  tw: 10,
  mx: 11,
} as const;

// Map language codes to numeric Id
export const getLangId = (code: string): number => {
    const normalized = code.toLowerCase();
    return LANG_ID_MAP[normalized] ?? DEFAULT_LANG_ID;
};