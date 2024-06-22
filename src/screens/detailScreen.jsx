import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import DetailAnime from '../components/detaili';
import HorizontalCard from '../components/cardHorizontal';

const DetailScreen = ({navigation, route}) => {
  const {data, anime} = route.params;

  return (
    <ScrollView>
      <DetailAnime navigation={navigation} data={data} />
      <HorizontalCard nav={navigation} anime={anime} />
    </ScrollView>
  );
};

export default DetailScreen;
