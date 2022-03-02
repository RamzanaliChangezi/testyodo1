import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';


import { NativeModules } from 'react-native';
const { Yodo1MASAds } = NativeModules;

/*
  "getConstants": [Function anonymous],
  "giveRewardToUsers": [Function nonPromiseMethodWrapper],
  "hideBannerAds": [Function nonPromiseMethodWrapper],
  "initMasSdk": [Function nonPromiseMethodWrapper],
  "intiDelagates": [Function nonPromiseMethodWrapper],
  "showBannerAds": [Function nonPromiseMethodWrapper],
  "showIntertstialAds": [Function nonPromiseMethodWrapper],
  "showRewardedAds": [Function nonPromiseMethodWrapper]}
*/



Yodo1MASAds.initMasSdk()
const App: () => Node = () => {


  return (
    <View>
      <Button 
        onPress={()=>Yodo1MASAds.showBannerAds()}
        title={'show bacnner'}
      />

      <Button 
        onPress={()=>Yodo1MASAds.showIntertstialAds()}
        title={'show inter'}
      />

      <Button 
        onPress={()=>Yodo1MASAds.showRewardedAds()}
        title={'show reward'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
