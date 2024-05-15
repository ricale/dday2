import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

type TextInputProps = RNTextInputProps;
function TextInput({ ...props }: TextInputProps) {
  return <RNTextInput {...props} />;
}

export default TextInput;
