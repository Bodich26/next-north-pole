import { fetchGiftId } from "@/api/fetch-gift-id";

type Props = {
  params: {
    id: string;
  };
};

export default async function GiftId({ params }: Props) {
  const { id } = await params;
  const giftId = await fetchGiftId(id);

  return (
    <section>
      <h1>Номер подарка {id}</h1>
      <p>{giftId.recipientName}</p>
    </section>
  );
}
