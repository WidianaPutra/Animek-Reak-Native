import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/pagination';

const Pagination = ({page, setPage, pagination}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => page !== 0 && setPage(page - 1)}>
        <Text style={styles.button}>Prev</Text>
      </TouchableOpacity>
      <Text style={styles.page}>
        {pagination?.current_page} /{' '}
        {pagination?.last_visible_page > 100
          ? 1000
          : pagination?.last_visible_page}
      </Text>
      <TouchableOpacity
        onPress={() =>
          page + 1 !== pagination.last_visible_page && setPage(page + 1)
        }>
        <Text style={styles.button}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
