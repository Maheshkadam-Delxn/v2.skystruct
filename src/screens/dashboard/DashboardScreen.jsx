// import React from 'react';
// import { View, Text, ScrollView, Dimensions } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import MainLayout from '../components/MainLayout';
// import { PieChart, LineChart } from 'react-native-gifted-charts';
// import DashboardHeader from './DashboardHeader';

// const screenWidth = Dimensions.get('window').width;

// // Professional color scheme
// const colors = {
//   primary: '#1E3A8A', // Deep blue for primary elements
//   secondary: '#6366F1', // Indigo for accents
//   success: '#10B981', // Green for approved
//   warning: '#F59E0B', // Amber for under revision
//   info: '#3B82F6', // Blue for under review
//   background: '#F3F4F6', // Light gray background
//   card: '#FFFFFF', // White for cards
//   text: '#111827', // Dark gray for text
//   subtext: '#6B7280', // Lighter gray for subtext
// };

// // Sample data for pie chart with icons
// const pieData = [
//   { value: 45, color: colors.success, label: 'Approved', icon: '✅' },
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

//   // Calculate pie chart dimensions based on screen width
//   const pieRadius = Math.min(screenWidth * 0.4, 200); // Responsive radius, capped at 200 for larger screens
//   const innerRadius = pieRadius * 0.6; // Maintain donut proportion

//   // Enhanced card data with professional styling
//   const cardData = [
//     { 
//       title: 'Not Started', 
//       value: '18', 
//       // subtext: 'Activities', 
//       icon: '📋', 
//       gradient: ['#EFF6FF', '#DBEAFE'],
//       // accentColor: '#3B82F6',
//       // trend: null,
//       // priority: 'medium'
//     },
//     { 
//       title: 'Drawings', 
//       value: '1', 
//       // subtext: 'Under Review', 
//       icon: '📝', 
//       gradient: ['#FFF7ED', '#FED7AA'],
//       // accentColor: '#F59E0B',
//       trend: 'up',
//       // priority: 'high'
//     },
//     { 
//       title: 'Open GRN', 
//       value: '47', 
//       // subtext: 'Items', 
//       icon: '📦', 
//       gradient: ['#ECFFF5', '#BBF7D0'],
//       // accentColor: '#10B981',
//       trend: 'down',
//       // priority: 'low'
//     },
//     { 
//       title: 'Paid Bill', 
//       value: '₹49.1L', 
//       // subtext: 'Amount', 
//       icon: '💰', 
//       gradient: ['#F5F3FF', '#E0E7FF'],
//       // accentColor: '#6366F1',
//       trend: 'up',
//       // priority: 'high'
//     },
//     { 
//       title: 'Open Indent', 
//       value: '22', 
//       // subtext: 'Requests', 
//       icon: '📑', 
//       gradient: ['#FEF2F2', '#FECACA'],
//       // accentColor: '#EF4444',
//       trend: null,
//       // priority: 'medium'
//     },
//     { 
//       title: 'Open RFI', 
//       value: '2', 
//       // subtext: 'Requests', 
//       icon: '❓', 
//       gradient: ['#FEFCE8', '#FEF3C7'],
//       // accentColor: '#EAB308',
//       trend: 'stable',
//       // priority: 'low'
//     },
//     { 
//       title: 'Re-inspect', 
//       value: '1', 
//       // subtext: 'Required', 
//       icon: '🔍', 
//       gradient: ['#EFF6FF', '#DBEAFE'],
//       // accentColor: '#3B82F6',
//       trend: 'urgent',
//       // priority: 'high'
//     },
//     { 
//       title: 'Submittals', 
//       value: '10', 
//       // subtext: 'Under Review', 
//       icon: '📄', 
//       gradient: ['#FDF2F8', '#FCE7F3'],
//       // accentColor: '#EC4899',
//       trend: 'up',
//       // priority: 'medium'
//     },
//   ];

//   // Function to get trend indicator
//   const getTrendIndicator = (trend, priority) => {
//     if (!trend) return null;
    
