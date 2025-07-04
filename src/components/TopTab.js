import {StyleSheet, TouchableOpacity, View} from 'react-native';

import CustomText from './CustomText';
import fonts from '../assets/fonts';
import {COLORS} from '../utils/COLORS';

const TopTab = ({tab, setTab}) => {
  return (
    <View style={styles.tabBox}>
      <TouchableOpacity
        style={[styles.tab, tab !== 1 && styles.unTab]}
        onPress={() => setTab(1)}>
        <CustomText
          fontSize={12}
          fontFamily={fonts.semiBold}
          label={'Metal Mill Products'}
          color={tab === 1 ? '#fff' : '#000'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, tab !== 2 && styles.unTab]}
        onPress={() => setTab(2)}>
        <CustomText
          fontSize={12}
          fontFamily={fonts.semiBold}
          label={'Pipe & Fitting Products'}
          color={tab === 2 ? '#fff' : '#000'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  tab: {
    height: 46,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primaryColor,
    backgroundColor: COLORS.primaryColor,
    width: '48%',
  },
  unTab: {
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.white,
  },
  tabBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
