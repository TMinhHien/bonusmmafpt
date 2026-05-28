import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { SETTINGS_OPTIONS } from '../data/data';
import SettingOption from '../components/SettingOption';

export default function Profile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        {/* Cover banner */}
        <View style={styles.coverContainer}>
          <View style={styles.coverGradient} />
        </View>

        {/* Avatar overlapping */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarLetter}>H</Text>
          </View>
          <TouchableOpacity style={styles.cameraButton} activeOpacity={0.8}>
            <Text style={styles.cameraIcon}>📷</Text>
          </TouchableOpacity>
        </View>

        {/* Name & role */}
        <View style={styles.infoContainer}>
          <Text style={styles.userName}>Tran Dang Viet Huy (HUYTDV1)</Text>
          <Text style={styles.userRole}>(FHL.F3.GST.GCX)</Text>
        </View>

        {/* Settings options */}
        <View style={styles.settingsList}>
          {SETTINGS_OPTIONS.map((option, index) => (
            <SettingOption
              key={option.id}
              option={option}
              total={SETTINGS_OPTIONS.length}
              index={index}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2eff2',
  },
  coverContainer: {
    width: '100%',
    height: 160,
    overflow: 'hidden',
  },
  coverGradient: {
    flex: 1,
    backgroundColor: '#3b82f6',
    // Simulate gradient with a lighter overlay
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  avatarWrapper: {
    marginTop: -65,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 0,
  },
  avatarCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#def3fe',
    borderWidth: 5,
    borderColor: '#fffeff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatarLetter: {
    fontSize: 60,
    fontWeight: '500',
    color: '#2d71ac',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 2,
    right: '32%',
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  cameraIcon: {
    fontSize: 18,
  },
  infoContainer: {
    marginTop: 14,
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f2eff2',
  },
  userName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  userRole: {
    fontSize: 15,
    color: '#555',
    marginTop: 4,
  },
  settingsList: {
    marginHorizontal: 0,
    backgroundColor: '#fffeff',
    borderTopWidth: 1,
    borderTopColor: '#e0dde0',
  },
});
