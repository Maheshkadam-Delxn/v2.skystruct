// // import React from 'react';
// // import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
// // import { useRoute } from '@react-navigation/native';
// // import MainLayout from '../screens/components/MainLayout';
// // import { PieChart } from 'react-native-gifted-charts'; // Assuming you're using this library for better pie charts; install via npm if needed
// // import { BarChart } from 'react-native-gifted-charts'
// // const screenWidth = Dimensions.get('window').width;

// // export default function DashboardScreen() {
// //   const route = useRoute();
// //   const { projectId } = route.params || { projectId: 1 };

// //   // Mock project data
// //   const projects = [
// //     { id: 1, name: 'Acura Heights Tower', progress: '64%', duration: '18 months', amount: '$2.5M', status: 'Under Construction' },
// //     { id: 2, name: 'Commercial Residences', progress: '89%', duration: '14 months', amount: '$1.8M', status: 'Under Construction' },
// //     { id: 3, name: 'Corporate Landmark Project', progress: '52%', duration: '24 months', amount: '$3.2M', status: 'In Design' },
// //   ];

// //   const project = projects.find(p => p.id === projectId);
// //   const progressValue = parseInt(project?.progress || '0');

// //   // Pie chart data with three sectors
// //   const pieData = [
// //     { label: 'Approved', value: 45, color: '#4CAF50' },
// //     { label: 'Under Revision', value: 30, color: '#FF9800' },
// //     { label: 'Under Review', value: 25, color: '#2196F3' },
// //   ];

// //   // Line chart data
// //   const lineData = [20, 45, 28, 80, progressValue, 43];
// //   const maxValue = Math.max(...lineData);
// //   const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

// //   return (
// //     <MainLayout title={project ? project.name : 'Project Dashboard'}>
// //       <ScrollView className="flex-1 px-5 py-4">
// //         {project ? (
// //           <>
// //             {/* Cards Section */}
// //             <Text className="text-lg font-semibold text-gray-800 mb-4">Project Overview</Text>
// //             <View className="flex-row flex-wrap justify-between mb-6">
// //               <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
// //                 <View className="flex-row items-center mb-2">
// //                   <View className="w-8 h-8 bg-blue-100 rounded-full items-center justify-center mr-2">
// //                     <Text className="text-blue-600 text-lg">📋</Text>
// //                   </View>
// //                   <Text className="text-sm font-medium text-gray-800">Not Started</Text>
// //                 </View>
// //                 <Text className="text-xl font-bold text-gray-900">18</Text>
// //                 <Text className="text-xs text-gray-500">Activities</Text>
// //               </View>

// //               <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
// //                 <View className="flex-row items-center mb-2">
// //                   <View className="w-8 h-8 bg-orange-100 rounded-full items-center justify-center mr-2">
// //                     <Text className="text-orange-600 text-lg">📝</Text>
// //                   </View>
// //                   <Text className="text-sm font-medium text-gray-800">Drawings</Text>
// //                 </View>
// //                 <Text className="text-xl font-bold text-gray-900">1</Text>
// //                 <Text className="text-xs text-gray-500">Under Review</Text>
// //               </View>

// //               <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
// //                 <View className="flex-row items-center mb-2">
// //                   <View className="w-8 h-8 bg-green-100 rounded-full items-center justify-center mr-2">
// //                     <Text className="text-green-600 text-lg">📦</Text>
// //                   </View>
// //                   <Text className="text-sm font-medium text-gray-800">Open GRN</Text>
// //                 </View>
// //                 <Text className="text-xl font-bold text-gray-900">47</Text>
// //                 <Text className="text-xs text-gray-500">Items</Text>
// //               </View>

// //               <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
// //                 <View className="flex-row items-center mb-2">
// //                   <View className="w-8 h-8 bg-purple-100 rounded-full items-center justify-center mr-2">
// //                     <Text className="text-purple-600 text-lg">💰</Text>
// //                   </View>
// //                   <Text className="text-sm font-medium text-gray-800">Paid Bill</Text>
// //                 </View>
// //                 <Text className="text-xl font-bold text-gray-900">INR</Text>
// //                 <Text className="text-xs text-gray-500">49,13,643</Text>
// //               </View>

