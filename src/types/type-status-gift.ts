import { GiftStatus } from "@/types/type-gifts";

export const GIFT_STATUS_MAP: Record<
  GiftStatus,
  {
    label: string;
    color: string;
  }
> = {
  pending: {
    label: "Ожидает",
    color: "bg-gray-400",
  },
  in_progress: {
    label: "В работе",
    color: "bg-yellow-400",
  },
  ready: {
    label: "Готов",
    color: "bg-green-500",
  },
  delivered: {
    label: "Доставлен",
    color: "bg-blue-500",
  },
};
