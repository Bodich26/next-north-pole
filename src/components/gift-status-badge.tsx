import { GiftStatus } from "@/types/type-gifts";
import { GIFT_STATUS_MAP } from "@/types/type-status-gift";

interface GiftStatusBadgeProps {
  status: GiftStatus;
}

export function GiftStatusBadge({ status }: GiftStatusBadgeProps) {
  const { label, color } = GIFT_STATUS_MAP[status];

  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${color}`} aria-hidden />
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </span>
    </div>
  );
}
