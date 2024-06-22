import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  backGroundPurple: {
    backgroundColor: cssVariable.colors.purple,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 170,
    aspectRatio: '7/13',
    borderRadius: 10,
  },
  detailInformation: {
    paddingLeft: 10,
    paddingTop: 10,
    gap: 7,
  },
  information: {
    color: cssVariable.colors.white,
  },
  synopsisContainer: {
    padding: 10,
  },
  sysnopsis: {
    textAlign: 'justify',
  },
  backButton: {
    width: 13,
    height: 13,
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 5,
    borderLeftWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: cssVariable.colors.white,
    transform: [{rotate: '45deg'}],
  },
  addIcon: {
    width: 25,
    height: 25,
  },
  iconContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
});
