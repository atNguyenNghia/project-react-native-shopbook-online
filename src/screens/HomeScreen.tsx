import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

import renderHeader from '../components/RenderHeader';
import renderButtonSection from '../components/RenderButtonSection';
import renderMyBookSection from '../components/RenderMyBookSection';

const Home = ({ navigation }) => {
  const profileData = {
    name: 'Nguyễn Văn Nghĩa',
    point: 1000,
  };

  const bookOtherWordsForHome = {
    id: 1,
    bookName: 'Words For Home ',
    bookCover: images.otherWordsForHome,
    rating: 4.5,
    language: 'Eng',
    pageNo: 341,
    author: 'Jasmine Warga',
    genre: ['Romance', 'Adventure', 'Drama'],
    readed: '12k',
    description:
      "Jude never thought shed be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTintColor: '#000',
  };

  const bookTheMetropolis = {
    id: 2,
    bookName: 'The Metropolis',
    bookCover: images.theMetropolist,
    rating: 4.1,
    language: 'Eng',
    pageNo: 272,
    author: 'Seith Fried',
    genre: ['Adventure', 'Drama'],
    readed: '13k',
    description:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
  };

  const bookTheTinyDragon = {
    id: 3,
    bookName: 'The Tiny Dragon',
    bookCover: images.theTinyDragon,
    rating: 3.5,
    language: 'Eng',
    pageNo: 110,
    author: 'Ana C Bouvier',
    genre: ['Drama', 'Adventure', 'Romance'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const myBooksData = [
    {
      ...bookOtherWordsForHome,
      completion: '75%',
      lastRead: '3d 5h',
    },
    {
      ...bookTheMetropolis,
      completion: '23%',
      lastRead: '10d 5h',
    },
    {
      ...bookTheTinyDragon,
      completion: '10%',
      lastRead: '1d 2h',
    },
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: 'Best Seller',
      books: [bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon],
    },
    {
      id: 2,
      categoryName: 'The Latest',
      books: [bookTheMetropolis],
    },
    {
      id: 3,
      categoryName: 'Coming Soon',
      books: [bookTheTinyDragon],
    },
  ];

  const [profile, setProfile] = useState(profileData);
  const [myBooks, setMyBooks] = useState(myBooksData);
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(1);

  function renderCategoryHeader() {
    const renderItem = ({ item  }) => {
      return (
        <TouchableOpacity
          style={styles.textHeaderCategores}
          onPress={() => setSelectedCategory(item.id)}>
          {selectedCategory == item.id && (
            <Text style={styles.activeCategores}>{item.categoryName}</Text>
          )}
          {selectedCategory != item.id && (
            <Text style={styles.textCategores}>{item.categoryName}</Text>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }

  function renderCategoryData() {
    var books : any = [];
    let selectedCateoryBook = categories.filter(
      (a) => a.id == selectedCategory
    );

    if (selectedCateoryBook.length > 0) {
      books = selectedCateoryBook[0].books;
    }

    const renderItem = ({ item  }) => {
      return (
        <View style={styles.catList}>
          <TouchableOpacity
            style={styles.onCatList}
            onPress={() =>
              navigation.navigate('BookDetail', {
                book: item,
              })
            }>
            {/** Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={styles.imgCat}
            />
            {/** Book name anh author */}
            <View style={styles.itemCat}>
              <View>
                <Text style={styles.catName}>{item.bookName}</Text>
                <Text style={styles.catAuthor}>{item.author}</Text>
              </View>
              {/** Book info */}
              <View style={styles.bookInfoCat}>
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={styles.iconInfo}
                />
                <Text style={styles.textIconInfo}>{item.pageNo}</Text>
                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={styles.iconInfo}
                />
                <Text style={styles.textIconInfo}>{item.readed}</Text>
              </View>

              {/**Genre */}
              <View style={styles.genreItems}>
                {item.genre.includes('Adventure') && (
                  <View
                    style={[
                      styles.contentGenre,
                      { backgroundColor: COLORS.darkGreen },
                    ]}>
                    <Text
                      style={[styles.textGenre, { color: COLORS.lightGreen }]}>
                      Adventure
                    </Text>
                  </View>
                )}
                {item.genre.includes('Romance') && (
                  <View
                    style={[
                      styles.contentGenre,
                      { backgroundColor: COLORS.darkRed },
                    ]}>
                    <Text
                      style={[styles.textGenre, { color: COLORS.lightRed }]}>
                      Romance
                    </Text>
                  </View>
                )}
                {item.genre.includes('Drama') && (
                  <View
                    style={[
                      styles.contentGenre,
                      { backgroundColor: COLORS.darkBlue },
                    ]}>
                    <Text
                      style={[styles.textGenre, { color: COLORS.lightBlue }]}>
                      Drama
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
          {/** BookMark Button */}
          <TouchableOpacity
            style={styles.buttonBookmark}
            onPress={() => console.log('BookMark ')}>
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={styles.iconBookmark}
            />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View style={styles.renderDataCat}>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSession}>
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>
      {/* Body Section */}

      <ScrollView style={styles.myBook}>
        {/* Body Section */}
        <View style={styles.bookContainer}>
          {renderMyBookSection(myBooks, navigation)}
        </View>
        {/* Categoryes Section */}
        <View style={styles.categorySetion}>{renderCategoryHeader()}</View>
        <View>{renderCategoryData()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  headerSession: {
    height: 200,
  },
  myBook: {
    marginTop: SIZES.radius,
  },

  categorySetion: {
    marginTop: SIZES.padding,
  },
  categoryContainer: {
    flex: 1,
    paddingLeft: SIZES.padding,
  },
  textHeaderCategores: {
    flex: 1,
    marginRight: SIZES.padding,
  },
  activeCategores: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  textCategores: {
    ...FONTS.h2,
    color: COLORS.lightGray,
  },
  renderDataCat: {
    flex: 1,
    marginTop: SIZES.radius,
    paddingLeft: SIZES.padding,
  },
  catList: {
    marginVertical: SIZES.base,
  },
  onCatList: {
    flex: 1,
    flexDirection: 'row',
  },
  imgCat: {
    width: 100,
    height: 150,
    borderRadius: 20,
  },
  itemCat: {
    flex: 1,
    marginLeft: SIZES.radius,
  },
  catName: {
    paddingRight: SIZES.padding,
    ...FONTS.h2,
    color: COLORS.white,
  },
  catAuthor: {
    ...FONTS.body3,
    color: COLORS.lightGray,
  },
  bookInfoCat: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
  },
  iconInfo: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
  textIconInfo: {
    ...FONTS.body4,
    color: COLORS.lightGray,
    paddingHorizontal: SIZES.radius,
  },
  genreItems: {
    flexDirection: 'row',
    marginTop: SIZES.base,
  },
  contentGenre: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.base,
    marginRight: SIZES.base,
    height: 40,
    borderRadius: SIZES.radius,
  },
  textGenre: {
    ...FONTS.body3,
  },
  buttonBookmark: {
    position: 'absolute',
    top: 5,
    right: 15,
  },
  iconBookmark: {
    width: 25,
    height: 25,
    tintColor: COLORS.lightGray,
  },
});
