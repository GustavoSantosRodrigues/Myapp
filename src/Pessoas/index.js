import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";

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
export default Pessoa; 