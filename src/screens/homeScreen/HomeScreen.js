import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import Colors from '../../common/Colors';
import SimpleHeader from '../../component/headers/SimpleHeader';
import Styles from './Styles';
import { useGetPokemonByNameQuery } from '../../redux/slice/authSlice';

function HomeScreen(props) {
  const { data, error, isLoading } = useGetPokemonByNameQuery('')
  return (
    <>
      <SimpleHeader title="Poke React" />
      <FlatList
        data={data?.results}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={{ width: '100%', height: 50, flexDirection: 'row', marginTop: 5 }}
            onPress={()=>props.navigation.navigate('Detail',{title:item?.name})}>
              {/* <Image source={} /> */}
              {/* <Text>{item.name}</Text> */}
              <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:16,marginLeft:30}}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
        ItemSeparatorComponent={() => {
          return (<View style={Styles.separator}></View>)
        }}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}
export default HomeScreen;
