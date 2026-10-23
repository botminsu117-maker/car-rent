export type Car = {
  id: string;
  name: string;
  type: string;
  pricePerDay: number;
  color: string;
};

export const cars: Car[] = [
  { id: "morning", name: "모닝", type: "경차", pricePerDay: 40000, color: "bg-amber-300" },
  { id: "sonata", name: "쏘나타", type: "세단", pricePerDay: 70000, color: "bg-sky-400" },
  { id: "tucson", name: "투싼", type: "SUV", pricePerDay: 90000, color: "bg-emerald-400" },
];
