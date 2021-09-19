import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const CutomFloatingButton = () => {
  let anination = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[
            styles.button,
            styles.secondButton,
            styles.thirdButton,
            styles.menu,
          ]}>
          <Icon name="question" size={20} color="#fff" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[styles.button, styles.secondButton, styles.menu]}>
          <Icon name="adduser" size={20} color="#fff" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.menu]}>
          <Icon name="plus" size={24} color="#fff" />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default CutomFloatingButton;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 120,
    right: 50,
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: 'orange',
    shadowOpacity: 2,
    shadowOffset: {height: 20},
    elevation: 30,
    backgroundColor: '#0000',
  },
  secondButton: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#0000',
    marginBottom: 10,
  },
  thirdButton: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  menu: {
    backgroundColor: 'orange',
  },
});
