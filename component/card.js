import * as React from 'react';
import {Card} from 'react-native-paper';
import {Image, View, Text, TouchableWithoutFeedback} from 'react-native';
import {HeightSpace, WidthSpace} from '../style/view';
import IonIcons from 'react-native-vector-icons/Ionicons';

const CardPaper = () => {
  return (
    <Card
      elevation={10}
      style={{height: 330, borderWidth: 0.6, borderColor: 'gray', width: 180}}>
      <Card.Content>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../Image/learnimage_2.jpeg')}
            style={{
              width: 150,
              height: 150,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <HeightSpace height={5} />
          <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'left'}}>
            Abhijeet Mukherjee
          </Text>
          <Text style={{fontSize: 16}}>CSS,HTML</Text>
          <HeightSpace height={8} />
          <View style={{flexDirection: 'row'}}>
            <IonIcons name="star" color="purple" size={15} />
            <Text>4.6</Text>
            <WidthSpace width={5} />
            <Text>instructor rating</Text>
          </View>
          <HeightSpace height={5} />
          <Text>126,578 students</Text>
          <Text>6 trainings</Text>
        </View>
      </Card.Content>
      <HeightSpace height={10} />
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 0.5,
        }}
      />
      <View style={{flexDirection: 'row', padding: 10, paddingLeft: 16}}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>{'\u20B9'}455</Text>
        <View style={{width: 8}} />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            textDecorationLine: 'line-through',
          }}>
          {'\u20B9'}6050
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
              width: 55,
              borderRadius: 3,
            }}>
            <Text style={{color: 'white', fontSize: 10}}>Read More</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Card>
  );
};

export default CardPaper;
