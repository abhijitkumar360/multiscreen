import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';
import SingIn from './singup';
import PersonalDetail from './PersonalDetail';
import Education from './education'
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

function ProgressPage() {
  return (
    <View style={{flex: 1}}>
      <ProgressSteps
      borderWidth={1}
      labelFontSize={10}
      activeStepIconBorderColor="#5105F5"
      completedProgressBarColor="#5105F5"
      completedStepIconColor="#5105f5"
      activeLabelColor="#5105f5"
      >
        <ProgressStep
          label="First Step"
          nextBtnTextStyle={{color: '#ffffff', fontSize: 13}}
          nextBtnStyle={{
            backgroundColor: '#5105F5',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
          }}
          >
          <View style={{height: 500}}>
            {/* <Text style={{color:'black'}}>This is the content within step 1!</Text> */}
            <SingIn />
          </View>
        </ProgressStep>
        <ProgressStep label="Second Step"
        previousBtnTextStyle={{color: '#ffffff', fontSize: 13}}
        previousBtnStyle={{
            backgroundColor: '#5105F5',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,}}
        nextBtnTextStyle={{color: '#ffffff', fontSize: 13}}
        nextBtnStyle={{
          backgroundColor: '#5105F5',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          width: 100,}}
          >
          <View style={{height: 500}}>
            <PersonalDetail/>
          </View>
        </ProgressStep>
        <ProgressStep label="Third Step"
        previousBtnTextStyle={{color: '#ffffff', fontSize: 13}}
        previousBtnStyle={{
            backgroundColor: '#5105F5',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,}}
        nextBtnTextStyle={{color: '#ffffff', fontSize: 13}}
        nextBtnStyle={{
          backgroundColor: '#5105F5',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          width: 100,}}
          onSubmit={()=>Alert.alert('sucess')}>
          <View style={{height: 500}}>
            <Education/>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}

export default ProgressPage;
