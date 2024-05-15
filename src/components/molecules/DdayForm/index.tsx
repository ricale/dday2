import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import DatePicker from '@/components/atoms/DatePicker';
import TextInput from '@/components/atoms/TextInput';
import { DdayItem } from '@/state';

export type DdayFormProps =
  | {
      initialData: DdayItem;
      onPressSubmit: (item: DdayItem) => void;
    }
  | {
      initialData?: undefined;
      onPressSubmit: (item: Omit<DdayItem, 'id'>) => void;
    };
function DdayForm({
  initialData,
  onPressSubmit: _onPressSubmit,
}: DdayFormProps) {
  const [name, setName] = useState(initialData?.name || '');
  const [dateString, setDateString] = useState<string | undefined>(
    initialData
      ? `${initialData.year}-${initialData.month}-${initialData.day}`
      : undefined,
  );

  const onPressSubmit = () => {
    if (!name || !dateString) {
      return;
    }

    const date = new Date(dateString);
    const itemBody = {
      name,
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };

    if (initialData) {
      _onPressSubmit({ id: initialData.id, ...itemBody });
    } else {
      _onPressSubmit(itemBody);
    }
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setName(text)}
        value={name}
      />
      <DatePicker
        date={dateString}
        onChange={value => {
          setDateString(value);
        }}
      />
      <Button title="save" onPress={onPressSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
  },
});

export default DdayForm;
