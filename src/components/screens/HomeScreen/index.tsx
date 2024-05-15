import { Button } from 'react-native';

import DdayListItem from '@/components/molecules/DdayListItem';
import ScreenContainer from '@/components/molecules/ScreenContainer';
import { ScreenProps } from '@/navigation';
import { useAppState } from '@/state';

function HomeScreen({ navigation }: ScreenProps<'Home'>) {
  const { list } = useAppState();

  return (
    <ScreenContainer safeArea>
      {list.map(item => (
        <DdayListItem
          key={item.id}
          data={item}
          onPress={() => navigation.navigate('DdayDetail', { id: item.id })}
          onPressEdit={() => navigation.navigate('EditDday', { id: item.id })}
        />
      ))}

      <Button
        title="add"
        onPress={() => {
          navigation.navigate('AddDday');
        }}
      />
    </ScreenContainer>
  );
}

export default HomeScreen;
