import {View, Text, ScrollView} from 'react-native';
import NavigationBar from '../components/nav';

const AkunScreen = ({navigation}) => {
  return (
    <>
      <NavigationBar nav={navigation} />
      <ScrollView>
        <Text>Hallo, Akun</Text>
      </ScrollView>
    </>
  );
};

export default AkunScreen;
