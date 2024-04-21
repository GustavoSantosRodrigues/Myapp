import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Slider  from '@react-native-community/slider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valor: 50
    }
  }

 
  

  render() {

    return (
      <View style={styles.container} >

        <SafeAreaView>
          <Slider 
          minimumValue={0} 
          maximumValue={100} 
          onValueChange={(valorSelecionado) => { this.state({ valor: valorSelecionado }) }}
          value={this.state.valor} 
          minimumTrackTintColor="#f00"
          maximumTrackTintColor="#00f"
          />
          
        </SafeAreaView>

        <Text>
          {this.state.valor}
        </Text>

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

 
})

export default App;