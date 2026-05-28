import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SETTINGS_OPTIONS } from '../data/data';
import SettingOption from '../components/SettingOption';
import { CameraIcon } from '../components/index';
import ProfileBackground from '../assets/drawable-component/profile_background';

export default function Profile() {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <ScrollView>
        {/* Cover banner */}
        <View style={styles.coverContainer}>
          <ProfileBackground width="100%" height="100%" />
        </View>

        {/* Avatar overlapping cover */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarLetter}>K</Text>
          </View>
          <TouchableOpacity style={styles.cameraButton} activeOpacity={0.8}>
            <CameraIcon width="100%" height="100%" />
          </TouchableOpacity>
        </View>

        {/* Name & role */}
        <View style={styles.infoContainer}>
          <Text style={styles.userName}>Phạm Quang Khang (KHANGPQ3)</Text>
          <Text style={styles.userRole}>(BM SE)</Text>
        </View>

        {/* Settings list */}
        <View style={styles.settingsList}>
          {SETTINGS_OPTIONS.map((option, index) => (
            <View key={option.id}>
              <SettingOption
                option={option}
                total={SETTINGS_OPTIONS.length}
                index={index}
              />
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>myFPT Version 5.9.10</Text>
          <Text style={styles.footerText}>Copyright @ FPT Software 2021</Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  coverContainer: {
    width: '100%',
    height: 150,
  },
  avatarWrapper: {
    marginTop: -65,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  avatarCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#def3fe',
    borderWidth: 5,
    borderColor: '#ffffff',
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
    bottom: 5,
    right: '32%',
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f7',
  },
  userName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  userRole: {
    fontSize: 15,
    color: '#555555',
    marginTop: 4,
  },
  settingsList: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingHorizontal: 20,
  },
  footer: {
    marginTop: 24,
    marginBottom: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#aaaaaa',
    lineHeight: 20,
  },
});