// //               <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
// //                 <View className="flex-row items-center mb-2">
// //                   <View className="w-8 h-8 bg-red-100 rounded-full items-center justify-center mr-2">
// //                     <Text className="text-red-600 text-lg">📑</Text>
// //                   </View>
// //                   <Text className="text-sm font-medium text-gray-800">Open Indent</Text>
// //                 </View>
// //                 <Text className="text-xl font-bold text-gray-900">22</Text>
// //                 <Text className="text-xs text-gray-500">Requests</Text>
// //               </View>

// //               <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
// //                 <View className="flex-row items-center mb-2">
// //                   <View className="w-8 h-8 bg-yellow-100 rounded-full items-center justify-center mr-2">
// //                     <Text className="text-yellow-600 text-lg">❓</Text>
// //                   </View>
// //                   <Text className="text-sm font-medium text-gray-800">Open RFI</Text>
// //                 </View>
// //                 <Text className="text-xl font-bold text-gray-900">2</Text>
// //                 <Text className="text-xs text-gray-500">Requests</Text>
// //               </View>

// //               <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
// //                 <View className="flex-row items-center mb-2">
// //                   <View className="w-8 h-8 bg-indigo-100 rounded-full items-center justify-center mr-2">
// //                     <Text className="text-indigo-600 text-lg">🔍</Text>
// //                   </View>
// //                   <Text className="text-sm font-medium text-gray-800">Re-inspect</Text>
// //                 </View>
// //                 <Text className="text-xl font-bold text-gray-900">1</Text>
// //                 <Text className="text-xs text-gray-500">Required</Text>
// //               </View>

// //               <View className="w-[48%] bg-white p-3 rounded-xl mb-4 border border-gray-200 shadow-sm">
// //                 <View className="flex-row items-center mb-2">
// //                   <View className="w-8 h-8 bg-pink-100 rounded-full items-center justify-center mr-2">
// //                     <Text className="text-pink-600 text-lg">📄</Text>
// //                   </View>
// //                   <Text className="text-sm font-medium text-gray-800">Submittals</Text>
// //                 </View>
// //                 <Text className="text-xl font-bold text-gray-900">10</Text>
// //                 <Text className="text-xs text-gray-500">Under Review</Text>
// //               </View>
// //             </View>

// //             {/* Pie Chart Section */}
// //             <Text className="text-lg font-semibold text-gray-800 mb-4">Document Status</Text>
// //             <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6 items-center">
// //               <View className="flex-row items-center justify-center mb-4">
// //                 <View className="w-40 h-40 rounded-full bg-gray-100 justify-center items-center">
// //                   {/* Pie chart sectors */}
// //                   <View 
// //                     className="absolute w-full h-full rounded-full border-8 border-green-500"
// //                     style={{
// //                       transform: [{ rotate: '-90deg' }],
// //                       clipPath: `inset(0 0 0 ${100 - (pieData[0].value)}%)`,
// //                     }}
// //                   />
// //                   <View 
// //                     className="absolute w-full h-full rounded-full border-8 border-orange-500"
// //                     style={{
// //                       transform: [{ rotate: `${-90 + (pieData[0].value / 100) * 360}deg` }],
// //                       clipPath: `inset(0 0 0 ${100 - (pieData[1].value)}%)`,
// //                     }}
// //                   />
// //                   <View 
// //                     className="absolute w-full h-full rounded-full border-8 border-blue-500"
// //                     style={{
// //                       transform: [{ rotate: `${-90 + ((pieData[0].value + pieData[1].value) / 100) * 360}deg` }],
// //                       clipPath: `inset(0 0 0 ${100 - (pieData[2].value)}%)`,
// //                     }}
// //                   />
// //                   <View className="w-28 h-28 rounded-full bg-white justify-center items-center">
// //                     <Text className="text-xl font-bold text-gray-800">100</Text>
// //                     <Text className="text-xs text-gray-500">Documents</Text>
// //                   </View>
// //                 </View>
// //               </View>
              
