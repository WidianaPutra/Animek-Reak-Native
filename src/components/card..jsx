import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import {styles} from '../styles/card';
import {GetResponse} from '../services/api';
import Pagination from './pagination';
import ShowAll from './showAll';

const Card = ({resources, limit, nav, title, isPagination, isShowAll}) => {
  const [anime, setAnime] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [isPage, setIsPage] = useState(1);
  const [isLimit, setIsLimit] = useState(false);
  const [animeShow, setAnimeShow] = useState([]);

  async function response() {
    const response = await GetResponse(resources, `page=${isPage}`);
    setAnime(response.data);
    setPagination(response.pagination);
  }

  async function res2() {
    const response = await GetResponse(resources, `page=${isPage}&&limit=10`);
    setAnimeShow(response.data);
  }

  function showAnimek() {
    isLimit === false ? setAnimeShow(anime) : setAnimeShow(anime.slice(0, 10));
  }

  useEffect(() => {
    response();
    res2();
    showAnimek();
  }, [isPage]);

  return (
    <>
      <Text style={styles.pageTitle}>{title}</Text>
      <View style={styles.cardContainer}>
        {animeShow?.map((data, index) => (
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
      </View>
      {anime.length != 0 && (
        <View>
          {isShowAll && (
            <ShowAll
              isShow={isLimit}
              setIsShow={setIsLimit}
              showAnimek={showAnimek}
            />
          )}
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
