import { Button, StyleSheet, View } from 'react-native';

import Text from '@/components/atoms/Text';
import ScreenContainer from '@/components/molecules/ScreenContainer';
import OngoingNotification from '@/lib/OngoingNotification';
import day from '@/lib/day';
import { ScreenProps } from '@/navigation';
import { useAppDispatch, useAppState } from '@/state';
import getDiffString from '@/utils/getDiffString';
import useSafeArea from '@/utils/useSafeArea';

function DdayDetailScreen({ navigation, route }: ScreenProps<'DdayDetail'>) {
  const { list, ongoingId } = useAppState();
  const item = list.find(it => it.id === route.params.id);
  const dispatch = useAppDispatch();
  const { bottom } = useSafeArea();

  if (!item) {
    throw new Error(`[DdayDetailScreen] item not exists: ${route.params.id}`);
  }

  const onPressSetNotification = () => {
    if (ongoingId) {
      dispatch({ type: 'RELEASE_ONGOING_NOTIFICATION' });
      OngoingNotification.release();
    } else {
      dispatch({
        type: 'SET_ONGOING_NOTIFICATION',
        payload: { id: item.id },
      });
      OngoingNotification.set(item.name, item.year, item.month, item.day);
    }
  };

  const onPressEdit = () => {
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
  };

  const onPressDelete = () => {
    dispatch({
      type: 'DELETE_DDAY_ITEM',
      payload: {
        id: item.id,
      },
    });
    navigation.navigate('Home');
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.year}>{item.year}</Text>
        <Text style={styles.month}>{item.month}</Text>
        <Text style={styles.day}>{item.day}</Text>
        <Text style={styles.diff}>
          {getDiffString(day(`${item.year}-${item.month}-${item.day}`))}
        </Text>
      </View>

      <View style={[styles.controller, { bottom }]}>
        <Button title="noti" onPress={onPressSetNotification} />
        <Button title="edit" onPress={onPressEdit} />
        <Button title="delete" onPress={onPressDelete} />
        <Button title="back" onPress={onPressBack} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 40,
  },
  name: {},
  year: { fontSize: 20 },
  month: { fontSize: 20 },
  day: { fontSize: 20 },
  diff: {
    fontSize: 20,
  },
  controller: {
    position: 'absolute',
    bottom: 0,
    right: 8,
  },
});

export default DdayDetailScreen;
