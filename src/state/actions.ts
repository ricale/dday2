type Action<TypeName extends string, Payload extends {}> = {
  type: TypeName;
  payload: Payload;
};

type AddDdayItemAction = Action<
  'ADD_DDAY_ITEM',
  {
    name: string;
    year: number;
    month: number;
    day: number;
  }
>;

type UpdateDdayItemAction = Action<
  'UPDATE_DDAY_ITEM',
  {
    id: number;
    name: string;
    year: number;
    month: number;
    day: number;
  }
>;

type DeleteDdayItemAction = Action<
  'DELETE_DDAY_ITEM',
  {
    id: number;
  }
>;

export type AppAction =
  | AddDdayItemAction
  | UpdateDdayItemAction
  | DeleteDdayItemAction;
