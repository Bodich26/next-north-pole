import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section className="flex flex-col gap-2.5">
          <h1 className="text-4xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            С Новым Годом 2026 🎄
          </h1>
          <p className="font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-xl">
            В этом году нужно собрать подарки. Поэтому начинаеться большая
            работа!
          </p>
          <Link href={"/gifts"}>Узнать последнее обновление</Link>
        </section>
      </main>
    </div>
  );
}
