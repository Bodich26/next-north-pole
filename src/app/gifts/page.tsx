export const dynamic = "force-dynamic";
import { fetchGifts } from "@/api/fetch-gifts";
import { GiftStatusBadge } from "@/components/gift-status-badge";
import Link from "next/link";

export default async function Gifts() {
  const { giftList } = await fetchGifts();

  return (
    <section className="flex flex-col gap-2.5 w-full">
      <h1 className="text-4xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
        Gifts Page
      </h1>
      <p className="font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-xl">
        Welcome to the Gifts page!
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {!giftList && <p>No gifts found</p>}

        {giftList.length === 0 ? (
          <p>No gifts available.</p>
        ) : (
          giftList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-4 border rounded gap-1"
            >
              <h4 className="text-lg font-semibold">{item.recipientName}</h4>
              <p>{item.title}</p>
              <GiftStatusBadge status={item.status} />
              <Link href={`/gifts/${item.id}`}>Подробнее</Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
