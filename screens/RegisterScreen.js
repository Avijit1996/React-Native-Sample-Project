import * as React from 'react';
import {View, Image} from 'react-native';
import ButtonPaper from '../component/button';
import {HeightSpace} from '../style/view';

const RegisterScreen = (props) => {
  const {navigation} = props;
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../Image/appleskool_logo.png')}
          style={{
            width: '80%',
            height: '80%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={{paddingHorizontal: 16}}>
        <ButtonPaper
          buttonText="Create an account"
          mode="contained"
          color="#C34949"
          onPress={() => navigation.navigate('SignUpScreen')}
        />
        <HeightSpace height="20" />
        <ButtonPaper
          buttonText="Sign In"
          mode="contained"
          color="#C34949"
          onPress={() => navigation.navigate('SignInScreen')}
        />
      </View>
    </View>
  );
};
export default RegisterScreen;
