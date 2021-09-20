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

const CutomFlatList = props => {
  return (
    <View style={styles.LIstBackground}>
      <FlatList
        data={props.data}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => {
          return (
            <View style={styles.ListItem}>
              <Image
                source={{
                  uri:
                    item.photoUrl || item.photoUrl === ''
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
                <Text style={styles.text}>{`Phone: ${item.phone}`}</Text>
                <Text style={styles.text}>{`Email: ${item.email}`}</Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Pressable
                    onPress={() => {
                      props.edit(item);
                    }}
                    style={styles.button}>
                    <Text style={styles.text}>Edit</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      props.delete(item);
                    }}
                    style={styles.button}>
                    <Text style={styles.text}>Delete</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default CutomFlatList;
const styles = StyleSheet.create({
  LIstBackground: {
    height: '100%',
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
    // backgroundColor: '#ffff',
    alignContent: 'center',
    alignItems: 'center',
    //  justifyContent: 'center',
  },
  ListItem: {
    width: '100%',
    display: 'flex',
    padding: 5,

    flexDirection: 'row',
    backgroundColor: '#ffff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',

    marginBottom: 10,
    borderRadius: 30,
    marginRight: 20,
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
