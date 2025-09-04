// import React, { useState } from 'react';
//   import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
//   import { useRoute, useNavigation } from '@react-navigation/native';
//   import MainLayout from '../components/MainLayout';
//   import { PieChart, LineChart } from 'react-native-gifted-charts';

//   const screenWidth = Dimensions.get('window').width;

//   const colors = {
//     primary: '#1E3A8A',
//     secondary: '#6366F1',
//     success: '#10B981',
//     warning: '#F59E0B',
//     info: '#3B82F6',
//     background: '#F3F4F6',
//     card: '#FFFFFF',
//     text: '#111827',
//     subtext: '#6B7280',
//   };

//   const filterOptions = ['Project Resources', 'Project Planning', 'Payments', 'Work Order', 'Inventory', 'Approvals', 'Reports'];

//   const dropdownItems = {
//     'Project Resources': ['Bill of Quantity', 'Drawing', 'Documents'],
//     'Project Planning': ['Activity', 'Project Planner', 'Resource'],
//     'Payments': ['Indent', 'Purchase Order', 'Good Receive Note', 'Bill Payment', 'Expense'],
//     'Work Order': ['Work Order', 'Advance Payment', 'Bill', 'Bill Payment'],
//     'Inventory': [],
//     'Approvals': ['RFI', 'Snagging Report', 'Inspection', 'Submittals'],
//     'Reports': ['Daily Progress', 'Activity Timelines', 'Material Consumption'],
//   };

//   const pieData = [{ value: 45, color: colors.success, label: 'Approved' }, { value: 30, color: colors.warning, label: 'Under Revision' }, { value: 25, color: colors.info, label: 'Under Review' }];
//   const lineData = [{ value: 20 }, { value: 45 }, { value: 28 }, { value: 80 }, { value: 64 }, { value: 43 }];
//   const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

//   export default function DashboardScreen() {
//     const route = useRoute();
//     const navigation = useNavigation();
//     const { projectId } = route.params || { projectId: 1 };
//     const [selectedFilter, setSelectedFilter] = useState(null);
//     const [selectedSubItem, setSelectedSubItem] = useState(null);

//     const projects = [
//       { id: 1, name: 'Acura Heights Tower', progress: '64%', duration: '18 months', amount: '$2.5M', status: 'Under Construction' },
//       { id: 2, name: 'Commercial Residences', progress: '89%', duration: '14 months', amount: '$1.8M', status: 'Under Construction' },
//       { id: 3, name: 'Corporate Landmark Project', progress: '52%', duration: '24 months', amount: '$3.2M', status: 'In Design' },
//     ];

//     const project = projects.find(p => p.id === projectId);

//     const pieRadius = Math.min(screenWidth * 0.4, 200);
//     const innerRadius = pieRadius * 0.6;

//     const cardData = [
//       { title: 'Not Started', value: '18', icon: '📋', gradient: ['#EFF6FF', '#DBEAFE'], trend: null, subheading: 'Pending Tasks' },
//       { title: 'Drawings', value: '1', icon: '📝', gradient: ['#FFF7ED', '#FED7AA'], trend: 'up', subheading: 'Under Review' },
//       { title: 'Open GRN', value: '47', icon: '📦', gradient: ['#ECFFF5', '#BBF7D0'], trend: 'down', subheading: 'Goods Received' },
//       { title: 'Paid Bill', value: '₹49.1L', icon: '💰', gradient: ['#F5F3FF', '#E0E7FF'], trend: 'up', subheading: 'Total Payments' },
//       { title: 'Open Indent', value: '22', icon: '📑', gradient: ['#FEF2F2', '#FECACA'], trend: null, subheading: 'Material Requests' },
//       { title: 'Open RFI', value: '2', icon: '❓', gradient: ['#FEFCE8', '#FEF3C7'], trend: 'stable', subheading: 'Information Requests' },
//       { title: 'Re-inspect', value: '1', icon: '🔍', gradient: ['#EFF6FF', '#DBEAFE'], trend: 'urgent', subheading: 'Quality Check' },
//       { title: 'Submittals', value: '10', icon: '📄', gradient: ['#FDF2F8', '#FCE7F3'], trend: 'up', subheading: 'Document Review' },
//     ];

//     const getTrendIndicator = (trend) => {
//       if (!trend) return null;
//       const trendConfig = { up: { symbol: '↗', color: '#10B981', bg: '#ECFDF5' }, down: { symbol: '↘', color: '#EF4444', bg: '#FEF2F2' }, stable: { symbol: '→', color: '#6B7280', bg: '#F3F4F6' }, urgent: { symbol: '⚠', color: '#F59E0B', bg: '#FFF7ED' } };
//       const config = trendConfig[trend];
//       return config ? <View className="px-2 py-1 rounded-full" style={{ backgroundColor: config.bg }}><Text style={{ color: config.color, fontSize: 12, fontWeight: '600' }}>{config.symbol}</Text></View> : null;
//     };

//     const handleFilterSelect = (filter) => {
//       if (selectedFilter === filter) {
//         setSelectedFilter(null);
//         setSelectedSubItem(null);
//       } else {
//         setSelectedFilter(filter);
//         setSelectedSubItem(null);
//       }
//     };

//     const handleSubItemSelect = (subItem) => {
//       let screenName = '';
//       console.log("asdf",subItem)
//       switch (subItem) {
//         case 'Bill of Quantity': 
//       screenName = 'BillOfQuantity'; 
//       console.log("Attempting to navigate to BillOfQuantity");
//       break;
//         case 'Drawing': screenName = 'Drawing'; break;
//         case 'Documents': screenName = 'Document'; break;
//         case 'Activity': screenName = 'Activity'; break;
//         case 'Project Planner': screenName = 'ProjectPlanner'; break;
//         case 'Resource': screenName = 'Resource'; break;
//         case 'Indent': screenName = 'Indent'; break;
//         case 'Purchase Order': screenName = 'PurchaseOrder'; break;
//         case 'Good Receive Note': screenName = 'GoodReceiveNote'; break;
//         case 'Bill Payment': screenName = 'BillPayment'; break;
//         case 'Expense': screenName = 'Expense'; break;
//         case 'Work Order': screenName = 'WorkOrder'; break;
//         case 'Advance Payment': screenName = 'AdvancePayment'; break;
//         case 'Bill': screenName = 'Bill'; break;
//         case 'RFI': screenName = 'RFI'; break;
//         case 'Snagging Report': screenName = 'SnaggingReport'; break;
//         case 'Inspection': screenName = 'Inspection'; break;
//         case 'Submittals': screenName = 'Submittals'; break;
//         case 'Daily Progress': screenName = 'DailyProgress'; break;
//         case 'Activity Timelines': screenName = 'ActivityTimelines'; break;
//         case 'Material Consumption': screenName = 'MaterialConsumption'; break;
//         default: screenName = subItem.replace(/\s+/g, '');
//       }
//       navigation.navigate(screenName);
//     };

//     return (
//       <MainLayout title={project ? project.name : 'Project Dashboard'}>
//         <View className="bg-blue-100 px-6 pb-6 pt-14 shadow-sm">
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
//             <View className="flex-row">
//               {filterOptions.map((filter, index) => (
//                 <TouchableOpacity
//                   key={filter}
//                   onPress={() => handleFilterSelect(filter)}
//                   className={`mr-3 flex-row items-center rounded-full px-4 py-2 ${selectedFilter === filter ? 'bg-blue-600' : 'bg-gray-100'}`}
//                 >
//                   <Text className={`font-medium mr-2 ${selectedFilter === filter ? 'text-white' : 'text-gray-600'}`}>{filter}</Text>
//                   {dropdownItems[filter] && dropdownItems[filter].length > 0 && (
//                     <Text style={{ color: selectedFilter === filter ? 'white' : '#6B7280', fontSize: 12 }}>
//                       {selectedFilter === filter ? '▼' : '▶'}
//                     </Text>
//                   )}
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </ScrollView>
//           {selectedFilter && dropdownItems[selectedFilter] && dropdownItems[selectedFilter].length > 0 && (
//             <View className="bg-blue-50 rounded-lg mt-2 border border-blue-200 p-2">
//               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                 <View className="flex-row py-2">
//                   {dropdownItems[selectedFilter].map((item, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       className={`mx-2 px-4 py-2 rounded-full ${selectedSubItem === item ? 'bg-blue-600' : 'bg-white'}`}
//                       onPress={() => handleSubItemSelect(item)}
//                     >
//                       <Text className={`font-medium ${selectedSubItem === item ? 'text-white' : 'text-gray-700'} text-sm`}>{item}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               </ScrollView>
//             </View>
//           )}
//         </View>
//         <ScrollView className="flex-1 px-6 py-8" style={{ backgroundColor: colors.background }}>
//           {project ? (
//             <>
//               {selectedSubItem && (
//                 <View className="mb-6 bg-blue-50 p-4 rounded-lg">
//                   <Text className="text-lg font-semibold text-blue-800">Selected: {selectedSubItem}</Text>
//                 </View>
//               )}
//               <View className="flex-row items-center justify-between mb-6">
//                 <Text className="text-2xl font-bold text-gray-900">Project Overview</Text>
//               </View>
//               <View className="flex-row flex-wrap justify-between mb-8">
//                 {cardData.map((item, index) => (
//                   <View
//                     key={index}
//                     className="w-[48%] mb-4 rounded-2xl overflow-hidden"
//                     style={{ backgroundColor: colors.card, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 12, elevation: 8 }}
//                   >
//                     <View className="px-5 pt-4 pb-2" style={{ backgroundColor: item.gradient[0] }}>
//                       <View className="flex-row items-center justify-between mb-3">
//                         <Text className="text-sm font-medium text-gray-600">{item.title}</Text>
//                         {getTrendIndicator(item.trend)}
//                       </View>
//                       <View className="flex-row items-center justify-between">
//                         <View className="w-12 h-12 rounded-xl items-center justify-center" style={{ backgroundColor: colors.card, opacity: 0.9 }}>
//                           <Text className="text-xl">{item.icon}</Text>
//                         </View>
//                         <View className="flex-1 ml-3">
//                           <Text className="text-2xl font-black" style={{ color: colors.text }}>{item.value}</Text>
//                         </View>
//                       </View>
//                     </View>
//                     <View className="px-5 py-3">
//                       <Text className="text-xs font-medium" style={{ color: colors.subtext }}>{item.subheading}</Text>
//                     </View>
//                   </View>
//                 ))}
//               </View>
//               <Text className="text-2xl font-bold text-gray-900 mb-6">Document Status</Text>
//               <View className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8" style={{ width: screenWidth - 48 }}>
//                 <View className="items-center">
//                   <PieChart
//                     data={pieData}
//                     donut
//                     innerRadius={innerRadius}
//                     radius={pieRadius}
//                     innerCircleColor={colors.card}
//                     centerLabelComponent={() => <View className="justify-center items-center"><Text className="text-3xl font-extrabold" style={{ color: colors.text }}>100</Text><Text className="text-sm" style={{ color: colors.subtext }}>Documents</Text></View>}
//                     strokeWidth={4}
//                     strokeColor={colors.card}
//                     showText={false}
//                     focusOnPress
//                     showValuesAsLabels
//                     labelsPosition="outward"
//                     shadow
//                     animationDuration={800}
//                   />
//                 </View>
//                 <View className="flex-row justify-center flex-wrap mt-8">
//                   <View className="flex-row items-center mx-4 mb-3 bg-gray-50 p-3 rounded-lg shadow-sm">
//                     <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: colors.success }} />
//                     <Text className="text-base font-medium" style={{ color: colors.text }}>Approved: 45%</Text>
//                   </View>
//                   <View className="flex-row items-center mx-4 mb-3 bg-gray-50 p-3 rounded-lg shadow-sm">
//                     <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: colors.warning }} />
//                     <Text className="text-base font-medium" style={{ color: colors.text }}>Revision: 30%</Text>
//                   </View>
//                   <View className="flex-row items-center mx-4 mb-3 bg-gray-50 p-3 rounded-lg shadow-sm">
//                     <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: colors.info }} />
//                     <Text className="text-base font-medium" style={{ color: colors.text }}>Review: 25%</Text>
//                   </View>
//                 </View>
//               </View>
//               <Text className="text-2xl font-bold text-gray-900 mb-6">Progress Timeline</Text>
//               <View className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8" style={{ width: screenWidth - 48 }}>
//                 <LineChart
//                   data={lineData}
//                   width={screenWidth - 80}
//                   height={280}
//                   curved
//                   thickness={4}
//                   color={colors.primary}
//                   startFillColor={colors.primary}
//                   endFillColor={colors.secondary}
//                   startOpacity={0.9}
//                   endOpacity={0.3}
//                   areaChart
//                   initialSpacing={0}
//                   noOfSections={5}
//                   rulesType="solid"
//                   rulesColor="#E5E7EB"
//                   yAxisThickness={0}
//                   xAxisThickness={0}
//                   showVerticalLines
//                   verticalLinesColor="#E5E7EB"
//                   dataPointsHeight={10}
//                   dataPointsWidth={10}
//                   dataPointsColor={colors.primary}
//                   textColor={colors.text}
//                   textSize={14}
//                   showValuesAsDataPointsText
//                   xAxisLabelTexts={labels}
//                   xAxisLabelTextStyle={{ color: colors.subtext, fontSize: 12 }}
//                   yAxisTextStyle={{ color: colors.subtext, fontSize: 12 }}
//                   pointerConfig={{
//                     pointerStripHeight: 180,
//                     pointerStripColor: colors.subtext,
//                     pointerStripWidth: 2,
//                     pointerColor: colors.primary,
//                     radius: 8,
//                     pointerLabelWidth: 120,
//                     pointerLabelHeight: 100,
//                     activatePointersOnLongPress: true,
//                     autoAdjustPointerLabelPosition: true,
//                     pointerLabelComponent: (items) => {
//                       const item = items[0];
//                       return <View className="bg-white p-2 rounded-lg shadow-md" style={{ backgroundColor: colors.card }}><Text className="text-sm font-medium" style={{ color: colors.text }}>{item.value}</Text></View>;
//                     },
//                   }}
//                   animationDuration={800}
//                 />
//               </View>
//             </>
//           ) : (
//             <Text className="text-base" style={{ color: colors.subtext }}>Project not found.</Text>
//           )}
//         </ScrollView>
//       </MainLayout>
//     );
//   }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//  import React, { useState } from 'react';

