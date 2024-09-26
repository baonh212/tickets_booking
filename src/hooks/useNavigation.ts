import {useNavigation as useReactNativeNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../navigator/types.ts';

export const useNavigation = () => {
  const navigation = useReactNativeNavigation<AppNavigationProp>();

  return {...navigation};
};
