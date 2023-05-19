import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import SimpleHeader from '../../component/headers/SimpleHeader';
import styles from './styles';
import { useGetPokemonByNameQuery } from '../../redux/slice/authSlice';

function DetailScreen(props) {
  const {title} = props.route.params;
  const { data, error, isLoading } = useGetPokemonByNameQuery(title)
  return (
    <>
      <SimpleHeader title={title} />
      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        }}
        style={styles.image}
      />

      <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.text}>{title}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Height</Text>
        <Text style={styles.text}>{data?.height}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Weight</Text>
        <Text style={styles.text}>{data?.weight}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Type</Text>
        <View style={{marginTop:10}}>
        {data?.types?.map((item,index)=>{
          return(
            <Text style={styles.text}>{item?.type?.name}</Text>
          )
        })}
        </View>
      </View>
    </>
  );
}
export default DetailScreen;
