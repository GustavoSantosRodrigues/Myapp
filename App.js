import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class App extends Component {
  
  render() {
    return (
      <View style={styles.container} >

        {/*
          n aparece a barra de rolagem vertical 
          showsVerticalScrollIndicator={false}

          fica igual os stories do instagram,
          passando para o lado
          horizontal={true}

         */}
        <ScrollView horizontal={true}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#ddd',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },


  box1: {
    width: 400,
    height: 250,
    backgroundColor: 'red',
  },

  box2: {
    width: 400,
    height: 250,
    backgroundColor: 'green',
  },

  box3: {
    width: 400,
    height: 250,
    backgroundColor: 'blue',
  },

  box4: {
    width: 400,
    height: 250,
    backgroundColor: 'yellow',
  }

})

export default App
