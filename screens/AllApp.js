import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { APP_CATEGORIES } from '../data/data';
import AppCategory from '../components/AppCategory';
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
    <View style={{ flex: 1, backgroundColor: '#f2eff2' }}>
      {/* Top navigation bar */}
      <View style={styles.navigationBar}>
        <View style={styles.searchBar}>
          <SearchBar value={search} onChangeText={text => setSearch(text)} />
        </View>
        <TouchableOpacity onPress={() => alert('Ongoing')} style={styles.gridBtn}>
          <Text style={styles.gridIcon}>⊞</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={filteredCategories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <AppCategory categoryTitle={item.title} sections={item.sections} />
        )}
        ListHeaderComponent={
          <Text style={styles.pageTitle}>All Apps</Text>
        }
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fffeff',
    paddingTop: 48,
    paddingBottom: 8,
    paddingHorizontal: 12,
  },
  searchBar: {
    flex: 1,
    height: 36,
    marginRight: 10,
  },
  gridBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridIcon: {
    fontSize: 22,
    color: '#555',
  },
  pageTitle: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 8,
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#fffeff',
    color: '#1a1a1a',
  },
});
