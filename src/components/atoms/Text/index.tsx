import { Text as RNText, TextProps as RNTextProps } from 'react-native';

type TextProps = RNTextProps;
function Text({ style, ...props }: TextProps) {
  return (
    <RNText
      style={[
        {
          color: 'black',
        },
        style,
      ]}
      {...props}
    />
  );
}

export default Text;
