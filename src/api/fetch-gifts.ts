import { GiftsRes } from "@/types/type-gifts";
import { API_ROUTES, BASE_MOCK_API } from "../../routes";

export const fetchGifts = async (): Promise<GiftsRes> => {
  const res = await fetch(`${BASE_MOCK_API}${API_ROUTES.GIFTS}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const gifts: GiftsRes = await res.json();

  if (!Array.isArray(gifts)) {
    throw new Error("Некорректный формат ответа");
  }

  return gifts;
};
