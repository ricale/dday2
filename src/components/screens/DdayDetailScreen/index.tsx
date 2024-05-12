import { Button, View } from 'react-native';
import { useAppDispatch, useAppState } from '../../../state';
import { ScreenProps } from '../../../App';
import Text from 'components/atoms/Text';

function DdayDetailScreen({ navigation, route }: ScreenProps<'DdayDetail'>) {
  const { id } = route.params;
  const { list } = useAppState();
  const item = list.find(it => it.id === id);
  const dispatch = useAppDispatch();

  if (!item) {
    return null;
  }

  return (
    <View style={{ marginTop: 100 }}>
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

export default DdayDetailScreen;
