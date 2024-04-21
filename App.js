import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, Switch, TextInput, Button, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sexo: 0,
      sexos: [
        { key: '1', typeSex: 'Masculino', },
        { key: '2', typeSex: 'Feminino', },
      ],
      limitValue: 0,
      students: false,
      showStudentText: false // Adicionando o estado para controlar a visibilidade do texto do estudante
    }
  }

  render() {

    let typesItems = this.state.sexos.map((v, k) => {
      return (
        <Picker.Item key={k} label={v.typeSex} value={k} />
      )
    })

    return (
      <View style={styles.container} >

        <SafeAreaView>
          <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>App Banco</Text>
          <View>
            <TextInput placeholder="Nome" style={styles.inputNome} />
            <TextInput placeholder="Idade" style={styles.inputIdade} />
            <View>
              <Picker
                selectedValue={this.state.sexo}
                onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}>
                {typesItems}
              </Picker>
            </View>

            <View>
              <Slider
                minimumValue={0}
                maximumValue={100}
                maximumTrackTintColor="blue"
                minimumTrackTintColor="green"
                onValueChange={(itemValue) => this.setState({ limitValue: itemValue })}
              />
              <Text>{this.state.limitValue.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.switch}>
            <Switch
              value={this.state.students}
              onValueChange={(itemValue) => this.setState({ students: itemValue, showStudentText: itemValue })} />
            <Text style={styles.textStudent}>Você é estudante? {this.state.students ? 'Sim' : 'Não'} </Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.resultsButton}>Clique para ver o resultado</Text>
          </TouchableOpacity>
        </SafeAreaView>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  inputNome: {
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
  },

  inputIdade: {
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
  },

  switch: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStudent: {
    margin: 10,
  },


  resultsButton: {
    margin: 10,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
  }


})

export default App;
