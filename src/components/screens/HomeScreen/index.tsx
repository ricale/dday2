import { Button, StyleSheet, View } from 'react-native';

import Text from '@/components/atoms/Text';
import { ScreenProps } from '@/navigation';
import { useAppDispatch, useAppState } from '@/state';

function HomeScreen({ navigation }: ScreenProps<'Home'>) {
  const { list } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
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
              navigation.navigate('EditDday', { id: item.id });
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
            }}
          />
        </View>
      ))}

      <Button
        title="add"
        onPress={() => {
          navigation.navigate('AddDday');
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

export default HomeScreen;
