import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const SearchBar = ({ value, onChangeText, placeholder = "Type feature's name" }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9e5e8',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 36,
  },
  searchIcon: {
    fontSize: 15,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#444',
    paddingVertical: 0,
  },
});

export default SearchBar;