// //               <View className="flex-row justify-center flex-wrap mt-4">
// //                 {pieData.map((item, index) => (
// //                   <View key={index} className="flex-row items-center mx-3 mb-2">
// //                     <View className="w-4 h-4 rounded-sm mr-2" style={{ backgroundColor: item.color }} />
// //                     <Text className="text-sm text-gray-600">{item.label}: {item.value}%</Text>
// //                   </View>
// //                 ))}
// //               </View>
// //             </View>

// //             {/* Line Chart Section */}
// //             <Text className="text-lg font-semibold text-gray-800 mb-4">Progress Timeline</Text>
// //             <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
// //               <View className="h-48 flex-row items-end justify-between px-2">
// //                 {lineData.map((value, index) => (
// //                   <View key={index} className="items-center" style={{ width: `${100 / lineData.length}%` }}>
// //                     <View 
// //                       className="bg-purple-600 rounded-t-sm w-5"
// //                       style={{ height: `${(value / maxValue) * 100}%` }}
// //                     />
// //                     <Text className="text-xs text-gray-600 mt-2">{labels[index]}</Text>
// //                   </View>
// //                 ))}
// //               </View>
              
// //               <View className="flex-row justify-center mt-4">
// //                 <View className="flex-row items-center mr-4">
// //                   <View className="w-4 h-4 bg-purple-600 rounded-sm mr-2" />
// //                   <Text className="text-sm text-gray-600">Progress</Text>
// //                 </View>
// //               </View>
// //             </View>
// //           </>
// //         ) : (
// //           <Text className="text-sm text-gray-600">Project not found.</Text>
// //         )}
// //       </ScrollView>
// //     </MainLayout>
// //   );
// // }
// import React from 'react';
// import { View, Text, ScrollView, Dimensions } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import MainLayout from '../screens/components/MainLayout';
// import { PieChart, LineChart } from 'react-native-gifted-charts'; // Switched to LineChart for more professional timeline view

// const screenWidth = Dimensions.get('window').width;

// // Professional color scheme
// const colors = {
//   primary: '#2563EB',
//   secondary: '#4F46E5',
//   accent: '#10B981',
//   warning: '#F59E0B',
//   info: '#3B82F6',
//   background: '#F9FAFB',
//   text: '#1F2937',
//   subtext: '#6B7280',
// };

// // Sample data for pie chart with subtle icons
// const pieData = [
//   { value: 45, color: colors.accent, label: 'Approved', icon: '✅' },
//   { value: 30, color: colors.warning, label: 'Under Revision', icon: '🔄' },
//   { value: 25, color: colors.info, label: 'Under Review', icon: '🔍' },
// ];

// // Sample data for line chart (progress timeline)
// const lineData = [
//   { value: 20, dataPointText: '20' },
//   { value: 45, dataPointText: '45' },
//   { value: 28, dataPointText: '28' },
//   { value: 80, dataPointText: '80' },
//   { value: 64, dataPointText: '64' },
//   { value: 43, dataPointText: '43' },
// ];
// const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

// export default function DashboardScreen() {
//   const route = useRoute();
//   const { projectId } = route.params || { projectId: 1 };

//   // Mock project data
//   const projects = [
//     { id: 1, name: 'Acura Heights Tower', progress: '64%', duration: '18 months', amount: '$2.5M', status: 'Under Construction' },
//     { id: 2, name: 'Commercial Residences', progress: '89%', duration: '14 months', amount: '$1.8M', status: 'Under Construction' },
//     { id: 3, name: 'Corporate Landmark Project', progress: '52%', duration: '24 months', amount: '$3.2M', status: 'In Design' },
//   ];

//   const project = projects.find(p => p.id === projectId);

