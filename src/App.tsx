import { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

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
    <View style={styles.container}>
      <StateProvider initialState={initialState}>
        <Navigation />
      </StateProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    width: '100%',
    height: '100%',
  },
});

export default App;
