import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 18,
    backgroundColor: cssVariable.colors.purple,
    color: cssVariable.colors.white,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
  page: {
    fontSize: 18,
  },
});
