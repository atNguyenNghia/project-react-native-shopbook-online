import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { icons, SIZES, FONTS, COLORS } from '../constants/index';

function renderHeader(profile :any) {
  return (
    <View style={styles.headerContent}>
      <View style={styles.leftContent}>
        <View style={styles.content}>
          <Text style={styles.text}>GoodMornning</Text>
          <Text style={styles.textName}>{profile.name}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.rightContent}
        onPress={() => console.log('Book')}>
        <View style={styles.buttonPoint}>
          <View style={styles.getPointIcon}>
            <Image
              source={icons.plus_icon}
              resizeMode="contain"
              style={styles.iconPlus}
            />
          </View>
          <Text style={styles.totalPoint}> {profile.point} P</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default renderHeader;

const styles = StyleSheet.create({
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  leftContent: {
    flex: 1,
  },
  content: {
    marginRight: SIZES.padding,
  },
  text: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  textName: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  rightContent: {
    backgroundColor: COLORS.primary,
    height: 40,
    paddingLeft: 3,
    paddingRight: SIZES.radius,
    borderRadius: 20,
  },
  buttonPoint: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  getPointIcon: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  totalPoint: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.body3,
  },
  iconPlus: {
    width: 20,
    height: 20,
  },
});