//     const trendConfig = {
//       up: { symbol: '↗', color: '#10B981', bg: '#ECFDF5' },
//       down: { symbol: '↘', color: '#EF4444', bg: '#FEF2F2' },
//       stable: { symbol: '→', color: '#6B7280', bg: '#F3F4F6' },
//       urgent: { symbol: '⚠', color: '#F59E0B', bg: '#FFF7ED' }
//     };
    
//     const config = trendConfig[trend];
//     if (!config) return null;
    
//     return (
//       <View 
//         className="px-2 py-1 rounded-full"
//         style={{ backgroundColor: config.bg }}
//       >
//         <Text style={{ color: config.color, fontSize: 12, fontWeight: '600' }}>
//           {config.symbol}
//         </Text>
//       </View>
//     );
//   };

//   // Function to get priority indicator
//   const getPriorityDot = (priority) => {
//     const priorityColors = {
//       high: '#EF4444',
//       medium: '#F59E0B', 
//       low: '#10B981'
//     };
    
//     return (
//       <View 
//         className="w-2 h-2 rounded-full"
//         style={{ backgroundColor: priorityColors[priority] }}
//       />
//     );
//   };

//   return (
//     <MainLayout title={project ? project.name : 'Project Dashboard'}>
//       <DashboardHeader />
//       <ScrollView className="flex-1 px-6 py-8" style={{ backgroundColor: colors.background }}>
//         {project ? (
//           <>
//             {/* Enhanced Project Overview Cards */}
//             <View className="flex-row items-center justify-between mb-6">
//               <Text className="text-2xl font-bold text-gray-900">Project Overview</Text>

//             </View>
            
//             <View className="flex-row flex-wrap justify-between mb-8">
//               {cardData.map((item, index) => (
//                 <View
//                   key={index}
//                   className="w-[48%] mb-4 rounded-2xl overflow-hidden"
//                   style={{
//                     backgroundColor: colors.card,
//                     shadowColor: '#000',
//                     shadowOffset: { width: 0, height: 4 },
//                     shadowOpacity: 0.08,
//                     shadowRadius: 12,
//                     elevation: 8,
//                   }}
//                 >
//                   {/* Card Header with Gradient */}
//                   <View 
//                     className="px-5 pt-4 pb-2"
//                     style={{
//                       background: `linear-gradient(135deg, ${item.gradient[0]} 0%, ${item.gradient[1]} 100%)`,
//                       backgroundColor: item.gradient[0], // Fallback for React Native
//                     }}
//                   >
//                     <View className="flex-row items-center justify-between mb-3">
//                       <View className="flex-row items-center space-x-2">
//                         {getPriorityDot(item.priority)}
//                         <Text className="text-sm font-medium text-gray-600">{item.title}</Text>
//                       </View>
//                       {getTrendIndicator(item.trend, item.priority)}
//                     </View>
                    
//                     <View className="flex-row items-center justify-between">
//                       <View
//                         className="w-12 h-12 rounded-xl items-center justify-center"
//                         style={{ backgroundColor: colors.card, opacity: 0.9 }}
//                       >
//                         <Text className="text-xl">{item.icon}</Text>
//                       </View>
                      
//                       <View className="flex-1 ml-3">
//                         <Text 
//                           className="text-2xl font-black"
//                           style={{ color: colors.text }}
//                         >
//                           {item.value}
//                         </Text>
//                       </View>
//                     </View>
//                   </View>
                  
//                   {/* Card Body */}
//                   <View className="px-5 py-3">
//                     <Text className="text-xs font-medium" style={{ color: colors.subtext }}>
//                       {item.subtext}
//                     </Text>
                    
//                     {/* Progress Bar */}
//                     <View className="mt-3 mb-1">
//                       <View 
//                         className="h-1 rounded-full"
//                         style={{ backgroundColor: '#E5E7EB' }}
//                       >
//                         <View 
//                           className="h-1 rounded-full"
//                           style={{ 
//                             backgroundColor: item.accentColor,
//                             width: `${Math.min(parseInt(item.value) || 50, 100)}%`
//                           }}
//                         />
//                       </View>
//                     </View>
                    
