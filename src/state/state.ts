export type DdayItem = {
  id: number;
  name: string;
  year: number;
  month: number;
  day: number;
};

export type RootState = {
  list: DdayItem[];
  lastId: number;
};
