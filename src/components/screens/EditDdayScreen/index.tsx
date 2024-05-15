import { Button } from 'react-native';

import DdayForm from '@/components/molecules/DdayForm';
import ScreenContainer from '@/components/molecules/ScreenContainer';
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
    <ScreenContainer safeArea>
      <DdayForm initialData={item} onPressSubmit={onPressSubmit} />
      <Button title="back" onPress={() => navigation.goBack()} />
    </ScreenContainer>
  );
}

export default EditDdayScreen;
