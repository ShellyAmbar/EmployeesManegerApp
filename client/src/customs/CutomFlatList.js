import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomEditItem from './CustomEditItem';

const CutomFlatList = ({rederItem, numColumns, data, keyExtractor}) => {
  return (
    <View style={styles.LIstBackground}>
      <FlatList
        numColumns={numColumns}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={rederItem}
      />
    </View>
  );
};
export default CutomFlatList;
const styles = StyleSheet.create({
  LIstBackground: {
    height: '100%',

    paddingTop: 10,
    flex: 1,
    // backgroundColor: '#ffff',
    //  alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
