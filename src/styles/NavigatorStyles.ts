import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../config/colors';

const navigatorStyles = StyleSheet.create({
  statusBar: {
    backgroundColor: Colors.NAVY_BLUE,
    height: 40,
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'FiraGO',
  },
  name: {
    fontSize: 24,
    fontWeight: Platform.OS === 'ios' ? '500' : '900',
    textAlign: 'left',
    color: Colors.WHITE,
    fontFamily: 'FiraGO',
  },
  listLength: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
  },
  filterTitle: {
    fontSize: 18,
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontFamily: 'FiraGO',
    textAlign: 'center',
  },
  reset: {
    fontSize: 16,
    color: Colors.WHITE,
    fontWeight: '500',
    fontFamily: 'FiraGO',
  },
  sortContainerActive: {
    backgroundColor: Colors.NAVY_BLUE_DARK,
  },
  sortContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
    borderRadius: 19,
    marginLeft: 12,
  },
  marginLeftMinus12: {
    marginLeft: -12,
  },
});

export default navigatorStyles;
