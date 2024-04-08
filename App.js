// SERVE PARA CRIAR UM COMPONENTE NO REACT NATIVE

import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";


// const nome = 'Gustavo'  
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      input: ''
    }
    this.entrar = this.entrar.bind(this)
  }

  entrar(){
    if(this.state.input === ''){
      alert('digite seu nome')
      return
    }
    this.setState({
      nome: 'Bem Vindo: ' + this.state.input
    })
  
  }

  render() {
    return (
      <View style={styles.container} >
        <TextInput style={styles.input}
          placeholder="digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({ input: texto })}
        />
        <Button title="entrar" onPress={this.entrar} />
        <Text style={styles.name}>{this.state.nome}</Text>
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

  input: {
    borderWidth: 1,
    borderColor: '#000',
    height: 40,
    width: 300,
    paddingLeft: 10,
    color: '#000',
    marginBottom: 10
  },

  name: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
})

export default App

// state e onPress

// class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       nome: ''
//     }
//     this.entrar = this.entrar.bind(this)
//     // deixa a funcao acessar todas as propriedades

//     // state consegue trocar o valor dela 
//   }

//   entrar(nome){
//     this.setState(
//       {nome: nome}
//     )
//   }
//   render() {
//     return (
//     <View style={styles.container}>

//       <Button title="entrar" onPress={() => this.entrar('Gustavo')} />
//       <Text>{this.state.nome}</Text>
//     </View>
//     )
//   }
// }

// end state e onPress





// class App extends Component {
//   render() {

//     let nome = 'GUERREIRO'
//     return (
//       <View style={styles.container}>
//         <Text>{nome}</Text>
//         <Jobs largura={100} altura={200} fulano={'Fulano'} />
//       </View>
//     );
//   }
// }


// // CRIANDO UM COMPONENTE
// class Jobs extends Component {
//   render() {
//     return (
//       <View>
//         <Image source={{ uri: 'https://sujeitoprogramador.com/steve.png' }} style={{ width: this.props.largura, height: this.props.altura }} />
//         <Text>{this.props.fulano}</Text>
//       </View>
//     );
//   }
// }
