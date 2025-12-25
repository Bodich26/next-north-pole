import { Gift } from "@/types/type-gifts";
import { API_ROUTES, BASE_MOCK_API } from "../../routes";

export const fetchGiftId = async (id: string): Promise<Gift> => {
  const URL = `${BASE_MOCK_API}${API_ROUTES.GIFTS}/${id}`;

  const res = await fetch(URL, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const gift: Gift = await res.json();

  if (!gift || gift.id === undefined) {
    throw new Error("Некорректные данные подарка");
  }

  return gift;
};
