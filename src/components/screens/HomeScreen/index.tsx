import { Button, View } from 'react-native';
import { useAppDispatch, useAppState } from '../../../state';
import { ScreenProps } from '../../../App';
import Text from 'components/atoms/Text';

function HomeScreen({ navigation }: ScreenProps<'Home'>) {
  const { list } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <View style={{ marginTop: 100 }}>
      <Text>Home Screen</Text>

      {list.map(item => (
        <View key={item.id}>
          <Text>{JSON.stringify(item)}</Text>
          <Button
            title="go"
            onPress={() => {
              navigation.navigate('DdayDetail', { id: item.id });
            }}
          />
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
      ))}

      <Button
        title="test"
        onPress={() => {
          dispatch({
            type: 'ADD_DDAY_ITEM',
            payload: {
              day: 1,
              month: 1,
              year: 2000,
              name: 'test',
            },
          });
        }}
      />
    </View>
  );
}

export default HomeScreen;
