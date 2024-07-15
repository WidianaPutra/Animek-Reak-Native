import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import {styles} from '../styles/card';
import {GetResponse} from '../services/api';
import Pagination from './pagination';
import NotFound from './notFound';
import LoadingCard from './loadingCard';

const Card = ({resources, inputSearch, nav, title, isPagination, search}) => {
  const [anime, setAnime] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [isPage, setIsPage] = useState(1);
  const [isNotFound, setIsNotFound] = useState(false);

  async function response() {
    const response = await GetResponse(
      resources,
      `page=${isPage}&&${inputSearch && `q=${inputSearch}`}`,
    );
    setAnime(response?.data);
    setPagination(response?.pagination);
  }

  if (anime.length === 0) {
    setTimeout(() => {
      anime.length === 0 ? setIsNotFound(!isNotFound) : setIsNotFound(false);
      console.log(isNotFound);
    }, 5000);
  }

  useEffect(() => {
    response();
  }, [isPage, inputSearch]);

  return (
    <>
      <Text style={styles.pageTitle}>
        {isNotFound ? 'Anime tidak ditemukan' : title}
      </Text>
      <View style={styles.cardContainer}>
        {anime.length === 0 ? (
          <LoadingCard />
        ) : (
          <>
            {anime?.map((data, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  nav.navigate('DetailScreen', {data: {data}});
                }}>
                <View style={styles.card}>
                  <Image
                    source={{uri: data.images.webp.image_url}}
                    style={styles.image}
                  />
                  <Text style={styles.title}>{data.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </>
        )}
      </View>
      {anime?.length != 0 && (
        <View>
          {isPagination && (
            <Pagination
              page={isPage}
              setPage={setIsPage}
              pagination={pagination}
            />
          )}
        </View>
      )}
      <View style={{height: 60}}></View>
    </>
  );
};

export default Card;
