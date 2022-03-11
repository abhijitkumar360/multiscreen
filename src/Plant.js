import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// import HomeScreen from './HomeScreen';
// import LinearGradient from 'react-native-linear-gradient';
 
export default function Plant() {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#00a46c',
          height: '25%',
          padding: 5,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Image
          source={require('../image/1.png')}
          style={{
            height: 10,
            width: 20,
            marginTop: 40,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            width: '100%',
          }}>
          <View style={{width: '50%'}}>
            <Text
              style={{
                fontSize: 28,
                color: '#FFF',
                fontWeight: 'bold',
              }}>
              Hi Abhijit
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              alignItems: 'flex-end',
              bottom: 30,
              right: 20,
            }}>
            <Image
              source={require('../image/g.png')}
              style={{height: 80, width: 80}}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#FFF',
          paddingVertical: 4,
          // position: 'relative',
          paddingHorizontal: 20,
          marginHorizontal: 20,
          borderRadius: 15,
          marginTop: 150,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
        }}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#b1e5d3"
          color="black"
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            width: 260,
          }}
        />
        <Image
          source={require('../image/3.png')}
          style={{height: 20, width: 20}}
        />
      </View>
      <View
        style={{
          top: 200,
          position: 'absolute',
          flexDirection: 'row',
          paddingHorizontal: 20,
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={{width: '50%'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: '#585a61',
            }}>
            Recommended
          </Text>
          <View
            style={{
              height: 4,
              backgroundColor: '#b1e5d3',
              width: 115,
              marginTop: -5,
            }}></View>
        </View>
        <View style={{width: '50%', alignItems: 'flex-end'}}>
          <View
            style={{
              backgroundColor: '#00a46c',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 13,
                color: '#FFF',
              }}>
              More
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{height: 400,top:210}}>
        {/* <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:220,
                            top:0
                        }}
                    /> */}
        <View
          // onPress={()=>navigation.navigate("Detail")}
          style={{
            // position:"absolute",
            height: 250,
            elevation: 2,
            backgroundColor: '#FFF',
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}>
          <Image source={require('../image/4.png')} />
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color:'black',
              }}>
              SAMANTHA
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#00a46c',
                paddingLeft: 35,
              }}>
              400
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: 'bold',
              color: '#b1e5d3',
              paddingTop: 3,
            }}>
            RUSSIA
          </Text>
        </View>

        <View
          // onPress={()=>navigation.navigate("Detail")}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: '#FFF',
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}>
          <Image source={require('../image/5.png')} />
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color:'black'
              }}>
              ANGELICA
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#00a46c',
                paddingLeft: 45,
              }}>
              400
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: 'bold',
              color: '#b1e5d3',
              paddingTop: 3,
            }}>
            RUSSIA
          </Text>
        </View>

        <View
          // onPress={()=>navigation.navigate("Detail")}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: '#FFF',
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}>
          <Image source={require('../image/6.png')} />
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color:'black',
              }}>
              SAMANTHA
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#00a46c',
                paddingLeft: 35,
              }}>
              400
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: 'bold',
              color: '#b1e5d3',
              paddingTop: 3,
            }}>
            RUSSIA
          </Text>
        </View>
      </ScrollView>
      <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:0,
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Featured Plants</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:115,
                            marginTop:-5
                        }}>

                        </View>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:-100}}
                >
                    <Image
                        source={require("../image/18.png")}
                        style={{marginTop:5,marginHorizontal:20}}
                    />
                     <Image
                        source={require("../image/19.png")}
                        style={{marginTop:5,borderRadius:10,height:185}}
                    />
                </ScrollView>
    </SafeAreaView>
  );
}
