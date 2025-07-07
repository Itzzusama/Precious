import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenWrapper } from '../../components'
import Header from '../../components/Header'
import { Images } from '../../assets/images';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';
import ImageFast from '../../components/ImageFast';
import Icons from '../../components/Icons';
import fonts from '../../assets/fonts';
import { Colors } from '../../config/colors';
import FilterButtons from '../../components/explore/FilterButtons';
import ProductCard from '../../components/explore/ProductCard';
import ShoppingCard from '../../components/Connect/ShoppingCard';

// ShoppingCard component (inline for now, can be moved to components if needed)


const UserProfile = () => {
  return (
    <ScreenWrapper backgroundColor='white' headerUnScrollable={() => <Header />}>
      <View style={styles.headerContainer}>
        {/* Avatar */}
        <ImageFast source={Images.model} style={styles.avatar} />
        {/* User Info */}
        <View style={styles.infoContainer}>
          <CustomText
            label="Elizabeth White"
            fontSize={22}
            fontFamily={fonts.bold}
            marginBottom={2}
          />
          <View style={styles.locationRow}>
            <Icons name="map-marker-outline" family="MaterialCommunityIcons" size={16} color={Colors.GREY} />
            <CustomText
              label="Los Angeles, California"
              fontSize={14}
          
              marginLeft={5}
            />
          </View>
          <CustomText
            label="A visionary designer and entrepreneur"
            fontSize={14}
            marginTop={2}
          />
        </View>
      </View>
      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <CustomText label="57" fontSize={18} fontFamily={fonts.bold} textAlign="center" />
          <CustomText label="Items" fontSize={13} color={Colors.GREY} textAlign="center" />
        </View>
        <View style={styles.statItem}>
          <CustomText label="260" fontSize={18} fontFamily={fonts.bold} textAlign="center" />
          <CustomText label="Items sold" fontSize={13} color={Colors.GREY} textAlign="center" />
        </View>
        <View style={styles.statItem}>
          <CustomText label="260" fontSize={18} fontFamily={fonts.bold} textAlign="center" />
          <CustomText label="Follower" fontSize={13} color={Colors.GREY} textAlign="center" />
        </View>
        <View style={styles.statItem}>
          <CustomText label="260" fontSize={18} fontFamily={fonts.bold} textAlign="center" />
          <CustomText label="Following" fontSize={13} color={Colors.GREY} textAlign="center" />
        </View>
      </View>
      {/* Buttons Row */}
      <View style={styles.buttonsRow}>
        <CustomButton
          title="Follow"
          onPress={() => {}}
          width={"48%"}
          backgroundColor={Colors.LIGHT_GREY}
          color={Colors.GREY}
          borderRadius={20}
          height={40}
          customText={{ color: Colors.GREY, fontFamily: fonts.semiBold, fontSize: 16 }}
        />
        <CustomButton
          title="Send a message"
          onPress={() => {}}
          width={"48%"}
          height={40}
          backgroundColor={Colors.LIGHT_GREY_WHITE}
          color={Colors.GREY}
          borderRadius={20}
          customText={{ color: Colors.GREY, fontFamily: fonts.semiBold, fontSize: 16 }}
          disabled
        />
      </View>
      {/* Tabs Row */}
      <View style={styles.tabsRow}>
        <TouchableOpacity style={[styles.tabButton, styles.tabButtonActive]}>
          <CustomText label="Items • 57" fontSize={16} color={Colors.WHITE} fontFamily={fonts.semiBold} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <CustomText label="For Sale" fontSize={16} color={Colors.BLACK} fontFamily={fonts.semiBold} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <CustomText label="Posts" fontSize={16} color={Colors.BLACK} fontFamily={fonts.semiBold} />
        </TouchableOpacity>
      </View>
      {/* Filter/Sort Row */}
      <View style={styles.filterSortRow}>
        <TouchableOpacity style={styles.filterRowLeft}>
          <Icons family="Feather" name="filter" size={22} color={Colors.BLACK} />
          <CustomText label="FILTER" fontSize={15} color={Colors.BLACK} marginLeft={6} />
        </TouchableOpacity>
        <View style={styles.filterRowRight}>
          <CustomText label="SORT BY" fontSize={15} color={Colors.BLACK} marginRight={6} />
          <Icons family="MaterialCommunityIcons" name="view-grid-outline" size={22} color={Colors.BLACK} />
        </View>
      </View>
      {/* Shopping Cards Grid */}
      <FlatList
        data={[
          { image: Images.product, title: 'Patek Philippe', subtitle: 'Calatrava yellow gold…' },
          { image: Images.product, title: 'GUCCI Shoes', subtitle: 'Stilettos, Leather, red…' },
        ]}
        renderItem={({ item }) => (
          <ShoppingCard
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            onStarPress={() => {}}
            onBookmarkPress={() => {}}
          />
        )}
        keyExtractor={(_, idx) => idx.toString()}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.gridContainer}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  );
}

export default UserProfile



const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
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
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 10,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: Colors.WHITE,
  },
  tabButtonActive: {
    backgroundColor: Colors.BLACK,
    borderColor: Colors.BLACK,
  },
  filterSortRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
    paddingHorizontal: 10,
  },
  filterRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridContainer: {
    paddingBottom: 40,
    paddingHorizontal: 4,
  },
  gridRow: {
    justifyContent: 'space-between',
  },
});