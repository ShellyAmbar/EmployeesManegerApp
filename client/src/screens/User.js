import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import CustomModalEditUser from '../customs/CustomModalEditUser';
import {authCreators, userCreators} from '../models/root-actions';
export default function User() {
  const [visivleModal, setVisivleModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const authState = useSelector(state => state.auth);
  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();
  const {getToken, logout} = bindActionCreators(authCreators, dispatch);
  const {updateUser, removeUser} = bindActionCreators(userCreators, dispatch);
  const [user, setuser] = useState(authState.user);

  const logoutUser = () => {
    getToken(authState.refreshToken, () => {
      logout(authState.refreshToken, authState.token, () => {
        console.log('logout user');
      });
    });
  };

  const onUpdateUserData = user => {
    getToken(authState.refreshToken, () => {
      updateUser(user, authState.token, () => {
        console.log('user edited');
        console.log('authState', userState);

        setVisivleModal(false);
      });
    });
  };
  const onCloseModalPressed = () => {
    setVisivleModal(false);
  };

  const handleEditUser = () => {
    setVisivleModal(true);
  };

  useEffect(() => {
    setuser(userState.user);
  }, [userState.user]);

  useEffect(() => {
    setuser(authState.user);
  }, []);
  return (
    <View>
      <CustomModalEditUser
        visible={visivleModal}
        user={user}
        onClosePressed={onCloseModalPressed}
        onDonePressed={onUpdateUserData}
      />
      <View style={styles.item}>
        <Image
          source={{
            uri:
              !user.photoUrl || user.photoUrl === ''
                ? 'https://image.flaticon.com/icons/png/512/912/912214.png'
                : user.photoUrl,
          }}
          style={styles.image}
        />
        <View style={styles.itemContent}>
          <Text
            style={
              styles.textTitle
            }>{`${user.firstName} ${user.lastName}`}</Text>
          <Text style={styles.text}>{`Email: ${user.email}`}</Text>
          <Text style={styles.text}>{`Phone: ${user.email}`}</Text>
          <Text
            style={styles.text}>{`organisation: ${user.organisation}`}</Text>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.button} onPress={() => handleEditUser()}>
            <Text style={styles.buttonText}>Edit</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => logoutUser()}>
            <Text style={styles.buttonText}>LogOut</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
    margin: 20,
  },
  itemContent: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderColor: '#000',
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 30,
    margin: 30,
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
    width: '30%',
    borderRadius: 20,

    margin: 10,
    padding: 20,

    backgroundColor: 'orange',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});
