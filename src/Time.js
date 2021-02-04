/* eslint no-use-before-define: ["error", { "variables": false }] */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import moment from 'moment';

import Color from './Color';
import { TIME_FORMAT } from './Constant';

export default function Time(
  { position, containerStyle, currentMessage, timeFormat, textStyle, timeTextStyle }
) {
  return (
    <View style={[styles[position].container, containerStyle[position]]}>
      <Text style={[styles[position].text, textStyle[position], timeTextStyle[position]]}>
        {moment(currentMessage.createdAt)
          .format(timeFormat)}
      </Text>
    </View>
  );
}

const containerStyle = {
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 5,
};

const textStyle = {
  fontSize: 10,
  backgroundColor: 'transparent',
  textAlign: 'right',
};

const styles = {
  left: StyleSheet.create({
    container: {
      ...containerStyle,
    },
    text: {
      color: Color.timeTextColor,
      ...textStyle,
    },
  }),
  right: StyleSheet.create({
    container: {
      ...containerStyle,
    },
    text: {
      color: Color.white,
      ...textStyle,
    },
  }),
};
