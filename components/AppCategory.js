import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppCategorySection from './AppCategorySection';

const AppCategory = ({ categoryTitle, sections }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryTitle}</Text>
      <View style={styles.sectionContainer}>
        {sections.map((sec, i) => (
          <AppCategorySection
            key={sec.id}
            icon={sec.icon}
            title={sec.title}
            subtitle={sec.subtitle}
            total={sections.length}
            index={i}
          />
        ))}
      </View>
    </View>
  );
};

export default AppCategory;

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
  },
  title: {
    marginBottom: 6,
    paddingLeft: 20,
    fontWeight: '600',
    fontSize: 13,
    color: '#494649',
    letterSpacing: 0.5,
  },
  sectionContainer: {
    backgroundColor: '#fffeff',
  },
});