//                     {/* Action Indicator */}
//                     <View className="flex-row items-center justify-between mt-2">
//                       <Text className="text-xs" style={{ color: colors.subtext }}>
//                         {item.priority === 'high' ? 'Requires Attention' : 
//                          item.priority === 'medium' ? 'In Progress' : 'On Track'}
//                       </Text>
//                       <View 
//                         className="w-2 h-2 rounded-full"
//                         style={{ backgroundColor: item.accentColor }}
//                       />
//                     </View>
//                   </View>
                  
//                   {/* Bottom Accent Line */}
//                   <View 
//                     className="h-1"
//                     style={{ backgroundColor: item.accentColor }}
//                   />
//                 </View>
//               ))}
//             </View>

//             {/* Full-Width Pie Chart Section */}
//             <Text className="text-2xl font-bold text-gray-900 mb-6">Document Status</Text>
//             <View
//               className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8"
//               style={{ width: screenWidth - 48 }} // Full width minus ScrollView padding
//             >
//               <View className="items-center">
//                 <PieChart
//                   data={pieData}
//                   donut
//                   innerRadius={innerRadius}
//                   radius={pieRadius}
//                   innerCircleColor={colors.card}
//                   centerLabelComponent={() => (
//                     <View className="justify-center items-center">
//                       <Text className="text-3xl font-extrabold" style={{ color: colors.text }}>100</Text>
//                       <Text className="text-sm" style={{ color: colors.subtext }}>Documents</Text>
//                     </View>
//                   )}
//                   strokeWidth={4}
//                   strokeColor={colors.card}
//                   showText
//                   textColor={colors.text}
//                   textSize={16}
//                   focusOnPress
//                   showValuesAsLabels
//                   labelsPosition="outward"
//                   shadow
//                   animationDuration={800}
//                 />
//               </View>
//               <View className="flex-row justify-start flex-wrap mt-8">
//                 {pieData.map((item, index) => (
//                   <View
//                     key={index}
//                     className="flex-row items-center mx-4 mb-3 bg-gray-50 p-3 rounded-lg shadow-sm"
//                   >
//                     <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: item.color }} />
//                     <Text className="text-base font-medium" style={{ color: colors.text }}>
//                       {item.label}: {item.value}%
//                     </Text>
//                   </View>
//                 ))}
//               </View>
//             </View>

//             {/* Professional Line Chart Section */}
//             <Text className="text-2xl font-bold text-gray-900 mb-6">Progress Timeline</Text>
//             <View
//               className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8"
//               style={{ width: screenWidth - 48 }} // Full width minus ScrollView padding
//             >
//               <LineChart
//                 data={lineData}
//                 width={screenWidth - 80}
//                 height={280}
//                 curved
//                 thickness={4}
//                 color={colors.primary}
//                 startFillColor={colors.primary}
//                 endFillColor={colors.secondary}
//                 startOpacity={0.9}
//                 endOpacity={0.3}
//                 areaChart
//                 initialSpacing={0}
//                 noOfSections={5}
//                 rulesType="solid"
//                 rulesColor="#E5E7EB"
//                 yAxisThickness={0}
//                 xAxisThickness={0}
//                 showVerticalLines
//                 verticalLinesColor="#E5E7EB"
//                 dataPointsHeight={10}
//                 dataPointsWidth={10}
//                 dataPointsColor={colors.primary}
//                 textColor={colors.text}
//                 textSize={14}
//                 showValuesAsDataPointsText
//                 xAxisLabelTexts={labels}
//                 xAxisLabelTextStyle={{ color: colors.subtext, fontSize: 12 }}
//                 yAxisTextStyle={{ color: colors.subtext, fontSize: 12 }}
//                 pointerConfig={{
//                   pointerStripHeight: 180,
//                   pointerStripColor: colors.subtext,
//                   pointerStripWidth: 2,
//                   pointerColor: colors.primary,
//                   radius: 8,
//                   pointerLabelWidth: 120,
//                   pointerLabelHeight: 100,
//                   activatePointersOnLongPress: true,
//                   autoAdjustPointerLabelPosition: true,
//                   pointerLabelComponent: (item) => (
//                     <View
//                       className="bg-white p-2 rounded-lg shadow-md"
//                       style={{ backgroundColor: colors.card }}
//                     >
//                       <Text className="text-sm font-medium" style={{ color: colors.text }}>
//                         {item.dataPointText}
//                       </Text>
//                     </View>
//                   ),
//                 }}
//                 animationDuration={800}
//               />
//               <View className="flex-row justify-center mt-8">
//                 <View className="flex-row items-center bg-gray-50 p-3 rounded-lg shadow-sm">
//                   <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: colors.primary }} />
//                   <Text className="text-base font-medium" style={{ color: colors.text }}>Progress</Text>
//                 </View>
//               </View>
//             </View>
//           </>
//         ) : (
//           <Text className="text-base" style={{ color: colors.subtext }}>Project not found.</Text>
//         )}
//       </ScrollView>
//     </MainLayout>
//   );
// }

