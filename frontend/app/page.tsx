import Header from "./components/Header";
import CarCard from "./components/CarCard";
import ReservationForm from "./components/ReservationForm";
import { cars } from "./data/cars";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col gap-12 py-12">
        <section className="mx-auto w-full max-w-5xl px-6">
          <h2 className="mb-4 text-2xl font-bold">차량 목록</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>
        <ReservationForm />
      </main>
    </div>
  );
}
