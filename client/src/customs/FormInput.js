import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import IconEntypo from 'react-native-vector-icons/Entypo';

//import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({
  isEncript,
  labelValue,
  placeholderText,
  iconType,
  ...rest
}) => {
  const [isEncriptOpen, setisEncriptOpen] = useState(false);
  const [iconName, seticonName] = useState('eye-with-line');

  const onPressEncription = () => {
    if (isEncriptOpen) {
      seticonName('eye-with-line');
      setisEncriptOpen(false);
    } else {
      seticonName('eye');
      setisEncriptOpen(true);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
        secureTextEntry={!isEncriptOpen && isEncript}
      />
      {isEncript && (
        <IconEntypo
          size={20}
          onPress={() => onPressEncription()}
          name={iconName}
        />
      )}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderBottomColor: '#ccc',

    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
