import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const CustomModalEmployee = ({visible, item, onClosePressed}) => {
  const [showModal, setShowModal] = useState(false);

  const scaleValue = useRef(new Animated.Value(0)).current;
  const toggleModal = () => {
    if (visible) {
      setShowModal(visible);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(visible), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  useEffect(() => {
    toggleModal();
    console.log('useEffect', item);
  }, [visible]);
  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalBackground}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => onClosePressed()}>
              <Icon name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{
              width: '100%',
            }}>
            <View style={styles.content}>
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
                <Text style={styles.text}>{`Address: ${item.address}`}</Text>
                <Text
                  style={styles.text}>{`StartDate: ${item.startDate}`}</Text>
              </View>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomModalEmployee;
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    //  height: '80%',

    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',

    padding: 5,
  },
  content: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    borderColor: '#000',
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 30,
    marginRight: 20,
    marginBottom: 30,
  },
});
