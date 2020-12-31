import * as React from 'react';
import {Checkbox} from 'react-native-paper';

const CheckboxPaper = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color="#C34949"
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default CheckboxPaper;
