import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homScreen';
import SplashScreen from '../screens/SplashScreen';
import DetailScreen from '../screens/detailScreen';
import AnimeScreen from '../screens/animeScreen';
import AkunScreen from '../screens/akunScree';
import NavigationBar from '../components/nav';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const screeenOptions = {
    headerShown: false,
    animationEnabled: false,
  };
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screeenOptions}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="AnimeScreen" component={AnimeScreen} />
      <Stack.Screen name="AkunScreen" component={AkunScreen} />
      <Stack.Screen name="nav" component={NavigationBar} />
    </Stack.Navigator>
  );
};

export default Routes;
