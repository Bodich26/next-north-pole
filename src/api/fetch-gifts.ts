import { Gift, GiftListItem } from "@/types/type-gifts";
import { API_ROUTES, BASE_MOCK_API } from "../../routes";

export const fetchGiftList = async (): Promise<GiftListItem[]> => {
  const res = await fetch(`${BASE_MOCK_API}${API_ROUTES.GIFTS}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const gifts: Gift[] = await res.json();

  if (!Array.isArray(gifts)) {
    throw new Error("Некорректный формат ответа");
  }

  return gifts.map((gift) => ({
    id: gift.id,
    recipientName: gift.recipientName,
    title: gift.title,
    status: gift.status,
  }));
};
