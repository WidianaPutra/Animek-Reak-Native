import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

const style = {
  imageWidth: 170,
  bRadius: 10,
};

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  card: {
    width: style.imageWidth,
    borderRadius: style.bRadius,
  },
  image: {
    width: style.imageWidth,
    aspectRatio: '7/13',
    borderRadius: style.bRadius,
  },
  title: {
    fontSize: 13,
    paddingTop: 3,
    paddingLeft: 5,
  },
  pageTitle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 5,
  },
});
