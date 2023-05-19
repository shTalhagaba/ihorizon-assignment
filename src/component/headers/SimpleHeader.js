import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

function SimpleHeader(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: 'blue',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.white,
    marginTop: 15,
    paddingLeft: 20,
  },
});

export default SimpleHeader;
