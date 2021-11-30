import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import Navigation from '../Navigation/Navigation';

const OnboardScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#13b3b3' }}>
        
        <View style={{alignSelf: 'center', height: '75%', width: '100%' }}>
        
        <Image style={{flex:1,borderBottomLeftRadius:45,resizeMode:'stretch'}} source={{uri:'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg'}}></Image>
        
        </View>
        
        
        <View style={{ alignSelf: 'center', height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 50 }}>
        
        <TouchableOpacity 
        onPress={()=>{navigation.navigate('Login')}}
        style={{ width: 100, height: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#ffffff', borderRadius: 10 }}>
        <Text style={{ color: '#ffffff', fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        onPress={()=>alert('SignUp')}
        style={{ width: 100, backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#ffffff', borderRadius: 10 }}>
        <Text style={{ color: '#19a8a0', fontSize: 18 }}>Sign-up</Text>
        </TouchableOpacity>
        </View>
        
        
        <View style={{ alignSelf: 'center', height: 50, width: '100%', flexDirection: 'row', marginTop: 50, justifyContent: 'center' }}>
        
        <Text style={{ color: '#ffffff', fontSize: 15 }}>Are you a patentient?</Text>
        <TouchableOpacity style={{ width: 70, height: 18, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => alert('get here!')}
        >
        <Text style={{ color: '#ffffff', fontSize: 15 ,textDecorationLine:'underline'}}>Get here!</Text>
        </TouchableOpacity>
        </View>
        
        </View>
        );
}

export default OnboardScreen;

const styles = StyleSheet.create({

})
