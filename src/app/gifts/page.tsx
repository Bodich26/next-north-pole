export const dynamic = "force-dynamic";
import { API_ROUTES, BASE_MOCK_API } from "../../../routes";

export default async function Gifts() {
  const res = await fetch(`${BASE_MOCK_API}${API_ROUTES.GIFTS}`, {
    cache: "no-store",
  });

  const gifts = await res.json();

  return (
    <section className="flex flex-col gap-2.5">
      <h1>Gifts Page</h1>
      <p>Welcome to the Gifts page!</p>
      {gifts.map((item) => (
        <div key={item.id} className="p-4 border rounded">
          <h4 className="text-lg font-semibold">{item.person}</h4>
          <p>{item.object_name}</p>
          <span>{item.status}</span>
        </div>
      ))}
    </section>
  );
}
