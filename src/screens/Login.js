import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image,StyleSheet, AppRegistry} from 'react-native';
import Signup from '../screens/Signup';
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={email:'', password:''}   
    }
    render(){
    const {navigation} = this.props;
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={styles.up}>
                <Image
                borderRadius={100}
                fadeDuration={1000}
                source={require('../assets/icon.png')}
                > 
                </Image>
            <Text style={styles.title}>
                Webcome to Apple's store.
            </Text>
            </View>
            <View style={styles.down}>
            <View style={styles.txtipcontainer}>
                <TextInput style={styles.txtInput}
                placeholder="Enter your email"
                textContentType='emailAddress'
                keyboardType='email-address'
                onChangeText={(email)=>this.setState({email})}
                value={this.state.email}
                ></TextInput>
            </View>
            <View style={styles.txtipcontainer}>
                <TextInput style={styles.txtInput}
                placeholder="Enter your password"
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
                ></TextInput>
            </View>
            <TouchableOpacity 
            style={styles.loginbtn}
            >
                <Text style ={styles.loginbtntitle}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.signuptxt}>
                <Text style={styles.txtsg}>Don't have an account yet? </Text>
                <Text style={styles.lbsg} onPress={()=>navigation.navigate(Signup)}>Signup</Text>
            </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'rgb(234, 195, 176)'
    },
    up:{
        flex:4,
        flexDirection: 'column',
        backgroundColor: '#89cff0',
        alignItems:'center',
        alignContent: 'center',
        justifyContent: 'center',
  
    },
    down:{
        flex:7,
        flexDirection: 'column',
        backgroundColor: '#89cff0',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    title:{
        color:'white',
        textAlign:'center',
        fontSize:18,
        width: 400,
        marginTop:10,      
    },
    txt:{
        fontSize:23,
        color:'#89cff0',
        width:400,
        textAlign:'center',
        fontWeight: 'bold',
    },
    txtipcontainer:{
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 25,
        marginTop: 20,
    },
    txtInput:{
        width:280,
        height:45,
        borderRadius: 25
    },
    loginbtn:{
        width:300,
        height:45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#0492c2',
        marginTop: 20,
        borderRadius: 25
    },
    loginbtntitle:{
        fontSize: 18,
        color: 'white',
    },
    signuptxt:{
        flex:3,
        alignItems: 'flex-end',
        marginVertical: 16,
        justifyContent:'center',
        flexDirection:'row'
    },
    txtsg:{
        color: '#0492c2'
    },
    lbsg:{
        color:'white',
        fontSize: 16,
  
    }
  })