//   return (
//     // <></>
//     <MainLayout title={project ? project.name : 'Project Dashboard'}>
//       <ScrollView className="flex-1 px-5 py-6 bg-gray-50">
//         {project ? (
//           <>
//             {/* Project Overview Cards - More professional with larger icons, better spacing */}
//             <Text className="text-xl font-bold text-gray-900 mb-5">Project Overview</Text>
//             <View className="flex-row flex-wrap justify-between mb-8">
//               <View className="w-[48%] bg-white p-5 rounded-2xl mb-4 border border-gray-200 shadow-lg">
//                 <View className="flex-row items-center mb-4">
//                   <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center mr-4">
//                     <Text className="text-blue-600 text-2xl">📋</Text>
//                   </View>
//                   <Text className="text-base font-semibold text-gray-900">Not Started</Text>
//                 </View>
//                 <Text className="text-3xl font-extrabold text-gray-900">18</Text>
//                 <Text className="text-sm text-gray-500 mt-1">Activities</Text>
//               </View>

//               <View className="w-[48%] bg-white p-5 rounded-2xl mb-4 border border-gray-200 shadow-lg">
//                 <View className="flex-row items-center mb-4">
//                   <View className="w-12 h-12 bg-orange-50 rounded-full items-center justify-center mr-4">
//                     <Text className="text-orange-600 text-2xl">📝</Text>
//                   </View>
//                   <Text className="text-base font-semibold text-gray-900">Drawings</Text>
//                 </View>
//                 <Text className="text-3xl font-extrabold text-gray-900">1</Text>
//                 <Text className="text-sm text-gray-500 mt-1">Under Review</Text>
//               </View>

//               <View className="w-[48%] bg-white p-5 rounded-2xl mb-4 border border-gray-200 shadow-lg">
//                 <View className="flex-row items-center mb-4">
//                   <View className="w-12 h-12 bg-green-50 rounded-full items-center justify-center mr-4">
//                     <Text className="text-green-600 text-2xl">📦</Text>
//                   </View>
//                   <Text className="text-base font-semibold text-gray-900">Open GRN</Text>
//                 </View>
//                 <Text className="text-3xl font-extrabold text-gray-900">47</Text>
//                 <Text className="text-sm text-gray-500 mt-1">Items</Text>
//               </View>

//               <View className="w-[48%] bg-white p-5 rounded-2xl mb-4 border border-gray-200 shadow-lg">
//                 <View className="flex-row items-center mb-4">
//                   <View className="w-12 h-12 bg-purple-50 rounded-full items-center justify-center mr-4">
//                     <Text className="text-purple-600 text-2xl">💰</Text>
//                   </View>
//                   <Text className="text-base font-semibold text-gray-900">Paid Bill</Text>
//                 </View>
//                 <Text className="text-3xl font-extrabold text-gray-900">INR</Text>
//                 <Text className="text-sm text-gray-500 mt-1">49,13,643</Text>
//               </View>

//               <View className="w-[48%] bg-white p-5 rounded-2xl mb-4 border border-gray-200 shadow-lg">
//                 <View className="flex-row items-center mb-4">
//                   <View className="w-12 h-12 bg-red-50 rounded-full items-center justify-center mr-4">
//                     <Text className="text-red-600 text-2xl">📑</Text>
//                   </View>
//                   <Text className="text-base font-semibold text-gray-900">Open Indent</Text>
//                 </View>
//                 <Text className="text-3xl font-extrabold text-gray-900">22</Text>
//                 <Text className="text-sm text-gray-500 mt-1">Requests</Text>
//               </View>

//               <View className="w-[48%] bg-white p-5 rounded-2xl mb-4 border border-gray-200 shadow-lg">
//                 <View className="flex-row items-center mb-4">
//                   <View className="w-12 h-12 bg-yellow-50 rounded-full items-center justify-center mr-4">
//                     <Text className="text-yellow-600 text-2xl">❓</Text>
//                   </View>
//                   <Text className="text-base font-semibold text-gray-900">Open RFI</Text>
//                 </View>
//                 <Text className="text-3xl font-extrabold text-gray-900">2</Text>
//                 <Text className="text-sm text-gray-500 mt-1">Requests</Text>
//               </View>

//               <View className="w-[48%] bg-white p-5 rounded-2xl mb-4 border border-gray-200 shadow-lg">
//                 <View className="flex-row items-center mb-4">
//                   <View className="w-12 h-12 bg-indigo-50 rounded-full items-center justify-center mr-4">
//                     <Text className="text-indigo-600 text-2xl">🔍</Text>
//                   </View>
//                   <Text className="text-base font-semibold text-gray-900">Re-inspect</Text>
//                 </View>
//                 <Text className="text-3xl font-extrabold text-gray-900">1</Text>
//                 <Text className="text-sm text-gray-500 mt-1">Required</Text>
//               </View>

