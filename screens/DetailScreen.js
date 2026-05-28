import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { name, id } = route.params;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 80,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const infoItems = [
    { icon: '👤', label: 'Họ và Tên', value: name },
    { icon: '🆔', label: 'Mã số', value: id },
    { icon: '🏫', label: 'Trường', value: 'FPT University' },
    { icon: '📱', label: 'Framework', value: 'React Native + Expo' },
    { icon: '🌐', label: 'Platform', value: 'iOS / Android / Web' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

      {/* Background decoration */}
      <View style={styles.circle1} />
      <View style={styles.circle2} />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [
                { translateY: slideAnim },
                { scale: scaleAnim },
              ],
            },
          ]}
        >
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {name ? name.charAt(0).toUpperCase() : '?'}
              </Text>
            </View>
            <View style={styles.onlineDot} />
          </View>

          <Text style={styles.title}>📋 Chi Tiết</Text>
          <Text style={styles.subtitle}>
            Thông tin được truyền từ màn hình Home
          </Text>

          {/* Info Cards */}
          <View style={styles.infoContainer}>
            {infoItems.map((item, index) => (
              <View key={index} style={styles.infoRow}>
                <View style={styles.infoIconBox}>
                  <Text style={styles.infoIcon}>{item.icon}</Text>
                </View>
                <View style={styles.infoTextBox}>
                  <Text style={styles.infoLabel}>{item.label}</Text>
                  <Text style={styles.infoValue}>{item.value}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Tag row */}
          <View style={styles.tagRow}>
            {['Expo', 'React Native', 'Navigation'].map((tag, i) => (
              <View key={i} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          {/* Back Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>← Quay lại Home</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    overflow: 'hidden',
  },
  circle1: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#8b5cf620',
    top: -60,
    left: -60,
  },
  circle2: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#6366f115',
    bottom: -50,
    right: -50,
  },
  scroll: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 32,
  },
  content: {
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6366f1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  avatarText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#22c55e',
    borderWidth: 2,
    borderColor: '#0f172a',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 28,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#1e293b',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#334155',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  infoIconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  infoIcon: {
    fontSize: 18,
  },
  infoTextBox: {
    flex: 1,
  },
  infoLabel: {
    color: '#64748b',
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  infoValue: {
    color: '#e2e8f0',
    fontSize: 15,
    fontWeight: '500',
  },
  tagRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 28,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tag: {
    backgroundColor: '#6366f120',
    borderWidth: 1,
    borderColor: '#6366f140',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tagText: {
    color: '#818cf8',
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#1e293b',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 14,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  buttonText: {
    color: '#e2e8f0',
    fontSize: 16,
    fontWeight: '600',
  },
});
