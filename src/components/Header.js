import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
    return (
        //styles for this container
        <View style={headerContainer}>
            <Text style={headerStyle}>Crypto Prices</Text>
        </View>
    )
}

//create styles objects with different sections
const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 55,
        alignItems: "center"
    },
    headerStyle: {
        fontWeight: "bold",
        fontSize: 20
    },
})

const {headerContainer, headerStyle} = styles;

export default Header;