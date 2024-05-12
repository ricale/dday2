import { Button, StyleSheet, View } from 'react-native';

import Text from '@/components/atoms/Text';
import { ScreenProps } from '@/navigation';
import { useAppDispatch, useAppState } from '@/state';

function DdayDetailScreen({ navigation, route }: ScreenProps<'DdayDetail'>) {
  const { id } = route.params;
  const { list } = useAppState();
  const item = list.find(it => it.id === id);
  const dispatch = useAppDispatch();

  if (!item) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>DetailScreen Screen</Text>

      <Text>{JSON.stringify(item)}</Text>

      <Button
        title="edit"
        onPress={() => {
          dispatch({
            type: 'UPDATE_DDAY_ITEM',
            payload: {
              id: item.id,
              day: item.day + 1,
              month: item.month + 1,
              year: item.year + 1,
              name: 'test',
            },
          });
        }}
      />

      <Button
        title="delete"
        onPress={() => {
          dispatch({
            type: 'DELETE_DDAY_ITEM',
            payload: {
              id: item.id,
            },
          });
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});

export default DdayDetailScreen;
