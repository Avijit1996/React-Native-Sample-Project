import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';

const SplashScreen = (props) => {
  const {navigation} = props;
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace('Auth');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/appleskool_logo.png')}
        style={{
          width: '60%',
          height: '60%',
          tintColor: 'white',
          resizeMode: 'center',
        }}
      />
      <ActivityIndicator
        animating={animating}
        color="white"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C34949',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 100,
  },
});
