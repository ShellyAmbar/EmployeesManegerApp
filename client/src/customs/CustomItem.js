import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const CustomItem = ({item, heightOfItem, onClickItem}) => {
  return (
    <Pressable onPress={() => onClickItem(item)}>
      <View
        style={{...styles.ListItem, width: heightOfItem, height: heightOfItem}}>
        <Image
          source={{
            uri:
              !item.photoUrl || item.photoUrl === ''
                ? 'https://image.flaticon.com/icons/png/512/912/912214.png'
                : item.photoUrl,
          }}
          style={styles.image}
        />
        <View>
          <Text
            style={
              styles.textTitle
            }>{`${item.firstName} ${item.lastName},${item.age}`}</Text>
          <Text style={styles.text}>{`Roll: ${item.roll}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default CustomItem;
const styles = StyleSheet.create({
  ListItem: {
    backgroundColor: '#ffff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',

    borderRadius: 10,
    margin: 3,
  },
  image: {
    borderColor: '#000',
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 30,
    marginRight: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
  },
});
