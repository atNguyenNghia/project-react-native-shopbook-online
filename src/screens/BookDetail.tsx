import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
} from 'react-native';

import { FONTS, COLORS, SIZES, icons } from '../constants';

const LineDivider = () => {
  return (
    <View style={styles.lineDriver}>
      <View style={styles.line}></View>
    </View>
  );
};

const BookDetail = ({ route, navigation }) => {
  const [book, setBook] = useState<any>('');

  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);

  const indicator = new Animated.Value(0);

  useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book]);

  function renderBookInfoSection() {
    return (
      <View style={styles.renderBook}>
        <ImageBackground
          source={book.bookCover}
          resizeMode="cover"
          style={styles.imgBackroundHeader}
        />
        {/* Color Overlay */}
        <View
          style={[
            styles.colorOverlay,
            { backgroundColor: book.backgroundColor },
          ]}></View>
        {/* Navigation header */}
        <View style={styles.navigationHeader}>
          <TouchableOpacity
            style={styles.backHeader}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={[styles.iconBackHeader, { tintColor: book.navTintColor }]}
            />
          </TouchableOpacity>
          {/* Title header */}
          <View style={styles.titleHeader}>
            <Text style={[styles.textTitle, { color: book.navTintColor }]}>
              Book Detail
            </Text>
          </View>
          {/* Option header */}
          <TouchableOpacity
            style={styles.onOptionHeader}
            onPress={() => console.log('Click More')}>
            <Image
              source={icons.more_icon}
              resizeMode="contain"
              style={[styles.optionIcon, { tintColor: book.navTintColor }]}
            />
          </TouchableOpacity>
        </View>
        {/** Book Cover */}
        <View style={styles.bookDetailContainer}>
          <Image
            source={book.bookCover}
            resizeMode="cover"
            style={styles.imgBookDetailItem}
          />
        </View>
        {/** Book name and author */}
        <View style={styles.infoDeltail}>
          <Text style={[styles.textBookName, { color: book.navTintColor }]}>
            {book.bookName}
          </Text>
          <Text style={[styles.textBookAuthor, { color: book.navTintColor }]}>
            {book.author}
          </Text>
        </View>

        {/* Book Info */}
        <View style={styles.bookInFoContainer}>
          {/* Rating */}
          <View style={styles.ratingContainer}>
            <Text style={styles.tilteContainerIF}>{book.rating}</Text>
            <Text style={styles.tilteContainerIF}>Rating</Text>
          </View>

          <LineDivider />

          {/* Pages */}
          <View style={styles.pageContainer}>
            <Text style={styles.tilteContainerIF}>{book.pageNo}</Text>
            <Text style={styles.textContainerIF}>Number of Page</Text>
          </View>

          <LineDivider />

          {/* Language */}
          <View style={styles.languageContainer}>
            <Text style={styles.tilteContainerIF}>{book.language}</Text>
            <Text style={styles.textContainerIF}>Language</Text>
          </View>
        </View>
      </View>
    );
  }

  function renderBookDescription() {
    const indicatorSize =
      scrollViewWholeHeight > scrollViewVisibleHeight
        ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
          scrollViewWholeHeight
        : scrollViewVisibleHeight;

    const difference =
      scrollViewVisibleHeight > indicatorSize
        ? scrollViewVisibleHeight - indicatorSize
        : 1;

    return (
      <View style={styles.renderDecs}>
        {/* Custom Scrollbar */}
        <View style={styles.customBarDecs}>
          <Animated.View
            style={{
              width: 4,
              height: indicatorSize,
              backgroundColor: COLORS.lightGray4,
              transform: [
                {
                  translateY: Animated.multiply(
                    indicator,
                    scrollViewVisibleHeight / scrollViewWholeHeight
                  ).interpolate({
                    inputRange: [0, difference],
                    outputRange: [0, difference],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          />
        </View>

        {/* Description */}
        <ScrollView
          contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={(width, height) => {
            setScrollViewWholeHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: { x, y, width, height },
            },
          }) => {
            setScrollViewVisibleHeight(height);
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: indicator } } }],
            { useNativeDriver: false }
          )}>
          <Text style={styles.titleDescription}>Description</Text>
          <Text style={styles.contentDesc}>{book.description}</Text>
        </ScrollView>
      </View>
    );
  }
  function renderBottomButton() {
    return (
      <View style={styles.renderButtonDetail}>
        {/* Bookmark */}
        <TouchableOpacity
          style={styles.onBookmarkClick}
          onPress={() => console.log('Bookmark')}>
          <Image
            source={icons.bookmark_icon}
            resizeMode="contain"
            // style={styles.iconBookmark}
            style = {styles.iconBookmark}
          />
        </TouchableOpacity>

        {/* Start Reading */}
        <TouchableOpacity
          style={styles.buttomStartReading}
          onPress={() => console.log('Start Reading')}>
          <Text style={styles.textStartReading}>Start Reading</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (book) {
    return (
      <View style={styles.container}>
        <View style={styles.bookContainer}>{renderBookInfoSection()}</View>
        <View style={styles.descriptionContainer}>
          {renderBookDescription()}
        </View>
        <View style={styles.buttonContainer}>{renderBottomButton()}</View>
      </View>
    );
  } else {
    return <></>;
  }
};
export default BookDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
  },
  bookContainer: {
    flex: 4,
  },
  descriptionContainer: {
    flex: 2,
  },
  buttonContainer: {
    height: 70,
    marginBottom: 30,
  },
  renderBook: {
    flex: 1,
  },
  imgBackroundHeader: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  colorOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  navigationHeader: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
    height: 80,
    alignItems: 'flex-end',
  },
  backHeader: {
    marginLeft: SIZES.base,
  },
  iconBackHeader: {
    height: 25,
    width: 25,
  },
  titleHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    ...FONTS.h3,
  },

  onOptionHeader: {
    marginRight: SIZES.base,
  },
  optionIcon: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  },
  bookDetailContainer: {
    flex: 5,
    paddingTop: SIZES.padding2,
    alignItems: 'center',
  },
  imgBookDetailItem: {
    flex: 1,
    width: 150,
    height: 'auto',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,

  },
  infoDeltail: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBookName: {
    ...FONTS.h2,
  },
  textBookAuthor: {
    ...FONTS.body3,
  },
  bookInFoContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    margin: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  ratingContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tilteContainerIF: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  textContainerIF: {
    ...FONTS.body4,
    color: COLORS.white,
  },
  pageContainer: {
    flex: 1,
    paddingHorizontal: SIZES.radius,
    alignItems: 'center',
  },
  languageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  lineDriver: {
    width: 1,
    paddingVertical: 5,
  },
  line: {
    flex: 1,
    borderLeftColor: COLORS.lightGray2,
    borderLeftWidth: 1,
  },
  renderDecs: {
    flex: 1,
    flexDirection: 'row',
    padding: SIZES.padding,
  },
  customBarDecs: {
    width: 4,
    height: '100%',
    backgroundColor: COLORS.gray1,
  },
  titleDescription: {
    ...FONTS.h2,
    color: COLORS.white,
    marginBottom: SIZES.padding,
  },
  contentDesc: {
    ...FONTS.body2,
    color: COLORS.lightGray,
  },
  renderButtonDetail: {
    flex: 1,
    flexDirection: 'row',
  },
  onBookmarkClick: {
    width: 60,
    backgroundColor: COLORS.secondary,
    marginLeft: SIZES.padding,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBookmark: {
    width: 25,
    height: 25,
    tintColor: COLORS.lightGray2,
  },
  buttomStartReading: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginHorizontal: SIZES.base,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStartReading: {
    ...FONTS.h3,
    color: COLORS.white,
  },
});
