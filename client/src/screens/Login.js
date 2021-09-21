import React, {useContext, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FormInput from '../customs/FormInput';
import FormButton from '../customs/FormButton';
import SocialButton from '../customs/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';
import {useNavigation, useTheme} from '@react-navigation/native';
import {authCreators} from '../models/root-actions';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const {googleLogin, fbLogin} = useContext(AuthContext);
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {login} = bindActionCreators(authCreators, dispatch);

  const loginRequest = (email, password) => {
    try {
      if (email.length === 0 || password.length === 0) {
        throw 'empthy data';
      }
      console.log(email + password);
      login(email, password, () => {
        if (authState.err) {
          console.log('authState.err', authState.err);
        }
        if (authState.message) {
          console.log('authState', authState);
          //  navigation.navigate('Tabs');
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Login</Text>
        <Image
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/912/912214.png',
          }}
          style={styles.image}
          // resizeMode="contain"
        />

        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          isEncript={true}
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
        />

        <View style={styles.row}>
          <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
          </TouchableOpacity>
          <FormButton
            style={styles.button}
            buttonTitle="Sign In"
            onPress={() => loginRequest(email, password)}
          />
        </View>

        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Sign In with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => {}}
            />

            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => {}}
            />
          </View>
        ) : null}

        <View style={styles.signupButton}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.navButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.termsButton}
          // onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.termsButtonText}>
            Our Terms of Use and Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    backgroundColor: '#ffff',
  },
  container: {
    height: '100%',
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  image: {
    marginTop: 60,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#afa3f5',
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  textTitle: {
    top: 30,
    start: 30,
    position: 'absolute',
    fontSize: 40,
    marginBottom: 10,
    fontWeight: '700',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  signupButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  button: {
    position: 'absolute',
    end: 0,
    backgroundColor: '#afa3f5',
    borderRadius: 10,
    padding: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',
    width: '100%',
  },
  termsButton: {
    position: 'absolute',
    bottom: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  termsButtonText: {
    fontSize: 15,
    color: '#000',
  },
});
