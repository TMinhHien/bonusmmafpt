import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SETTINGS_OPTIONS } from '../data/data';
import SettingOption from '../components/SettingOption';
import { Background, CameraIcon } from '../components/index';

export default function Profile() {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.coverContainer}>
          <Background width="100%" height="100%" />
        </View>

        {/* Profile Picture (Overlapping) */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarLetter}>H</Text>
          </View>
          <TouchableOpacity style={styles.cameraButton} activeOpacity={0.8}>
            <CameraIcon width="100%" height="100%" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.userName}>Tran Dang Viet Huy (HUYTDV1)</Text>
          <Text style={styles.userRole}>(FHL.F3.GST.GCX)</Text>
        </View>
      </View>

      <View>
        <ScrollView>
          {SETTINGS_OPTIONS.map((option, index) => (
            <View key={index}>
              <SettingOption
                option={option}
                total={SETTINGS_OPTIONS.length}
                index={index}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fffeff',
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: '#fffeff',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  coverContainer: {
    width: '100%',
    height: 150,
    marginTop: 10,
  },
  avatarWrapper: {
    marginTop: -65,
    alignItems: 'center',
    justifyContent: 'center',
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
    bottom: 5,
    right: 5,
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: 15,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  userRole: {
    fontSize: 16,
    color: '#555555',
    marginTop: 4,
  },
});
