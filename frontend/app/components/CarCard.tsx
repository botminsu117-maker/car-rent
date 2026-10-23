import type { Car } from "../data/cars";

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className={`h-36 ${car.color}`} aria-hidden="true" />
      <div className="p-5">
        <h3 className="text-xl font-semibold">{car.name}</h3>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{car.type}</p>
        <p className="mt-4 text-lg font-bold text-blue-700 dark:text-blue-400">
          {car.pricePerDay.toLocaleString("ko-KR")}원
          <span className="text-sm font-normal text-zinc-500"> / 일</span>
        </p>
      </div>
    </div>
  );
}
