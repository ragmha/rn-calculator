/* @flow */

import React, {Component} from 'react';
import {View, Text, AppRegistry} from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      inputValue: 0,
      prevInputValue: 0,
      currentInputValue: 0,
      selectedSymbol: null,
    };

    this.state = this.initialState;
    this.onInputButtonPressed = this.onInputButtonPressed.bind(this);
  }

  onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this.handleNumberInput(input);
      default:
        return this.handleStringInput(input);
    }
  }

  handleNumberInput(num) {
    let inputValue = this.state.inputValue * 10 + num;

    this.setState({
      inputValue: inputValue,
    });
  }

  handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          prevInputValue: this.state.inputValue,
          inputValue: 0,
        });
        break;
      case '=':
        let {selectedSymbol, inputValue, prevInputValue} = this.state;

        if (!selectedSymbol) return;

        this.setState({
          prevInputValue: 0,
          inputValue: eval(prevInputValue + selectedSymbol + inputValue),
          selectedSymbol: null,
        });
        break;
      case '%':
        this.setState({inputValue: this.setState.inputValue / 100});
        break;
      case '.':
        this.setState({
          selectedSymbol: str,
          prevInputValue: this.state.inputValue,
        });
        break;

      case '+/-':
        this.setState({
          inputValue: -Math.abs(this.state.currentInputValue),
          currentInputValue: -Math.abs(this.state.currentInputValue),
        });
        break;
      case 'c':
        this.setState({inputValue: 0});
        break;
    }
  }

  renderInputButtons() {
    const inputButtons = [
      ['c', '()', '%', '/'],
      [7, 8, 9, 'x'],
      [4, 5, 6, '-'],
      [1, 2, 3, '+'],
      [0, ',', '+/-', '='],
    ];

    let views = inputButtons.map((row, indx) => {
      let inputRow = row.map((val, colIndx) => {
        return (
          <InputButton
            value={val}
            highlight={this.state.selectedSymbol === val}
            onPress={() => this.onInputButtonPressed(val)}
            key={'butt-' + colIndx}
          />
        );
      });
      return <View style={Style.inputRow} key={'row-' + indx}>{inputRow}</View>;
    });

    return views;
  }
  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={Style.inputContainer}>
          {this.renderInputButtons()}
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Calculator', () => Calculator);