//               <View className="w-[48%] bg-white p-5 rounded-2xl mb-4 border border-gray-200 shadow-lg">
//                 <View className="flex-row items-center mb-4">
//                   <View className="w-12 h-12 bg-pink-50 rounded-full items-center justify-center mr-4">
//                     <Text className="text-pink-600 text-2xl">📄</Text>
//                   </View>
//                   <Text className="text-base font-semibold text-gray-900">Submittals</Text>
//                 </View>
//                 <Text className="text-3xl font-extrabold text-gray-900">10</Text>
//                 <Text className="text-sm text-gray-500 mt-1">Under Review</Text>
//               </View>
//             </View>

//             {/* Enhanced Professional Pie Chart Section */}
//             <Text className="text-xl font-bold text-gray-900 mb-5">Document Status</Text>
//             <View className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8 items-center">
//               <PieChart
//                 data={pieData}
//                 donut
//                 innerRadius={80}
//                 radius={120}
//                 innerCircleColor="#FFFFFF"
//                 centerLabelComponent={() => (
//                   <View className="justify-center items-center">
//                     <Text className="text-2xl font-extrabold text-gray-900">100</Text>
//                     <Text className="text-sm text-gray-500">Documents</Text>
//                   </View>
//                 )}
//                 strokeWidth={4}
//                 strokeColor="#FFFFFF"
//                 showText
//                 textColor="#111827"
//                 textSize={16}
//                 focusOnPress
//                 showValuesAsLabels
//                 labelsPosition="outward"
//                 initialAngle={0}
//                 shadow
//               />
              
//               <View className="flex-row justify-center flex-wrap mt-8">
//                 {pieData.map((item, index) => (
//                   <View key={index} className="flex-row items-center mx-4 mb-3 bg-gray-50 p-3 rounded-lg shadow-sm">
//                     <Text className="text-xl mr-3">{item.icon}</Text>
//                     <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: item.color }} />
//                     <Text className="text-base text-gray-700 font-medium">{item.label}: {item.value}%</Text>
//                   </View>
//                 ))}
//               </View>
//             </View>

//             {/* Enhanced Professional Line Chart Section for Timeline */}
//             <Text className="text-xl font-bold text-gray-900 mb-5">Progress Timeline</Text>
//             <View className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
//               <LineChart
//                 data={lineData}
//                 width={screenWidth - 80}
//                 height={250}
//                 curved
//                 thickness={3}
//                 color={colors.primary}
//                 startFillColor={colors.primary}
//                 endFillColor={colors.secondary}
//                 startOpacity={0.8}
//                 endOpacity={0.2}
//                 areaChart
//                 initialSpacing={0}
//                 noOfSections={5}
//                 rulesType="solid"
//                 rulesColor="#E5E7EB"
//                 yAxisThickness={0}
//                 xAxisThickness={0}
//                 showVerticalLines
//                 verticalLinesColor="#E5E7EB"
//                 dataPointsHeight={8}
//                 dataPointsWidth={8}
//                 dataPointsColor={colors.primary}
//                 textColor="#111827"
//                 textFontSize={14}
//                 showValuesAsDataPointsText
//                 xAxisLabelTexts={labels}
//                 xAxisLabelTextStyle={{ color: '#6B7280', fontSize: 12 }}
//                 yAxisTextStyle={{ color: '#6B7280', fontSize: 12 }}
//                 pointerConfig={{
//                   pointerStripHeight: 160,
//                   pointerStripColor: '#9CA3AF',
//                   pointerStripWidth: 2,
//                   pointerColor: colors.primary,
//                   radius: 6,
//                   pointerLabelWidth: 100,
//                   pointerLabelHeight: 90,
//                   activatePointersOnLongPress: true,
//                   autoAdjustPointerLabelPosition: false,
//                 }}
//               />
              
