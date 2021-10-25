import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, StatusBar} from 'react-native';

export default function Cats(){
    const DATA = [
        {
            id: '1',
            title: 'Gato siamés',
            src: require('../images/siames.jpeg'),
        },
        {
            id: '2',
            title: 'Gato persa',
            src: require('../images/persa.jpg'),
        },
        {
            id: '3',
            title: 'Maine Coon',
            src: require('../images/maine.jpg'),
        },
        {
            id: '4',
            title: 'Bengala',
            src: require('../images/bengala.jpg'),
        },
        {
            id: '5',
            title: 'British Shorthair',
            src: require('../images/brithis.jpg'),
        },
    ];

    const Item = ({ title, img }) => (
        <View style={styles.item}> 
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.img} source={img}/>
        </View>
    );
    
    const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} />
    );

    return(
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
    },  
    img: {
      width: 200,
      height: 125,
      borderWidth: 2,
      borderColor: '#d35647',
      resizeMode: 'contain',
      margin: 8,
    },
});