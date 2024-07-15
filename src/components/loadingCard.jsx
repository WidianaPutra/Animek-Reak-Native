import {View, Text} from 'react-native';
import {styles} from '../styles/loadingCard';

const LoadingCard = () => {
  const ps = ['', '', '', '', '', ''];
  return (
    <>
      {ps.map((_, i) => (
        <View style={styles.cardContainer} key={i}>
          <View style={styles.card}></View>
          <View style={styles.title}></View>
        </View>
      ))}
    </>
  );
};

export default LoadingCard;
