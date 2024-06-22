import {View, Text, ScrollView} from 'react-native';
import NavigationBar from '../components/nav';

const AnimeScreen = ({navigation}) => {
  return (
    <>
      <NavigationBar nav={navigation} />
      <ScrollView>
        <Text>Hallo, Anime</Text>
      </ScrollView>
    </>
  );
};

export default AnimeScreen;
