import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

const NativeTextInput = (props) => {
  const {iconName, placeholder, onChangeText, value} = props;
  return (
    <View style={{paddingTop: 8}}>
      <TextInput
        placeholder={placeholder}
        value={value}
        theme={{colors: {primary: '#C34949', underlineColor: 'transparent'}}}
        onChangeText={onChangeText}
        style={{backgroundColor: 'transparent'}}
        selectionColor="#C34949"
        underlineColorAndroid={'red'}
        left={<TextInput.Icon name={iconName} color="#C34949" />}
      />
    </View>
  );
};
export default NativeTextInput;