//               <View className="flex-row justify-center mt-6">
//                 <View className="flex-row items-center mr-4 bg-gray-50 p-3 rounded-lg shadow-sm">
//                   <View className="w-5 h-5 bg-blue-600 rounded-full mr-3" />
//                   <Text className="text-base text-gray-700 font-medium">Progress</Text>
//                 </View>
//               </View>
//             </View>
//           </>
//         ) : (
//           <Text className="text-base text-gray-600">Project not found.</Text>
//         )}
//       </ScrollView>
//     </MainLayout>
//   );
// }

import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MainLayout from '../screens/components/MainLayout';
import { PieChart, LineChart } from 'react-native-gifted-charts';

const screenWidth = Dimensions.get('window').width;

// Professional color scheme
const colors = {
  primary: '#1E3A8A', // Deep blue for primary elements
  secondary: '#6366F1', // Indigo for accents
  success: '#10B981', // Green for approved
  warning: '#F59E0B', // Amber for under revision
  info: '#3B82F6', // Blue for under review
  background: '#F3F4F6', // Light gray background
  card: '#FFFFFF', // White for cards
  text: '#111827', // Dark gray for text
  subtext: '#6B7280', // Lighter gray for subtext
};

// Sample data for pie chart with icons
const pieData = [
  { value: 45, color: colors.success, label: 'Approved', icon: '✅' },
  { value: 30, color: colors.warning, label: 'Under Revision', icon: '🔄' },
  { value: 25, color: colors.info, label: 'Under Review', icon: '🔍' },
];

