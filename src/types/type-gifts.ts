export type GiftStatus =
  | "pending" // ожидает
  | "in_progress" // в работе
  | "ready" // готов
  | "delivered"; // доставлен

export type GiftPriority = "low" | "medium" | "high";

export interface Elf {
  id: number;
  name: string;
  role: "packer" | "crafter" | "logistics";
  experienceLevel: number; // 1–5
}

export interface Gift {
  id: string;
  title: string; // Название подарка
  recipientName: string; // Кому подарок (человек)
  status: GiftStatus; // Статус (строго типизирован)
  shortDescription: string; // Краткое описание
  detailedDescription: string; // Подробное описание
  priority: GiftPriority; // Важность подарка
  assignedElves: Elf[]; // Кто над ним работает
  createdAt: number; // Unix timestamp
  updatedAt: number; // Unix timestamp
}

export type GiftListItem = Pick<
  Gift,
  "id" | "recipientName" | "title" | "status"
>;
