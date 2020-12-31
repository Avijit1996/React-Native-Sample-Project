import * as React from 'react';
import {Text, View, TouchableWithoutFeedback, ScrollView} from 'react-native';
import MyCarousel from '../component/carousel';
import PaperChip from '../component/chip';
import {HeightSpace} from '../style/view';
import CarouselHeader from '../component/carouselHeader';
import {DataCarousel, TrainingCarousel} from '../staticValue';
import Icon from 'react-native-vector-icons/Ionicons';
import CardPaper from '../component/card';

const HomeScreen = () => {
  const renderImageCarousel = ({item, index}) => {
    return (
      <View
        style={{
          height: 150,
        }}
        key={index}>
        {item.image}
        <View
          style={{
            position: 'absolute',
            top: 35,
            bottom: 0,
            height: 100,
            width: 220,
            backgroundColor: 'white',
            opacity: 0.8,
          }}>
          <Text
            style={{fontWeight: 'bold', paddingHorizontal: 8, paddingTop: 8}}>
            Learn on your schedule
          </Text>
          <Text style={{fontSize: 10, paddingLeft: 8, paddingBottom: 5}}>
            Study any topic,anytime.Explore thousends of trainings starting at
            INR 455 each
          </Text>
          <TouchableWithoutFeedback
            onPress={() => {
              /* do this */
            }}>
            <View
              style={{
                backgroundColor: '#F30707',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 8,
                width: 90,
              }}>
              <Text style={{color: 'white', fontSize: 10}}>
                Get Started Now
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  };

  const renderCarousel = ({item, index}) => {
    return (
      <>
        <View
          key={index}
          style={{
            height: 100,
          }}>
          {item.image}
        </View>
        <HeightSpace height={20} />
        <View style={{backgroundColor: 'white'}}>
          <Text style={{fontWeight: 'bold', fontSize: 12}}>{item.title}</Text>
          <Text style={{fontSize: 10}}>{item.subTitle}</Text>
          <View style={{flexDirection: 'row', width: 50}}>
            <View
              style={{
                height: 15,
                width: 30,
                borderRadius: 2,
                backgroundColor: 'orange',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="star-outline"
                size={8}
                style={{width: 10}}
                color="white"
              />
              <Text style={{color: 'white', fontSize: 8}}>4.6</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              {'\u20B9'}455
            </Text>
            <View style={{width: 8}} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                textDecorationLine: 'line-through',
              }}>
              {'\u20B9'}6050
            </Text>
          </View>
        </View>
      </>
    );
  };

  const renderCardCarousel = ({item, index}) => {
    return (
      <View
        style={{
          height: 350,
        }}
        key={index}>
        <CardPaper />
      </View>
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'white', flex: 1}}>
      <HeightSpace height={20} />
      <MyCarousel
        renderItem={renderImageCarousel}
        data={DataCarousel}
        windowWidthDivisor={1.5}
      />
      <HeightSpace height={20} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Categories</Text>
        <Text style={{fontSize: 12}}>See All</Text>
      </View>
      <HeightSpace height={10} />
      <View>
        <PaperChip />
      </View>
      <HeightSpace height={10} />
      <CarouselHeader header="Featured Trainings" />
      <HeightSpace height={20} />
      <MyCarousel
        data={TrainingCarousel}
        renderItem={renderCarousel}
        windowWidthDivisor={1.9}
      />
      <HeightSpace height={10} />
      <CarouselHeader header="Featured Instructor profile" />
      <HeightSpace height={20} />
      <MyCarousel
        data={TrainingCarousel}
        renderItem={renderCardCarousel}
        windowWidthDivisor={2.2}
      />
      <HeightSpace height={10} />
      <CarouselHeader header="Top Courses in design" />
      <HeightSpace height={20} />
      <MyCarousel
        data={TrainingCarousel}
        renderItem={renderCarousel}
        windowWidthDivisor={1.9}
      />
      <HeightSpace height={10} />
      <CarouselHeader header="Students are viewing" />
      <HeightSpace height={20} />
      <MyCarousel
        data={TrainingCarousel}
        renderItem={renderCarousel}
        windowWidthDivisor={1.9}
      />
      <HeightSpace height={10} />
      <CarouselHeader header="Top Courses in Devlopment" />
      <HeightSpace height={20} />
      <MyCarousel
        data={TrainingCarousel}
        renderItem={renderCarousel}
        windowWidthDivisor={1.9}
      />
    </ScrollView>
  );
};
export default HomeScreen;
