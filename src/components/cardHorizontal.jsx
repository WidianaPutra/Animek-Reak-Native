import {useState, useEffect} from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image} from 'react-native';
import {GetResponse} from '../services/api';
import {styles} from '../styles/horizontalCard';

const HorizontalCard = ({nav, anime}) => {
  const [animes, setAnimes] = useState([]);

  async function Response() {
    const anime = await GetResponse(
      `anime`,
      `page=${Math.floor(Math.random() * 100)}`,
    );
    setAnimes(anime.data);
  }

  useEffect(() => {
    Response();
  }, []);
  return (
    <>
      {animes.length != 0 && (
        <View style={styles.fContainer}>
          <Text style={styles.titile}>Anime Lainnya</Text>
          <ScrollView horizontal>
            {animes.map((data, i) => (
              <TouchableOpacity
                key={i}
                style={styles.containerCard}
                onPress={() => nav.navigate('DetailScreen', {data: {data}})}>
                <Image
                  source={{uri: data.images.webp.image_url}}
                  style={styles.image}
                />
                <Text style={styles.animeTitle}>{data.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default HorizontalCard;
