import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, AppRegistry, StatusBar } from 'react-native'
import React, { Component } from 'react'
import flatListData from './data/flatListData';
import Swipeout from 'react-native-swipeout';
class FlatListItem extends Component {
    render() {
        const swipeBtns = [
            {
                component: (
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            backgroundColor: '#FFE5E5',
                        }}
                    >
                        <Image source={require('../src/img/Delete.png')} />
                    </View>
                ),
                onPress: () => {
                    console.log("Delete Item");
                },
            },
        ];

        return (
            <Swipeout
                right={swipeBtns}
                autoClose="true"
                backgroundColor="transparent"
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: 1,
                        borderRadius: 30,
                        backgroundColor: '#F5F5F5',
                        width: '95%',
                        margin: 10,
                        flexDirection: 'column',
                        height: 120
                    }}>

                        <Image source={require('../src/img/capuchino.png')}
                            style={{ top: 10 }}
                        />
                        <View style={{ width: 50, left: '79%', top: -55 }}>
                            <Text style={styles.byn}>BYN {this.props.item.price}</Text>
                        </View>
                        <View style={{ left: 125, alignItems: 'left', width: 195, top: -115 }}>
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem2}>{this.props.item.foodDescription}</Text>
                            <Text style={{ fontSize: 20 }}>x{this.props.item.amount}</Text>
                        </View>
                    </View>

                </View>
            </Swipeout>

        );
    }
}
export default class ScreenMyOder extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={
                    {
                        top: 20,
                        width: '95%',
                        height: 30,
                        left: 10,
                    }
                }>
                    <TouchableOpacity>
                        <Image source={require('../src/img/arrowLeft.png')} />
                    </TouchableOpacity>
                </View >
                <View style={
                    {
                        top: 40,
                        width: '95%',
                        height: 50,
                        left: 15,
                    }
                }>
                    <Text style={
                        {
                            fontSize: 20,
                            top: 5,
                            lineHeight: 24,
                            color: '#001833',
                        }}>My order
                    </Text>
                </View>
                <View style={
                    {
                        flex: 1,
                        marginTop: 22,
                        height: '76%',
                        top: 20
                    }
                }>
                    <FlatList
                        data={flatListData}
                        renderItem={({ item, index }) => {
                            return (
                                <FlatListItem item={item} index={index}>

                                </FlatListItem>
                            )
                        }}
                    >
                    </FlatList>
                </View>
                <View style={styles.footer}>
                    <View style={styles.totalPrice}>
                        <Text style={{ fontSize: 18, color: '#00183338', width: 90 }}>Total Price</Text>
                        <Text style={{ fontSize: 22, color: '#001833', fontFamily: 'Poppins', fontWeight: 'bold', padding: 5 }}>BYN 9.00</Text>
                    </View>

                    <TouchableOpacity style={styles.btnNext}>
                        <Image style={{ top: 13, right: 55 }} source={require('../src/img/buyLight.png')} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', top: -13, left: 8 }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
}


const styles = StyleSheet.create({
    btnNext: {
        backgroundColor: '#324A59',
        width: '50%',
        alignItems: 'center',
        left: '46%',
        top: -35,
        height: '50%',
        borderRadius: 50
    },
    totalPrice: {
        width: '35%',
        left: 25,
        top: 24,
    },
    byn: {
        fontSize: 20,
        width: 50,
    },
    flatListItem2: {
        color: '001833',
        fontSize: 15,
        width: 157,
    },
    flatListItem: {
        padding: 5,
        color: '001833',
        fontSize: 20,
    },
    footer: {
        flex: 0.2,
    },
    container: {
        flex: 1
    },
})