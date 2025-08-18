import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MainLayout from '../screens/components/MainLayout'; // Adjust the import path as necessary

export default function SettingsScheduleScreen() {
  return (
    <MainLayout title="Schedule">
      <ScrollView className="flex-1 px-6 py-4">
        <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Schedule Settings</Text>
          <Text className="text-sm text-gray-600">Manage project schedules.</Text>
        </View>
      </ScrollView>
    </MainLayout>
  );
}