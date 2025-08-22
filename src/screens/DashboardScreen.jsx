import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MainLayout from '../screens/components/MainLayout';

const screenWidth = Dimensions.get('window').width;

export default function DashboardScreen() {
  const route = useRoute();
  const { projectId } = route.params || { projectId: 1 };

  // Mock project data
  const projects = [
    { id: 1, name: 'Acura Heights Tower', progress: '64%', duration: '18 months', amount: '$2.5M', status: 'Under Construction' },
    { id: 2, name: 'Commercial Residences', progress: '89%', duration: '14 months', amount: '$1.8M', status: 'Under Construction' },
    { id: 3, name: 'Corporate Landmark Project', progress: '52%', duration: '24 months', amount: '$3.2M', status: 'In Design' },
  ];

  const project = projects.find(p => p.id === projectId);
  const progressValue = parseInt(project?.progress || '0');

  // Pie chart data with three sectors
  const pieData = [
    { label: 'Approved', value: 45, color: '#4CAF50' },
    { label: 'Under Revision', value: 30, color: '#FF9800' },
    { label: 'Under Review', value: 25, color: '#2196F3' },
  ];

  // Line chart data
  const lineData = [20, 45, 28, 80, progressValue, 43];
  const maxValue = Math.max(...lineData);
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  return (
    <MainLayout title={project ? project.name : 'Project Dashboard'}>
      <ScrollView className="flex-1 px-5 py-4">
        {project ? (
          <>
            {/* Cards Section */}
            <Text className="text-lg font-semibold text-gray-800 mb-4">Project Overview</Text>
            <View className="flex-row flex-wrap justify-between mb-6">
              <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
                <View className="flex-row items-center mb-2">
                  <View className="w-8 h-8 bg-blue-100 rounded-full items-center justify-center mr-2">
                    <Text className="text-blue-600 text-lg">📋</Text>
                  </View>
                  <Text className="text-sm font-medium text-gray-800">Not Started</Text>
                </View>
                <Text className="text-xl font-bold text-gray-900">18</Text>
                <Text className="text-xs text-gray-500">Activities</Text>
              </View>

              <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
                <View className="flex-row items-center mb-2">
                  <View className="w-8 h-8 bg-orange-100 rounded-full items-center justify-center mr-2">
                    <Text className="text-orange-600 text-lg">📝</Text>
                  </View>
                  <Text className="text-sm font-medium text-gray-800">Drawings</Text>
                </View>
                <Text className="text-xl font-bold text-gray-900">1</Text>
                <Text className="text-xs text-gray-500">Under Review</Text>
              </View>

              <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
                <View className="flex-row items-center mb-2">
                  <View className="w-8 h-8 bg-green-100 rounded-full items-center justify-center mr-2">
                    <Text className="text-green-600 text-lg">📦</Text>
                  </View>
                  <Text className="text-sm font-medium text-gray-800">Open GRN</Text>
                </View>
                <Text className="text-xl font-bold text-gray-900">47</Text>
                <Text className="text-xs text-gray-500">Items</Text>
              </View>

              <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
                <View className="flex-row items-center mb-2">
                  <View className="w-8 h-8 bg-purple-100 rounded-full items-center justify-center mr-2">
                    <Text className="text-purple-600 text-lg">💰</Text>
                  </View>
                  <Text className="text-sm font-medium text-gray-800">Paid Bill</Text>
                </View>
                <Text className="text-xl font-bold text-gray-900">INR</Text>
                <Text className="text-xs text-gray-500">49,13,643</Text>
              </View>

              <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
                <View className="flex-row items-center mb-2">
                  <View className="w-8 h-8 bg-red-100 rounded-full items-center justify-center mr-2">
                    <Text className="text-red-600 text-lg">📑</Text>
                  </View>
                  <Text className="text-sm font-medium text-gray-800">Open Indent</Text>
                </View>
                <Text className="text-xl font-bold text-gray-900">22</Text>
                <Text className="text-xs text-gray-500">Requests</Text>
              </View>

              <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
                <View className="flex-row items-center mb-2">
                  <View className="w-8 h-8 bg-yellow-100 rounded-full items-center justify-center mr-2">
                    <Text className="text-yellow-600 text-lg">❓</Text>
                  </View>
                  <Text className="text-sm font-medium text-gray-800">Open RFI</Text>
                </View>
                <Text className="text-xl font-bold text-gray-900">2</Text>
                <Text className="text-xs text-gray-500">Requests</Text>
              </View>

              <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
                <View className="flex-row items-center mb-2">
                  <View className="w-8 h-8 bg-indigo-100 rounded-full items-center justify-center mr-2">
                    <Text className="text-indigo-600 text-lg">🔍</Text>
                  </View>
                  <Text className="text-sm font-medium text-gray-800">Re-inspect</Text>
                </View>
                <Text className="text-xl font-bold text-gray-900">1</Text>
                <Text className="text-xs text-gray-500">Required</Text>
              </View>

              <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
                <View className="flex-row items-center mb-2">
                  <View className="w-8 h-8 bg-pink-100 rounded-full items-center justify-center mr-2">
                    <Text className="text-pink-600 text-lg">📄</Text>
                  </View>
                  <Text className="text-sm font-medium text-gray-800">Submittals</Text>
                </View>
                <Text className="text-xl font-bold text-gray-900">10</Text>
                <Text className="text-xs text-gray-500">Under Review</Text>
              </View>
            </View>

            {/* Pie Chart Section */}
            <Text className="text-lg font-semibold text-gray-800 mb-4">Document Status</Text>
            <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6 items-center">
              <View className="flex-row items-center justify-center mb-4">
                <View className="w-40 h-40 rounded-full bg-gray-100 justify-center items-center">
                  {/* Pie chart sectors */}
                  <View 
                    className="absolute w-full h-full rounded-full border-8 border-green-500"
                    style={{
                      transform: [{ rotate: '-90deg' }],
                      clipPath: `inset(0 0 0 ${100 - (pieData[0].value)}%)`,
                    }}
                  />
                  <View 
                    className="absolute w-full h-full rounded-full border-8 border-orange-500"
                    style={{
                      transform: [{ rotate: `${-90 + (pieData[0].value / 100) * 360}deg` }],
                      clipPath: `inset(0 0 0 ${100 - (pieData[1].value)}%)`,
                    }}
                  />
                  <View 
                    className="absolute w-full h-full rounded-full border-8 border-blue-500"
                    style={{
                      transform: [{ rotate: `${-90 + ((pieData[0].value + pieData[1].value) / 100) * 360}deg` }],
                      clipPath: `inset(0 0 0 ${100 - (pieData[2].value)}%)`,
                    }}
                  />
                  <View className="w-28 h-28 rounded-full bg-white justify-center items-center">
                    <Text className="text-xl font-bold text-gray-800">100</Text>
                    <Text className="text-xs text-gray-500">Documents</Text>
                  </View>
                </View>
              </View>
              
              <View className="flex-row justify-center flex-wrap mt-4">
                {pieData.map((item, index) => (
                  <View key={index} className="flex-row items-center mx-3 mb-2">
                    <View className="w-4 h-4 rounded-sm mr-2" style={{ backgroundColor: item.color }} />
                    <Text className="text-sm text-gray-600">{item.label}: {item.value}%</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Line Chart Section */}
            <Text className="text-lg font-semibold text-gray-800 mb-4">Progress Timeline</Text>
            <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
              <View className="h-48 flex-row items-end justify-between px-2">
                {lineData.map((value, index) => (
                  <View key={index} className="items-center" style={{ width: `${100 / lineData.length}%` }}>
                    <View 
                      className="bg-purple-600 rounded-t-sm w-5"
                      style={{ height: `${(value / maxValue) * 100}%` }}
                    />
                    <Text className="text-xs text-gray-600 mt-2">{labels[index]}</Text>
                  </View>
                ))}
              </View>
              
              <View className="flex-row justify-center mt-4">
                <View className="flex-row items-center mr-4">
                  <View className="w-4 h-4 bg-purple-600 rounded-sm mr-2" />
                  <Text className="text-sm text-gray-600">Progress</Text>
                </View>
              </View>
            </View>
          </>
        ) : (
          <Text className="text-sm text-gray-600">Project not found.</Text>
        )}
      </ScrollView>
    </MainLayout>
  );
}