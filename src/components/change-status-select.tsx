"use client";

import { updateGiftStatus } from "@/actions/action";
import { GiftStatus } from "@/types/type-gifts";
import { GIFT_STATUS_MAP } from "@/types/type-status-gift";

interface GiftStatusButtonProps {
  status: GiftStatus;
  giftId: string;
}

export const ChangeStatusSelect = ({
  status,
  giftId,
}: GiftStatusButtonProps) => {
  if (status === "delivered") return null;

  return (
    <div className="mt-6 flex flex-col gap-2">
      <label className="text-sm text-zinc-400">Изменить статус</label>

      <select
        value={status}
        onChange={(e) => updateGiftStatus(giftId, e.target.value as GiftStatus)}
        className="border rounded-xl p-2 bg-zinc-900 text-zinc-100"
      >
        {Object.entries(GIFT_STATUS_MAP).map(
          ([key, { label }]) =>
            key !== "delivered" && (
              <option key={key} value={key}>
                {label}
              </option>
            )
        )}
      </select>
    </div>
  );
};
