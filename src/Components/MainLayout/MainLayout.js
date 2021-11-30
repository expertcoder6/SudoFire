import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity, TouchableWithoutFeedback, Image, FlatList, Touchable, image, StyleSheet
} from 'react-native';
import TabButton from '../TabButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';

import Account from '../Account';
import List from '../List';
import Header from '../Header';




const MainLayout = ({ }) => {

    const [component, setcomponet] = useState(<Home />)
    const [homeColor1, setHomeColor1] = useState('#FFFFFF')
    const [homeColor2, setHomeColor2] = useState('#FFFFFF')
    const [homeColor3, setHomeColor3] = useState('#FFFFFF')


    return (
        < View style={{ flex: 1, justifyContent: 'flex-end' }}>

            <Header
                containerStyle={{
                    height: 70,
                    marginTop: 40,
                    alignItems: 'center',
                    backgroundColor: '#eaeaea',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#ddd',
                    borderBottomWidth: 5,
                    shadowColor: '#000000',
                    shadowOffset: { width: 0, height: 50 },
                    shadowOpacity: 0.9,
                    shadowRadius: -10,
                }}

                leftComponent={
                    <View style={{flexDirection: 'row'}}>
                    <Image style={styles.avatar1} source={{ uri: 'https://toppng.com/uploads/preview/doctor-png-11553965805uxeof3lndg.png' }} />
                    <View>
                    <Text style={{fontWeight: 'bold', fontSize: 17, marginLeft: 10}}>Hi Doctor</Text>
                    <Text style={{ fontSize: 15, marginLeft: 10}}>How're you today ?</Text>    
                    </View>
                    </View>
                }
                rightComponent={
                    <Image style={styles.avatar2} source={{ uri: 'https://e7.pngegg.com/pngimages/141/637/png-clipart-computer-icons-notifications-cdr-area-thumbnail.png' }} />
                }
            />

            {component}
            {/* Bottom tab */}
            <View style={{
                height: 130, flexDirection: 'row', justifyContent: 'space-around',
            }}>
                <TabButton
                    label='HOME'
                    click={() => { setcomponet(<Home />), setHomeColor1('darksalmon'), setHomeColor2('#FFFFFF'), setHomeColor3('#FFFFFF') }}
                    isFocuced={true}
                    mycolor={homeColor1}
                    image={require('../../assets/home.png')}
                />
                <TabButton
                    label='LIST'
                    click={() => { setcomponet(<List />), setHomeColor2('darksalmon'), setHomeColor3('#FFFFFF'), setHomeColor1('#FFFFFF') }}
                    isFocuced={false}
                    mycolor={homeColor2}
                    image={require('../../assets/list.png')}
                />
                <TabButton
                    label='ACCOUNT'
                    click={() => { setcomponet(<Account />), setHomeColor3('darksalmon'), setHomeColor2('#FFFFFF'), setHomeColor1('#FFFFFF') }}
                    isFocuced={false}
                    mycolor={homeColor3}
                    image={require('../../assets/account.png')}
                />
            </View>

        </View>
    )
};
export default MainLayout;

const styles = StyleSheet.create({

    avatar1: {
        width: 40,
        height: 40,
        borderRadius:20,
        alignSelf: 'center',
        marginLeft: 20
    },
    avatar2: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginRight: 30,
    },
    


});

