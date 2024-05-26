import { NativeModules } from 'react-native';
const { OngoingNotification } = NativeModules;
type OngoingNotificationModule = {
  set: (name: string, year: number, month: number, day: number) => void;
  release: () => void;
};
export default OngoingNotification as OngoingNotificationModule;
