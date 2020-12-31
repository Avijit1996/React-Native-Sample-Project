import * as React from 'react';
import {Text, View} from 'react-native';
import {
  HeightSpace,
  WidthSpace,
  ColorDashed,
  FlexRowCenterView,
} from '../style/view';

const CarouselHeader = (props) => {
  const {header} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
      }}>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{header}</Text>
        <HeightSpace height={5} />
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <ColorDashed borderWidth="2" width="45" color="red" />
          <WidthSpace width="3" />
          <ColorDashed borderWidth="2" width="25" />
          <WidthSpace width="3" />
          <ColorDashed borderWidth="2" width="15" />
        </View>
      </View>
      <Text style={{fontSize: 12, textAlign: 'center'}}>See All</Text>
    </View>
  );
};
export default CarouselHeader;
