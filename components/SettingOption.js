import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CommonArrowIcon } from './index';

export default function SettingOption({ option, total, index }) {
  const IconComponent = option.Icon;
  const isLast = index === total - 1;
  return (
    <View style={isLast ? styles.containerWithNoBorder : styles.container}>
      <View style={styles.iconWrapper}>
        {typeof IconComponent === 'function' && (
          <IconComponent width="100%" height="100%" fill="#4A70C1" />
        )}
      </View>
      <Text style={styles.titleText}>{option.title}</Text>
      {option && option.id !== 'logout' && (
        <View style={styles.arrowWrapper}>
          <CommonArrowIcon width="100%" height="100%" color="#8E8E93" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fffeff',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D6',
  },
  containerWithNoBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fffeff',
    paddingVertical: 15,
  },
  iconWrapper: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  titleText: {
    flex: 1,
    fontSize: 15,
    color: '#000000',
    fontWeight: '600',
  },
  arrowWrapper: {
    width: 12,
    height: 18,
    opacity: 0.5,
  },
});
