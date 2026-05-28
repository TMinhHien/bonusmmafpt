import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppCategorySection({ icon, title, subtitle, total, index }) {
  const isLast = index === total - 1;
  return (
    <View style={isLast ? styles.containerNoBorder : styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
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
    paddingTop: 18,
    paddingBottom: 18,
    gap: 12,
    borderBottomColor: '#eae7ea',
    borderBottomWidth: 1,
  },
  containerNoBorder: {
    marginLeft: 18,
    marginRight: 18,
    flexDirection: 'row',
    paddingTop: 18,
    paddingBottom: 18,
    gap: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#f0f4ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4,
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#1a1a1a',
  },
  detailSubtitle: {
    color: '#5a585b',
    fontSize: 13,
    lineHeight: 18,
  },
});
