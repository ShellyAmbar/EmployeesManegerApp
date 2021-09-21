import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const CutomFloatingButton = props => {
  let animation = new Animated.Value(0);
  let open = false;
  const toggleMenu = () => {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      useNativeDriver: true,
      toValue,
      friction: 5,
    }).start();
    open = !open;
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  const button1 = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60],
        }),
      },
    ],
  };
  const button2 = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -110],
        }),
      },
    ],
  };

  const opacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => props.onClickButton2()}>
        <Animated.View
          style={[
            styles.button,
            styles.secondButton,
            styles.thirdButton,
            button2,
          ]}>
          <Icon name="question" size={20} color="#fff" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          props.onClickButton1();
        }}>
        <Animated.View style={[styles.button, styles.secondButton, button1]}>
          <Icon name="adduser" size={20} color="#fff" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
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
    backgroundColor: 'orange',
  },
  secondButton: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,

    marginBottom: 5,
    //  elevation: 40,
  },
  thirdButton: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    // elevation: 50,
  },
  menu: {
    backgroundColor: 'orange',
  },
});
