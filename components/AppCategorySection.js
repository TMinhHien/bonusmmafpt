import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppCategorySection({ Icon, title, subtitle, total, index }) {
  const isLast = index === total - 1;
  return (
    <View style={isLast ? styles.containerNoBorder : styles.container}>
      <View style={styles.iconContainer}>
        {typeof Icon === 'function' && (
          <Icon width="100%" height="100%" />
        )}
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>{title}</Text>
        {!!subtitle && <Text style={styles.detailSubtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginRight: 18,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    gap: 10,
    borderBottomColor: '#eae7ea',
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  containerNoBorder: {
    marginLeft: 18,
    marginRight: 18,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    gap: 10,
  },
  iconContainer: {
    aspectRatio: 1,
    width: 50,
  },
  detailContainer: {
    flexShrink: 1,
    flexDirection: 'column',
    rowGap: 10,
  },
  detailTitle: {
    fontWeight: 'bold',
  },
  detailSubtitle: {
    color: '#5a585b',
  },
});
