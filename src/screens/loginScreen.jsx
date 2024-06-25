import {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/backButton';
import {styles} from '../styles/Screen_register';
import {emailValidation, trimmed} from '../utils/validation';
import {isLogin} from '../services/authentication';

const LoginScreen = ({navigation}) => {
  if (isLogin) return navigation.goBack();

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [message, setMessage] = useState({
    message: '',
    status: false,
  });

  function handleLogin() {
    if (!(trimmed(user) && trimmed(email) && trimmed(password))) {
      message.message = 'Data tidak lengkap';
    } else if (!emailValidation(email)) {
      message.message = 'Masukan email dengan benar';
    }
    // api
    else {
      message.status = true;
    }

    if (message.status) {
      //
    } else {
      return Alert.alert('Pesan', message.message);
    }
  }

  return (
    <>
      <ImageBackground source={require('../assets/images/ayaka.webp')}>
        <LinearGradient colors={['rgba(0,0,0, .6)', 'rgba(0,0,0,.6)']}>
          <View style={styles.mainContainer}>
            <BackButton nav={navigation} action={`back`} />
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                paddingVertical: 10,
                fontSize: 30,
              }}>
              Login
            </Text>
            <View style={styles.containerContain}>
              <View style={{gap: 30, alignItems: 'center'}}>
                <View style={styles.contaienerInput}>
                  <Image
                    source={require('../assets/icons/user.png')}
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={user}
                    onChangeText={setUser}
                  />
                </View>
                <View style={styles.contaienerInput}>
                  <Image
                    source={require('../assets/icons/email.png')}
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                  />
                </View>
                <View style={styles.contaienerInput}>
                  <Image
                    source={require('../assets/icons/key.png')}
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={isShowPassword ? false : true}
                  />
                </View>
                <View style={{width: 350}}>
                  <View style={styles.confirmPassContainer}>
                    <Text
                      style={{color: '#fff'}}
                      onPress={() => setIsShowPassword(!isShowPassword)}>
                      {isShowPassword ? 'Hide' : 'Show'} Password
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{alignItems: 'center', marginTop: 10}}>
                <TouchableOpacity onPress={handleLogin}>
                  <View style={styles.button}>
                    <Text style={{color: '#fff', fontSize: 18}}>Login</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text
                    style={{
                      color: '#fff',
                      paddingTop: 10,
                      textDecorationLine: 'underline',
                    }}>
                    Buat akun
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </>
  );
};

export default LoginScreen;
