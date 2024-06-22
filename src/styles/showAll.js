import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  button: {
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
