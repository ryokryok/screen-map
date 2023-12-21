export type ScreenType = {
  label: string;
  value: string;
  group: "imax" | "dolby" | "other";
};

export const SCREEN_TYPES: ScreenType[] = [
  {
    label: "IMAX デジタル",
    value: "imax-digital",
    group: "imax",
  },
  {
    label: "IMAX レーザー",
    value: "imax-laser",
    group: "imax",
  },

  {
    label: "IMAX GT",
    value: "imax-gt",
    group: "imax",
  },
  {
    label: "Dolby Cinema",
    value: "dolby-cinema",
    group: "dolby",
  },
  {
    label: "Dolby Atmos",
    value: "dolby-atmos",
    group: "dolby",
  },
] as const;
