"use client";

import { useState } from "react";
import { cars } from "../data/cars";

type Reservation = {
  name: string;
  email: string;
  carId: string;
  startDate: string;
  endDate: string;
};

const emptyForm: Reservation = {
  name: "",
  email: "",
  carId: cars[0].id,
  startDate: "",
  endDate: "",
};

const inputClass =
  "mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-800";

export default function ReservationForm() {
  const [form, setForm] = useState<Reservation>(emptyForm);
  const [submitted, setSubmitted] = useState<Reservation | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(form);
  }

  const selectedCar = cars.find((car) => car.id === submitted?.carId);

  return (
    <section className="mx-auto w-full max-w-xl px-6 pb-16">
      <h2 className="mb-4 text-2xl font-bold">예약하기</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <label className="block">
          <span className="text-sm font-medium">이름</span>
          <input name="name" value={form.name} onChange={handleChange} required className={inputClass} />
        </label>
        <label className="block">
          <span className="text-sm font-medium">이메일</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputClass} />
        </label>
        <label className="block">
          <span className="text-sm font-medium">차량 선택</span>
          <select name="carId" value={form.carId} onChange={handleChange} className={inputClass}>
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.name} ({car.type}) - {car.pricePerDay.toLocaleString("ko-KR")}원/일
              </option>
            ))}
          </select>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium">대여일</span>
            <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required className={inputClass} />
          </label>
          <label className="block">
            <span className="text-sm font-medium">반납일</span>
            <input type="date" name="endDate" value={form.endDate} onChange={handleChange} min={form.startDate} required className={inputClass} />
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-700 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
        >
          예약하기
        </button>
      </form>

      {submitted && (
        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
          <h3 className="mb-3 font-semibold">입력한 예약 정보</h3>
          <dl className="grid grid-cols-[6rem_1fr] gap-y-1 text-sm">
            <dt className="text-zinc-500">이름</dt>
            <dd>{submitted.name}</dd>
            <dt className="text-zinc-500">이메일</dt>
            <dd>{submitted.email}</dd>
            <dt className="text-zinc-500">차량</dt>
            <dd>{selectedCar ? `${selectedCar.name} (${selectedCar.type})` : submitted.carId}</dd>
            <dt className="text-zinc-500">대여일</dt>
            <dd>{submitted.startDate}</dd>
            <dt className="text-zinc-500">반납일</dt>
            <dd>{submitted.endDate}</dd>
          </dl>
        </div>
      )}
    </section>
  );
}
