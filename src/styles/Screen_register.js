import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
  },
  containerContain: {
    justifyContent: 'center',
    height: '100%',
  },
  contaienerInput: {
    flexDirection: 'row',
    width: 350,
    height: 40,
    borderRadius: 54,
    alignItems: 'center',
    backgroundColor: '#fff',
    opacity: 0.6,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  input: {
    height: '100%',
    width: 305,
    fontSize: 17,
    borderLeftWidth: 2,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: cssVariable.colors.purple,
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 0,
    width: 350,
    textAlign: 'center',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  confirmPassContainer: {
    width: 110,
    marginVertical: 7,
    marginHorizontal: 5,
  },
});
