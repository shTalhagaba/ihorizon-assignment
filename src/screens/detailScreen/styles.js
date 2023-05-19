import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
  row: {
    width: '100%',
    height: 60,
    paddingHorizontal: 20,
    borderTopColor: Colors.black,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 16,
  },
  text: {
    alignSelf: 'center',
    fontWeight: '400',
    color: Colors.black,
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});
