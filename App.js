import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView } from "react-native";
import { Picker } from '@react-native-picker/picker';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        { key: 1, name: 'Calabresa', preco: 59.90 },
        { key: 2, name: 'Bauru', preco: 49.90 },
        { key: 3, name: 'Quatro Queijos', preco: 100.90 },
        { key: 4, name: 'Marguerita', preco: 10.90 },
        { key: 5, name: 'Portuguesa', preco: 80.90 },
        { key: 6, name: 'Napolitana', preco: 67.90 },
        { key: 7, name: 'Americana', preco: 34.90 },
        { key: 8, name: 'Espanhola', preco: 1.90 },
      ]
    };
  }


  render() {

    let pizzasItems = this.state.pizzas.map((v, k) => {
      return (
        <Picker.Item key={k} label={v.name} value={k} />
      )
    })

    return (
      <View style={styles.container} >

        <SafeAreaView>
          <Picker
            selectedValue={this.state.pizza}
            onValueChange={(itemValue, itemIndex) => this.setState({ pizza: itemValue })}
          >

            {pizzasItems}
          </Picker>
          <Text style={styles.logo}>Menu Pizza</Text>

          <Text style={styles.pizza}>Você escolheu a: {this.state.pizzas[this.state.pizza].name} </Text>
          <Text style={styles.preco}>O preço é de R$: {this.state.pizzas[this.state.pizza].preco.toFixed(2)}</Text>
          {/* <Text>{this.state.pizza}</Text> */}
        </SafeAreaView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f00',
    marginBottom: 20
  },

  pizza: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f00',
    marginBottom: 20
  },

  preco: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f00',
    marginBottom: 20
  }
})

export default App;