import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MainLayout from '../components/MainLayout';
import { PieChart, LineChart } from 'react-native-gifted-charts';
import DashboardHeader from './DashboardHeader';

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

// Sample data for pie chart
const pieData = [
  { value: 45, color: colors.success, label: 'Approved' },
  { value: 30, color: colors.warning, label: 'Under Revision' },
  { value: 25, color: colors.info, label: 'Under Review' },
];

// Sample data for line chart (progress timeline)
const lineData = [
  { value: 20 },
  { value: 45 },
  { value: 28 },
  { value: 80 },
  { value: 64 },
  { value: 43 },
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
  const pieRadius = Math.min(screenWidth * 0.4, 200);
  const innerRadius = pieRadius * 0.6;

  // Enhanced card data with professional styling
  const cardData = [
    { 
      title: 'Not Started', 
      value: '18', 
      icon: '📋', 
      gradient: ['#EFF6FF', '#DBEAFE'],
      trend: null,
      subheading: 'Pending Tasks'
    },
    { 
      title: 'Drawings', 
      value: '1', 
      icon: '📝', 
      gradient: ['#FFF7ED', '#FED7AA'],
      trend: 'up',
      subheading: 'Under Review '
    },
    { 
      title: 'Open GRN', 
      value: '47', 
      icon: '📦', 
      gradient: ['#ECFFF5', '#BBF7D0'],
      trend: 'down',
      subheading: 'Goods Received'
    },
    { 
      title: 'Paid Bill', 
      value: '₹49.1L', 
      icon: '💰', 
      gradient: ['#F5F3FF', '#E0E7FF'],
      trend: 'up',
      subheading: 'Total Payments'
    },
    { 
      title: 'Open Indent', 
      value: '22', 
      icon: '📑', 
      gradient: ['#FEF2F2', '#FECACA'],
      trend: null,
      subheading: 'Material Requests'
    },
    { 
      title: 'Open RFI', 
      value: '2', 
      icon: '❓', 
      gradient: ['#FEFCE8', '#FEF3C7'],
      trend: 'stable',
      subheading: 'Information Requests'
    },
    { 
      title: 'Re-inspect', 
      value: '1', 
      icon: '🔍', 
      gradient: ['#EFF6FF', '#DBEAFE'],
      trend: 'urgent',
      subheading: 'Quality Check'
    },
    { 
      title: 'Submittals', 
      value: '10', 
      icon: '📄', 
      gradient: ['#FDF2F8', '#FCE7F3'],
      trend: 'up',
      subheading: 'Document Review'
    },
  ];

  // Function to get trend indicator
  const getTrendIndicator = (trend) => {
    if (!trend) return null;
    
    const trendConfig = {
      up: { symbol: '↗', color: '#10B981', bg: '#ECFDF5' },
      down: { symbol: '↘', color: '#EF4444', bg: '#FEF2F2' },
      stable: { symbol: '→', color: '#6B7280', bg: '#F3F4F6' },
      urgent: { symbol: '⚠', color: '#F59E0B', bg: '#FFF7ED' }
    };
    
    const config = trendConfig[trend];
    if (!config) return null;
    
    return (
      <View 
        className="px-2 py-1 rounded-full"
        style={{ backgroundColor: config.bg }}
      >
        <Text style={{ color: config.color, fontSize: 12, fontWeight: '600' }}>
          {config.symbol}
        </Text>
      </View>
    );
  };

  return (
    <MainLayout title={project ? project.name : 'Project Dashboard'}>
      <DashboardHeader />
      <ScrollView className="flex-1 px-6 py-8" style={{ backgroundColor: colors.background }}>
        {project ? (
          <>
            {/* Enhanced Project Overview Cards */}
            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-2xl font-bold text-gray-900">Project Overview</Text>
            </View>
            
            <View className="flex-row flex-wrap justify-between mb-8">
              {cardData.map((item, index) => (
                <View
                  key={index}
                  className="w-[48%] mb-4 rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: colors.card,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.08,
                    shadowRadius: 12,
                    elevation: 8,
                  }}
                >
                  {/* Card Header with Gradient */}
                  <View 
                    className="px-5 pt-4 pb-2"
                    style={{
                      backgroundColor: item.gradient[0],
                    }}
                  >
                    <View className="flex-row items-center justify-between mb-3">
                      <Text className="text-sm font-medium text-gray-600">{item.title}</Text>
                      {getTrendIndicator(item.trend)}
                    </View>
                    
                    <View className="flex-row items-center justify-between">
                      <View
                        className="w-12 h-12 rounded-xl items-center justify-center"
                        style={{ backgroundColor: colors.card, opacity: 0.9 }}
                      >
                        <Text className="text-xl">{item.icon}</Text>
                      </View>
                      
                      <View className="flex-1 ml-3">
                        <Text 
                          className="text-2xl font-black"
                          style={{ color: colors.text }}
                        >
                          {item.value}
                        </Text>
                      </View>
                    </View>
                  </View>
                  
                  {/* Card Body with Subheading */}
                  <View className="px-5 py-3">
                    <Text className="text-xs font-medium" style={{ color: colors.subtext }}>
                      {item.subheading}
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Full-Width Pie Chart Section */}
            <Text className="text-2xl font-bold text-gray-900 mb-6">Document Status</Text>
            <View
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8"
              style={{ width: screenWidth - 48 }}
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
                  showText={false}
                  focusOnPress
                  showValuesAsLabels
                  labelsPosition="outward"
                  shadow
                  animationDuration={800}
                />
              </View>
              <View className="flex-row justify-center flex-wrap mt-8">
                <View className="flex-row items-center mx-4 mb-3 bg-gray-50 p-3 rounded-lg shadow-sm">
                  <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: colors.success }} />
                  <Text className="text-base font-medium" style={{ color: colors.text }}>
                    Approved: 45%
                  </Text>
                </View>
                <View className="flex-row items-center mx-4 mb-3 bg-gray-50 p-3 rounded-lg shadow-sm">
                  <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: colors.warning }} />
                  <Text className="text-base font-medium" style={{ color: colors.text }}>
                    Revision: 30%
                  </Text>
                </View>
                <View className="flex-row items-center mx-4 mb-3 bg-gray-50 p-3 rounded-lg shadow-sm">
                  <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: colors.info }} />
                  <Text className="text-base font-medium" style={{ color: colors.text }}>
                    Review: 25%
                  </Text>
                </View>
              </View>
            </View>

            {/* Professional Line Chart Section */}
            <Text className="text-2xl font-bold text-gray-900 mb-6">Progress Timeline</Text>
            <View
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8"
              style={{ width: screenWidth - 48 }}
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
                textSize={14}
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
                  pointerLabelComponent: (items) => {
                    const item = items[0];
                    return (
                      <View
                        className="bg-white p-2 rounded-lg shadow-md"
                        style={{ backgroundColor: colors.card }}
                      >
                        <Text className="text-sm font-medium" style={{ color: colors.text }}>
                          {item.value}
                        </Text>
                      </View>
                    );
                  },
                }}
                animationDuration={800}
              />
            </View>
          </>
        ) : (
          <Text className="text-base" style={{ color: colors.subtext }}>Project not found.</Text>
        )}
      </ScrollView>
    </MainLayout>
  );
}