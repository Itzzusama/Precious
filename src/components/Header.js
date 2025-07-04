import {useNavigation} from '@react-navigation/native';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import fonts from '../assets/fonts';
import {COLORS} from '../utils/COLORS';
import CustomText from './CustomText';
import Icons from './Icons';

const Header = ({title, isBack = true, leftIcon}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      {isBack && (
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Icons
            size={20}
            family={'IonIcons'}
            color={COLORS.black}
            name={'chevron-back'}
          />
        </TouchableOpacity>
      )}
      <CustomText
        label={title}
        fontSize={17}
        fontFamily={fonts.semiBold}
        color={COLORS.secondaryColor}
        textAlign={'center'}
        alignSelf={'center'}
      />
      {leftIcon && leftIcon}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: StatusBar.currentHeight,
  },
  back: {
    width: 41,
    height: 41,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 20,
    backgroundColor: COLORS.gray2,
    borderRadius: 12,
  },
});
