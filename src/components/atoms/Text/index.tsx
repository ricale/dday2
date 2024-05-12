import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';

type TextProps = RNTextProps;
function Text({ style, ...props }: TextProps) {
  return <RNText style={[styles.container, style]} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    color: 'black',
  },
});

export default Text;
