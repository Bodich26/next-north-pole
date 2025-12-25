"use server";

import { GiftStatus } from "@/types/type-gifts";
import { API_ROUTES, BASE_MOCK_API } from "../../routes";
import { revalidatePath } from "next/cache";

export async function updateGiftStatus(giftId: string, nextStatus: GiftStatus) {
  const URL = `${BASE_MOCK_API}${API_ROUTES.GIFTS}/${giftId}`;

  try {
    if (nextStatus === "delivered") {
      return console.log(`Подарок ${giftId} уже доставлен.`);
    }

    const response = await fetch(`${URL}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: nextStatus,
        updatedAt: Math.floor(Date.now() / 1000),
      }),
    });

    if (!response.ok) {
      throw new Error(`Не удалось обновить статус подарка ${giftId}`);
    }
    // 🔄 Обновляем страницу подарка
    revalidatePath(`${API_ROUTES.GIFTS}/${giftId}`);

    // (по желанию) обновить список подарков
    revalidatePath(`${API_ROUTES.GIFTS}`);
  } catch (error) {
    return console.error("Error updating gift status:", error);
  }
}
