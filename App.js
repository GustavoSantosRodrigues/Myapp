import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView } from "react-native";
import Pessoa from "./src/Pessoas";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      feed: [
        {
          id: 1,
          nome: 'Guilherme',
          idade: 18,
          email: 'Kp5v3@example.com',
        },
        {
          id: 3,
          nome: 'Gustavo',
          idade: 18,
          email: 'gustavo@.com',
        },
        {
          id: 4,
          nome: 'Pedro',
          idade: 18,
          email: 'pedro@.com',
        },
        {
          id: 5,
          nome: 'Maria',
          idade: 18,
          email: 'maria@.com',
        },
        {
          id: 6,
          nome: 'Lucas',
          idade: 18,
          email: 'lucas@.com',
        },
      ]
    }
  }

  render() {
    return (
      <View style={styles.container} >
        {/* 
            data é obrigatorio passar
            e o renderItem tbm  
        */}

        <SafeAreaView >
          <FlatList style={styles.feed} data={this.state.feed}
           KeyExtractor={(item) => item.id}
            renderItem={
              ({ item }) =>   
              <Pessoa data={item} />
            } />
           
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
})

export default App;