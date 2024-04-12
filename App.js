import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView } from "react-native";

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

class Pessoa extends Component {

  render() {
    return (
      <View style={styles.containerPessoa}>
        <Text style={styles.nome}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.idade}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.email}>Email: {this.props.data.email}</Text>
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

  nome: {
    fontSize: 20
  },

  idade: {
    fontSize: 20
  },

  email: {
    fontSize: 20
  },


  containerPessoa: {
    height: 200,
    width: 300,
    backgroundColor: '#f00',
  }

})

export default App;