import React from "react";
import {
    StyleSheet, Text, TextInput, View, Image
    , TouchableOpacity
} from "react-native";


const Home = ({ navigation }) => {

    const [userName, setUserName] = React.useState('');
    return (


        <View style={styles.container}>
            <View style={{ flexDirection: 'row', borderRadius: 15, borderWidth: 1, borderColor: 'green', height: 50, width: '80%' }}>
                <Image
                    style={styles.tinyLogo2}
                    source={{ uri: 'https://www.pngfind.com/pngs/m/101-1017087_search-icon-our-vision-png-icon-transparent-png.png' }}
                />
                <TextInput style={styles.title}
                    placeholder='Search.....'

                    onChangeText={(e) => setUserName(e)}
                    value={userName}
                />
            </View>

            <Image
                style={styles.tinyLogo}
                source={require('../assets/doctors.jpeg')}
            />
            <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 30, alignSelf: 'center' }}>Welcome to HomeScreen</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea",
        justifyContent: 'flex-start',
        alignItems: "center",
    },
    tinyLogo: {
        width: 300,
        height: 300,
        marginTop: 100
    },
    tinyLogo2: {
        width: 20,
        height: 20,
        alignSelf: 'center',
        marginLeft: 10
    },
    title: {
        padding: 15,
        marginLeft: 1,
        borderRadius: 6,
        fontSize: 15,
        fontWeight: "bold"
    },
});

export default Home;