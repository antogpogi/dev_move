import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  NativeModules,
  NativeEventEmitter,
  Alert,
  PermissionsAndroid
} from 'react-native'
import CameraRoll from '@react-native-community/cameraroll';

const PESDK = NativeModules.PESDK
const RNFS = require('react-native-fs')

export default class PESDKDemo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dataSource: [],
      output: 'Select an image to edit...'
    }
  }

  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Internal Storage',
          message:
            'YOLO requires access to your internal storage ' +
            'Allow it.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Success');
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async _generateItems () {
    return await CameraRoll.getPhotos({
      first: 1000,
      assetType: 'Photos'
    }).then(r => {
      this.setState({dataSource: r.edges})
    })
  }
// --------------------------------------------------------------- RENDERING

  render () {
    let showStatus = this.state.output !== undefined
    var { width } = Dimensions.get('window')
    var sideLength = width / 3
    return (
      <View style={{flex:1, display:"flex"}}>
        <View style={{flexBasis:"5%"}}>
          { showStatus && <Text style={styles.status}>{this.state.output}</Text> }
        </View>
        <View style={styles.row}>
          <FlatList
            data={this.state.dataSource}
            renderItem={(item) => {
              return (
                <TouchableHighlight style={{ width: sideLength, height: sideLength }} onPress={this._onItemPressed.bind(this, item.item.node)}>
                  <Image
                    style={styles.thumb}
                    source={{ uri: item.item.node.image.uri }}
                  />
                </TouchableHighlight>
              )
            }}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    )
  }

  // --------------------------------------------------------------- EVENTS

  _onItemPressed (item) {
    const progress = data => {
      const percentage = ((100 * data.bytesWritten) / data.contentLength) | 0
      const text = `Preparing Image... ${percentage}%`
      this.setState({ output: text })
    }

    this.setState({ output: 'Starting image download...' })
    const imageUrl = item.image.uri
    this.setState({ downloading: true })
    const imagePath = RNFS.DocumentDirectoryPath + '/image.jpeg'
    this.setState({ downloading: true })
    RNFS.copyFile( imageUrl, imagePath)
    PESDK.present(imagePath)
    this.setState({ output: 'Select an image to edit...' })
  }

  async componentWillMount() {
    this.requestCameraPermission()
    await this._generateItems()
    this.eventEmitter = new NativeEventEmitter(NativeModules.PESDK);
    this.eventEmitter.addListener('PhotoEditorDidCancel', () => {
      console.log('Cancelled')
      // The photo editor was cancelled.
      Alert.alert(
        'PESDK did Cancel',
        '...do what you need to do.',
        { cancelable: true }
      )
    })
    this.eventEmitter.addListener('PhotoEditorDidSave', (body) => {
      // The body contains the edited image in JPEG and NSData representation and
      // one could further process it from here.
      console.log('Saved')
      Alert.alert(
        'PESDK did Save',
        'Image is contained in body and may be processed further.',
        { cancelable: false }
      )
    })
    this.eventEmitter.addListener('PhotoEditorDidFailToGeneratePhoto', () => {
      // The photo editor could not create a photo.
      Alert.alert(
        'PESDK did Fail to generate a photo.',
        'Please try again.',
        { cancelable: true }
      )
    })
  }

  componentWillUnmount() {
    this.eventEmitter.removeAllListeners('PhotoEditorDidCancel')
    this.eventEmitter.removeAllListeners('PhotoEditorDidSave')
    this.eventEmitter.removeAllListeners('PhotoEditorDidFailToGeneratePhoto')
  }
}

// --------------------------------------------------------------- STYLES

var styles = StyleSheet.create({
  status: {
    padding: 8,
    fontSize: 12,
    textAlign: 'center',
    backgroundColor: '#edeeef'
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row',
    overflow: 'hidden'
  },
  thumb: {
    width: '100%',
    height: '100%'
  }
})