// import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import MainLayout from '../components/MainLayout';
// import { PieChart, LineChart } from 'react-native-gifted-charts';
// import { LinearGradient } from 'expo-linear-gradient';
// import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

// const screenWidth = Dimensions.get('window').width;

// // Modern color palette
// const colors = {
//   primary: '#4F46E5',       // More vibrant primary
//   primaryLight: '#818CF8',
//   secondary: '#06B6D4',     // Cyan as secondary
//   success: '#10B981',
//   warning: '#F59E0B',
//   error: '#EF4444',
//   background: '#F8FAFC',    // Lighter background
//   card: '#FFFFFF',
//   text: '#1F2937',          // Darker text for better contrast
//   subtext: '#64748B',
//   border: '#E2E8F0',
//   accentPurple: '#A855F7',
//   accentPink: '#EC4899',
// };

// const filterOptions = ['Project Resources', 'Project Planning', 'Payments', 'Work Order', 'Inventory', 'Approvals', 'Reports'];

// const dropdownItems = {
//   'Project Resources': ['Bill of Quantity', 'Drawing', 'Documents'],
//   'Project Planning': ['Activity', 'Project Planner', 'Resource'],
//   'Payments': ['Indent', 'Purchase Order', 'Good Receive Note', 'Bill Payment', 'Expense'],
//   'Work Order': ['Work Order', 'Advance Payment', 'Bill', 'Bill Payment'],
//   'Inventory': [],
//   'Approvals': ['RFI', 'Snagging Report', 'Inspection', 'Submittals'],
//   'Reports': ['Daily Progress', 'Activity Timelines', 'Material Consumption'],
// };

// const pieData = [
//   { value: 45, color: colors.success, label: 'Approved' }, 
//   { value: 30, color: colors.warning, label: 'Under Revision' }, 
//   { value: 25, color: colors.primaryLight, label: 'Under Review' }
// ];

// const lineData = [
//   { value: 20 }, { value: 45 }, { value: 28 }, 
//   { value: 80 }, { value: 64 }, { value: 43 }
// ];
// const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

// export default function DashboardScreen() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { projectId } = route.params || { projectId: 1 };
//   const [selectedFilter, setSelectedFilter] = useState(null);
//   const [selectedSubItem, setSelectedSubItem] = useState(null);

//   const projects = [
//     { id: 1, name: 'Acura Heights Tower', progress: '64%', duration: '18 months', amount: '$2.5M', status: 'Under Construction' },
//     { id: 2, name: 'Commercial Residences', progress: '89%', duration: '14 months', amount: '$1.8M', status: 'Under Construction' },
//     { id: 3, name: 'Corporate Landmark Project', progress: '52%', duration: '24 months', amount: '$3.2M', status: 'In Design' },
//   ];

//   const project = projects.find(p => p.id === projectId);

//   const pieRadius = Math.min(screenWidth * 0.35, 180);
//   const innerRadius = pieRadius * 0.6;

//   const cardData = [
//     { 
//       title: 'Not Started', 
//       value: '18', 
//       icon: '📋', 
//       gradient: ['#E0F2FE', '#BAE6FD'], 
//       trend: null, 
//       subheading: 'Pending Tasks',
//       iconComponent: <MaterialIcons name="pending-actions" size={24} color={colors.primary} />
//     },
//     { 
//       title: 'Drawings', 
//       value: '1', 
//       icon: '📝', 
//       gradient: ['#FEF3C7', '#FDE68A'], 
//       trend: 'up', 
//       subheading: 'Under Review',
//       iconComponent: <Ionicons name="document-text" size={24} color={colors.warning} />
//     },
//     { 
//       title: 'Open GRN', 
//       value: '47', 
//       icon: '📦', 
//       gradient: ['#D1FAE5', '#A7F3D0'], 
//       trend: 'down', 
//       subheading: 'Goods Received',
//       iconComponent: <FontAwesome5 name="box-open" size={24} color={colors.success} />
//     },
//     { 
//       title: 'Paid Bill', 
//       value: '₹49.1L', 
//       icon: '💰', 
//       gradient: ['#E0E7FF', '#C7D2FE'], 
//       trend: 'up', 
//       subheading: 'Total Payments',
//       iconComponent: <FontAwesome5 name="money-bill-wave" size={24} color={colors.accentPurple} />
//     },
//     { 
//       title: 'Open Indent', 
//       value: '22', 
//       icon: '📑', 
//       gradient: ['#FEE2E2', '#FECACA'], 
//       trend: null, 
//       subheading: 'Material Requests',
//       iconComponent: <MaterialIcons name="description" size={24} color={colors.error} />
//     },
//     { 
//       title: 'Open RFI', 
//       value: '2', 
//       icon: '❓', 
//       gradient: ['#FEF3C7', '#FDE68A'], 
//       trend: 'stable', 
//       subheading: 'Information Requests',
//       iconComponent: <MaterialIcons name="help-outline" size={24} color={colors.warning} />
//     },
//     { 
//       title: 'Re-inspect', 
//       value: '1', 
//       icon: '🔍', 
//       gradient: ['#E0F2FE', '#BAE6FD'], 
//       trend: 'urgent', 
//       subheading: 'Quality Check',
//       iconComponent: <MaterialIcons name="find-in-page" size={24} color={colors.primary} />
//     },
//     { 
//       title: 'Submittals', 
//       value: '10', 
//       icon: '📄', 
//       gradient: ['#FCE7F3', '#FBCFE8'], 
//       trend: 'up', 
//       subheading: 'Document Review',
//       iconComponent: <MaterialIcons name="description" size={24} color={colors.accentPink} />
//     },
//   ];

//   const getTrendIndicator = (trend) => {
//     if (!trend) return null;
//     const trendConfig = { 
//       up: { symbol: '↗', color: colors.success, bg: '#ECFDF5' }, 
//       down: { symbol: '↘', color: colors.error, bg: '#FEF2F2' }, 
//       stable: { symbol: '→', color: colors.subtext, bg: '#F3F4F6' }, 
//       urgent: { symbol: '⚠', color: colors.warning, bg: '#FFF7ED' } 
//     };
//     const config = trendConfig[trend];
//     return config ? (
//       <View style={[styles.trendIndicator, { backgroundColor: config.bg }]}>
//         <Text style={{ color: config.color, fontSize: 12, fontWeight: '600' }}>
//           {config.symbol}
//         </Text>
//       </View>
//     ) : null;
//   };

//   const handleFilterSelect = (filter) => {
//     if (selectedFilter === filter) {
//       setSelectedFilter(null);
//       setSelectedSubItem(null);
//     } else {
//       setSelectedFilter(filter);
//       setSelectedSubItem(null);
//     }
//   };

//   const handleSubItemSelect = (subItem) => {
//     let screenName = '';
//     switch (subItem) {
//       case 'Bill of Quantity': screenName = 'BillOfQuantity'; break;
//       case 'Drawing': screenName = 'Drawing'; break;
//       case 'Documents': screenName = 'Document'; break;
//       case 'Activity': screenName = 'Activity'; break;
//       case 'Project Planner': screenName = 'ProjectPlanner'; break;
//       case 'Resource': screenName = 'Resource'; break;
//       case 'Indent': screenName = 'Indent'; break;
//       case 'Purchase Order': screenName = 'PurchaseOrder'; break;
//       case 'Good Receive Note': screenName = 'GoodReceiveNote'; break;
//       case 'Bill Payment': screenName = 'BillPayment'; break;
//       case 'Expense': screenName = 'Expense'; break;
//       case 'Work Order': screenName = 'WorkOrder'; break;
//       case 'Advance Payment': screenName = 'AdvancePayment'; break;
//       case 'Bill': screenName = 'Bill'; break;
//       case 'RFI': screenName = 'RFI'; break;
//       case 'Snagging Report': screenName = 'SnaggingReport'; break;
//       case 'Inspection': screenName = 'Inspection'; break;
//       case 'Submittals': screenName = 'Submittals'; break;
//       case 'Daily Progress': screenName = 'DailyProgress'; break;
//       case 'Activity Timelines': screenName = 'ActivityTimelines'; break;
//       case 'Material Consumption': screenName = 'MaterialConsumption'; break;
//       default: screenName = subItem.replace(/\s+/g, '');
//     }
//     navigation.navigate(screenName);
//   };

