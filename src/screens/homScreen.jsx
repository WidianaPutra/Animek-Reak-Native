import {ScrollView} from 'react-native';
import Card from '../components/card.';
import {styles} from '../styles/Screen_home';
import NavigationBar from '../components/nav';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <NavigationBar nav={navigation} />
      <ScrollView style={styles.bodyContainer}>
        <Card
          resources={`top/anime`}
          limit={10}
          nav={navigation}
          title={`Anime Populer`}
          isPagination={false}
          isShowAll={true}
        />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
