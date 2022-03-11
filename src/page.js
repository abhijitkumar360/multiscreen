import * as React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
  navigation,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

function Page() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../image/back.png')}
        style={{height: '100%'}}>
        <Text
          onPress={() => navigation.navigate('ScrollHorizontal')}
          style={styles.contaner}>
          Scroll
        </Text>
        <Text
          onPress={() => navigation.navigate('Main')}
          style={styles.contaner}>
          Date
        </Text>
        <Text
          onPress={() => navigation.navigate('Plant')}
          style={styles.contaner}>
          Plant
        </Text>
        <Text
          onPress={() => navigation.navigate('Search')}
          style={styles.contaner}>
          Search
        </Text>
        <Text
          onPress={() => navigation.navigate('Animation1')}
          style={styles.contaner}>
          Animation 1
        </Text>
        <Text
          onPress={() => navigation.navigate('Animation2')}
          style={styles.contaner}>
          Animation 2
        </Text>
        <Text
          onPress={() => navigation.navigate('Animation3')}
          style={styles.contaner}>
          Animation 3
        </Text>
        <Text
          onPress={() => navigation.navigate('ProgressPage')}
          style={styles.contaner}>
          progress page
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contaner: {
    fontSize: 20,
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10,
    color: 'black',
  },
});

export default Page;