//   return (
//     <MainLayout title={project ? project.name : 'Project Dashboard'}>
//       {/* Filter Section */}
//       <View style={styles.filterContainer}>
//         <ScrollView 
//           horizontal 
//           showsHorizontalScrollIndicator={false} 
//           style={styles.filterScroll}
//         >
//           <View style={styles.filterRow}>
//             {filterOptions.map((filter, index) => (
//               <TouchableOpacity
//                 key={filter}
//                 onPress={() => handleFilterSelect(filter)}
//                 style={[
//                   styles.filterButton,
//                   selectedFilter === filter ? styles.filterButtonActive : styles.filterButtonInactive
//                 ]}
//               >
//                 <Text style={[
//                   styles.filterText,
//                   selectedFilter === filter ? styles.filterTextActive : styles.filterTextInactive
//                 ]}>
//                   {filter}
//                 </Text>
//                 {dropdownItems[filter] && dropdownItems[filter].length > 0 && (
//                   <MaterialIcons 
//                     name={selectedFilter === filter ? "keyboard-arrow-down" : "keyboard-arrow-right"} 
//                     size={16} 
//                     color={selectedFilter === filter ? 'white' : colors.subtext} 
//                   />
//                 )}
//               </TouchableOpacity>
//             ))}
//           </View>
//         </ScrollView>
        
//         {selectedFilter && dropdownItems[selectedFilter] && dropdownItems[selectedFilter].length > 0 && (
//           <View style={styles.subFilterContainer}>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               <View style={styles.subFilterRow}>
//                 {dropdownItems[selectedFilter].map((item, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[
//                       styles.subFilterButton,
//                       selectedSubItem === item ? styles.subFilterButtonActive : styles.subFilterButtonInactive
//                     ]}
//                     onPress={() => handleSubItemSelect(item)}
//                   >
//                     <Text style={[
//                       styles.subFilterText,
//                       selectedSubItem === item ? styles.subFilterTextActive : styles.subFilterTextInactive
//                     ]}>
//                       {item}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </ScrollView>
//           </View>
//         )}
//       </View>

//       {/* Main Content */}
//       <ScrollView style={styles.container}>
//         {project ? (
//           <>
//             {selectedSubItem && (
//               <View style={styles.selectedItemBanner}>
//                 <Text style={styles.selectedItemText}>Selected: {selectedSubItem}</Text>
//               </View>
//             )}
            
//             <View style={styles.header}>
//               <Text style={styles.headerTitle}>Project Overview</Text>
//             </View>
            
//             <View style={styles.cardGrid}>
//               {cardData.map((item, index) => (
//                 <View key={index} style={styles.card}>
//                   <LinearGradient
//                     colors={item.gradient}
//                     start={{ x: 0, y: 0 }}
//                     end={{ x: 1, y: 1 }}
//                     style={styles.cardHeader}
//                   >
//                     <View style={styles.cardHeaderTop}>
//                       <Text style={styles.cardTitle}>{item.title}</Text>
//                       {getTrendIndicator(item.trend)}
//                     </View>
//                     <View style={styles.cardContent}>
//                       <View style={styles.cardIcon}>
//                         {item.iconComponent}
//                       </View>
//                       <View style={styles.cardValueContainer}>
//                         <Text style={styles.cardValue}>{item.value}</Text>
//                       </View>
//                     </View>
//                   </LinearGradient>
//                   <View style={styles.cardFooter}>
//                     <Text style={styles.cardSubheading}>{item.subheading}</Text>
//                   </View>
//                 </View>
//               ))}
//             </View>
            
//             <Text style={styles.sectionTitle}>Document Status</Text>
//             <View style={styles.chartContainer}>
//               <View style={styles.pieChartWrapper}>
//                 <PieChart
//                   data={pieData}
//                   donut
//                   innerRadius={innerRadius}
//                   radius={pieRadius}
//                   innerCircleColor={colors.background}
//                   centerLabelComponent={() => (
//                     <View style={styles.pieCenterLabel}>
//                       <Text style={styles.pieCenterValue}>100</Text>
//                       <Text style={styles.pieCenterText}>Documents</Text>
//                     </View>
//                   )}
//                   strokeWidth={4}
//                   strokeColor={colors.card}
//                   showText={false}
//                   focusOnPress
//                   showValuesAsLabels
//                   labelsPosition="outward"
//                   shadow
//                   animationDuration={800}
//                 />
//               </View>
//               <View style={styles.legendContainer}>
//                 <View style={styles.legendItem}>
//                   <View style={[styles.legendColor, { backgroundColor: colors.success }]} />
//                   <Text style={styles.legendText}>Approved: 45%</Text>
//                 </View>
//                 <View style={styles.legendItem}>
//                   <View style={[styles.legendColor, { backgroundColor: colors.warning }]} />
//                   <Text style={styles.legendText}>Revision: 30%</Text>
//                 </View>
//                 <View style={styles.legendItem}>
//                   <View style={[styles.legendColor, { backgroundColor: colors.primaryLight }]} />
//                   <Text style={styles.legendText}>Review: 25%</Text>
//                 </View>
//               </View>
//             </View>
            
//             <Text style={styles.sectionTitle}>Progress Timeline</Text>
//             <View style={styles.chartContainer}>
//               <LineChart
//                 data={lineData}
//                 width={screenWidth - 64}
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
//                 rulesColor={colors.border}
//                 yAxisThickness={0}
//                 xAxisThickness={0}
//                 showVerticalLines
//                 verticalLinesColor={colors.border}
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
//                   pointerLabelComponent: (items) => {
//                     const item = items[0];
//                     return (
//                       <View style={styles.tooltip}>
//                         <Text style={styles.tooltipText}>{item.value}</Text>
//                       </View>
//                     );
//                   },
//                 }}
//                 animationDuration={800}
//               />
//             </View>
//           </>
//         ) : (
//           <Text style={styles.errorText}>Project not found.</Text>
//         )}
//       </ScrollView>
//     </MainLayout>
//   );
// }

// const styles = StyleSheet.create({
//   filterContainer: {
//     backgroundColor: colors.background,
//     paddingHorizontal: 16,
//     paddingTop: 16,
//     paddingBottom: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: colors.border,
//   },
//   filterScroll: {
//     marginBottom: 8,
//   },
//   filterRow: {
//     flexDirection: 'row',
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     marginRight: 12,
//   },
//   filterButtonActive: {
//     backgroundColor: colors.primary,
//   },
//   filterButtonInactive: {
//     backgroundColor: colors.card,
//     borderWidth: 1,
//     borderColor: colors.border,
//   },
//   filterText: {
//     fontWeight: '500',
//     marginRight: 4,
//   },
//   filterTextActive: {
//     color: 'white',
//   },
//   filterTextInactive: {
//     color: colors.text,
//   },
//   subFilterContainer: {
//     backgroundColor: colors.card,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: colors.border,
//     padding: 8,
//     marginTop: 8,
//   },
//   subFilterRow: {
//     flexDirection: 'row',
//     paddingVertical: 4,
//   },
//   subFilterButton: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginHorizontal: 4,
//   },
//   subFilterButtonActive: {
//     backgroundColor: colors.primary,
//   },
//   subFilterButtonInactive: {
//     backgroundColor: colors.background,
//   },
//   subFilterText: {
//     fontWeight: '500',
//     fontSize: 14,
//   },
//   subFilterTextActive: {
//     color: 'white',
//   },
//   subFilterTextInactive: {
//     color: colors.text,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//     paddingHorizontal: 16,
//     paddingTop: 24,
//   },
//   selectedItemBanner: {
//     backgroundColor: colors.primaryLight,
//     padding: 12,
//     borderRadius: 12,
//     marginBottom: 20,
//   },
//   selectedItemText: {
//     color: 'white',
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: colors.text,
//   },
//   cardGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//   },
//   card: {
//     width: '48%',
//     borderRadius: 16,
//     backgroundColor: colors.card,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.08,
//     shadowRadius: 12,
//     elevation: 8,
//     marginBottom: 16,
//     overflow: 'hidden',
//   },
//   cardHeader: {
//     padding: 16,
//   },
//   cardHeaderTop: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   cardTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: colors.text,
//     flex: 1,
//   },
//   cardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   cardIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 12,
//     backgroundColor: colors.card,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cardValueContainer: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   cardValue: {
//     fontSize: 22,
//     fontWeight: '800',
//     color: colors.text,
//     textAlign: 'right',
//   },
//   cardFooter: {
//     padding: 12,
//     backgroundColor: colors.card,
//   },
//   cardSubheading: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: colors.subtext,
//   },
//   trendIndicator: {
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: colors.text,
//     marginBottom: 16,
//   },
//   chartContainer: {
//     backgroundColor: colors.card,
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 24,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   pieChartWrapper: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   pieCenterLabel: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pieCenterValue: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: colors.text,
//   },
//   pieCenterText: {
//     fontSize: 14,
//     color: colors.subtext,
//   },
//   legendContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     marginTop: 20,
//   },
//   legendItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: colors.background,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 12,
//     margin: 6,
//   },
//   legendColor: {
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     marginRight: 8,
//   },
//   legendText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: colors.text,
//   },
//   tooltip: {
//     backgroundColor: colors.card,
//     padding: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   tooltipText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: colors.text,
//   },
//   errorText: {
//     fontSize: 16,
//     color: colors.subtext,
//     textAlign: 'center',
//     marginTop: 40,
//   },
// });





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet, StatusBar } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import MainLayout from '../components/MainLayout';
// import { PieChart, LineChart } from 'react-native-gifted-charts';
// import { LinearGradient } from 'expo-linear-gradient';
// import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

// const screenWidth = Dimensions.get('window').width;

// // Modern vibrant color palette with gradients
// const colors = {
//   primary: '#6366F1',         // Indigo
//   primaryLight: '#8B5CF6',    // Purple
//   secondary: '#06B6D4',       // Cyan
//   success: '#10B981',         // Emerald
//   warning: '#F59E0B',         // Amber
//   error: '#EF4444',           // Red
//   background: '#0F172A',      // Dark slate
//   backgroundLight: '#1E293B', // Lighter slate
//   card: '#FFFFFF',
//   cardDark: '#334155',        // Slate
//   text: '#1F2937',
//   textLight: '#F8FAFC',       // Light text for dark backgrounds
//   subtext: '#64748B',
//   subtextLight: '#94A3B8',
//   border: '#E2E8F0',
//   borderDark: '#475569',
//   accentPurple: '#A855F7',
//   accentPink: '#EC4899',
//   accentGreen: '#22D3EE',
//   accentOrange: '#FB923C',
//   glass: 'rgba(255, 255, 255, 0.1)',
// };

// // Enhanced gradients
// const gradients = {
//   primary: ['#667eea', '#764ba2'],
//   secondary: ['#f093fb', '#f5576c'],
//   success: ['#4facfe', '#00f2fe'],
//   warning: ['#ffecd2', '#fcb69f'],
//   purple: ['#a8edea', '#fed6e3'],
//   orange: ['#ffd89b', '#19547b'],
//   pink: ['#fccb90', '#d57eeb'],
//   blue: ['#74b9ff', '#0984e3'],
//   green: ['#00b894', '#00cec9'],
// };

// const filterOptions = ['Project Resources', 'Project Planning', 'Payments', 'Work Order', 'Inventory', 'Approvals', 'Reports'];

