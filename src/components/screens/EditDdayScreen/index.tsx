import { Button, StyleSheet, View } from 'react-native';

import DdayForm from '@/components/molecules/DdayForm';
import { ScreenProps } from '@/navigation';
import { DdayItem, useAppDispatch, useAppState } from '@/state';

function EditDdayScreen({ navigation, route }: ScreenProps<'EditDday'>) {
  const dispatch = useAppDispatch();
  const { list } = useAppState();
  const item = list.find(it => it.id === route.params.id);
  if (!item) {
    throw new Error(`item has no exits: ${route.params.id}`);
  }

  const onPressSubmit = (updated: DdayItem) => {
    dispatch({
      type: 'UPDATE_DDAY_ITEM',
      payload: updated,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <DdayForm initialData={item} onPressSubmit={onPressSubmit} />
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

export default EditDdayScreen;
