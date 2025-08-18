import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function DashboardScreen() {
  const route = useRoute();
  const { projectId } = route.params;

  // Mock project data (replace with API call or data fetching logic)
  const projects = [
    {
      id: 1,
      name: 'Acura Heights Tower',
      progress: '64%',
      duration: '18 months',
      amount: '$2.5M',
      status: 'Under Construction'
    },
    {
      id: 2,
      name: 'Commercial Residences',
      progress: '89%',
      duration: '14 months',
      amount: '$1.8M',
      status: 'Under Construction'
    },
    {
      id: 3,
      name: 'Corporate Landmark Project',
      progress: '52%',
      duration: '24 months',
      amount: '$3.2M',
      status: 'In Design'
    },
  ];

  const project = projects.find(p => p.id === projectId);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView className="flex-1 bg-gray-50">
        <View className="px-6 py-8">
          <Text className="text-2xl font-bold text-gray-800 mb-4">
            {project ? project.name : 'Project Not Found'}
          </Text>
          {project ? (
            <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <Text className="text-lg font-semibold text-gray-800 mb-2">Project Details</Text>
              <Text className="text-sm text-gray-600 mb-1">Status: {project.status}</Text>
              <Text className="text-sm text-gray-600 mb-1">Duration: {project.duration}</Text>
              <Text className="text-sm text-gray-600 mb-1">Amount: {project.amount}</Text>
              <Text className="text-sm text-gray-600">Progress: {project.progress}</Text>
            </View>
          ) : (
            <Text className="text-sm text-gray-600">No project data available.</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
}