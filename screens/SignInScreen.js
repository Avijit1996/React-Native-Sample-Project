import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Alert} from 'react-native';
import NativeTextInput from '../component/input';
import CheckboxPaper from '../component/checkbox';
import {
  Dashed,
  HeightSpace,
  WidthSpace,
  FlexRowCenterView,
} from '../style/view';
import {BoldText} from '../style/text';
import ButtonPaper from '../component/button';
import {Card} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

const SignInScreen = (props) => {
  const {navigation} = props;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const onPress = () => {
    if (name === '' || password === '') {
      Alert.alert('Please fill up the all field');
    } else if (name === 'Avijitshaw' && password === '12345678') {
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert('Please check email or password');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
      }}>
      <HeightSpace height="30" />
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Sign In
      </Text>
      <HeightSpace height="10" />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Dashed borderWidth="1.5" width="45" />
        <WidthSpace width="3" />
        <Dashed borderWidth="1.5" width="25" />
        <WidthSpace width="3" />
        <Dashed borderWidth="1.5" width="15" />
      </View>
      <HeightSpace height="10" />
      <Text style={{textAlign: 'center', fontWeight: 'normal'}}>
        Fillup the below fields to access your Account!
      </Text>
      <HeightSpace height="10" />
      <NativeTextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        iconName="account-outline"
      />
      <NativeTextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        iconName="key-outline"
      />
      <HeightSpace height="20" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CheckboxPaper />
          <Text>Remember me</Text>
        </View>
        <Text>Forgot Password!</Text>
      </View>
      <HeightSpace height="20" />
      <ButtonPaper
        buttonText="Sign In"
        mode="contained"
        color="#C34949"
        onPress={onPress}
      />
      <HeightSpace height="30" />
      <FlexRowCenterView>
        <View
          style={{
            flex: 1,
            height: 0.6,
            backgroundColor: 'gray',
          }}
        />
        <View>
          <Text style={{width: 30, textAlign: 'center', fontWeight: 'bold'}}>
            OR
          </Text>
        </View>
        <View style={{flex: 1, height: 0.6, backgroundColor: 'gray'}} />
      </FlexRowCenterView>
      <HeightSpace height="30" />
      <Card elevation={5}>
        <Card.Content>
          <FlexRowCenterView>
            <MaterialIcon
              name="facebook"
              size={40}
              style={{color: '#3b5998', width: 50}}
            />
            <BoldText style={{textAlign: 'center'}}>
              Sign up with Facebook
            </BoldText>
          </FlexRowCenterView>
        </Card.Content>
      </Card>
      <HeightSpace height="20" />
      <Card elevation={5}>
        <Card.Content>
          <FlexRowCenterView>
            <IonIcons
              name="logo-google"
              size={35}
              style={{color: '#4285f4', width: 50}}
            />
            <BoldText style={{textAlign: 'center'}}>
              Sign up with Google
            </BoldText>
          </FlexRowCenterView>
        </Card.Content>
      </Card>
      <HeightSpace height="80" />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 16}}>
          Don't have an account?
        </Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}> Sign up</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
export default SignInScreen;
