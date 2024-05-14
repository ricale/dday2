import { useLayoutEffect, useState } from 'react';

import Navigation from '@/navigation';
import { RootState, StateProvider, getStateFromStorage } from '@/state';

function App() {
  const [initialState, setInitialState] = useState<RootState | null>();

  useLayoutEffect(() => {
    getStateFromStorage().then(result => {
      setInitialState(result);
    });
  }, []);

  if (initialState === undefined) {
    return null;
  }

  return (
    <StateProvider initialState={initialState}>
      <Navigation />
    </StateProvider>
  );
}

export default App;
