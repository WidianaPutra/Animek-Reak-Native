import {isLogin} from '../services/authentication';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homScreen';
import SplashScreen from '../screens/SplashScreen';
import DetailScreen from '../screens/detailScreen';
import AnimeScreen from '../screens/animeScreen';
import AkunScreen from '../screens/akunScreen';
import {Authentication} from '../services/authentication';
import RegisterScreen from '../screens/registerScreen';
import LoginScreen from '../screens/loginScreen';
import LoginOptionScreen from '../screens/loginOptionScreen';

const Stack = createNativeStackNavigator();
const Routes = () => {
  const screeenOptions = {
    headerShown: false,
    animationEnabled: false,
  };
  console.log(isLogin);
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screeenOptions}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="AnimeScreen" component={AnimeScreen} />
      <Stack.Screen name="AkunScreen" component={AkunScreen} />
      {!isLogin && (
        <>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen
            name="LoginOptionScreen"
            component={LoginOptionScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routes;