// const dropdownItems = {
//   'Project Resources': ['Bill of Quantity', 'Drawing', 'Documents'],
//   'Project Planning': ['Activity', 'Project Planner', 'Resource'],
//   'Payments': ['Indent', 'Purchase Order', 'Good Receive Note', 'Bill Payment', 'Expense'],
//   'Work Order': ['Work Order', 'Advance Payment', 'Bill', 'Bill Payment'],
//   'Inventory': [],
//   'Approvals': ['RFI', 'Snagging Report', 'Inspection', 'Submittals'],
//   'Reports': ['Daily Progress', 'Activity Timelines', 'Material Consumption'],
// };

// const pieData = [
//   { value: 45, color: colors.success, label: 'Approved', gradientCenterColor: '#34D399' }, 
//   { value: 30, color: colors.warning, label: 'Under Revision', gradientCenterColor: '#FBBF24' }, 
//   { value: 25, color: colors.primaryLight, label: 'Under Review', gradientCenterColor: '#A78BFA' }
// ];

// const lineData = [
//   { value: 20, dataPointText: '20' }, 
//   { value: 45, dataPointText: '45' }, 
//   { value: 28, dataPointText: '28' }, 
//   { value: 80, dataPointText: '80' }, 
//   { value: 64, dataPointText: '64' }, 
//   { value: 43, dataPointText: '43' }
// ];
// const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

// export default function DashboardScreen() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { projectId } = route.params || { projectId: 1 };
//   const [selectedFilter, setSelectedFilter] = useState(null);
//   const [selectedSubItem, setSelectedSubItem] = useState(null);

//   const projects = [
//     { id: 1, name: 'Acura Heights Tower', progress: '64%', duration: '18 months', amount: '$2.5M', status: 'Under Construction' },
//     { id: 2, name: 'Commercial Residences', progress: '89%', duration: '14 months', amount: '$1.8M', status: 'Under Construction' },
//     { id: 3, name: 'Corporate Landmark Project', progress: '52%', duration: '24 months', amount: '$3.2M', status: 'In Design' },
//   ];

//   const project = projects.find(p => p.id === projectId);

//   const pieRadius = Math.min(screenWidth * 0.35, 180);
//   const innerRadius = pieRadius * 0.55;

//   const cardData = [
//     { 
//       title: 'Not Started', 
//       value: '18', 
//       gradient: gradients.blue, 
//       trend: null, 
//       subheading: 'Pending Tasks',
//       iconComponent: <MaterialIcons name="pending-actions" size={28} color="white" />,
//       accentColor: colors.primary,
//       shadowColor: '#3B82F6'
//     },
//     { 
//       title: 'Drawings', 
//       value: '1', 
//       gradient: gradients.warning, 
//       trend: 'up', 
//       subheading: 'Under Review',
//       iconComponent: <Ionicons name="document-text" size={28} color="white" />,
//       accentColor: colors.warning,
//       shadowColor: '#F59E0B'
//     },
//     { 
//       title: 'Open GRN', 
//       value: '47', 
//       gradient: gradients.success, 
//       trend: 'down', 
//       subheading: 'Goods Received',
//       iconComponent: <FontAwesome5 name="box-open" size={28} color="white" />,
//       accentColor: colors.success,
//       shadowColor: '#10B981'
//     },
//     { 
//       title: 'Paid Bill', 
//       value: '₹49.1L', 
//       gradient: gradients.purple, 
//       trend: 'up', 
//       subheading: 'Total Payments',
//       iconComponent: <FontAwesome5 name="money-bill-wave" size={28} color="white" />,
//       accentColor: colors.acceptPurple,
//       shadowColor: '#A855F7'
//     },
//     { 
//       title: 'Open Indent', 
//       value: '22', 
//       gradient: gradients.pink, 
//       trend: null, 
//       subheading: 'Material Requests',
//       iconComponent: <MaterialIcons name="description" size={28} color="white" />,
//       accentColor: colors.accentPink,
//       shadowColor: '#EC4899'
//     },
//     { 
//       title: 'Open RFI', 
//       value: '2', 
//       gradient: gradients.orange, 
//       trend: 'stable', 
//       subheading: 'Information Requests',
//       iconComponent: <MaterialIcons name="help-outline" size={28} color="white" />,
//       accentColor: colors.accentOrange,
//       shadowColor: '#FB923C'
//     },
//     { 
//       title: 'Re-inspect', 
//       value: '1', 
//       gradient: gradients.green, 
//       trend: 'urgent', 
//       subheading: 'Quality Check',
//       iconComponent: <MaterialIcons name="find-in-page" size={28} color="white" />,
//       accentColor: colors.accentGreen,
//       shadowColor: '#22D3EE'
//     },
//     { 
//       title: 'Submittals', 
//       value: '10', 
//       gradient: gradients.secondary, 
//       trend: 'up', 
//       subheading: 'Document Review',
//       iconComponent: <MaterialIcons name="description" size={28} color="white" />,
//       accentColor: colors.secondary,
//       shadowColor: '#06B6D4'
//     },
//   ];

//   const getTrendIndicator = (trend) => {
//     if (!trend) return null;
//     const trendConfig = { 
//       up: { symbol: '↗', color: '#22C55E', bg: 'rgba(34, 197, 94, 0.15)', glow: '#22C55E' }, 
//       down: { symbol: '↘', color: '#EF4444', bg: 'rgba(239, 68, 68, 0.15)', glow: '#EF4444' }, 
//       stable: { symbol: '→', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.15)', glow: '#8B5CF6' }, 
//       urgent: { symbol: '⚠', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.15)', glow: '#F59E0B' } 
//     };
//     const config = trendConfig[trend];
//     return config ? (
//       <View style={[styles.trendIndicator, { 
//         backgroundColor: config.bg,
//         shadowColor: config.glow,
//         shadowOffset: { width: 0, height: 0 },
//         shadowOpacity: 0.3,
//         shadowRadius: 4,
//         elevation: 4,
//       }]}>
//         <Text style={{ color: config.color, fontSize: 14, fontWeight: '700' }}>
//           {config.symbol}
//         </Text>
//       </View>
//     ) : null;
//   };

//   const handleFilterSelect = (filter) => {
//     if (selectedFilter === filter) {
//       setSelectedFilter(null);
//       setSelectedSubItem(null);
//     } else {
//       setSelectedFilter(filter);
//       setSelectedSubItem(null);
//     }
//   };

//   const handleSubItemSelect = (subItem) => {
//     let screenName = '';
//     switch (subItem) {
//       case 'Bill of Quantity': screenName = 'BillOfQuantity'; break;
//       case 'Drawing': screenName = 'Drawing'; break;
//       case 'Documents': screenName = 'Document'; break;
//       case 'Activity': screenName = 'Activity'; break;
//       case 'Project Planner': screenName = 'ProjectPlanner'; break;
//       case 'Resource': screenName = 'Resource'; break;
//       case 'Indent': screenName = 'Indent'; break;
//       case 'Purchase Order': screenName = 'PurchaseOrder'; break;
//       case 'Good Receive Note': screenName = 'GoodReceiveNote'; break;
//       case 'Bill Payment': screenName = 'BillPayment'; break;
//       case 'Expense': screenName = 'Expense'; break;
//       case 'Work Order': screenName = 'WorkOrder'; break;
//       case 'Advance Payment': screenName = 'AdvancePayment'; break;
//       case 'Bill': screenName = 'Bill'; break;
//       case 'RFI': screenName = 'RFI'; break;
//       case 'Snagging Report': screenName = 'SnaggingReport'; break;
//       case 'Inspection': screenName = 'Inspection'; break;
//       case 'Submittals': screenName = 'Submittals'; break;
//       case 'Daily Progress': screenName = 'DailyProgress'; break;
//       case 'Activity Timelines': screenName = 'ActivityTimelines'; break;
//       case 'Material Consumption': screenName = 'MaterialConsumption'; break;
//       default: screenName = subItem.replace(/\s+/g, '');
//     }
//     navigation.navigate(screenName);
//   };

//   return (
//     <>
//       <StatusBar barStyle="light-content" backgroundColor={colors.background} />
//       <LinearGradient 
//         colors={[colors.background, colors.backgroundLight]} 
//         style={styles.backgroundGradient}
//       >
//         <MainLayout title={project ? project.name : 'Project Dashboard'}>
//           {/* Enhanced Filter Section */}
//           <LinearGradient
//             colors={['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.02)']}
//             style={styles.filterContainer}
//           >
//             <ScrollView 
//               horizontal 
//               showsHorizontalScrollIndicator={false} 
//               style={styles.filterScroll}
//             >
//               <View style={styles.filterRow}>
//                 {filterOptions.map((filter, index) => (
//                   <TouchableOpacity
//                     key={filter}
//                     onPress={() => handleFilterSelect(filter)}
//                     style={[
//                       styles.filterButton,
//                       selectedFilter === filter ? styles.filterButtonActive : styles.filterButtonInactive
//                     ]}
//                     activeOpacity={0.8}
//                   >
//                     <LinearGradient
//                       colors={selectedFilter === filter ? 
//                         ['#667eea', '#764ba2'] : 
//                         ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)']}
//                       style={styles.filterGradient}
//                     >
//                       <Text style={[
//                         styles.filterText,
//                         selectedFilter === filter ? styles.filterTextActive : styles.filterTextInactive
//                       ]}>
//                         {filter}
//                       </Text>
//                       {dropdownItems[filter] && dropdownItems[filter].length > 0 && (
//                         <MaterialIcons 
//                           name={selectedFilter === filter ? "keyboard-arrow-down" : "keyboard-arrow-right"} 
//                           size={18} 
//                           color={selectedFilter === filter ? 'white' : colors.subtextLight} 
//                         />
//                       )}
//                     </LinearGradient>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </ScrollView>
            
//             {selectedFilter && dropdownItems[selectedFilter] && dropdownItems[selectedFilter].length > 0 && (
//               <View style={styles.subFilterContainer}>
//                 <View style={[styles.blurView, { backgroundColor: 'rgba(30, 41, 59, 0.8)' }]}>
//                   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                     <View style={styles.subFilterRow}>
//                       {dropdownItems[selectedFilter].map((item, index) => (
//                         <TouchableOpacity
//                           key={index}
//                           style={[
//                             styles.subFilterButton,
//                             selectedSubItem === item ? styles.subFilterButtonActive : styles.subFilterButtonInactive
//                           ]}
//                           onPress={() => handleSubItemSelect(item)}
//                           activeOpacity={0.8}
//                         >
//                           <LinearGradient
//                             colors={selectedSubItem === item ? 
//                               ['#667eea', '#764ba2'] : 
//                               ['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
//                             style={styles.subFilterGradient}
//                           >
//                             <Text style={[
//                               styles.subFilterText,
//                               selectedSubItem === item ? styles.subFilterTextActive : styles.subFilterTextInactive
//                             ]}>
//                               {item}
//                             </Text>
//                           </LinearGradient>
//                         </TouchableOpacity>
//                       ))}
//                     </View>
//                   </ScrollView>
//                 </View>
//               </View>
//             )}
//           </LinearGradient>

//           {/* Enhanced Main Content */}
//           <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//             {project ? (
//               <>
//                 {selectedSubItem && (
//                   <LinearGradient
//                     colors={['#667eea', '#764ba2']}
//                     style={styles.selectedItemBanner}
//                   >
//                     <Text style={styles.selectedItemText}>✨ Selected: {selectedSubItem}</Text>
//                   </LinearGradient>
//                 )}
                
//                 <View style={styles.header}>
//                   <Text style={styles.headerTitle}>Project Overview</Text>
//                   <Text style={styles.headerSubtitle}>Real-time insights & analytics</Text>
//                 </View>
                
