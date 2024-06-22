import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  containerNavbar: {
    height: 50,
    position: 'absolute',
    width: '100%',
    zIndex: 3,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: cssVariable.colors.purple,
  },
  text: {
    color: cssVariable.colors.white,
  },
});
