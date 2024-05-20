import { NativeModules } from 'react-native';
const { OngoingNotification } = NativeModules;
type OngoingNotificationModule = {
  startService: () => void;
};
export default OngoingNotification as OngoingNotificationModule;
