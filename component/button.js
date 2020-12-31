import * as React from 'react';
import {Button} from 'react-native-paper';

const ButtonPaper = (props) => {
  const {buttonText, onPress, mode, color} = props;
  return (
    <Button mode={mode} onPress={onPress} color={color}>
      {buttonText}
    </Button>
  );
};

export default ButtonPaper;
