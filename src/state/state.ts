export type RootState = {
  list: {
    id: number;
    name: string;
    year: number;
    month: number;
    day: number;
  }[];
  lastId: number;
};
