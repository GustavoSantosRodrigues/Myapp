// SERVE PARA CRIAR UM COMPONENTE NO REACT NATIVE

import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from "react-native";


// const nome = 'Gustavo'  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase:  'Aproveite o biscoito da sorte',
      img: require('./src/biscoito.png'),
    };

    this.textoQuebraBiscoito = this.textoQuebraBiscoito.bind(this);

    this.frase = [
      'Aproveite o biscoito da sorte',
      'Siga os bons e aprenda  com eles',
      "Acredite em si mesmo. Você é mais capaz do que imagina.",
      "O sucesso não é o resultado de um acaso, mas sim de uma determinação inabalável.",
      "Cada novo dia é uma oportunidade para se aproximar dos seus sonhos. Não desperdice.",
      "As dificuldades de hoje são os degraus para o seu sucesso amanhã.",
      "Seja a mudança que você deseja ver no mundo. - Mahatma Gandhi",
      "Não importa o quão devagar você vá, desde que você não pare.",
      "Você é mais forte do que pensa, mais corajoso do que acredita e mais talentoso do que imagina. - A.A. Milne",
      "O único lugar onde o sucesso vem antes do trabalho é no dicionário. - Vidal Sassoon",
      "Nunca é tarde demais para ser quem você quer ser. Não há limite de tempo, comece quando quiser.",
    ]
  }

  textoQuebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frase.length)
    this.setState({
      textoFrase: ' "' + this.frase[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render() {
    return (
      <View style={styles.container} >
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.textoFrase}>{this.state.textoFrase} </Text>
        <TouchableOpacity onPress={this.textoQuebraBiscoito}>
          <View>
            <Text style={styles.textoQuebraBiscoito}>Quebra o biscoito</Text>
          </View>
        </TouchableOpacity>
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

  img: {
    width: 250,
    height: 250
  },

  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },

  textoQuebraBiscoito: {
    fontSize: 25,
    color: '#000',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },


})

export default App
