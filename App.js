// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScrollHorizontal from './src/ScrollHorizontal'
import Main from './src/Main';
import Search from './src/Search'
import Plant from './src/Plant'
import Page from './src/page';
import Animation from './src/Animation'
import AnimationLib from './src/AnimationLib'
import ProgressPage from './src/progress'
import SingIn from './src/singup';
import PersonalDetail from './src/PersonalDetail'
import Anim from './src/Anim'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page">
        <Stack.Screen name="ScrollHorizontal" component={ScrollHorizontal} options={{headerShown: false}} />
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
        <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
        <Stack.Screen name="Plant" component={Plant} options={{headerShown: false}}/>
        <Stack.Screen name="Animation1" component={Animation} options={{headerShown: false}}/>
        <Stack.Screen name="Animation2" component={AnimationLib} options={{headerShown: false}}/>
        <Stack.Screen name="Animation3" component={Anim} options={{headerShown: false}}/>
        <Stack.Screen name="Page" component={Page} options={{headerShown: false}}/>
        <Stack.Screen name="ProgressPage" component={ProgressPage} options={{headerShown: false}}/>
        <Stack.Screen name="Singin" component={SingIn} options={{headerShown: false}}/>
        <Stack.Screen name="PersonalDetail" component={PersonalDetail} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;