export type status = "pending" | "ready" | "delivered";

export interface Gift {
  id: number;
  person: string;
  object_name: string;
  status: status;
}

export type GiftsRes = Gift[];
