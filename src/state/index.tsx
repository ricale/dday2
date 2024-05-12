import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react';

import reducer from './reducer';

const INITIAL_STATE = { list: [], lastId: 0 };

const StateContext = createContext<ReturnType<typeof reducer>>(INITIAL_STATE);
const StateDispatchContenxt = createContext<
  Dispatch<Parameters<typeof reducer>[1]>
>(() => ({}));

type StateProviderProps = {
  children: ReactNode;
};
export function StateProvider({ children }: StateProviderProps) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
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
