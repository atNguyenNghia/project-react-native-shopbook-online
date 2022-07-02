import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { icons, SIZES, FONTS, COLORS } from '../constants/index';

const LineDriver = () => {
  return (
    <View style={styles.lineDriver}>
      <View style={styles.line}></View>
    </View>
  );
};

function renderButtonSection() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.contentContainer}>
        {/*  Claim */}
        <TouchableOpacity
          style={styles.onClick}
          onPress={() => console.log('Claim')}>
          <View style={styles.buttonContent}>
            <Image
              source={icons.claim_icon}
              resizeMode="contain"
              style={styles.buttonIcon}
            />
            <Text style={styles.textButton}>Claim</Text>
          </View>
        </TouchableOpacity>
        {/*  Driver */}
        <LineDriver />
        {/*  Get Point */}
        <TouchableOpacity
          style={styles.onClick}
          onPress={() => console.log('Get Point')}>
          <View style={styles.buttonContent}>
            <Image
              source={icons.point_icon}
              resizeMode="contain"
              style={styles.buttonIcon}
            />
            <Text style={styles.textButton}>Get Point</Text>
          </View>
        </TouchableOpacity>
        {/*  Driver */}
        <LineDriver />
        {/*  My Card */}
        <TouchableOpacity
          style={styles.onClick}
          onPress={() => console.log('Mycard')}>
          <View style={styles.buttonContent}>
            <Image
              source={icons.card_icon}
              resizeMode="contain"
              style={styles.buttonIcon}
            />
            <Text style={styles.textButton}>My Card</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default renderButtonSection;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.padding,
  },
  contentContainer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radius,
  },
  onClick: {
    flex: 1,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 30,
    height: 30,
  },
  textButton: {
    marginLeft: SIZES.base,
    ...FONTS.body3,
    color: COLORS.white,
  },
  lineDriver: {
    width: 1,
    paddingVertical: 18,
  },
  line: {
    flex: 1,
    borderColor: COLORS.lightGray,
    borderLeftWidth: 1,
  },
});
