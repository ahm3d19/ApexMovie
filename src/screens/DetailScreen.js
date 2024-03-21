import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const DetailScreen = ({route}) => {
  const {movieDetail} = route.params;
  console.log(movieDetail);

  const imgUrl = movieDetail.backdrop_path
    ? {uri: movieDetail.backdrop_path}
    : {uri: movieDetail.poster_path};

  return (
    <ScrollView>
      <Image style={styles.backdropImg} source={imgUrl} />
      <ImageBackground
        imageStyle={{borderRadius: 60}}
        blurRadius={300}
        source={imgUrl}
        style={styles.detailContainer}>
        <View style={{}}>
          <View style={styles.detailContent}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  paddingVertical: 20,
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '300',
                }}>
                Release: {movieDetail.release_date}
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity>
                  <Image
                    style={{height: 25, width: 25}}
                    source={require('../../assets/star.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{height: 25, width: 25}}
                    source={require('../../assets/star.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{height: 25, width: 25}}
                    source={require('../../assets/star.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{height: 25, width: 25}}
                    source={require('../../assets/star.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{height: 25, width: 25}}
                    source={require('../../assets/star.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                }}>
                {movieDetail.title}
              </Text>
              <TouchableOpacity style={{}}>
                <Image
                  style={{height: 38, width: 38}}
                  source={require('../../assets/like.png')}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                paddingVertical: 10,
                color: 'white',
                fontSize: 16,
                fontWeight: '300',
              }}>
              {movieDetail.genres}
            </Text>

            <Text style={{color: 'white', fontSize: 18, paddingRight: 20}}>
              {movieDetail.overview}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  backBtn: {
    height: 20,
    width: 20,
    position: 'absolute',
  },
  backdropImg: {
    height: deviceHeight - 400,

    width: deviceWidth,
  },
  detailContainer: {
    // backgroundColor: 'grey',
    // blurRadius:1,

    marginTop: deviceHeight - 500,
    height: deviceHeight,
    width: deviceWidth,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
  },
  detailContent: {
    padding: 20,
    paddingLeft: 30,
  },
});
