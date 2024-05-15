import { Button, StyleSheet, View } from 'react-native';

import DdayForm from '@/components/molecules/DdayForm';
import { ScreenProps } from '@/navigation';
import { DdayItem, useAppDispatch } from '@/state';

function AddDdayScreen({ navigation }: ScreenProps<'AddDday'>) {
  const dispatch = useAppDispatch();

  const onPressSubmit = (item: Omit<DdayItem, 'id'>) => {
    dispatch({
      type: 'ADD_DDAY_ITEM',
      payload: item,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <DdayForm onPressSubmit={onPressSubmit} />
      <Button title="back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default AddDdayScreen;
