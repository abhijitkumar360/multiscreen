import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Alert } from "react-native";

function PersonalDetail(){
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] =useState('');
    const [address, setaddress] = useState('');
    return(
        <View style={styles.container}>
        {/* <Text style={styles.logintext}>Singup</Text> */}
        <TextInput style={styles.inputs} placeholder='Name'
          onChangeText={(text) => setemail({ emails: text })} />

        <TextInput style={styles.inputs} placeholder='Father Name'
          onChangeText={(text) => setpassword({ passwords: text })} />

        <TextInput style={styles.inputs} placeholder='Mobile number'
          onChangeText={(text) => setrepassword({ repassword: text })} />

        <TextInput style={styles.inputs} placeholder='Addres'
          onChangeText={(text) => setaddress({ repassword: text })} />  
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'blue',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputs: {
      width: 300,
      borderRadius: 25,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255,255,255,0.3)',
      color: '#ffffff',
      marginVertical: 10
    },
    line: {
      fontSize: 18,
      flexDirection: 'row'
    },
    buttontext: {
      fontSize: 18,
      paddingHorizontal: 16,
      height: 35,
      width: 90,
      borderRadius: 25,
      textAlign: 'center',
      backgroundColor: 'rgba(255,255,255,0.3)'
    },
    logintext: {
      fontSize: 29
    },
    buttontextsingup: {
      fontSize: 18,
      color: "#FFFFFF"
    },
    linetext: {
      fontSize: 18
    }
  
  })
  export default PersonalDetail;