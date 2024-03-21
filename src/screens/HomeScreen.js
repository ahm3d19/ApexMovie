import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FlatlistComp from '../components/FlatlistComp';

const HomeScreen = ({navigation}) => {
  const [fetchAllMoviesData, setFetchAllMoviesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://movies-api14.p.rapidapi.com/home',
        headers: {
          'X-RapidAPI-Key':
            'bb0f76efd7msh9ad28ff0dcc1d31p1787afjsn30ce85fa971b',
          'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setFetchAllMoviesData(response.data);
        console.log(fetchAllMoviesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (fetchAllMoviesData === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* TopArea */}

      <View style={styles.topBar}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.txtClr}>Choose Movie</Text>
        <TouchableOpacity>
          <Image
            style={styles.profile}
            source={{
              uri: 'https://media.istockphoto.com/id/1057552666/video/portrait-of-young-woman-against-white-background.jpg?s=640x640&k=20&c=BC28DIaI_3duhvOkd5v4VcF5ibsl0VfwTNn4ouv2SLE=',
            }}
          />
        </TouchableOpacity>
      </View>

      {/* InputArea  */}

      <View style={styles.inputWrapper}>
        <TextInput style={styles.inputBar} placeholder="Search"></TextInput>
      </View>

      {/* Flatlist */}
      <ScrollView>
        <Text style={styles.menuTxt}>Trending Movies</Text>

        <FlatlistComp
          data={fetchAllMoviesData[0].movies}
          hor={true}
          navigation={navigation}
        />
        <Text style={styles.menuTxt}>New Movies</Text>

        <FlatlistComp
          data={fetchAllMoviesData[1].movies}
          hor={true}
          navigation={navigation}
        />
        <Text style={styles.menuTxt}>Best Animation Movies</Text>

        <FlatlistComp
          data={fetchAllMoviesData[2].movies}
          hor={true}
          navigation={navigation}
        />
        <Text style={styles.menuTxt}>Movies Watch For Free</Text>

        <FlatlistComp
          data={fetchAllMoviesData[3].movies}
          hor={true}
          navigation={navigation}
        />
        <Text style={styles.menuTxt}>Family Time</Text>

        <FlatlistComp
          data={fetchAllMoviesData[4].movies}
          hor={true}
          navigation={navigation}
        />
        <Text style={styles.menuTxt}>Most Trending Shows</Text>

        <FlatlistComp
          data={fetchAllMoviesData[5].movies}
          hor={true}
          navigation={navigation}
        />
        <Text style={styles.menuTxt}>New Shows</Text>

        <FlatlistComp
          data={fetchAllMoviesData[6].movies}
          hor={true}
          navigation={navigation}
        />
        <Text style={styles.menuTxt}>Sci-Fi TV</Text>

        <FlatlistComp
          data={fetchAllMoviesData[8].movies}
          hor={true}
          navigation={navigation}
        />
        <Text style={styles.menuTxt}>Documenteries</Text>

        <FlatlistComp
          data={fetchAllMoviesData[9].movies}
          hor={true}
          navigation={navigation}
        />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={require('../../assets/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
            style={styles.footerIcon}
            source={require('../../assets/search-3.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
          <Image
            style={styles.footerIcon}
            source={require('../../assets/movie.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Show')}>
          <Image
            style={styles.footerIcon}
            source={require('../../assets/showcase.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  txtClr: {
    color: '#800634',
    fontSize: 20,
    fontWeight: 'bold',
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
  footer: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  footerIcon: {
    height: 30,
    width: 30,
  },
});
