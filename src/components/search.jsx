import {View, Image, TextInput} from 'react-native';
import {styles} from '../styles/inputSearch';

const InputSearch = ({value, setValue}) => {
  return (
    <View style={styles.fContainer}>
      <View style={styles.inputContainer}>
        <TextInput value={value} onChangeText={setValue} style={styles.input} />
        <View style={styles.containerSearchIcon}>
          <Image
            source={require('../assets/icons/search.png')}
            style={styles.searchIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default InputSearch;
