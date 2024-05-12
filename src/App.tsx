import Navigation from '@/navigation';
import { StateProvider } from '@/state';

function App() {
  return (
    <StateProvider>
      <Navigation />
    </StateProvider>
  );
}

export default App;
