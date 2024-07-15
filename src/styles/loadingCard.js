import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

const style = {
  imageWidth: 170,
  bRadius: 10,
};

export const styles = StyleSheet.create({
  card: {
    width: style.imageWidth,
    aspectRatio: '7/13',
    borderRadius: style.bRadius,
    backgroundColor: 'grey',
  },
  title: {
    width: 100,
    height: 13,
    backgroundColor: 'grey',
    marginTop: 3,
    marginLeft: 5,
  },
});
