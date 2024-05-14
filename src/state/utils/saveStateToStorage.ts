import { RootState } from '../state';

import storage from '@/lib/storage';

async function saveStateToStorage(state: RootState) {
  await storage.setObject('STATE', state);
}

export default saveStateToStorage;
