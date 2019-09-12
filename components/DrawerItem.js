import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-ionicons'

const WIDTH = Dimensions.get('window').width

export default class DrawerItem extends React.Component {
    navLink(nav, text) {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroller}>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Image style={styles.img} source={require('../assets/pro.jpg')} />
                            </View>
                            <View style={styles.profileText}>
                                <Text style={styles.name}>Rajesh Kumar Choudhary</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.bottomLinks}>
                        <View style={{ flexDirection: 'row', paddingLeft: WIDTH * 0.05, alignItems: 'center', paddingBottom: 10 }}>
                            <Icon name='md-home' size={WIDTH * 0.05} color="black" />
                            <View style={{ width: WIDTH * 0.01 }}></View>
                            {this.navLink('Home', 'Home')}

                        </View>
                        <View style={{ backgroundColor: 'black', flex: 1, height: 2 }}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: WIDTH * 0.05, paddingTop: 10 }}>
                            <Icon name='md-notifications-outline' size={WIDTH * 0.05} color="black" />
                            <View style={{ width: WIDTH * 0.01 }}></View>
                            {this.navLink('Notifications', 'Profile')}
                        </View>

                    </View>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    scroller: {
        flex: 1,
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777',
    },
    profileText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: WIDTH * 0.03,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'left',
    },
    imgView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    img: {
        height: WIDTH * 0.15,
        width: WIDTH * 0.15,
        borderRadius: 75,
    },
    topLinks: {
        height: WIDTH * 0.3,
        backgroundColor: 'black',
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'darkgoldenrod',
        paddingTop: 10,
        paddingBottom: WIDTH * 0.04,
    },
    link: {
        fontSize: WIDTH * 0.045,
    },
})