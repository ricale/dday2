import { Button } from 'react-native';

import DdayForm from '@/components/molecules/DdayForm';
import ScreenContainer from '@/components/molecules/ScreenContainer';
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
    <ScreenContainer safeArea>
      <DdayForm onPressSubmit={onPressSubmit} />
      <Button title="back" onPress={() => navigation.goBack()} />
    </ScreenContainer>
  );
}

export default AddDdayScreen;
