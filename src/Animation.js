import React from 'react';  
import {  
    NativeModules,  
    LayoutAnimation,  
    Text,  
    TouchableOpacity,  
    StyleSheet,  
    View,  
} from 'react-native';  
  
const { UIManager } = NativeModules;  
  
UIManager.setLayoutAnimationEnabledExperimental &&  
UIManager.setLayoutAnimationEnabledExperimental(true);  
  
export default class Animation extends React.Component {  
    state = {  
        w: 100,  
        h: 100,  
    };  
  
    onPress = () => {  
        // Animate the update  
        LayoutAnimation.spring();  
        this.setState({w: this.state.w + 15, h: this.state.h + 15})  
    }  
    Press = () => {  
        // Animate the update  
        LayoutAnimation.spring();  
        this.setState({w: this.state.w - 15, h: this.state.h - 15})  
    }  
  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />  
                <TouchableOpacity onPress={this.onPress}>  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>Zoom in</Text>  
                    </View>  
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Press}>  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>Zoom out</Text>  
                    </View>  
                </TouchableOpacity>  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center',  
    },  
    box: {  
        width: 200,  
        height: 200,  
        backgroundColor: 'blue',  
    },  
    button: {  
        backgroundColor: 'green',  
        paddingHorizontal: 20,  
        paddingVertical: 15,  
        marginTop: 15,  
    },  
    buttonText: {  
        color: '#fff',  
        fontWeight: 'bold',  
    },  
});  