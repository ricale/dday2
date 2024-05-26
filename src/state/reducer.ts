import { AppAction } from './actions';
import { RootState } from './state';

type MyReducer = (state: RootState, action: AppAction) => RootState;

const reducer: MyReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DDAY_ITEM':
      return {
        ...state,
        list: [
          ...state.list,
          {
            ...action.payload,
            id: state.lastId + 1,
          },
        ],
        lastId: state.lastId + 1,
      };

    case 'UPDATE_DDAY_ITEM': {
      const newList = [...state.list];
      const targetIndex = newList.findIndex(
        item => item.id === action.payload.id,
      );
      if (targetIndex === -1) {
        return state;
      }

      newList[targetIndex] = { ...action.payload };
      return {
        ...state,
        list: newList,
      };
    }

    case 'DELETE_DDAY_ITEM': {
      const newList = [...state.list];
      const targetIndex = newList.findIndex(
        item => item.id === action.payload.id,
      );
      if (targetIndex === -1) {
        return state;
      }

      newList.splice(targetIndex, 1);

      return {
        ...state,
        list: newList,
      };
    }

    case 'SET_ONGOING_NOTIFICATION':
      return {
        ...state,
        ongoingId: action.payload.id,
      };

    case 'RELEASE_ONGOING_NOTIFICATION': {
      return {
        ...state,
        ongoingId: undefined,
      };
    }

    default:
      return state;
  }
};

export default reducer;
