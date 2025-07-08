import { StyleSheet, View } from 'react-native'
import React from 'react'
import ImageFast from '../ImageFast'
import CustomText from '../CustomText'
import CustomButton from '../CustomButton'
import { Colors } from '../../config/colors'
import fonts from '../../assets/fonts'
import { Images } from '../../assets/images'

const TopCard = ({onProfilePress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <ImageFast source={Images.user} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <CustomText label="Lucy Watson" fontSize={16} fontFamily={fonts.bold} marginBottom={2} />
          <CustomText label="Private Seller" color={Colors.GREY} fontFamily={fonts.regular} />
          <CustomText label="United States"  color={Colors.GREY} fontFamily={fonts.regular} />
        </View>
        <CustomButton
          title="Profile Settings"
          onPress={onProfilePress}
          width={140}
          height={40}
          backgroundColor={Colors.WHITE}
          color={Colors.BLACK}
          borderRadius={24}
          borderWidth={1}
          borderColor={Colors.BLACK}
          customText={{ color: Colors.BLACK, fontFamily: fonts.semiBold, fontSize: 13 }}
        />
      </View>
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <CustomText label="120" fontSize={18} fontFamily={fonts.bold} textAlign="center" />
          <CustomText label="Items" fontSize={15} color={Colors.GREY} textAlign="center" />
        </View>
        <View style={styles.statItem}>
          <CustomText label="16 Mio" fontSize={18} fontFamily={fonts.bold} textAlign="center" />
          <CustomText label="Follower" fontSize={15} color={Colors.GREY} textAlign="center" />
        </View>
        <View style={styles.statItem}>
          <CustomText label="54000" fontSize={18} fontFamily={fonts.bold} textAlign="center" />
          <CustomText label="Following" fontSize={15} color={Colors.GREY} textAlign="center" />
        </View>
      </View>
    </View>
  )
}

export default TopCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 18,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
})