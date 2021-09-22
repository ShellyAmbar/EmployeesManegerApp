import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const CustomItem = ({item, heightOfItem, onClickItem}) => {
  return (
    <Pressable onPress={() => onClickItem(item)}>
      <View style={styles.ListItem}>
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
          <View style={styles.row}>
            <Ionicons size={20} style={styles.icon} name="briefcase-outline" />
            <View style={styles.col}>
              <Text style={styles.text}>{`Roll: ${item.roll}`}</Text>
              <Text
                style={
                  styles.textLight
                }>{`Start Date: ${item.startDate}`}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <AntDesign size={20} style={styles.icon} name="phone" />
            <Text style={styles.text}>{`Phone: ${item.phone}`}</Text>
          </View>
          <View style={styles.row}>
            <Ionicons size={20} style={styles.icon} name="location-outline" />
            <Text style={styles.text}>{`Address: ${item.address}`}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
export default CustomItem;
const styles = StyleSheet.create({
  ListItem: {
    width: '100%',
    display: 'flex',
    padding: 20,

    flexDirection: 'row',
    backgroundColor: '#ffff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',

    marginBottom: 10,
    borderRadius: 30,
  },
  icon: {
    marginEnd: 5,
  },
  buttonMore: {
    alignSelf: 'baseline',
    position: 'absolute',
    top: 20,
    end: 20,
  },
  image: {
    borderColor: '#000',
    borderWidth: 1,
    width: 70,
    height: 70,
    alignSelf: 'baseline',
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
  textLight: {
    fontSize: 15,
    fontWeight: '200',
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'orange',
    margin: 5,
  },
});
