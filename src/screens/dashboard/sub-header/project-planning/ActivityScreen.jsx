import React from 'react';
  import { View, Text } from 'react-native';
import MainLayout from '../../../components/MainLayout';

  export default function ActivityScreen() {
    return (
      <MainLayout title="Activity">
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-2xl font-bold text-gray-800">Activity</Text>
        <Text className="text-gray-600 mt-2">Manage your bill of quantities here.</Text>
      </View>
      </MainLayout>
    );
  }