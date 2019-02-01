import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Share,
  ProgressBarAndroid,
  Alert
} from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

export class DictionaryResult extends Component{
  constructor(props) {
     super(props);
     this.state = {
       word:'',
       definition:'',
       imageApi: 'https:\/\/farm8.staticflickr.com\/7837\/46890890682_3ce9bd989a_m.jpg'
     };
   }

   componentDidMount = () => {
     this.setState({word: this.props.navigation.getParam('word')})
     this.getDefinitionWord()
     // this.getImagenWord()
   }

  getDefinitionWord = async() => {
    try {
      let response = await fetch(
        'http://api.urbandictionary.com/v0/define?term='+this.props.navigation.getParam('word'),
      );
      let responseJson = await response.json();
      if (responseJson.list[0]) {
        this.setState({definition:responseJson.list[0].definition})
      } else {
        Alert.alert(
         "Ups!",
         'Palabra no encontrada. Intenta con otra',
         [
           {text: 'OK', onPress: () => this.props.navigation.navigate('DictionarySearch')},
         ],
         { cancelable: false }
       )
      }
    } catch (error) {
      console.error(error);
    }
  }

  // No pude rescatar los datos desde este JSON
  getImagenWord = async() => {
    try {
      let response = await fetch(
        'https://api.flickr.com/services/feeds/photos_public.gne?tags='+this.props.navigation.getParam('word')+'&tagmode=any&format=json',
      );
      let responseJson = await response.json();
      const body = response._bodyText.split("jsonFlickrFeed({").toString();
      const body2 = body.split("})").toString();
      console.log(body2);
    } catch (error) {
      console.error(error);
    }
  }

  onShare = async() => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    console.log(this.props.navigation);
    return (
      <ImageBackground
        source={require('../assets/background.jpeg')}
        resizeMode='cover'
        style={styles.container} >
        <Text style={styles.tilte}>DICTIO<Text style={[styles.tilte,{fontWeight: 'bold'}]}>NARY</Text></Text>
        {!this.state.definition?
          <ProgressBarAndroid styleAttr="Large" color="#d127f7" style={styles.progress}/>:
          <View style={styles.container2}>
            <ScrollView>
            <View style={styles.containRow}>
              <Text style={styles.word}>{this.state.word}</Text>
              <Image
                source={require('../assets/sounds.png')}
                resizeMode='contain'
                style={styles.image} />
            </View>
            <Text style={styles.textDefinition}>{this.state.definition}</Text>
            <Image
              source={{uri: this.state.imageApi}}
              resizeMode='contain'
              style={styles.imageApi} />
            <View style={[styles.containRow, {marginBottom: 10}]}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => this.props.navigation.navigate('DictionarySearch')}>
                <Image
                  source={require('../assets/back.png')}
                  resizeMode='contain'
                  style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.onShare}>
                <Image
                  source={require('../assets/share.png')}
                  resizeMode='contain'
                  style={styles.image} />
              </TouchableOpacity>
            </View>
            </ScrollView>
          </View>
        }
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  tilte: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  word: {
    fontSize: 20,
    color: 'white'
  },
  containRow: {
    width: viewportWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  image: {
    height: 40,
    width: 40
  },
  textDefinition: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 10
  },
  imageApi: {
    width: viewportWidth*0.9,
    height: viewportHeight*0.4,
    marginVertical: 10
  },
  progress: {
    height: viewportHeight*0.5,
    width: viewportWidth*0.8
  }
});
