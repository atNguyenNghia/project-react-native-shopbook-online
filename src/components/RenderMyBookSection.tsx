import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';

import { icons, SIZES, FONTS, COLORS } from '../constants/index';

function renderMyBookSection(myBooks, navigation) {
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('BookDetail', {
            book: item,
          })
        }
        style={[
          styles.renderImageBook,
          { marginLeft: index === 0 ? SIZES.padding : 0 },
        ]}>
        {/** Books Image */}
        <Image
          source={item.bookCover}
          resizeMode="cover"
          style={styles.itemImage}
        />
        {/** Boock Info */}
        <View style={styles.bookInfo}>
          {/** Icon clock*/}
          <Image source={icons.clock_icon} style={styles.clockIcon} />
          <Text style={styles.textIconBook}>{item.lastRead}</Text>
          {/** Icon page */}
          <Image source={icons.page_icon} style={styles.pageIcon} />
          <Text style={styles.textIconBook}>{item.completion}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.renderMyBooks}>
      <View style={styles.headerMyBooks}>
        <Text style={styles.textMyBook}>My Books</Text>
        <TouchableOpacity onPress={() => console.log('My Books')}>
          <Text style={styles.textSeeMore}> See more</Text>
        </TouchableOpacity>
      </View>
      {/* Books*/}
      <View style={styles.contentMyBooks}>
        <FlatList
          data={myBooks}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default renderMyBookSection;

const styles = StyleSheet.create({
  renderMyBooks: {
    flex: 1,
  },
  headerMyBooks: {
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textMyBook: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  textSeeMore: {
    ...FONTS.body3,
    color: COLORS.lightGray,
    alignSelf: 'flex-start',
    textDecorationLine: 'underline',
  },
  contentMyBooks: {
    flex: 1,
    marginTop: SIZES.padding,
  },
  renderImageBook: {
    flex: 1,
    marginRight: SIZES.radius,
  },
  itemImage: {
    width: 180,
    height: 250,
    borderRadius: 20,
  },
  bookInfo: {
    marginTop: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
  textIconBook: {
    marginLeft: 5,
    ...FONTS.body3,
    color: COLORS.lightGray,
  },
  pageIcon: {
    marginLeft: SIZES.radius,
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
});
