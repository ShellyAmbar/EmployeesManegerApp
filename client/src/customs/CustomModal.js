import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const CustomModal = ({visible, employee, onClosePressed, onDonePressed}) => {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setage] = useState('');
  const [address, setaddress] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [roll, setroll] = useState('');
  const [startDate, setstartDate] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

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
    console.log('useEffect', employee);
    setfirstName(employee.firstName);
    setlastName(employee.lastName);
    setaddress(employee.address);
    setage(employee.age ? `${employee.age}` : '');
    setemail(employee.email);
    setphone(employee.phone);
    setroll(employee.roll);
    setstartDate(employee.startDate);
    setPhotoUrl(employee.photoUrl);
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
              <TextInput
                style={styles.textInput}
                placeholder="Enter First name"
                value={firstName}
                onChangeText={value => setfirstName(value)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Last name"
                value={lastName}
                onChangeText={value => setlastName(value)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Roll"
                value={roll}
                onChangeText={value => setroll(value)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Age"
                value={age}
                keyboardType="numeric"
                onChangeText={value => setage(value.toString())}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Address"
                value={address}
                onChangeText={value => setaddress(value)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Email"
                value={email}
                onChangeText={value => setemail(value)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Phone"
                value={phone}
                onChangeText={value => setphone(value)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Start Date"
                value={startDate}
                onChangeText={value => setstartDate(value)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Photo Url"
                value={photoUrl}
                onChangeText={value => setPhotoUrl(value)}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  onDonePressed({
                    firstName,
                    lastName,
                    roll,
                    address,
                    email,
                    startDate,
                    age: Number(age),
                    phone,
                    photoUrl,
                    organisation: employee.organisation,
                    _id: employee._id,
                  })
                }>
                <Text style={styles.text}>Done</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomModal;
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    height: '80%',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderRadius: 20,
    borderColor: 'orange',
    borderWidth: 1,
    margin: 5,
    padding: 10,
    textAlign: 'center',
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
  button: {
    width: '50%',
    borderRadius: 20,

    margin: 5,
    padding: 10,

    backgroundColor: 'orange',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
