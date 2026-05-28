import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SettingOption({ option, total, index }) {
  const isLast = index === total - 1;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={isLast ? styles.containerNoBorder : styles.container}
      onPress={() => alert(option.title)}
    >
      <View style={styles.iconWrapper}>
        <Text style={styles.icon}>{option.icon}</Text>
      </View>
      <Text style={styles.titleText}>{option.title}</Text>
      {option.id !== 'logout' && (
        <Text style={styles.arrow}>›</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fffeff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D6',
  },
  containerNoBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fffeff',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  iconWrapper: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#eef2ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  icon: {
    fontSize: 18,
  },
  titleText: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    fontWeight: '600',
  },
  arrow: {
    fontSize: 22,
    color: '#8E8E93',
    opacity: 0.7,
  },
});
