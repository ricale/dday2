import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenContainerProps = {
  children: ReactNode;
  safeArea?: boolean;
  style?: StyleProp<ViewStyle>;
};
function ScreenContainer({ safeArea, style, ...props }: ScreenContainerProps) {
  if (safeArea) {
    return <SafeAreaView style={[styles.container, style]} {...props} />;
  }
  return <View style={[styles.container, style]} {...props} />;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    width: '100%',
    height: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default ScreenContainer;
