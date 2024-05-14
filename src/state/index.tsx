import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react';

import middleware from './middleware';
import reducer from './reducer';
import { RootState } from './state';

const INITIAL_STATE = { list: [], lastId: 0 };

const StateContext = createContext<RootState>(INITIAL_STATE);
const StateDispatchContenxt = createContext<
  Dispatch<Parameters<typeof reducer>[1]>
>(() => ({}));

type StateProviderProps = {
  children: ReactNode;
  initialState: RootState | null;
};
export function StateProvider({ children, initialState }: StateProviderProps) {
  const [state, dispatch] = useReducer<typeof reducer>((prevState, action) => {
    return middleware(reducer(prevState, action));
  }, initialState || INITIAL_STATE);

  return (
    <StateContext.Provider value={state}>
      <StateDispatchContenxt.Provider value={dispatch}>
        {children}
      </StateDispatchContenxt.Provider>
    </StateContext.Provider>
  );
}

export function useAppState() {
  return useContext(StateContext);
}

export function useAppDispatch() {
  return useContext(StateDispatchContenxt);
}

export { default as getStateFromStorage } from './utils/getStateFromStorage';
export type { RootState };
