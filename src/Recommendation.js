import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'

const Recommendation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ padding: 10 }}>
            <Image source={require('../src/img/arrowLeft.png')} />
          </TouchableOpacity>
          <Text style={{
            padding: 10,
            fontSize: 20,
            left: 20,
            fontWeight: 500,
            color: '#001833'
          }}>Coffee lover assemblage</Text>
          <TouchableOpacity style={{ padding: 10, left: 30 }}>
            <Image source={require('../src/img/Buy.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{
            fontSize: 19,
            fontWeight: 500,
            padding: 2,
            left: 5,
          }} >Select a barista</Text>
          <TouchableOpacity style={{ padding: 5, left: 185 }}>
            <Image style={{ height: 20, width: 20 }} source={require('../src/img/iconMore.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#E5E1DA', height: 1, width: '100%', margin: 10, right: 8 }}></View>
        <View style={{}}>
          <View style={{flexDirection: 'row' }}>
            <Text style={{
              fontSize: 16,
              fontWeight: 500,
              padding:10
            }}>Coffee type</Text>
            <Slider
            style={{width:250, height:40, left:10}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor='#007AFF'
            maximumTrackTintColor='#787880'
            thumbTintColor='#C7C8CC'
            value={.5}
            />
          </View>
          <View style={{flexDirection:'row', width:220, left:130}}>
            <Text style={{fontSize:14, fontWeight:500 ,color:'#D8D8D8'}}>Arabica</Text>
            <Text style={{fontSize:14, fontWeight:500, left:110,color:'#D8D8D8'}}>Robusta</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#E5E1DA', height: 1, width: '100%', margin: 10, right: 8 }}></View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 500,
            padding: 2,
            left: 5,
          }} >Coffee sort</Text>
          <TouchableOpacity style={{ padding: 5, left: 230 }}>
            <Image style={{ height: 20, width: 20 }} source={require('../src/img/iconMore.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#E5E1DA', height: 1, width: '100%', margin: 10, right: 8 }}></View>
        <View style={{ flexDirection:'row'}}>
        <Text style={{
            fontSize: 16,
            fontWeight: 500,
            padding: 2,
            left: 5,
            top:20
          }} >Roasting</Text>
          <TouchableOpacity style={{left:60, alignContent:'center',height:30,top:30}} >
            <Image  source={require('../src/img/fire.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{ left:90, width:58, height:50,top:29,height:37}}>
            <Image style={{ left:30}} source={require('../src/img/fire.png')}/>
            <Image style={{top:-28}} source={require('../src/img/fire.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{ left:90, width:58, height:70, left:110}}>
            <Image style={{ top:28, left:30}} source={require('../src/img/fire.png')}/>
            <Image source={require('../src/img/fire.png')}/>
            <Image style={{top:-55, left:15}} source={require('../src/img/fire.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#E5E1DA', height: 1, width: '100%', margin: 10, right: 8 }}></View>

        <View style={{flexDirection:'row',padding:10}}>
          <Text style={
            {
            fontSize: 16,
            fontWeight: 500,
            padding: 2,
            left: 2,
            }}>Milk</Text>
            <TouchableOpacity style={{ padding: 5, left: 280 }}>
            <Image style={{ height: 20, width: 20 }} source={require('../src/img/iconMore.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#E5E1DA', height: 1, width: '100%', margin: 10, right: 8 }}></View>
        <View style={{flexDirection:'row',padding:10}}>
          <Text style={
            {
            fontSize: 16,
            fontWeight: 500,
            padding: 2,
            left: 2,
            }}>Syrup</Text>
            <TouchableOpacity style={{ padding: 5, left: 265 }}>
            <Image style={{ height: 20, width: 20 }} source={require('../src/img/iconMore.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#E5E1DA', height: 1, width: '100%', margin: 10, right: 8 }}></View>
        <View style={{alignItems:'center', top:70}}>
          <TouchableOpacity style={{backgroundColor:'#324A59',height:50, width:170 ,alignItems:'center', borderRadius:30,left:80}}>
            <Text style={{top:13, fontSize:18, fontWeight:500, color:'white'}}>Next</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.footer}>
        <View style={{backgroundColor:'gray', height:60, top:50, borderRadius:30, }}>

        </View>
      </View>
    </View>
  )
}

export default Recommendation

const styles = StyleSheet.create({
  footer: {
    flex: 1,
  },
  body: {
    flex: 4,
  },
  header: {
    flex: 0.6,
  },
  container: {
    flex: 1,
    padding: 20,
  }
})