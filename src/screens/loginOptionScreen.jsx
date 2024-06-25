import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from '../styles/Screen_loginOption';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/backButton';

const LoginOptionScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/images/ayaka.webp')}>
      <LinearGradient colors={['rgba(0,0,0, .6)', 'rgba(0,0,0,.6)']}>
        <BackButton nav={navigation} action={`home`} />
        <Text style={styles.title}>Anime Qu</Text>
        <View style={styles.mainContainer}>
          <View style={styles.containerInput}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <View style={styles.containerButton}>
                <Text style={styles.button}>Login</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <View style={styles.containerButton}>
                <Text style={styles.button}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default LoginOptionScreen;
