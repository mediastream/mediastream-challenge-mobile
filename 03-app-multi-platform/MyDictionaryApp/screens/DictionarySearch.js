import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

export class DictionarySearch extends Component {
  constructor(props) {
     super(props);
     this.state = {
       word:''
     };
   }

   searchWord = (word) => {
     if (word) {
       this.props.navigation.navigate('DictionaryResult', {word: this.state.word})
     } else {
       Alert.alert(
        "Ups!",
        'Debes ingresar una palabra para continuar.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: true }
      )
     }
   }
  render() {
    return (
      <ImageBackground
          source={require('../assets/background.jpeg')}
          resizeMode='cover'
          style={styles.container} >
          <Text style={styles.tilte}>DICTIO<Text style={[styles.tilte,{fontWeight: 'bold'}]}>NARY</Text></Text>
          <View style={styles.container2}>
            <Text style={styles.subTilte}>Write a word</Text>
            <TextInput
              selectionColor='#d127f7'
              clearButtonMode='while-editing'
              underlineColorAndroid='transparent'
              placeholder='Apple'
              placeholderTextColor='#d127f7'
              returnKeyType='go'
              blurOnSubmit={false}
              style={styles.input}
              onChangeText={(text) => this.setState({word: text})}
              onSubmitEditing={() => this.searchWord(this.state.word)}
              value={this.state.word} />
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.btnSearch}
                onPress={() => this.searchWord(this.state.word)}>
                <Text style={styles.textBtn}>
                  FIND
                </Text>
              </TouchableOpacity>
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  },
  container2: {
    flex: 1,
    justifyContent: 'center'
  },
  tilte: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  subTilte: {
    fontSize: 15,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: viewportHeight*0.08,
    width: viewportWidth*0.8,
    backgroundColor: 'white',
    color: '#d127f7'
  },
  btnSearch: {
    backgroundColor: '#d127f7',
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 25,
    height: viewportHeight * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    width: viewportWidth * 0.8,
    marginTop: 20
  },
  textBtn: {
    color: 'white',
    fontSize: 18
  }
});
