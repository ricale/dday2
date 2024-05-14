import { RootState } from './state';
import saveStateToStorage from './utils/saveStateToStorage';

function middleware(state: RootState): RootState {
  saveStateToStorage(state);
  return state;
}

export default middleware;
