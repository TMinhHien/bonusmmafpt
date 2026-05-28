import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { APP_CATEGORIES } from '../data/data';
import AppCategory from '../components/AppCategory';
import { GridViewIcon } from '../components/index';
import SearchBar from '../components/SearchBar';

export default function AllApp() {
  const [search, setSearch] = useState('');

  const filteredCategories = search.trim()
    ? APP_CATEGORIES.map(cat => ({
        ...cat,
        sections: cat.sections.filter(s =>
          s.title.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter(cat => cat.sections.length > 0)
    : APP_CATEGORIES;

  return (
    <View style={{ flex: 1, marginBottom: 0 }}>
      <View style={styles.navigationBar}>
        <View style={styles.searchBar}>
          <SearchBar value={search} onChangeText={text => setSearch(text)} />
        </View>
        <TouchableOpacity onPress={() => alert('Ongoing')} style={styles.appView}>
          <GridViewIcon width="100%" height="100%" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredCategories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <AppCategory categoryTitle={item.title} sections={item.sections} />
        )}
        ListHeaderComponent={
          <Text style={styles.title}>All Apps</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    display: 'flex',
    flexDirection: 'row',
    rowGap: 5,
    backgroundColor: '#fffeff',
    marginBottom: 0,
    paddingTop: 20,
  },
  searchBar: {
    marginHorizontal: 12,
    marginTop: 10,
    flexGrow: 1,
    flexShrink: 1,
    height: 40,
  },
  appView: {
    aspectRatio: 1,
    height: 25,
    flexShrink: 1,
    backgroundColor: '#fffeff',
    marginTop: 12,
    marginRight: 12,
  },
  title: {
    marginBottom: 16,
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
    backgroundColor: '#fffeff',
  },
});
