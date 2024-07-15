import {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import NavigationBar from '../components/nav';
import Card from '../components/card.';
import InputSearch from '../components/search';

const AnimeScreen = ({navigation}) => {
  const [isSearchValue, setIsSearchValue] = useState('');
  console.log(isSearchValue);
  return (
    <>
      <InputSearch setValue={setIsSearchValue} value={isSearchValue} />
      <NavigationBar nav={navigation} />
      <ScrollView>
        <Card
          isPagination={true}
          resources={`anime`}
          title={`Anime`}
          nav={navigation}
          inputSearch={setTimeout(() => {
            isSearchValue;
          }, 100)}
          search={true}
        />
      </ScrollView>
    </>
  );
};

export default AnimeScreen;
