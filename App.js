import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styled from 'styled-components';

const RowView = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  marginLeft: 5;
  marginRight: 5;
`;

const ColumnView = styled.View`
  flex: 1;
  marginLeft: 5;
  marginRight: 5;
`;

const Input = styled.TextInput`
  borderColor: #ced4da;
  borderWidth: 1;
  paddingTop: 5;
  paddingBottom: 5;
  paddingLeft: 5;
  paddingRight: 5;
  borderRadius: 2;
  backgroundColor: white;
`;

const Label = styled.Text`
  fontWeight: bold;
  marginBottom: 5;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gratuity: '',
      damage: '0',
      tip: '0'
    };
  }

  handleDamage(val) {
    this.setState({
      damage: val.replace(/[^0-9]/g, ''),
      tip: this.calc(val, this.state.gratuity)
    });
  }

  handleGratuity(val) {
    this.setState({
      gratuity: val.replace(/[^0-9]/g, ''),
      tip: this.calc(this.state.damage, val)
    });
  }

  calc(num, per) {
    return (num / 100)*per;
  }

  render() {
    return (
      <View style={styles.container}>
        <RowView style={styles.mB5}>
          <ColumnView>
            <Label style={styles.mB5}>Damage</Label>
            <Input
              style={styles.mB5}
              type="numeric"
              keyboardType='numeric'
              onChangeText={(val) => {this.handleDamage(val)}}
              value={this.state.damage}
            />
          </ColumnView>
        </RowView>

        <RowView style={styles.mB5}>
          <ColumnView>
            <Label>Gratuity</Label>
            <Input
              onChangeText={(gratuity) => this.handleGratuity(gratuity)}
              value={this.state.gratuity}
            />
          </ColumnView>
        </RowView>

        <RowView style={styles.mB5}>
          <ColumnView>
            <Label>Split</Label>
            <Input
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
          </ColumnView>
        </RowView>


        <RowView style={styles.mB5}>
          <ColumnView>
            <Text>Total</Text>
          </ColumnView>
          <ColumnView>
            <Text>{this.state.tip}</Text>
          </ColumnView>
        </RowView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgDark: {
    backgroundColor: '#ccc'
  },
  mB5: {
    marginBottom: 5
  }
});
