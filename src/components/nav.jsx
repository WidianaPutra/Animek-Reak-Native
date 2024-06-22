import {View, Text} from 'react-native';
import {styles} from '../styles/navbar';

const NavigationBar = ({nav}) => {
  return (
    <View style={styles.containerNavbar}>
      <Text style={styles.text} onPress={() => nav.navigate(`HomeScreen`)}>
        Home
      </Text>
      <Text style={styles.text} onPress={() => nav.navigate(`AnimeScreen`)}>
        Anime
      </Text>
      <Text style={styles.text} onPress={() => nav.navigate(`AkunScreen`)}>
        Akun
      </Text>
    </View>
  );
};

export default NavigationBar;