// Sample data for line chart (progress timeline)
const lineData = [
  { value: 20, dataPointText: '20' },
  { value: 45, dataPointText: '45' },
  { value: 28, dataPointText: '28' },
  { value: 80, dataPointText: '80' },
  { value: 64, dataPointText: '64' },
  { value: 43, dataPointText: '43' },
];
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

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

  // Calculate pie chart dimensions based on screen width
  const pieRadius = Math.min(screenWidth * 0.4, 200); // Responsive radius, capped at 200 for larger screens
  const innerRadius = pieRadius * 0.6; // Maintain donut proportion

  return (
    <MainLayout title={project ? project.name : 'Project Dashboard'}>
      <ScrollView className="flex-1 px-6 py-8" style={{ backgroundColor: colors.background }}>
        {project ? (
          <>
            {/* Project Overview Cards */}
            <Text className="text-2xl font-bold text-gray-900 mb-6">Project Overview</Text>
            <View className="flex-row flex-wrap justify-between mb-8">
              {[
                { title: 'Not Started', value: '18', subtext: 'Activities', icon: '📋', bg: '#EFF6FF' },
                { title: 'Drawings', value: '1', subtext: 'Under Review', icon: '📝', bg: '#FFF7ED' },
                { title: 'Open GRN', value: '47', subtext: 'Items', icon: '📦', bg: '#ECFFF5' },
                { title: 'Paid Bill', value: 'INR', subtext: '49,13,643', icon: '💰', bg: '#F5F3FF' },
                { title: 'Open Indent', value: '22', subtext: 'Requests', icon: '📑', bg: '#FEF2F2' },
                { title: 'Open RFI', value: '2', subtext: 'Requests', icon: '❓', bg: '#FEFCE8' },
                { title: 'Re-inspect', value: '1', subtext: 'Required', icon: '🔍', bg: '#EFF6FF' },
                { title: 'Submittals', value: '10', subtext: 'Under Review', icon: '📄', bg: '#FDF2F8' },
              ].map((item, index) => (
                <View
                  key={index}
                  className="w-[48%] bg-white p-5 rounded-2xl mb-4 border border-gray-200 shadow-lg"
                  style={{ backgroundColor: colors.card }}
                >
                  <View className="flex-row items-center mb-4">
                    <View
                      className="w-14 h-14 rounded-full items-center justify-center mr-4"
                      style={{ backgroundColor: item.bg }}
                    >
                      <Text className="text-2xl" style={{ color: colors.text }}>{item.icon}</Text>
                    </View>
                    <Text className="text-lg font-semibold" style={{ color: colors.text }}>{item.title}</Text>
                  </View>
                  <Text className="text-3xl font-extrabold" style={{ color: colors.text }}>{item.value}</Text>
                  <Text className="text-sm mt-1" style={{ color: colors.subtext }}>{item.subtext}</Text>
                </View>
              ))}
            </View>

            {/* Full-Width Pie Chart Section */}
            <Text className="text-2xl font-bold text-gray-900 mb-6">Document Status</Text>
            <View
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8"
              style={{ width: screenWidth - 48 }} // Full width minus ScrollView padding
            >
              <View className="items-center">
                <PieChart
                  data={pieData}
                  donut
                  innerRadius={innerRadius}
                  radius={pieRadius}
                  innerCircleColor={colors.card}
                  centerLabelComponent={() => (
                    <View className="justify-center items-center">
                      <Text className="text-3xl font-extrabold" style={{ color: colors.text }}>100</Text>
                      <Text className="text-sm" style={{ color: colors.subtext }}>Documents</Text>
                    </View>
                  )}
                  strokeWidth={4}
                  strokeColor={colors.card}
                  showText
                  textColor={colors.text}
                  textSize={16}
                  focusOnPress
                  showValuesAsLabels
                  labelsPosition="outward"
                  shadow
                  animationDuration={800}
                />
              </View>
              <View className="flex-row justify-center flex-wrap mt-8">
                {pieData.map((item, index) => (
                  <View
                    key={index}
                    className="flex-row items-center mx-4 mb-3 bg-gray-50 p-3 rounded-lg shadow-sm"
                  >
                    <Text className="text-xl mr-3">{item.icon}</Text>
                    <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: item.color }} />
                    <Text className="text-base font-medium" style={{ color: colors.text }}>
                      {item.label}: {item.value}%
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Professional Line Chart Section */}
            <Text className="text-2xl font-bold text-gray-900 mb-6">Progress Timeline</Text>
            <View
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8"
              style={{ width: screenWidth - 48 }} // Full width minus ScrollView padding
            >
              <LineChart
                data={lineData}
                width={screenWidth - 80}
                height={280}
                curved
                thickness={4}
                color={colors.primary}
                startFillColor={colors.primary}
                endFillColor={colors.secondary}
                startOpacity={0.9}
                endOpacity={0.3}
                areaChart
                initialSpacing={0}
                noOfSections={5}
                rulesType="solid"
                rulesColor="#E5E7EB"
                yAxisThickness={0}
                xAxisThickness={0}
                showVerticalLines
                verticalLinesColor="#E5E7EB"
                dataPointsHeight={10}
                dataPointsWidth={10}
                dataPointsColor={colors.primary}
                textColor={colors.text}
                textFontSize={14}
                showValuesAsDataPointsText
                xAxisLabelTexts={labels}
                xAxisLabelTextStyle={{ color: colors.subtext, fontSize: 12 }}
                yAxisTextStyle={{ color: colors.subtext, fontSize: 12 }}
                pointerConfig={{
                  pointerStripHeight: 180,
                  pointerStripColor: colors.subtext,
                  pointerStripWidth: 2,
                  pointerColor: colors.primary,
                  radius: 8,
                  pointerLabelWidth: 120,
                  pointerLabelHeight: 100,
                  activatePointersOnLongPress: true,
                  autoAdjustPointerLabelPosition: true,
                  pointerLabelComponent: (item) => (
                    <View
                      className="bg-white p-2 rounded-lg shadow-md"
                      style={{ backgroundColor: colors.card }}
                    >
                      <Text className="text-sm font-medium" style={{ color: colors.text }}>
                        {item.dataPointText}
                      </Text>
                    </View>
                  ),
                }}
                animationDuration={800}
              />
              <View className="flex-row justify-center mt-8">
                <View className="flex-row items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                  <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: colors.primary }} />
                  <Text className="text-base font-medium" style={{ color: colors.text }}>Progress</Text>
                </View>
              </View>
            </View>
          </>
        ) : (
          <Text className="text-base" style={{ color: colors.subtext }}>Project not found.</Text>
        )}
      </ScrollView>
    </MainLayout>
  );
}