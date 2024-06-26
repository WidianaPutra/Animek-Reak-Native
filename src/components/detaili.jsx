import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/detail';
import BackButton from './backButton';

const DetailAnime = ({navigation, data}) => {
  return (
    <>
      <View>
        <View style={styles.backGroundPurple}>
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backButton}></View>
          </TouchableOpacity> */}
          <BackButton nav={navigation} action={`back`} />
          <View style={styles.container}>
            <Image
              source={{uri: data.data.images.webp.image_url}}
              style={styles.image}
            />
            <View style={styles.detailInformation}>
              <Text style={styles.information}>Nama: {data.data.title}</Text>
              <Text style={styles.information}>
                Episode: {data.data.episodes}
              </Text>
              <Text style={styles.information}>Tahun: {data.data.year}</Text>
              <Text style={styles.information}>
                Durasi: {data.data.duration}
              </Text>
              <Text style={styles.information}>
                Peringkat: {data.data.rank}
              </Text>
              <Text style={styles.information}>
                Popularitas: {data.data.popularity}
              </Text>
              <Text style={styles.information}>Nilai: {data.data.score}</Text>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/icons/add.png')}
                  style={styles.addIcon}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.synopsisContainer}>
          <Text>Sinopsis: </Text>
          <Text style={styles.sysnopsis}>{data.data.synopsis}</Text>
        </View>
      </View>
    </>
  );
};

export default DetailAnime;