//                 {/* Enhanced Card Grid */}
//                 <View style={styles.cardGrid}>
//                   {cardData.map((item, index) => (
//                     <TouchableOpacity key={index} activeOpacity={0.9}>
//                       <View style={[styles.card, {
//                         shadowColor: item.shadowColor,
//                         shadowOffset: { width: 0, height: 8 },
//                         shadowOpacity: 0.25,
//                         shadowRadius: 16,
//                         elevation: 12,
//                       }]}>
//                         <LinearGradient
//                           colors={item.gradient}
//                           start={{ x: 0, y: 0 }}
//                           end={{ x: 1, y: 1 }}
//                           style={styles.cardGradient}
//                         >
//                           <View style={styles.cardHeader}>
//                             <View style={styles.cardHeaderTop}>
//                               <Text style={styles.cardTitle}>{item.title}</Text>
//                               {getTrendIndicator(item.trend)}
//                             </View>
//                             <View style={styles.cardContent}>
//                               <View style={styles.cardIconWrapper}>
//                                 <LinearGradient
//                                   colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
//                                   style={styles.cardIcon}
//                                 >
//                                   {item.iconComponent}
//                                 </LinearGradient>
//                               </View>
//                               <View style={styles.cardValueContainer}>
//                                 <Text style={styles.cardValue}>{item.value}</Text>
//                               </View>
//                             </View>
//                             <View style={styles.cardFooter}>
//                               <Text style={styles.cardSubheading}>{item.subheading}</Text>
//                             </View>
//                           </View>
//                         </LinearGradient>
//                       </View>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
                
//                 {/* Enhanced Document Status Chart */}
//                 <Text style={styles.sectionTitle}>📊 Document Status</Text>
//                 <LinearGradient
//                   colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.9)']}
//                   style={styles.chartContainer}
//                 >
//                   <View style={styles.pieChartWrapper}>
//                     <PieChart
//                       data={pieData}
//                       donut
//                       radius={pieRadius}
//                       innerCircleColor="transparent"
//                       centerLabelComponent={() => (
//                         <LinearGradient
//                           colors={['#667eea', '#764ba2']}
//                           style={[styles.pieCenterGradient, {
//                             width: innerRadius * 2,
//                             height: innerRadius * 2,
//                             borderRadius: innerRadius,
//                           }]}
//                         >
//                           <Text style={styles.pieCenterValue}>100</Text>
//                           <Text style={styles.pieCenterText}>Documents</Text>
//                         </LinearGradient>
//                       )}
//                       strokeWidth={3}
//                       strokeColor="white"
//                       showText={false}
//                       focusOnPress
//                       shadow
//                       animationDuration={1200}
//                       semiCircle={false}
//                     />
//                   </View>
//                   <View style={styles.legendContainer}>
//                     {pieData.map((item, index) => (
//                       <LinearGradient
//                         key={index}
//                         colors={['rgba(255,255,255,0.8)', 'rgba(255,255,255,0.6)']}
//                         style={styles.legendItem}
//                       >
//                         <View style={[styles.legendColor, { backgroundColor: item.color }]} />
//                         <Text style={styles.legendText}>{item.label}: {item.value}%</Text>
//                       </LinearGradient>
//                     ))}
//                   </View>
//                 </LinearGradient>
                
