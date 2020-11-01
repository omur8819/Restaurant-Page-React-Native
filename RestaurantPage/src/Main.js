import React from 'react';
import {SafeAreaView, View, Text, FlatList, Image, StyleSheet, Dimensions} from 'react-native';
import RestaurantCard from './RestaurantCard';
import restaurant_data from './restaurant_data.json';



// const renderRestaurant = ({item}) => {
//   return(
//     <Image 
//       source={{uri: item.imageUrl}}
//       style={{width: Dimensions.get("window").width*0.85,
//         height: Dimensions.get("window").height*0.3,
//         resizeMode: "contain"}}
//     />

//   )
// }


// const renderRestaurant = (data) => {
//   return(
//     <RestaurantCard 
//       props = {data.item }
//     />

//   )
// }

const renderRestaurant = ({item}) => {
  return(
    <RestaurantCard 
      props = {item}
    />

  )
}

const Main = () => {
  return(
    <SafeAreaView style={myStyle.container}>
      <FlatList 
        ListHeaderComponent={<Text style={myStyle.header}>Best 10 Restaurants All Over The World</Text>}
        data={restaurant_data}
        renderItem={renderRestaurant}
      />
    </SafeAreaView>
  )
}

export default Main;

const myStyle = StyleSheet.create({
  container:{
    backgroundColor: '#ffcdd2',
    
  },
  header: {
    fontSize: 37,
    fontWeight: "bold",
    textAlign: 'center',
    color: '#880e4f',
    borderWidth: 5,
    borderColor: '#880e4f',
    borderRadius: 20,
    margin: 10,
  },
})