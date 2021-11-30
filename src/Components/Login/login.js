import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { name } from "commander";
import { AuthContext } from "../context";

const Login = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = React.useContext(AuthContext);

    function onPress(userName, password) {
        if (userName.length == 0 || password.length == 0) {
            alert('Please Fill all Fields')
        } else {
            signIn(userName, password)
        }
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.title}
                placeholder='Enter Email'
                onChangeText={(e) => setUserName(e)}
            />
            <TextInput style={styles.title}
                placeholder='Enter Password'
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => { onPress(userName, password) }}
            >
                <Text style={{ fontSize: 25 }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea",
        justifyContent: "center",
    },
    title: {
        marginTop: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 6,
        fontSize: 15,
        fontWeight: "bold"
    },
    button: {
        marginTop: 30,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 15,
        width: '70%',
        alignSelf: "center",
        borderRadius: 30
    },
});
export default Login;