import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  title: {
    color: cssVariable.colors.white,
    fontSize: 40,
    textAlign: 'center',
    top: 30,
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    gap: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  button: {
    color: cssVariable.colors.white,
    fontSize: 18,
  },
  containerButton: {
    borderRadius: 50,
    width: 340,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cssVariable.colors.purple,
    marginVertical: 5,
  },
});
