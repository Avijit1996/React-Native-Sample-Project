import React from 'react';
import {Image, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const DataCarousel = [
  {
    title: 'Item 1',
    image: (
      <Image
        source={require('./Image/learnimage_2.jpeg')}
        style={{width: windowWidth / 1.5, height: 150}}
      />
    ),
  },
  {
    title: 'Item 2',
    image: (
      <Image
        source={require('./Image/learnimage_1.jpeg')}
        style={{width: windowWidth / 1.5, height: 150, resizeMode: 'cover'}}
      />
    ),
  },
  {
    title: 'Item 3',
    image: (
      <Image
        source={require('./Image/learnimage_2.jpeg')}
        style={{width: windowWidth / 1.5, height: 150, resizeMode: 'cover'}}
      />
    ),
  },
  {
    title: 'Item 4',
    image: (
      <Image
        source={require('./Image/learnimage_3.jpeg')}
        style={{width: windowWidth / 1.5, height: 150, resizeMode: 'cover'}}
      />
    ),
  },
  {
    title: 'Item 5',
    image: (
      <Image
        source={require('./Image/learnimage_4.jpeg')}
        style={{width: windowWidth / 1.5, height: 150, resizeMode: 'cover'}}
      />
    ),
  },
];

export const chipValues = [
  {
    icon: 'desktop-outline',
    text: 'IT and Software',
  },
  {
    icon: 'megaphone-outline',
    text: 'Marketing',
  },
  {
    icon: 'language-outline',
    text: 'Language',
  },
  {
    icon: 'megaphone-outline',
    text: 'Marketing',
  },
  {
    icon: 'desktop-outline',
    text: 'IT and Software',
  },
];

export const TrainingCarousel = [
  {
    title: 'Photography - Become a Better photographer - Part I',
    subTitle: 'Prakash Sarkar',
    image: (
      <Image
        source={require('./Image/training.jpeg')}
        style={{width: windowWidth / 2, height: 100, resizeMode: 'cover'}}
      />
    ),
  },
  {
    title: 'Photography - Become a Better photographer - Part I',
    subTitle: 'Prakash Sarkar',
    image: (
      <Image
        source={require('./Image/training_1.jpeg')}
        style={{width: windowWidth / 2, height: 100, resizeMode: 'cover'}}
      />
    ),
  },
  {
    title: 'Photography - Become a Better photographer - Part I',
    subTitle: 'Prakash Sarkar',
    image: (
      <Image
        source={require('./Image/training.jpeg')}
        style={{width: windowWidth / 2, height: 100, resizeMode: 'cover'}}
      />
    ),
  },
  {
    title: 'Photography - Become a Better photographer - Part I',
    subTitle: 'Prakash Sarkar',
    image: (
      <Image
        source={require('./Image/training_1.jpeg')}
        style={{width: windowWidth / 2, height: 100, resizeMode: 'cover'}}
      />
    ),
  },
  {
    title: 'Photography - Become a Better photographer - Part I',
    subTitle: 'Prakash Sarkar',
    image: (
      <Image
        source={require('./Image/training.jpeg')}
        style={{width: windowWidth / 2, resizeMode: 'cover', height: 100}}
      />
    ),
  },
];
