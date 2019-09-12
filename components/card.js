import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Button, Dimensions } from 'react-native';


const WIDTH = Dimensions.get('window').width;
class Card extends React.Component {
    render() {
        return (
            <View style={styles.cardStyle}>
                <Text style={{ fontSize: WIDTH * 0.06 }}>{this.props.name}</Text>
                <View style={{ width: '80%' }}>
                    <Text style={{ fontSize: WIDTH * 0.032 }}>{this.props.desc}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardStyle: {

        backgroundColor: 'green',
        width: '70%',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 10,
        height: '20%'
    }
})

export default Card;