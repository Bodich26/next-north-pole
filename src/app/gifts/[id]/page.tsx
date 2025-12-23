type Props = {
  params: {
    id: string;
  };
};

export default async function GiftId({ params }: Props) {
  const { id } = await params;

  return (
    <section>
      <h1>Gift Page {id}</h1>
      <p>Welcome to the Gifts page!</p>
    </section>
  );
}
