import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FlatlistComp from '../components/FlatlistComp';

const ShowScreen = ({navigation}) => {
  const [fetchAllShows, setFetchAllShows] = useState(null);

  const renderItem = ({item}) => {
    return (
      <View style={styles.movieWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail', {movieDetail: item})}>
          <Image style={styles.movieImg} source={{uri: item.poster_path}} />
          {/* <Text>{item.title}</Text> */}
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://movies-api14.p.rapidapi.com/shows',
        headers: {
          'X-RapidAPI-Key':
            'bb0f76efd7msh9ad28ff0dcc1d31p1787afjsn30ce85fa971b',
          'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setFetchAllShows(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (fetchAllShows === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.txtClr}>Shows</Text>

      {/* Flatlist */}
      <ScrollView>
        <FlatlistComp
          data={fetchAllShows.movies}
          numCol={3}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    borderRadius: 20,
    height: 50,
    width: 50,
  },
  txtClr: {
    paddingTop: 55,
    paddingBottom: 30,
    color: '#800634',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profile: {
    borderRadius: 40 / 2,
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  inputWrapper: {
    alignItems: 'center',
  },
  inputBar: {
    marginVertical: 20,
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderRadius: 100,
    backgroundColor: '#fff',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  menuTxt: {paddingLeft: 20, fontWeight: '500', fontSize: 20},
});
