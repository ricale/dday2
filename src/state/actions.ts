type Action<
  TypeName extends string,
  Payload extends {} | undefined = undefined,
> = Payload extends {}
  ? {
      type: TypeName;
      payload: Payload;
    }
  : { type: TypeName };

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

type SetOngoingNotificationAction = Action<
  'SET_ONGOING_NOTIFICATION',
  {
    id: number;
  }
>;

type ReleaseOngoingNotificationAction = Action<'RELEASE_ONGOING_NOTIFICATION'>;

export type AppAction =
  | AddDdayItemAction
  | UpdateDdayItemAction
  | DeleteDdayItemAction
  | SetOngoingNotificationAction
  | ReleaseOngoingNotificationAction;