//                 {/* Enhanced Progress Timeline */}
//                 <Text style={styles.sectionTitle}>📈 Progress Timeline</Text>
//                 <LinearGradient
//                   colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.9)']}
//                   style={styles.chartContainer}
//                 >
//                   <LineChart
//                     data={lineData}
//                     width={screenWidth - 64}
//                     height={320}
//                     curved
//                     thickness={4}
//                     color="#667eea"
//                     startFillColor="rgba(102, 126, 234, 0.4)"
//                     endFillColor="rgba(118, 75, 162, 0.1)"
//                     startOpacity={1}
//                     endOpacity={0.2}
//                     areaChart
//                     initialSpacing={20}
//                     noOfSections={6}
//                     rulesType="dashed"
//                     rulesColor="rgba(0,0,0,0.1)"
//                     yAxisThickness={0}
//                     xAxisThickness={0}
//                     showVerticalLines
//                     verticalLinesColor="rgba(0,0,0,0.05)"
//                     dataPointsHeight={12}
//                     dataPointsWidth={12}
//                     dataPointsColor="#667eea"
//                     dataPointsRadius={6}
//                     textColor={colors.text}
//                     textSize={14}
//                     showValuesAsDataPointsText
//                     dataPointLabelComponent={(item) => (
//                       <View style={styles.dataPointLabel}>
//                         <Text style={styles.dataPointText}>{item.value}</Text>
//                       </View>
//                     )}
//                     xAxisLabelTexts={labels}
//                     xAxisLabelTextStyle={{ color: colors.subtext, fontSize: 13, fontWeight: '600' }}
//                     yAxisTextStyle={{ color: colors.subtext, fontSize: 12 }}
//                     animationDuration={1500}
//                     animationEasing="ease-in-out"
//                   />
//                 </LinearGradient>
//               </>
//             ) : (
//               <LinearGradient
//                 colors={['#f093fb', '#f5576c']}
//                 style={styles.errorContainer}
//               >
//                 <Text style={styles.errorText}>Project not found.</Text>
//               </LinearGradient>
//             )}
//           </ScrollView>
//         </MainLayout>
//       </LinearGradient>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   backgroundGradient: {
//     flex: 1,
//   },
//   filterContainer: {
//     paddingHorizontal: 16,
//     paddingTop: 20,
//     paddingBottom: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: colors.borderDark,
//   },
//   filterScroll: {
//     marginBottom: 12,
//   },
//   filterRow: {
//     flexDirection: 'row',
//     paddingHorizontal: 4,
//   },
//   filterButton: {
//     borderRadius: 25,
//     marginRight: 12,
//     overflow: 'hidden',
//   },
//   filterGradient: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     borderRadius: 25,
//   },
//   filterButtonActive: {
//     shadowColor: '#667eea',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   filterButtonInactive: {
//     borderWidth: 1,
//     borderColor: colors.borderDark,
//   },
//   filterText: {
//     fontWeight: '600',
//     marginRight: 6,
//     fontSize: 15,
//   },
//   filterTextActive: {
//     color: 'white',
//   },
//   filterTextInactive: {
//     color: colors.textLight,
//   },
//   subFilterContainer: {
//     borderRadius: 16,
//     marginTop: 12,
//     overflow: 'hidden',
//   },
//   blurView: {
//     padding: 12,
//     borderRadius: 16,
//   },
//   subFilterRow: {
//     flexDirection: 'row',
//     paddingVertical: 4,
//   },
//   subFilterButton: {
//     borderRadius: 20,
//     marginHorizontal: 4,
//     overflow: 'hidden',
//   },
//   subFilterGradient: {
//     paddingHorizontal: 18,
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
//   subFilterButtonActive: {
//     shadowColor: '#667eea',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   subFilterText: {
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   subFilterTextActive: {
//     color: 'white',
//   },
//   subFilterTextInactive: {
//     color: colors.textLight,
//   },
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     paddingTop: 24,
//   },
//   selectedItemBanner: {
//     padding: 16,
//     borderRadius: 20,
//     marginBottom: 24,
//     shadowColor: '#667eea',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.3,
//     shadowRadius: 12,
//     elevation: 8,
//   },
//   selectedItemText: {
//     color: 'white',
//     fontWeight: '700',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   header: {
//     marginBottom: 28,
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: '800',
//     color: colors.textLight,
//     marginBottom: 4,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: colors.subtextLight,
//     fontWeight: '500',
//   },
//   cardGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 32,
//   },
//   card: {
//     width: '48%',
//     borderRadius: 20,
//     marginBottom: 20,
//     overflow: 'hidden',
//   },
//   cardGradient: {
//     flex: 1,
//   },
//   cardHeader: {
//     padding: 20,
//   },
//   cardHeaderTop: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   cardTitle: {
//     fontSize: 15,
//     fontWeight: '700',
//     color: 'white',
//     flex: 1,
//   },
//   cardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   cardIconWrapper: {
//     shadowColor: 'rgba(0,0,0,0.3)', 
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   cardIcon: {
//     width: 48,
//     height: 48,
//     borderRadius: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cardValueContainer: {
//     flex: 1,
//     marginLeft: 16,
//   },
//   cardValue: {
//     fontSize: 24,
//     fontWeight: '900',
//     color: 'white',
//     textAlign: 'right',
//   },
//   cardFooter: {
//     marginTop: 4,
//   },
//   cardSubheading: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: 'rgba(255,255,255,0.8)',
//   },
//   trendIndicator: {
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 16,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: '800',
//     color: colors.textLight,
//     marginBottom: 20,
//   },
//   chartContainer: {
//     borderRadius: 24,
//     padding: 24,
//     marginBottom: 32,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.1,
//     shadowRadius: 16,
//     elevation: 8,
//   },
//   pieChartWrapper: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 24,
//   },
//   pieCenterGradient: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pieCenterValue: {
//     fontSize: 28,
//     fontWeight: '900',
//     color: 'white',
//   },
//   pieCenterText: {
//     fontSize: 14,
//     color: 'rgba(255,255,255,0.8)',
//     fontWeight: '600',
//   },
//   legendContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//   },
//   legendItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 16,
//     margin: 6,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   legendColor: {
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   legendText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: colors.text,
//   },
//   dataPointLabel: {
//     backgroundColor: 'rgba(102, 126, 234, 0.9)',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//     marginTop: -30,
//   },
//   dataPointText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: '700',
//   },
//   errorContainer: {
//     padding: 24,
//     borderRadius: 20,
//     alignItems: 'center',
//     marginTop: 40,
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'white',
//     fontWeight: '700',
//     textAlign: 'center',
//   },
// });







// //////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import MainLayout from '../components/MainLayout';
// import { PieChart, LineChart } from 'react-native-gifted-charts';
// import { LinearGradient } from 'expo-linear-gradient';
// import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

// const screenWidth = Dimensions.get('window').width;

// // Modern color palette
// const colors = {
//   primary: '#4F46E5',       // More vibrant primary
//   primaryLight: '#818CF8',
//   secondary: '#06B6D4',     // Cyan as secondary
//   success: '#10B981',
//   warning: '#F59E0B',
//   error: '#EF4444',
//   background: '#F8FAFC',    // Lighter background
//   card: '#FFFFFF',
//   text: '#1F2937',          // Darker text for better contrast
//   subtext: '#64748B',
//   border: '#E2E8F0',
//   accentPurple: '#A855F7',
//   accentPink: '#EC4899',
// };

// const filterOptions = ['Project Resources', 'Project Planning', 'Payments', 'Work Order', 'Inventory', 'Approvals', 'Reports'];

// const dropdownItems = {
//   'Project Resources': ['Bill of Quantity', 'Drawing', 'Documents'],
//   'Project Planning': ['Activity', 'Project Planner', 'Resource'],
//   'Payments': ['Indent', 'Purchase Order', 'Good Receive Note', 'Bill Payment', 'Expense'],
//   'Work Order': ['Work Order', 'Advance Payment', 'Bill', 'Bill Payment'],
//   'Inventory': [],
//   'Approvals': ['RFI', 'Snagging Report', 'Inspection', 'Submittals'],
//   'Reports': ['Daily Progress', 'Activity Timelines', 'Material Consumption'],
// };

// const pieData = [
//   { value: 45, color: colors.success, label: 'Approved' }, 
//   { value: 30, color: colors.warning, label: 'Under Revision' }, 
//   { value: 25, color: colors.primaryLight, label: 'Under Review' }
// ];

// const lineData = [
//   { value: 20 }, { value: 45 }, { value: 28 }, 
//   { value: 80 }, { value: 64 }, { value: 43 }
// ];
// const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

// export default function DashboardScreen() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { projectId } = route.params || { projectId: 1 };
//   const [selectedFilter, setSelectedFilter] = useState(null);
//   const [selectedSubItem, setSelectedSubItem] = useState(null);

//   const projects = [
//     { id: 1, name: 'Acura Heights Tower', progress: '64%', duration: '18 months', amount: '$2.5M', status: 'Under Construction' },
//     { id: 2, name: 'Commercial Residences', progress: '89%', duration: '14 months', amount: '$1.8M', status: 'Under Construction' },
//     { id: 3, name: 'Corporate Landmark Project', progress: '52%', duration: '24 months', amount: '$3.2M', status: 'In Design' },
//   ];

//   const project = projects.find(p => p.id === projectId);

//   const pieRadius = Math.min(screenWidth * 0.35, 180);
//   const innerRadius = pieRadius * 0.6;

//   const cardData = [
//     { 
//       title: 'Not Started', 
//       value: '18', 
//       icon: '📋', 
//       gradient: ['#E0F2FE', '#BAE6FD'], 
//       trend: null, 
//       subheading: 'Pending Tasks',
//       iconComponent: <MaterialIcons name="pending-actions" size={24} color={colors.primary} />
//     },
//     { 
//       title: 'Drawings', 
//       value: '1', 
//       icon: '📝', 
//       gradient: ['#FEF3C7', '#FDE68A'], 
//       trend: 'up', 
//       subheading: 'Under Review',
//       iconComponent: <Ionicons name="document-text" size={24} color={colors.warning} />
//     },
//     { 
//       title: 'Open GRN', 
//       value: '47', 
//       icon: '📦', 
//       gradient: ['#D1FAE5', '#A7F3D0'], 
//       trend: 'down', 
//       subheading: 'Goods Received',
//       iconComponent: <FontAwesome5 name="box-open" size={24} color={colors.success} />
//     },
//     { 
//       title: 'Paid Bill', 
//       value: '₹49.1L', 
//       icon: '💰', 
//       gradient: ['#E0E7FF', '#C7D2FE'], 
//       trend: 'up', 
//       subheading: 'Total Payments',
//       iconComponent: <FontAwesome5 name="money-bill-wave" size={24} color={colors.accentPurple} />
//     },
//     { 
//       title: 'Open Indent', 
//       value: '22', 
//       icon: '📑', 
//       gradient: ['#FEE2E2', '#FECACA'], 
//       trend: null, 
//       subheading: 'Material Requests',
//       iconComponent: <MaterialIcons name="description" size={24} color={colors.error} />
//     },
//     { 
//       title: 'Open RFI', 
//       value: '2', 
//       icon: '❓', 
//       gradient: ['#FEF3C7', '#FDE68A'], 
//       trend: 'stable', 
//       subheading: 'Information Requests',
//       iconComponent: <MaterialIcons name="help-outline" size={24} color={colors.warning} />
//     },
//     { 
//       title: 'Re-inspect', 
//       value: '1', 
//       icon: '🔍', 
//       gradient: ['#E0F2FE', '#BAE6FD'], 
//       trend: 'urgent', 
//       subheading: 'Quality Check',
//       iconComponent: <MaterialIcons name="find-in-page" size={24} color={colors.primary} />
//     },
//     { 
//       title: 'Submittals', 
//       value: '10', 
//       icon: '📄', 
//       gradient: ['#FCE7F3', '#FBCFE8'], 
//       trend: 'up', 
//       subheading: 'Document Review',
//       iconComponent: <MaterialIcons name="description" size={24} color={colors.accentPink} />
//     },
//   ];

//   const getTrendIndicator = (trend) => {
//     if (!trend) return null;
//     const trendConfig = { 
//       up: { symbol: '↗', color: colors.success, bg: '#ECFDF5' }, 
//       down: { symbol: '↘', color: colors.error, bg: '#FEF2F2' }, 
//       stable: { symbol: '→', color: colors.subtext, bg: '#F3F4F6' }, 
//       urgent: { symbol: '⚠', color: colors.warning, bg: '#FFF7ED' } 
//     };
//     const config = trendConfig[trend];
//     return config ? (
//       <View style={[styles.trendIndicator, { backgroundColor: config.bg }]}>
//         <Text style={{ color: config.color, fontSize: 12, fontWeight: '600' }}>
//           {config.symbol}
//         </Text>
//       </View>
//     ) : null;
//   };

//   const handleFilterSelect = (filter) => {
//     if (selectedFilter === filter) {
//       setSelectedFilter(null);
//       setSelectedSubItem(null);
//     } else {
//       setSelectedFilter(filter);
//       setSelectedSubItem(null);
//     }
//   };

//   const handleSubItemSelect = (subItem) => {
//     let screenName = '';
//     switch (subItem) {
//       case 'Bill of Quantity': screenName = 'BillOfQuantity'; break;
//       case 'Drawing': screenName = 'Drawing'; break;
//       case 'Documents': screenName = 'Document'; break;
//       case 'Activity': screenName = 'Activity'; break;
//       case 'Project Planner': screenName = 'ProjectPlanner'; break;
//       case 'Resource': screenName = 'Resource'; break;
//       case 'Indent': screenName = 'Indent'; break;
//       case 'Purchase Order': screenName = 'PurchaseOrder'; break;
//       case 'Good Receive Note': screenName = 'GoodReceiveNote'; break;
//       case 'Bill Payment': screenName = 'BillPayment'; break;
//       case 'Expense': screenName = 'Expense'; break;
//       case 'Work Order': screenName = 'WorkOrder'; break;
//       case 'Advance Payment': screenName = 'AdvancePayment'; break;
//       case 'Bill': screenName = 'Bill'; break;
//       case 'RFI': screenName = 'RFI'; break;
//       case 'Snagging Report': screenName = 'SnaggingReport'; break;
//       case 'Inspection': screenName = 'Inspection'; break;
//       case 'Submittals': screenName = 'Submittals'; break;
//       case 'Daily Progress': screenName = 'DailyProgress'; break;
//       case 'Activity Timelines': screenName = 'ActivityTimelines'; break;
//       case 'Material Consumption': screenName = 'MaterialConsumption'; break;
//       default: screenName = subItem.replace(/\s+/g, '');
//     }
//     navigation.navigate(screenName);
//   };

//   return (
//     <MainLayout title={project ? project.name : 'Project Dashboard'}>
//       {/* Filter Section */}
//       <View style={styles.filterContainer}>
//         <ScrollView 
//           horizontal 
//           showsHorizontalScrollIndicator={false} 
//           style={styles.filterScroll}
//         >
//           <View style={styles.filterRow}>
//             {filterOptions.map((filter, index) => (
//               <TouchableOpacity
//                 key={filter}
//                 onPress={() => handleFilterSelect(filter)}
//                 style={[
//                   styles.filterButton,
//                   selectedFilter === filter ? styles.filterButtonActive : styles.filterButtonInactive
//                 ]}
//               >
//                 <Text style={[
//                   styles.filterText,
//                   selectedFilter === filter ? styles.filterTextActive : styles.filterTextInactive
//                 ]}>
//                   {filter}
//                 </Text>
//                 {dropdownItems[filter] && dropdownItems[filter].length > 0 && (
//                   <MaterialIcons 
//                     name={selectedFilter === filter ? "keyboard-arrow-down" : "keyboard-arrow-right"} 
//                     size={16} 
//                     color={selectedFilter === filter ? 'white' : colors.subtext} 
//                   />
//                 )}
//               </TouchableOpacity>
//             ))}
//           </View>
//         </ScrollView>
        
//         {selectedFilter && dropdownItems[selectedFilter] && dropdownItems[selectedFilter].length > 0 && (
//           <View style={styles.subFilterContainer}>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               <View style={styles.subFilterRow}>
//                 {dropdownItems[selectedFilter].map((item, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[
//                       styles.subFilterButton,
//                       selectedSubItem === item ? styles.subFilterButtonActive : styles.subFilterButtonInactive
//                     ]}
//                     onPress={() => handleSubItemSelect(item)}
//                   >
//                     <Text style={[
//                       styles.subFilterText,
//                       selectedSubItem === item ? styles.subFilterTextActive : styles.subFilterTextInactive
//                     ]}>
//                       {item}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </ScrollView>
//           </View>
//         )}
//       </View>

//       {/* Main Content */}
//       <ScrollView style={styles.container}>
//         {project ? (
//           <>
//             {selectedSubItem && (
//               <View style={styles.selectedItemBanner}>
//                 <Text style={styles.selectedItemText}>Selected: {selectedSubItem}</Text>
//               </View>
//             )}
            
//             <View style={styles.header}>
//               <Text style={styles.headerTitle}>Project Overview</Text>
//             </View>
            
//             <View style={styles.cardGrid}>
//               {cardData.map((item, index) => (
//                 <View key={index} style={styles.card}>
//                   <LinearGradient
//                     colors={item.gradient}
//                     start={{ x: 0, y: 0 }}
//                     end={{ x: 1, y: 1 }}
//                     style={styles.cardGradient}
//                   >
//                     <View style={styles.cardHeader}>
//                       <View style={styles.cardIcon}>
//                         {item.iconComponent}
//                       </View>
//                       {getTrendIndicator(item.trend)}
//                     </View>
//                     <View style={styles.cardContent}>
//                       <Text style={styles.cardValue}>{item.value}</Text>
//                       <Text style={styles.cardTitle}>{item.title}</Text>
//                     </View>
//                     <View style={styles.cardFooter}>
//                       <Text style={styles.cardSubheading}>{item.subheading}</Text>
//                     </View>
//                   </LinearGradient>
//                 </View>
//               ))}
//             </View>
            
//             <Text style={styles.sectionTitle}>Document Status</Text>
//             <View style={styles.chartContainer}>
//               <View style={styles.pieChartWrapper}>
//                 <PieChart
//                   data={pieData}
//                   donut
//                   innerRadius={innerRadius}
//                   radius={pieRadius}
//                   innerCircleColor={colors.background}
//                   centerLabelComponent={() => (
//                     <View style={styles.pieCenterLabel}>
//                       <Text style={styles.pieCenterValue}>100</Text>
//                       <Text style={styles.pieCenterText}>Documents</Text>
//                     </View>
//                   )}
//                   strokeWidth={4}
//                   strokeColor={colors.card}
//                   showText={false}
//                   focusOnPress
//                   showValuesAsLabels
//                   labelsPosition="outward"
//                   shadow
//                   animationDuration={800}
//                 />
//               </View>
//               <View style={styles.legendContainer}>
//                 <View style={styles.legendItem}>
//                   <View style={[styles.legendColor, { backgroundColor: colors.success }]} />
//                   <Text style={styles.legendText}>Approved: 45%</Text>
//                 </View>
//                 <View style={styles.legendItem}>
//                   <View style={[styles.legendColor, { backgroundColor: colors.warning }]} />
//                   <Text style={styles.legendText}>Revision: 30%</Text>
//                 </View>
//                 <View style={styles.legendItem}>
//                   <View style={[styles.legendColor, { backgroundColor: colors.primaryLight }]} />
//                   <Text style={styles.legendText}>Review: 25%</Text>
//                 </View>
//               </View>
//             </View>
            
//             <Text style={styles.sectionTitle}>Progress Timeline</Text>
//             <View style={styles.chartContainer}>
//               <LineChart
//                 data={lineData}
//                 width={screenWidth - 64}
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
//                 rulesColor={colors.border}
//                 yAxisThickness={0}
//                 xAxisThickness={0}
//                 showVerticalLines
//                 verticalLinesColor={colors.border}
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
//                   pointerLabelComponent: (items) => {
//                     const item = items[0];
//                     return (
//                       <View style={styles.tooltip}>
//                         <Text style={styles.tooltipText}>{item.value}</Text>
//                       </View>
//                     );
//                   },
//                 }}
//                 animationDuration={800}
//               />
//             </View>
//           </>
//         ) : (
//           <Text style={styles.errorText}>Project not found.</Text>
//         )}
//       </ScrollView>
//     </MainLayout>
//   );
// }

// const styles = StyleSheet.create({
//   filterContainer: {
//     backgroundColor: colors.background,
//     paddingHorizontal: 16,
//     paddingTop: 16,
//     paddingBottom: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: colors.border,
//   },
//   filterScroll: {
//     marginBottom: 8,
//   },
//   filterRow: {
//     flexDirection: 'row',
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     marginRight: 12,
//   },
//   filterButtonActive: {
//     backgroundColor: colors.primary,
//   },
//   filterButtonInactive: {
//     backgroundColor: colors.card,
//     borderWidth: 1,
//     borderColor: colors.border,
//   },
//   filterText: {
//     fontWeight: '500',
//     marginRight: 4,
//   },
//   filterTextActive: {
//     color: 'white',
//   },
//   filterTextInactive: {
//     color: colors.text,
//   },
//   subFilterContainer: {
//     backgroundColor: colors.card,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: colors.border,
//     padding: 8,
//     marginTop: 8,
//   },
//   subFilterRow: {
//     flexDirection: 'row',
//     paddingVertical: 4,
//   },
//   subFilterButton: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginHorizontal: 4,
//   },
//   subFilterButtonActive: {
//     backgroundColor: colors.primary,
//   },
//   subFilterButtonInactive: {
//     backgroundColor: colors.background,
//   },
//   subFilterText: {
//     fontWeight: '500',
//     fontSize: 14,
//   },
//   subFilterTextActive: {
//     color: 'white',
//   },
//   subFilterTextInactive: {
//     color: colors.text,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//     paddingHorizontal: 16,
//     paddingTop: 24,
//   },
//   selectedItemBanner: {
//     backgroundColor: colors.primaryLight,
//     padding: 12,
//     borderRadius: 12,
//     marginBottom: 20,
//   },
//   selectedItemText: {
//     color: 'white',
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: colors.text,
//   },
//   cardGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//   },
//   card: {
//     width: '48%',
//     borderRadius: 16,
//     backgroundColor: colors.card,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.08,
//     shadowRadius: 12,
//     elevation: 8,
//     marginBottom: 16,
//     overflow: 'hidden',
//   },
//   cardGradient: {
//     padding: 16,
//     height: 160,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 16,
//   },
//   cardIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 12,
//     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cardContent: {
//     flex: 1,
//     justifyContent: 'center',
//     marginBottom: 8,
//   },
//   cardValue: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: colors.text,
//     marginBottom: 4,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: colors.text,
//   },
//   cardFooter: {
//     marginTop: 'auto',
//   },
//   cardSubheading: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: colors.subtext,
//   },
//   trendIndicator: {
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: colors.text,
//     marginBottom: 16,
//   },
//   chartContainer: {
//     backgroundColor: colors.card,
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 24,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   pieChartWrapper: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   pieCenterLabel: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pieCenterValue: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: colors.text,
//   },
//   pieCenterText: {
//     fontSize: 14,
//     color: colors.subtext,
//   },
//   legendContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     marginTop: 20,
//   },
//   legendItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: colors.background,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 12,
//     margin: 6,
//   },
//   legendColor: {
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     marginRight: 8,
//   },
//   legendText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: colors.text,
//   },
//   tooltip: {
//     backgroundColor: colors.card,
//     padding: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   tooltipText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: colors.text,
//   },
//   errorText: {
//     fontSize: 16,
//     color: colors.subtext,
//     textAlign: 'center',
//     marginTop: 40,
//   },
// });




import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import MainLayout from '../components/MainLayout';
import { PieChart, LineChart } from 'react-native-gifted-charts';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const colors = {
  primary: '#1E3A8A',
  secondary: '#6366F1',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceVariant: '#F1F5F9',
  text: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#64748B',
  border: '#E2E8F0',
  accent: '#8B5CF6',
};

const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
};

const filterOptions = [
  'Project Resources', 
  'Project Planning', 
  'Payments', 
  'Work Order', 
  'Inventory', 
  'Approvals', 
  'Reports'
];

const dropdownItems = {
  'Project Resources': ['Bill of Quantity', 'Drawing', 'Documents'],
  'Project Planning': ['Activity', 'Project Planner', 'Resource'],
  'Payments': ['Indent', 'Purchase Order', 'Good Receive Note', 'Bill Payment', 'Expense'],
  'Work Order': ['Work Order', 'Advance Payment', 'Bill', 'Bill Payment'],
  'Inventory': [],
  'Approvals': ['RFI', 'Snagging Report', 'Inspection', 'Submittals'],
  'Reports': ['Daily Progress', 'Activity Timelines', 'Material Consumption'],
};

const pieData = [
  { value: 45, color: colors.success, label: 'Approved', gradientCenterColor: '#34D399' },
  { value: 30, color: colors.warning, label: 'Under Revision', gradientCenterColor: '#FBBF24' },
  { value: 25, color: colors.info, label: 'Under Review', gradientCenterColor: '#60A5FA' }
];

const lineData = [
  { value: 20, dataPointText: '20' },
  { value: 45, dataPointText: '45' },
  { value: 28, dataPointText: '28' },
  { value: 80, dataPointText: '80' },
  { value: 64, dataPointText: '64' },
  { value: 43, dataPointText: '43' }
];

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export default function DashboardScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { projectId } = route.params || { projectId: 1 };
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(-50));

  const projects = [
    { 
      id: 1, 
      name: 'Acura Heights Tower', 
      progress: '64%', 
      duration: '18 months', 
      amount: '$2.5M', 
      status: 'Under Construction',
      completionDate: '2025-12-15'
    },
    { 
      id: 2, 
      name: 'Commercial Residences', 
      progress: '89%', 
      duration: '14 months', 
      amount: '$1.8M', 
      status: 'Under Construction',
      completionDate: '2025-10-30'
    },
    { 
      id: 3, 
      name: 'Corporate Landmark Project', 
      progress: '52%', 
      duration: '24 months', 
      amount: '$3.2M', 
      status: 'In Design',
      completionDate: '2026-06-20'
    },
  ];

  const project = projects.find(p => p.id === projectId);

  const cardData = [
    { 
      title: 'Not Started', 
      value: '18', 
      icon: '📋', 
      gradient: ['#F0F9FF', '#E0F2FE'], 
      iconBg: '#0EA5E9',
      trend: null, 
      subheading: 'Pending Tasks',
      change: null
    },
    { 
      title: 'Drawings', 
      value: '1', 
      icon: '📐', 
      gradient: ['#FFF7ED', '#FFEDD5'], 
      iconBg: '#F97316',
      trend: 'up', 
      subheading: 'Under Review',
      change: '+2 this week'
    },
    { 
      title: 'Open GRN', 
      value: '47', 
      icon: '📦', 
      gradient: ['#F0FDF4', '#DCFCE7'], 
      iconBg: '#22C55E',
      trend: 'down', 
      subheading: 'Goods Received',
      change: '-5 from last week'
    },
    { 
      title: 'Paid Bill', 
      value: '₹49.1L', 
      icon: '💰', 
      gradient: ['#F5F3FF', '#EDE9FE'], 
      iconBg: '#8B5CF6',
      trend: 'up', 
      subheading: 'Total Payments',
      change: '+₹12.3L this month'
    },
    { 
      title: 'Open Indent', 
      value: '22', 
      icon: '📑', 
      gradient: ['#FEF2F2', '#FEE2E2'], 
      iconBg: '#EF4444',
      trend: 'stable', 
      subheading: 'Material Requests',
      change: 'No change'
    },
    { 
      title: 'Open RFI', 
      value: '2', 
      icon: '❓', 
      gradient: ['#FEFCE8', '#FEF3C7'], 
      iconBg: '#EAB308',
      trend: 'urgent', 
      subheading: 'Information Requests',
      change: '1 overdue'
    },
    { 
      title: 'Re-inspect', 
      value: '1', 
      icon: '🔍', 
      gradient: ['#F0F9FF', '#E0F2FE'], 
      iconBg: '#0EA5E9',
      trend: 'urgent', 
      subheading: 'Quality Check',
      change: 'Requires attention'
    },
    { 
      title: 'Submittals', 
      value: '10', 
      icon: '📄', 
      gradient: ['#FDF2F8', '#FCE7F3'], 
      iconBg: '#EC4899',
      trend: 'up', 
      subheading: 'Document Review',
      change: '+3 new submissions'
    },
  ];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const getTrendIndicator = (trend) => {
    if (!trend) return null;
    const trendConfig = {
      up: { symbol: '↗️', color: colors.success, bg: '#ECFDF5', text: 'Increasing' },
      down: { symbol: '↘️', color: colors.danger, bg: '#FEF2F2', text: 'Decreasing' },
      stable: { symbol: '→', color: colors.textMuted, bg: '#F8FAFC', text: 'Stable' },
      urgent: { symbol: '⚠️', color: colors.warning, bg: '#FFF7ED', text: 'Urgent' }
    };
    const config = trendConfig[trend];
    return config ? (
      <View 
        style={{ 
          backgroundColor: config.bg, 
          paddingHorizontal: 8, 
          paddingVertical: 4, 
          borderRadius: 12,
          ...shadows.small
        }}
      >
        <Text style={{ 
          color: config.color, 
          fontSize: 11, 
          fontWeight: '600' 
        }}>
          {config.symbol}
        </Text>
      </View>
    ) : null;
  };

  const handleFilterSelect = (filter) => {
    if (selectedFilter === filter) {
      setSelectedFilter(null);
      setSelectedSubItem(null);
    } else {
      setSelectedFilter(filter);
      setSelectedSubItem(null);
    }
  };

  const handleSubItemSelect = (subItem) => {
    setSelectedSubItem(subItem);
    let screenName = '';
    switch (subItem) {
      case 'Bill of Quantity': screenName = 'BillOfQuantity'; break;
      case 'Drawing': screenName = 'Drawing'; break;
      case 'Documents': screenName = 'Document'; break;
      case 'Activity': screenName = 'Activity'; break;
      case 'Project Planner': screenName = 'ProjectPlanner'; break;
      case 'Resource': screenName = 'Resource'; break;
      case 'Indent': screenName = 'Indent'; break;
      case 'Purchase Order': screenName = 'PurchaseOrder'; break;
      case 'Good Receive Note': screenName = 'GoodReceiveNote'; break;
      case 'Bill Payment': screenName = 'BillPayment'; break;
      case 'Expense': screenName = 'Expense'; break;
      case 'Work Order': screenName = 'WorkOrder'; break;
      case 'Advance Payment': screenName = 'AdvancePayment'; break;
      case 'Bill': screenName = 'Bill'; break;
      case 'RFI': screenName = 'RFI'; break;
      case 'Snagging Report': screenName = 'SnaggingReport'; break;
      case 'Inspection': screenName = 'Inspection'; break;
      case 'Submittals': screenName = 'Submittals'; break;
      case 'Daily Progress': screenName = 'DailyProgress'; break;
      case 'Activity Timelines': screenName = 'ActivityTimelines'; break;
      case 'Material Consumption': screenName = 'MaterialConsumption'; break;
      default: screenName = subItem.replace(/\s+/g, '');
    }
    navigation.navigate(screenName);
  };

  const ProjectHeaderCard = () => (
    <Animated.View 
      style={{ 
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }]
      }}
    >
      <LinearGradient
        colors={['#1E40AF', '#3B82F6', '#60A5FA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          marginHorizontal: 24,
          marginVertical: 16,
          borderRadius: 20,
          padding: 24,
          ...shadows.large
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ 
              color: 'white', 
              fontSize: 24, 
              fontWeight: '700',
              marginBottom: 8
            }}>
              {project?.name}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
              <View style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 12,
                marginRight: 12
              }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }}>
                  {project?.status}
                </Text>
              </View>
              <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 14 }}>
                {project?.duration}
              </Text>
            </View>
            <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, fontWeight: '600' }}>
              Budget: {project?.amount}
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: 'white', fontSize: 32, fontWeight: '800' }}>
              {project?.progress}
            </Text>
            <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>
              Complete
            </Text>
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );

  const FilterSection = () => (
    <View style={{ backgroundColor: colors.surface, paddingVertical: 20 }}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{ paddingHorizontal: 24 }}
      >
        {filterOptions.map((filter, index) => {
          const isSelected = selectedFilter === filter;
          const hasItems = dropdownItems[filter] && dropdownItems[filter].length > 0;
          
          return (
            <TouchableOpacity
              key={filter}
              onPress={() => handleFilterSelect(filter)}
              style={{
                marginRight: 12,
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 25,
                backgroundColor: isSelected ? colors.primary : colors.surfaceVariant,
                borderWidth: isSelected ? 0 : 1,
                borderColor: colors.border,
                flexDirection: 'row',
                alignItems: 'center',
                ...shadows.small
              }}
            >
              <Text style={{
                color: isSelected ? 'white' : colors.textSecondary,
                fontWeight: isSelected ? '600' : '500',
                fontSize: 14,
                marginRight: hasItems ? 8 : 0
              }}>
                {filter}
              </Text>
              {hasItems && (
                <Text style={{
                  color: isSelected ? 'white' : colors.textMuted,
                  fontSize: 12,
                  fontWeight: '600'
                }}>
                  {isSelected ? '▼' : '▶'}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {selectedFilter && dropdownItems[selectedFilter] && dropdownItems[selectedFilter].length > 0 && (
        <Animated.View 
          style={{ 
            marginTop: 16,
            marginHorizontal: 24,
            backgroundColor: colors.surfaceVariant,
            borderRadius: 16,
            padding: 16,
            ...shadows.small,
            opacity: fadeAnim
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {dropdownItems[selectedFilter].map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    marginRight: 12,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 20,
                    backgroundColor: selectedSubItem === item ? colors.accent : colors.surface,
                    ...shadows.small
                  }}
                  onPress={() => handleSubItemSelect(item)}
                >
                  <Text style={{
                    color: selectedSubItem === item ? 'white' : colors.text,
                    fontWeight: selectedSubItem === item ? '600' : '500',
                    fontSize: 13
                  }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );

  const StatsCard = ({ item, index }) => (
    <Animated.View
      style={{
        width: (screenWidth - 60) / 2,
        marginBottom: 16,
        marginRight: index % 2 === 0 ? 12 : 0,
        borderRadius: 20,
        backgroundColor: colors.surface,
        overflow: 'hidden',
        ...shadows.medium,
        opacity: fadeAnim,
        transform: [{
          translateY: slideAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, index * 10]
          })
        }]
      }}
    >
      <LinearGradient
        colors={item.gradient}
        style={{ padding: 20, paddingBottom: 16 }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ 
              fontSize: 13, 
              fontWeight: '600', 
              color: colors.textSecondary,
              marginBottom: 4
            }}>
              {item.title}
            </Text>
            {/* {getTrendIndicator(item.trend)} */}
          </View>
          <View style={{
            width: 44,
            height: 44,
            borderRadius: 14,
            backgroundColor: item.iconBg,
            alignItems: 'center',
            justifyContent: 'center',
            ...shadows.small
          }}>
            <Text style={{ fontSize: 20 }}>{item.icon}</Text>
          </View>
        </View>
        
        <Text style={{ 
          fontSize: 28, 
          fontWeight: '800', 
          color: colors.text,
          marginBottom: 4
        }}>
          {item.value}
        </Text>
        
        <Text style={{ 
          fontSize: 12, 
          fontWeight: '500', 
          color: colors.textMuted,
          marginBottom: item.change ? 4 : 0
        }}>
          {item.subheading}
        </Text>
        
        {item.change && (
          <Text style={{ 
            fontSize: 11, 
            fontWeight: '500', 
            color: colors.textMuted,
            fontStyle: 'italic'
          }}>
            {item.change}
          </Text>
        )}
      </LinearGradient>
    </Animated.View>
  );

  const ChartsSection = () => (
    <View style={{ paddingHorizontal: 24, marginTop: 32 }}>
      {/* Document Status Chart */}
      <Animated.View 
        style={{ 
          marginBottom: 32,
          opacity: fadeAnim
        }}
      >
        <Text style={{ 
          fontSize: 22, 
          fontWeight: '700', 
          color: colors.text, 
          marginBottom: 20
        }}>
          Document Status Overview
        </Text>
        
        <View style={{
          backgroundColor: colors.surface,
          borderRadius: 24,
          padding: 32,
          ...shadows.large
        }}>
          <View style={{ alignItems: 'center', marginBottom: 32 }}>
            <PieChart
              data={pieData}
              donut
              innerRadius={80}
              radius={120}
              innerCircleColor={colors.surface}
              centerLabelComponent={() => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ 
                    fontSize: 36, 
                    fontWeight: '900', 
                    color: colors.text 
                  }}>
                    100
                  </Text>
                  <Text style={{ 
                    fontSize: 14, 
                    fontWeight: '600', 
                    color: colors.textSecondary 
                  }}>
                    Documents
                  </Text>
                </View>
              )}
              strokeWidth={3}
              strokeColor={colors.surface}
              showText={false}
              focusOnPress
              showValuesAsLabels={false}
              shadow
              shadowColor="#000"
              shadowOpacity={0.1}
              shadowRadius={8}
              animationDuration={1200}
            />
          </View>
          
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {pieData.map((item, index) => (
              <View 
                key={index}
                style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  marginHorizontal: 12, 
                  marginVertical: 6,
                  backgroundColor: colors.surfaceVariant,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 16,
                  ...shadows.small
                }}
              >
                <View style={{ 
                  width: 12, 
                  height: 12, 
                  borderRadius: 6, 
                  backgroundColor: item.color, 
                  marginRight: 10 
                }} />
                <Text style={{ 
                  fontSize: 14, 
                  fontWeight: '600', 
                  color: colors.text 
                }}>
                  {item.label}: {item.value}%
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Animated.View>

      {/* Progress Timeline Chart */}
      <Animated.View 
        style={{ 
          marginBottom: 32,
          opacity: fadeAnim
        }}
      >
        <Text style={{ 
          fontSize: 22, 
          fontWeight: '700', 
          color: colors.text, 
          marginBottom: 20
        }}>
          Progress Timeline
        </Text>
        
        <View style={{
          backgroundColor: colors.surface,
          borderRadius: 24,
          padding: 24,
          ...shadows.large
        }}>
          <LineChart
            data={lineData}
            width={screenWidth - 120}
            height={280}
            curved
            thickness={4}
            color={colors.primary}
            startFillColor={colors.primary}
            endFillColor={colors.secondary}
            startOpacity={0.8}
            endOpacity={0.1}
            areaChart
            initialSpacing={10}
            endSpacing={10}
            noOfSections={5}
            rulesType="solid"
            rulesColor={colors.border}
            yAxisThickness={0}
            xAxisThickness={0}
            showVerticalLines
            verticalLinesColor={colors.border}
            dataPointsHeight={12}
            dataPointsWidth={12}
            dataPointsColor={colors.primary}
            dataPointsRadius={6}
            textColor={colors.text}
            textSize={12}
            showValuesAsDataPointsText={false}
            xAxisLabelTexts={labels}
            xAxisLabelTextStyle={{ 
              color: colors.textSecondary, 
              fontSize: 12,
              fontWeight: '500'
            }}
            yAxisTextStyle={{ 
              color: colors.textSecondary, 
              fontSize: 12,
              fontWeight: '500'
            }}
            animationDuration={1200}
            animationEasing="ease-out"
            pointerConfig={{
              pointerStripHeight: 200,
              pointerStripColor: colors.textMuted,
              pointerStripWidth: 2,
              pointerColor: colors.primary,
              radius: 8,
              pointerLabelWidth: 100,
              pointerLabelHeight: 80,
              activatePointersOnLongPress: true,
              autoAdjustPointerLabelPosition: true,
              pointerLabelComponent: (items) => {
                const item = items[0];
                return (
                  <View style={{
                    backgroundColor: colors.surface,
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 12,
                    ...shadows.medium,
                    borderWidth: 1,
                    borderColor: colors.border
                  }}>
                    <Text style={{ 
                      fontSize: 14, 
                      fontWeight: '600', 
                      color: colors.text 
                    }}>
                      {item.value}%
                    </Text>
                    <Text style={{ 
                      fontSize: 11, 
                      color: colors.textSecondary 
                    }}>
                      Progress
                    </Text>
                  </View>
                );
              },
            }}
          />
        </View>
      </Animated.View>
    </View>
  );

  return (
    <MainLayout title={project ? project.name : 'Project Dashboard'}>
      <ScrollView 
        style={{ flex: 1, backgroundColor: colors.background }}
        showsVerticalScrollIndicator={false}
      >
        <ProjectHeaderCard />
        <FilterSection />
        
        {selectedSubItem && (
          <Animated.View 
            style={{ 
              marginHorizontal: 24,
              marginTop: 16,
              backgroundColor: colors.accent,
              padding: 20,
              borderRadius: 16,
              ...shadows.medium,
              opacity: fadeAnim
            }}
          >
            <Text style={{ 
              fontSize: 18, 
              fontWeight: '700', 
              color: 'white',
              textAlign: 'center'
            }}>
              Selected: {selectedSubItem}
            </Text>
          </Animated.View>
        )}

        <View style={{ paddingHorizontal: 24, paddingTop: 32 }}>
          <Text style={{ 
            fontSize: 22, 
            fontWeight: '700', 
            color: colors.text, 
            marginBottom: 20
          }}>
            Project Statistics
          </Text>
          
          <View style={{ 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between' 
          }}>
            {cardData.map((item, index) => (
              <StatsCard key={index} item={item} index={index} />
            ))}
          </View>
        </View>

        <ChartsSection />
        
        <View style={{ height: 32 }} />
      </ScrollView>
    </MainLayout>
  );
}