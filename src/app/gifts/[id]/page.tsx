import { fetchGiftId } from "@/api/fetch-gift-id";
import { GiftStatusBadge } from "@/components/gift-status-badge";

type Props = {
  params: {
    id: string;
  };
};

export default async function GiftId({ params }: Props) {
  const { id } = await params;
  const gift = await fetchGiftId(id);

  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      <div className="border rounded-xl p-6  shadow-sm space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold leading-tight">
              🎁 {gift.title}
            </h1>
            <p className="text-sm text-zinc-100">
              Для: <span className="font-medium">{gift.recipientName}</span>
            </p>
          </div>

          <GiftStatusBadge status={gift.status} />
        </div>

        {/* Short description */}
        <div>
          <h2 className="text-sm font-semibold text-zinc-100 mb-1">
            Краткое описание
          </h2>
          <p className="text-zinc-100">{gift.shortDescription}</p>
        </div>

        {/* Detailed description */}
        <div>
          <h2 className="text-sm font-semibold text-zinc-100 mb-1">
            Подробности
          </h2>
          <p className="text-zinc-100 leading-relaxed">
            {gift.detailedDescription}
          </p>
        </div>

        {/* Meta info */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t text-sm">
          <div>
            <p className="text-zinc-100">Приоритет</p>
            <p className="font-medium">{gift.priority}</p>
          </div>

          <div>
            <p className="text-zinc-100">Исполнители</p>
            <p className="font-medium">
              {gift.assignedElves.length
                ? gift.assignedElves.map((elf) => elf.name).join(", ")
                : "Не назначены"}
            </p>
          </div>

          <div>
            <p className="text-zinc-100">Создан</p>
            <p className="font-medium">
              {new Date(gift.createdAt * 1000).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-zinc-100">Обновлён</p>
            <p className="font-medium">
              {new Date(gift.updatedAt * 1000).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
