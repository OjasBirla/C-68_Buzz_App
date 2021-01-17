import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Buzz App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
    },

    text: {
        fontSize: 20,
        color: "white",
    },
})