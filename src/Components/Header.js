import React from 'react';
import { View, StyleSheet } from 'react-native';


const Header = ({ containerStyle, rightComponent, leftComponent}) => {
    return (

        <View style={{ flexDirection: 'row', ...containerStyle }}>

        {/* Left */}
        {leftComponent}
        {/* tittle */}
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
        </View>
        {/* right */}
        {rightComponent}
    </View>
    )
};


export default Header;

const styles = StyleSheet.create({

    avatar: {
        width: 25,
        height: 25,
        alignSelf: 'center',
    }

});