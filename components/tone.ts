export type Tone = "green" | "gold" | "sky" | "terra";

export const tones: Record<
  Tone,
  {
    text: string;
    tile: string;
    soft: string;
    chip: string;
    bullet: string;
    topBar: string;
  }
> = {
  green: {
    text: "text-accent",
    tile: "bg-linear-to-br from-accent to-moss text-white",
    soft: "bg-accent-soft text-accent-deep",
    chip: "border-accent/25 bg-accent-soft text-accent-deep",
    bullet: "bg-accent",
    topBar: "from-accent to-moss",
  },
  gold: {
    text: "text-gold",
    tile: "bg-linear-to-br from-gold to-gold-deep text-white",
    soft: "bg-gold-soft text-gold-deep",
    chip: "border-gold/25 bg-gold-soft text-gold-deep",
    bullet: "bg-gold",
    topBar: "from-gold to-terra",
  },
  sky: {
    text: "text-sky",
    tile: "bg-linear-to-br from-sky to-sky-deep text-white",
    soft: "bg-sky-soft text-sky-deep",
    chip: "border-sky/25 bg-sky-soft text-sky-deep",
    bullet: "bg-sky",
    topBar: "from-sky to-accent",
  },
  terra: {
    text: "text-terra",
    tile: "bg-linear-to-br from-terra to-terra-deep text-white",
    soft: "bg-terra-soft text-terra-deep",
    chip: "border-terra/25 bg-terra-soft text-terra-deep",
    bullet: "bg-terra",
    topBar: "from-terra to-gold",
  },
};