import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FlatlistComp from '../components/FlatlistComp';

const MovieScreen = ({navigation}) => {
  const [fetchAllMovies, setFetchAllMovies] = useState(null);

  const renderItem = ({item}) => {
    return (
      <View style={styles.movieWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail', {movieDetail: item})}>
          <Image style={styles.movieImg} source={{uri: item.poster_path}} />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://movies-api14.p.rapidapi.com/movies',
        headers: {
          'X-RapidAPI-Key':
            'bb0f76efd7msh9ad28ff0dcc1d31p1787afjsn30ce85fa971b',
          'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
        },
      };
      try {
        const response = await axios.request(options);
        setFetchAllMovies(response.data);
        console.log(fetchAllMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (fetchAllMovies === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* TopArea */}

      <Text style={styles.txtClr}>Movies</Text>

      {/* Flatlist */}
      <ScrollView style={styles.topBar}>
        <FlatlistComp
          data={fetchAllMovies.movies}
          numCol={3}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default MovieScreen;

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
