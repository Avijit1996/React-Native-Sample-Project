import * as React from 'react';
import {ScrollView} from 'react-native';
import {Chip} from 'react-native-paper';
import {chipValues} from '../staticValue';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PaperChip = () => (
  <ScrollView
    horizontal
    style={{paddingHorizontal: 16, flexDirection: 'row'}}
    showsHorizontalScrollIndicator={false}>
    {chipValues.map((item, index) => {
      return (
        <Chip
          icon={() => <Ionicons name={item.icon} size={20} color="#C34949" />}
          mode="outlined"
          key={index}
          onPress={() => console.log('Pressed')}
          style={{borderColor: 'red', marginRight: 5}}
          textStyle={{fontSize: 12}}>
          {item.text}
        </Chip>
      );
    })}
  </ScrollView>
);

export default PaperChip;
