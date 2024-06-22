import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  image: {
    width: 190,
    aspectRatio: '8/13',
    borderRadius: 12,
  },
  containerCard: {
    marginHorizontal: 10,
    width: 190,
    paddingVertical: 10,
  },
  animeTitle: {
    fontSize: 13,
    color: cssVariable.colors.white,
  },
  fContainer: {
    backgroundColor: cssVariable.colors.purple,
  },
  titile: {
    color: cssVariable.colors.white,
    fontSize: 25,
    textAlign: 'center',
    padding: 5,
  },
});
