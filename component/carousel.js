import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const MyCarousel = (props) => {
  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get('window').width,
  );
  const {renderItem, data, windowWidthDivisor} = props;

  return (
    <View
      onLayout={() => {
        setWindowWidth(Dimensions.get('window').width);
      }}
      style={{paddingLeft: 16}}>
      <Carousel
        layout={'default'}
        data={data}
        activeSlideAlignment="start"
        inactiveSlideOpacity={1}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
        containerCustomStyle={{flexGrow: 0}}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth / windowWidthDivisor}
      />
    </View>
  );
};
export default MyCarousel;
