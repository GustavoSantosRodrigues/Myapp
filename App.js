import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView, Switch } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Slider  from '@react-native-community/slider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false
    }
  }

 
  

  render() {

    return (
      <View style={styles.container} >

        <SafeAreaView>
          <Switch 
          value={this.state.status} 
          onValueChange={(valorSelecionado) => { this.setState({ status: valorSelecionado }) }}
          thumbColor={'#f00'}
           />

           <Text>
            
            {(this.state.status)  ? 'true' : 'false'}
            </Text>
        </SafeAreaView>

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