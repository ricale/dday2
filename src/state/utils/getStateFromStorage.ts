import { RootState } from '../state';

import storage from '@/lib/storage';

async function getStateFromStorage(): Promise<RootState | null> {
  return (await storage.getObject('STATE')) as RootState | null;
}

export default getStateFromStorage;
