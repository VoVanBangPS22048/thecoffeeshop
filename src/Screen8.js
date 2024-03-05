import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React, { Component } from 'react'
import flatListData from './data/flatListData';
class FlatListItem extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
      }}>
        <View style={{
          flex: 1,
          height: 200,
          margin: 7,
          backgroundColor: '#F7F8FB',
          alignItems: 'center',
          borderRadius: 20
        }}>
          <View style={{ top: 30}}>
          <View style={{ alignItems: 'center', top: 16, width: 100 }}>
            <Image source={require('../src/img/americano.png')} />
          </View>
          <View style={{top:25, alignItems:'center'}}>
            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
          </View>
          </View>
        </View>
      </View>
    );
  }
}

export default class Screen8 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={
            {
              width: 120,
              height: 50,
              left: 25,
              top: 58,
            }
          }>
            <Text style={
              {
                fontSize: 15,
                fontWeight: 500,
                color: '#D8D8D8',
                lineHeight: 21,
              }
            }>
              Welcome!
            </Text>
            <Text style={
              {
                fontSize: 20,
                fontWeight: 500,
                color: '#001833',
                lineHeight: 27,
              }
            }>
              Name User
            </Text>
          </View>
          <View style={
            {
              flexDirection: 'row',
              width: 130,
              top: 20,
              left: 270,

            }}>
            <TouchableOpacity>
              <Image source={require('../src/img/Buy.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{ left: 40, top: 2 }}>
              <Image source={require('../src/img/Profile.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.select}>
            <Text style={
              {
                color: '#D8D8D8',
                fontWeight: 500,
                fontSize: 17,
                top: 20,
                left: 20,
                width: 150
              }}>Select your coffee</Text>
          </View>
          <View style={styles.list}>
            <FlatList
              style={{ top: 35 }}
              data={flatListData}
              numColumns={2}
              renderItem={({ item, index }) => {
                return (
                  <FlatListItem item={item} index={index}>

                  </FlatListItem>
                )
              }}
            />
          </View>
          <View style={styles.ViewBtnNavigation}>
            <View style={styles.btnNavigation}>

            </View>
          </View>
        </View>
      </View>
    )
  };
}


const styles = StyleSheet.create({
  btnNavigation:{
    height:'50%',
    backgroundColor:'white',
    width:'95%',
    left:9,
    top:20,
    borderRadius:35

  },
  flatListItem:{
    fontSize:16,
    fontWeight:'bold',
    },
  list: {
    flex: 1,
  },
  ViewBtnNavigation: {
    flex: 0.3,
    top:35,
  },

  body: {
    backgroundColor: '#324A59',
    flex: 5,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  header: {
    backgroundColor: '#FFFF',
    flex: 1,

  },
  container: {
    flex: 1
  },
})