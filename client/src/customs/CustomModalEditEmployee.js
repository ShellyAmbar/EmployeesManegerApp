import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Button,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Moment from 'moment';
//import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/AntDesign';
const CustomModalEditEmployee = ({
  visible,
  employee,
  onClosePressed,
  onDonePressed,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setage] = useState('');
  const [address, setaddress] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [roll, setroll] = useState('');
  const [startDate, setstartDate] = useState(new Date());
  const [startDateString, setstartDateString] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [isValid, setisValid] = useState(true);
  const [title, settitle] = useState('');

  let emailPattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
  );
  let phonePattern = new RegExp(/^[0-9\b]+$/);

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

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const getTitle = () => {
    if (Object.keys(employee).length == 1) {
      return 'Add Employee';
    } else {
      return 'Edit Employee';
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log(date);
    Moment.locale('en');
    setstartDateString(Moment(date).format('D/M/YY'));
    hideDatePicker();
  };

  const onPressDone = () => {
    try {
      setisValid(true);
      if (
        firstName.length === 0 ||
        lastName.length === 0 ||
        email.length === 0 ||
        phone.length === 0 ||
        roll.length === 0 ||
        address.length === 0 ||
        age.length === 0 ||
        startDateString.length === 0
      ) {
        throw 'Empty Data.';
      }
      if (!emailPattern.test(email)) {
        throw 'Email is not valid.';
      }
      if (!phonePattern.test(phone)) {
        throw 'Phone is not valid.';
      }

      if (isValid) {
        console.log('valid');
        onDonePressed({
          firstName,
          lastName,
          email,
          phone,
          photoUrl,
          roll,
          address,
          startDate: startDateString,
          age: age ? Number(age) : 0,

          organisation: employee.organisation,
          _id: employee._id ? employee._id : '',
        });
      }
    } catch (err) {
      setisValid(false);
      alert(err);
    }
  };

  useEffect(() => {
    toggleModal();
    console.log('useEffect', employee);
    if (Object.keys(employee).length > 1) {
      setfirstName(employee.firstName);
      setlastName(employee.lastName);
      setaddress(employee.address);
      setage(employee.age ? `${employee.age}` : '');
      setemail(employee.email);
      setphone(employee.phone);
      setroll(employee.roll);
      setstartDate(new Date(employee.startDate));
      setstartDateString(employee.startDate);
      setPhotoUrl(employee.photoUrl);
    } else {
      setfirstName('');
      setlastName('');
      setaddress('');
      setage('');
      setemail('');
      setphone('');
      setroll('');
      setstartDate(new Date());
      setstartDateString('');
      setPhotoUrl('');
    }
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
              <Text style={styles.textTitle}>{getTitle()}</Text>

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
                keyboardType="numeric"
                onChangeText={value => setphone(value)}
              />

              <TextInput
                onPressIn={showDatePicker}
                style={styles.textInput}
                placeholder="Enter Start Date"
                value={startDateString}
              />

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                themeVariant="dark"
              />

              <TextInput
                style={styles.textInput}
                placeholder="Enter Photo Url"
                value={photoUrl}
                onChangeText={value => setPhotoUrl(value)}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => onPressDone()}>
                <Text style={styles.text}>Done</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomModalEditEmployee;
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
    alignSelf: 'center',
    width: '90%',
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
    zIndex: 100,
    marginTop: 15,
    marginBottom: 30,
    padding: 10,

    backgroundColor: 'orange',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  textTitle: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
  },
});
