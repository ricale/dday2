import { Button, Pressable, StyleSheet, View } from 'react-native';

import Text from '@/components/atoms/Text';
import day from '@/lib/day';
import { DdayItem } from '@/state';
import getDiffString from '@/utils/getDiffString';

type DdayListItemProps = {
  data: DdayItem;
  onPress: () => void;
  onPressEdit: () => void;
};
function DdayListItem({ data, onPress, onPressEdit }: DdayListItemProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <View style={styles.dateRow}>
        <Text style={[styles.dateString, styles.year]}>{data.year}</Text>
        <Text style={[styles.dateString, styles.month]}>{data.month}</Text>
        <Text style={[styles.dateString, styles.day]}>{data.day}</Text>
      </View>
      <Text style={styles.diff}>
        {getDiffString(day(`${data.year}-${data.month}-${data.day}`))}
      </Text>
      <Button title="edit" onPress={onPressEdit} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  dateRow: {
    flexDirection: 'row',
    gap: 4,
  },
  title: {},
  dateString: {},
  year: {},
  month: {},
  day: {},
  diff: {
    fontSize: 20,
  },
});

export default DdayListItem;
