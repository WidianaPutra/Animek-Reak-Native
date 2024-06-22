import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/showAll';

const ShowAll = ({isShow, setIsShow, showAnimek}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => {
          setIsShow(!isShow);
          showAnimek();
        }}>
        {/* <Text style={styles.button}>Show All</Text> */}
        <View
          style={{
            width: 12,
            height: 12,
            borderColor: 'black',
            borderBottomWidth: 1.5,
            borderLeftWidth: 1.5,
            transform: [{rotate: `${isShow ? -45 : 135}deg`}],
          }}></View>
      </TouchableOpacity>
    </View>
  );
};

export default ShowAll;
