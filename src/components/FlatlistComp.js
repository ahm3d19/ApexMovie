import {StyleSheet, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const FlatlistComp = ({data, numCol, hor, navigation}) => {

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail', {movieDetail: item})}>
          <Image style={styles.movieImg} source={{uri: item.poster_path}} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item._id}
      horizontal = {hor}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      numColumns={numCol}
    />
  );
};

export default FlatlistComp;

const styles = StyleSheet.create({
  movieImg: {
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 150,
    width: 100,
    backgroundColor: '#fff',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
