import {View, Text, ScrollView} from 'react-native';
import NavigationBar from '../components/nav';
import {isLogin} from '../services/authentication';

const AkunScreen = ({navigation}) => {
  if (!isLogin) return navigation.navigate('LoginOptionScreen');
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
