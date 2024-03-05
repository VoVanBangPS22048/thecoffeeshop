import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert, Image, Switch, TextComponent } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Screen9() {
  /* const [isOn, setIsOn] = useState(true)
   function toggleSwitch() {
     setIsOn(isOn => !isOn)
   }*/
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (Time) => {
    console.warn("A time has been picked: ", time);
    hideTimePicker();
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.btn_back}>
          <Image style={{ height: 20, width: 30, top: 12, left: 18 }} source={require('../src/img/arrowLeft.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.txt_order}>
        <Text style={{ left: 60, fontSize: 20, color: '#001833', top: -12 }}>Order</Text>

        <TouchableOpacity>
          <Image style={{ height: 30, width: 30, left: 180, top: -12 }} source={require('../src/img/Buy.png')} />
        </TouchableOpacity>

      </View>
      <View style={styles.img_item_screen9}>
        <Image style={{ top: 12 }} source={require('../src/img/Item_Screen9.png')} />
      </View>

      <View style={{ padding: 5 }}>
        <View style={styles.txt_nameProduct_amount}>
          <Text style={{ color: '#001933', fontSize: 18 }}>Cappuccino</Text>
        </View>
        <View style={styles.tv_btn_tang_giam}>
          <TouchableOpacity style={styles.btn_except}>
            <Text style={{ fontSize: 20 }}>-</Text>
          </TouchableOpacity>
          <TextInput style={styles.input_txt} />
          <TouchableOpacity style={styles.btn_plus}>
            <Text style={{ fontSize: 20 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ backgroundColor: '#E5E1DA', height: 1, width: '90%', left: 23, top: -17, }}></View>

      <View>
        <View style={styles.ristretto}>
          <Text style={{ color: '#001933', fontSize: 18, left: 30, top: -10 }}>Ristretto</Text>
        </View>
        <TouchableOpacity style={styles.btn_one}>
          <Text style={styles.btn_txt_one_two}>One</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_two}>
          <Text style={styles.btn_txt_one_two}>Two</Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#E5E1DA', height: 1, width: '90%', left: 23, top: -45, }}></View>

      <View style={styles.onsite_takeaway}>
        <Text style={{ fontSize: 18, color: '#001933' }}>Onsite / Takeaway</Text>
        <TouchableOpacity>
          <Image style={{ left: 230, top: -25 }} source={require('../src/img/onsite.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ left: 295, top: -58 }} source={require('../src/img/takeaway.png')} />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: '#E5E1DA', height: 1, width: '90%', left: 23, top: -60, }}></View>
      <View >
        <View>
          <Text style={{ top: -30, left: 25, fontSize: 18, color: '#001833' }}>Volume, ml</Text>
          <TouchableOpacity style={styles.btn_250}>
            <Image source={require('../src/img/sizemini.png')} />
            <Text>250</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_350}>
            <Image source={require('../src/img/sizemedium.png')} />
            <Text>350</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_450}>
            <Image source={require('../src/img/sizehight.png')} />
            <Text>450</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: '#E5E1DA', height: 1, width: '90%', left: 23, top: -150, }}></View>

      <View style={styles.txt_switch}>
        <Text style={{ fontSize: 18, width: 265, left: 25, color: '#001933' }}>Prepare by a certain time today?</Text>
      </View>
      <View style={styles.btn_switch}>
        <TouchableOpacity>
          <Image source={require('../src/img/True.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.view_time_picker}>
        <TouchableOpacity style={{
          width: '30%',
          height: 30,
          borderBottomWidth: 0.5,
          borderRadius: 20,
          alignSelf: 'center',
          alignItems: 'center',
          marginTop: 50,
          top: -165,
          left: 130,
          backgroundColor: '#7676801F',
        }}
          onPress={() => {
            showTimePicker();
          }}>
          <Text style={{ color: '#001933', fontSize: 18 }}>Time</Text>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.view_btn_coffe_love}>
        <TouchableOpacity style={styles.btn_coffe_love}>
          <Text style={{ color: '#FFF', fontSize:18, top: 8, left:45 }}>Coffee lover assemblage</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.txt_total}>
        <Text style={{color:'#001933',fontSize:20,left:-100,top:8}}>Total Amount</Text>
        <Text style={{color:'#001922',fontSize:17, top:-17, left:120}}>BYN:3.00</Text>
      </View>
      <View style={styles.view_btn_next}>
        <TouchableOpacity style={{
          height:45,
          width:350,
          backgroundColor:'#324A59',
          borderRadius:30,
          alignItems:'center',
          alignSelf:'center',
        }}>
          <Text style={{color:'#FFF',fontSize:18, top:10}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  view_btn_next:{
    top:-110,
    },

  txt_total:{
    top:-100,
    alignItems:'center',
    alignSelf:'center',
    width:'90%',
  },
  btn_coffe_love:{
    height:45,
    width:350,
    backgroundColor:'#C58BF2',
    borderRadius:30,
  },

  view_btn_coffe_love: {
    alignContent:'center',
    alignSelf:'center',
    top:-110

  },
  view_time_picker: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    backgroundColor: '#FFF'
  },
  btn_back: {
    height: 40,
    width: 50,
    top: 20,
  },
  txt_order: {
    height: 30,
    width: 100,
    left: 100,
    fontSize: 60,
    alignItems: 'center',
    flexDirection: 'row'
  },
  img_item_screen9: {
    alignItems: 'center',
    top: 3,
    height: 150,
    left: 20,
    width: '90%',
    backgroundColor: '#324A59',
    borderRadius: 25,
  },
  txt_nameProduct_amount: {
    padding: 5,
    left: 25,
    top: 8,
  },
  tv_btn_tang_giam: {
    top: -26,
    left: 250,
    height: 33,
    width: 120,
    borderRadius: 20,
    border: '#001833'
  },
  btn_except: {
    width: 25,
    alignItems: 'center',
    left: 14,
    top: 3,
  },
  input_txt: {
    height: 30,
    width: 35,
    left: 40,
    top: -27,
    backgroundColor: '#D8D8D866',
    alignItems: 'center',
  },
  btn_plus: {

    width: 25,
    alignItems: 'center',
    left: 76,
    top: -55
  },

  btn_txt_one_two: {
    fontSize: 18,
    color: '#001833',
    top: 3
  },
  btn_one: {
    height: 32,
    width: 60,
    alignItems: 'center',
    left: 220,
    top: -30,
    borderRadius: 10
  },
  btn_two: {
    height: 32,
    width: 60,
    alignItems: 'center',
    left: 290,
    top: -62,
    borderRadius: 10,
  },
  ristretto: {
    top: 7,
  },
  onsite_takeaway: {
    top: -25,
    left: 30,

  },
  btn_250: {
    alignItems: 'center',
    left: 200,
    top: - 57,
    width: 50,
  },
  btn_350: {
    alignItems: 'center',
    left: 260,
    top: -107,
    width: 50,
  },
  btn_450: {
    width: 35,
    top: -165,
    left: 325
  },
  txt_switch: {
    top: -128,
  },

  btn_switch: {
    alignItems: 'center',
    width: 55,
    height: 38,
    left: 310,
    top: -160
  },
})

