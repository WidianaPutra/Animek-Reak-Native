import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  fContainer: {
    alignItems: 'center',
    padding: 10,

    backgroundColor: cssVariable.colors.blue,
  },
  inputContainer: {
    borderColor: '#fff',
    borderWidth: 2,
    width: 350,
    height: 40,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cssVariable.colors.grey,
  },
  input: {
    width: 300,
    height: 40,
    paddingLeft: 10,
    fontSize: 15,
    borderRightColor: '#000',
    borderRightWidth: 2,
    color: '#fffff',
  },
  containerSearchIcon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 30,
    height: 30,
    borderWidth: 2,
    // borderColor: '#000',
  },
});
