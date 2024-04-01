import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ob1 from '../../helper/Ob1';
import Ob2 from '../../helper/Ob2';
import Ob3 from '../../helper/Ob3';
import Onboarding from 'react-native-onboarding-swiper';
import LoginScreen from './LoginScreen';
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View className="bg-white h-full w-full"
            style={{
                width:6,
                height: 6,
                marginHorizontal: 6,
                backgroundColor
            }}
        >
             <StatusBar style='light'/>
        </View>
    );
}

const Skip = ({...props}) => (
      <TouchableOpacity
          style={{marginHorizontal:10}}
          {...props}
      >
          <Text style={{fontSize:16}}>Skip</Text>
      </TouchableOpacity>
    
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: < Ob1/>,
            title: 'Connect to the World',
            subtitle: 'A New Way To Connect With The World',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Ob2/>,
            title: 'Share Your Favorites',
            subtitle: 'Share Your Thoughts With Similar Kind of People',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Ob3/>,
            title: 'Become The Star',
            subtitle: "Let The Spot Light Capture You",
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});