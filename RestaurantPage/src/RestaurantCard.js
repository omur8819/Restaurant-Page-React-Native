import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet, Linking, TouchableOpacity, Button} from 'react-native';

const RestaurantCard = ({props}) => {
    return(
        <View style={myStyle.container}>
            <Text style={myStyle.name}>{props.name}</Text>
            <Text style={myStyle.location}>({props.location})</Text>
            
            <Image 
                source={{uri: props.imageUrl}}
                style={myStyle.image}
        />
            <Text style={myStyle.story}>   {props.story}</Text>

            <TouchableOpacity
                style={myStyle.button}
                onPress={() => Linking.openURL(props.inspect)}>
                <Text style={{color: 'wheat', textAlign: 'center', fontWeight: 'bold', marginTop: 4}}>INSPECT THE RESTAURANT</Text>
            </TouchableOpacity>


      

        </View>
    )
}


export default RestaurantCard;

const myStyle = StyleSheet.create({
    container: {
        borderWidth: 5,
        borderColor: '#880e4f',
        borderRadius: 20,
        margin:10,
    },
    name: {
        color: '#b0003a',
        margin: 10,
        fontSize: 25,
        fontWeight: 'bold',

    },
    location:{
        color: '#b0003a',
        margin: 10,

    },
    story: {
        margin: 10,
        padding: 10,
        
    },
    image: {
        width: Dimensions.get("window").width*0.85,
        height: Dimensions.get("window").height*0.3,
        resizeMode: "contain",
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#880e4f',
        borderRadius: 10,
        margin: 20,
        width: 320,
        height: 30,
        
    },
    
})


  