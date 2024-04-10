import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
     numero: 0,
     botao: 'VAI',
     ultimo: null
    }

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.parar = this.parar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  

  vai() {
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: 'VAI' });
    }
    else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 });
      }, 100);
    }

    if(this.state.botao === 'VAI') {
      this.setState({ botao: 'PARAR' });
    }
    else {
      this.setState({ botao: 'VAI' });
    }
  }

  parar() {
    
  }
  
  limpar() {
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({ numero: 0, botao: 'VAI', ultimo: this.state.numero });
  }


  render() {
    return (
      <View style={styles.container} >
        <Image source={require('./src/cronometro.png')} style={{ width: 250, height: 250 }} />
        <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnText}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnText}>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltimo}>
            <Text style={styles.ultimo}>
              {this.state.ultimo != null ? 'ULTIMO: ' + this.state.ultimo.toFixed(2) + 's' : ''}
            </Text>
          </View>
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

  timer: {
    marginTop: -150,
    fontSize: 45,
    fontWeight: 'bold',
  },

  btnArea: {
    flexDirection: 'row',
    marginTop: 100,
    padding: 30,
  },


  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },

  areaUltimo: {
    marginTop: 20,
  },

  ultimo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  }
})

export default App
