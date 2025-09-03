import React, { useState } from 'react';
  import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
  import { useRoute, useNavigation } from '@react-navigation/native';
  import MainLayout from '../components/MainLayout';
  import { PieChart, LineChart } from 'react-native-gifted-charts';

  const screenWidth = Dimensions.get('window').width;

  const colors = {
    primary: '#1E3A8A',
    secondary: '#6366F1',
    success: '#10B981',
    warning: '#F59E0B',
    info: '#3B82F6',
    background: '#F3F4F6',
    card: '#FFFFFF',
    text: '#111827',
    subtext: '#6B7280',
  };

  const filterOptions = ['Project Resources', 'Project Planning', 'Payments', 'Work Order', 'Inventory', 'Approvals', 'Reports'];

  const dropdownItems = {
    'Project Resources': ['Bill of Quantity', 'Drawing', 'Documents'],
    'Project Planning': ['Activity', 'Project Planner', 'Resource'],
    'Payments': ['Indent', 'Purchase Order', 'Good Receive Note', 'Bill Payment', 'Expense'],
    'Work Order': ['Work Order', 'Advance Payment', 'Bill', 'Bill Payment'],
    'Inventory': [],
    'Approvals': ['RFI', 'Snagging Report', 'Inspection', 'Submittals'],
    'Reports': ['Daily Progress', 'Activity Timelines', 'Material Consumption'],
  };

  const pieData = [{ value: 45, color: colors.success, label: 'Approved' }, { value: 30, color: colors.warning, label: 'Under Revision' }, { value: 25, color: colors.info, label: 'Under Review' }];
  const lineData = [{ value: 20 }, { value: 45 }, { value: 28 }, { value: 80 }, { value: 64 }, { value: 43 }];
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  export default function DashboardScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const { projectId } = route.params || { projectId: 1 };
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [selectedSubItem, setSelectedSubItem] = useState(null);

    const projects = [
      { id: 1, name: 'Acura Heights Tower', progress: '64%', duration: '18 months', amount: '$2.5M', status: 'Under Construction' },
      { id: 2, name: 'Commercial Residences', progress: '89%', duration: '14 months', amount: '$1.8M', status: 'Under Construction' },
      { id: 3, name: 'Corporate Landmark Project', progress: '52%', duration: '24 months', amount: '$3.2M', status: 'In Design' },
    ];

    const project = projects.find(p => p.id === projectId);

    const pieRadius = Math.min(screenWidth * 0.4, 200);
    const innerRadius = pieRadius * 0.6;

    const cardData = [
      { title: 'Not Started', value: '18', icon: '📋', gradient: ['#EFF6FF', '#DBEAFE'], trend: null, subheading: 'Pending Tasks' },
      { title: 'Drawings', value: '1', icon: '📝', gradient: ['#FFF7ED', '#FED7AA'], trend: 'up', subheading: 'Under Review' },
      { title: 'Open GRN', value: '47', icon: '📦', gradient: ['#ECFFF5', '#BBF7D0'], trend: 'down', subheading: 'Goods Received' },
      { title: 'Paid Bill', value: '₹49.1L', icon: '💰', gradient: ['#F5F3FF', '#E0E7FF'], trend: 'up', subheading: 'Total Payments' },
      { title: 'Open Indent', value: '22', icon: '📑', gradient: ['#FEF2F2', '#FECACA'], trend: null, subheading: 'Material Requests' },
      { title: 'Open RFI', value: '2', icon: '❓', gradient: ['#FEFCE8', '#FEF3C7'], trend: 'stable', subheading: 'Information Requests' },
      { title: 'Re-inspect', value: '1', icon: '🔍', gradient: ['#EFF6FF', '#DBEAFE'], trend: 'urgent', subheading: 'Quality Check' },
      { title: 'Submittals', value: '10', icon: '📄', gradient: ['#FDF2F8', '#FCE7F3'], trend: 'up', subheading: 'Document Review' },
    ];

    const getTrendIndicator = (trend) => {
      if (!trend) return null;
      const trendConfig = { up: { symbol: '↗', color: '#10B981', bg: '#ECFDF5' }, down: { symbol: '↘', color: '#EF4444', bg: '#FEF2F2' }, stable: { symbol: '→', color: '#6B7280', bg: '#F3F4F6' }, urgent: { symbol: '⚠', color: '#F59E0B', bg: '#FFF7ED' } };
      const config = trendConfig[trend];
      return config ? <View className="px-2 py-1 rounded-full" style={{ backgroundColor: config.bg }}><Text style={{ color: config.color, fontSize: 12, fontWeight: '600' }}>{config.symbol}</Text></View> : null;
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
      let screenName = '';
      console.log("asdf",subItem)
      switch (subItem) {
        case 'Bill of Quantity': 
      screenName = 'BillOfQuantity'; 
      console.log("Attempting to navigate to BillOfQuantity");
      break;
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

    return (
      <MainLayout title={project ? project.name : 'Project Dashboard'}>
        <View className="bg-blue-100 px-6 pb-6 pt-14 shadow-sm">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
            <View className="flex-row">
              {filterOptions.map((filter, index) => (
                <TouchableOpacity
                  key={filter}
                  onPress={() => handleFilterSelect(filter)}
                  className={`mr-3 flex-row items-center rounded-full px-4 py-2 ${selectedFilter === filter ? 'bg-blue-600' : 'bg-gray-100'}`}
                >
                  <Text className={`font-medium mr-2 ${selectedFilter === filter ? 'text-white' : 'text-gray-600'}`}>{filter}</Text>
                  {dropdownItems[filter] && dropdownItems[filter].length > 0 && (
                    <Text style={{ color: selectedFilter === filter ? 'white' : '#6B7280', fontSize: 12 }}>
                      {selectedFilter === filter ? '▼' : '▶'}
                    </Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          {selectedFilter && dropdownItems[selectedFilter] && dropdownItems[selectedFilter].length > 0 && (
            <View className="bg-blue-50 rounded-lg mt-2 border border-blue-200 p-2">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row py-2">
                  {dropdownItems[selectedFilter].map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      className={`mx-2 px-4 py-2 rounded-full ${selectedSubItem === item ? 'bg-blue-600' : 'bg-white'}`}
                      onPress={() => handleSubItemSelect(item)}
                    >
                      <Text className={`font-medium ${selectedSubItem === item ? 'text-white' : 'text-gray-700'} text-sm`}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          )}
        </View>
        <ScrollView className="flex-1 px-6 py-8" style={{ backgroundColor: colors.background }}>
          {project ? (
            <>
              {selectedSubItem && (
                <View className="mb-6 bg-blue-50 p-4 rounded-lg">
                  <Text className="text-lg font-semibold text-blue-800">Selected: {selectedSubItem}</Text>
                </View>
              )}
              <View className="flex-row items-center justify-between mb-6">
                <Text className="text-2xl font-bold text-gray-900">Project Overview</Text>
              </View>
              <View className="flex-row flex-wrap justify-between mb-8">
                {cardData.map((item, index) => (
                  <View
                    key={index}
                    className="w-[48%] mb-4 rounded-2xl overflow-hidden"
                    style={{ backgroundColor: colors.card, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 12, elevation: 8 }}
                  >
                    <View className="px-5 pt-4 pb-2" style={{ backgroundColor: item.gradient[0] }}>
                      <View className="flex-row items-center justify-between mb-3">
                        <Text className="text-sm font-medium text-gray-600">{item.title}</Text>
                        {getTrendIndicator(item.trend)}
                      </View>
                      <View className="flex-row items-center justify-between">
                        <View className="w-12 h-12 rounded-xl items-center justify-center" style={{ backgroundColor: colors.card, opacity: 0.9 }}>
                          <Text className="text-xl">{item.icon}</Text>
                        </View>
                        <View className="flex-1 ml-3">
                          <Text className="text-2xl font-black" style={{ color: colors.text }}>{item.value}</Text>
                        </View>
                      </View>
                    </View>
                    <View className="px-5 py-3">
                      <Text className="text-xs font-medium" style={{ color: colors.subtext }}>{item.subheading}</Text>
                    </View>
                  </View>
                ))}
              </View>
              <Text className="text-2xl font-bold text-gray-900 mb-6">Document Status</Text>
              <View className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8" style={{ width: screenWidth - 48 }}>
                <View className="items-center">
                  <PieChart
                    data={pieData}
                    donut
                    innerRadius={innerRadius}
                    radius={pieRadius}
                    innerCircleColor={colors.card}
                    centerLabelComponent={() => <View className="justify-center items-center"><Text className="text-3xl font-extrabold" style={{ color: colors.text }}>100</Text><Text className="text-sm" style={{ color: colors.subtext }}>Documents</Text></View>}
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
                    <Text className="text-base font-medium" style={{ color: colors.text }}>Approved: 45%</Text>
                  </View>
                  <View className="flex-row items-center mx-4 mb-3 bg-gray-50 p-3 rounded-lg shadow-sm">
                    <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: colors.warning }} />
                    <Text className="text-base font-medium" style={{ color: colors.text }}>Revision: 30%</Text>
                  </View>
                  <View className="flex-row items-center mx-4 mb-3 bg-gray-50 p-3 rounded-lg shadow-sm">
                    <View className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: colors.info }} />
                    <Text className="text-base font-medium" style={{ color: colors.text }}>Review: 25%</Text>
                  </View>
                </View>
              </View>
              <Text className="text-2xl font-bold text-gray-900 mb-6">Progress Timeline</Text>
              <View className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8" style={{ width: screenWidth - 48 }}>
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
                      return <View className="bg-white p-2 rounded-lg shadow-md" style={{ backgroundColor: colors.card }}><Text className="text-sm font-medium" style={{ color: colors.text }}>{item.value}</Text></View>;
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
// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Added for icons
// import MainLayout from '../components/MainLayout';
// import { PieChart, LineChart } from 'react-native-gifted-charts';

// const screenWidth = Dimensions.get('window').width;

// // Define colors
// const colors = {
//   primary: '#1E3A8A',
//   secondary: '#6366F1',
//   success: '#10B981',
//   warning: '#F59E0B',
//   info: '#3B82F6',
//   background: '#F3F4F6',
//   card: '#FFFFFF',
//   text: '#111827',
//   subtext: '#6B7280',
// };

// // Typography scale
// const typography = {
//   xs: { fontSize: 12, lineHeight: 18, fontWeight: '400' },
//   sm: { fontSize: 14, lineHeight: 21, fontWeight: '400' },
//   md: { fontSize: 16, lineHeight: 24, fontWeight: '600' },
//   lg: { fontSize: 20, lineHeight: 30, fontWeight: '700' },
//   xl: { fontSize: 24, lineHeight: 36, fontWeight: '700' },
// };

// // Icon mapping for cards
// const cardIcons = {
//   'Not Started': 'assignment',
//   'Drawings': 'description',
//   'Open GRN': 'inventory',
//   'Paid Bill': 'payments',
//   'Open Indent': 'request-quote',
//   'Open RFI': 'help-outline',
//   'Re-inspect': 'search',
//   'Submittals': 'article',
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
//   { value: 25, color: colors.info, label: 'Under Review' },
// ];
// const lineData = [{ value: 20 }, { value: 45 }, { value: 28 }, { value: 80 }, { value: 64 }, { value: 43 }];
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

//   const pieRadius = Math.min(screenWidth * 0.4, 200);
//   const innerRadius = pieRadius * 0.6;

//   const cardData = [
//     { title: 'Not Started', value: '18', gradient: ['#EFF6FF', '#DBEAFE'], trend: null, subheading: 'Pending Tasks' },
//     { title: 'Drawings', value: '1', gradient: ['#FFF7ED', '#FED7AA'], trend: 'up', subheading: 'Under Review' },
//     { title: 'Open GRN', value: '47', gradient: ['#ECFFF5', '#BBF7D0'], trend: 'down', subheading: 'Goods Received' },
//     { title: 'Paid Bill', value: '₹49.1L', gradient: ['#F5F3FF', '#E0E7FF'], trend: 'up', subheading: 'Total Payments' },
//     { title: 'Open Indent', value: '22', gradient: ['#FEF2F2', '#FECACA'], trend: null, subheading: 'Material Requests' },
//     { title: 'Open RFI', value: '2', gradient: ['#FEFCE8', '#FEF3C7'], trend: 'stable', subheading: 'Information Requests' },
//     { title: 'Re-inspect', value: '1', gradient: ['#EFF6FF', '#DBEAFE'], trend: 'urgent', subheading: 'Quality Check' },
//     { title: 'Submittals', value: '10', gradient: ['#FDF2F8', '#FCE7F3'], trend: 'up', subheading: 'Document Review' },
//   ];

//   const getTrendIndicator = (trend) => {
//     if (!trend) return null;
//     const trendConfig = {
//       up: { symbol: 'arrow-upward', color: '#10B981', bg: '#ECFDF5' },
//       down: { symbol: 'arrow-downward', color: '#EF4444', bg: '#FEF2F2' },
//       stable: { symbol: 'arrow-forward', color: '#6B7280', bg: '#F3F4F6' },
//       urgent: { symbol: 'warning', color: '#F59E0B', bg: '#FFF7ED' },
//     };
//     const config = trendConfig[trend];
//     return config ? (
//       <View style={[styles.trendContainer, { backgroundColor: config.bg }]}>
//         <Icon name={config.symbol} size={16} color={config.color} />
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
//     console.log('Selected subItem:', subItem);
//     switch (subItem) {
//       case 'Bill of Quantity':
//         screenName = 'BillOfQuantity';
//         console.log('Navigating to BillOfQuantity');
//         break;
//       case 'Drawing':
//         screenName = 'Drawing';
//         break;
//       case 'Documents':
//         screenName = 'Document';
//         break;
//       case 'Activity':
//         screenName = 'Activity';
//         break;
//       case 'Project Planner':
//         screenName = 'ProjectPlanner';
//         break;
//       case 'Resource':
//         screenName = 'Resource';
//         break;
//       case 'Indent':
//         screenName = 'Indent';
//         break;
//       case 'Purchase Order':
//         screenName = 'PurchaseOrder';
//         break;
//       case 'Good Receive Note':
//         screenName = 'GoodReceiveNote';
//         break;
//       case 'Bill Payment':
//         screenName = 'BillPayment';
//         break;
//       case 'Expense':
//         screenName = 'Expense';
//         break;
//       case 'Work Order':
//         screenName = 'WorkOrder';
//         break;
//       case 'Advance Payment':
//         screenName = 'AdvancePayment';
//         break;
//       case 'Bill':
//         screenName = 'Bill';
//         break;
//       case 'RFI':
//         screenName = 'RFI';
//         break;
//       case 'Snagging Report':
//         screenName = 'SnaggingReport';
//         break;
//       case 'Inspection':
//         screenName = 'Inspection';
//         break;
//       case 'Submittals':
//         screenName = 'Submittals';
//         break;
//       case 'Daily Progress':
//         screenName = 'DailyProgress';
//         break;
//       case 'Activity Timelines':
//         screenName = 'ActivityTimelines';
//         break;
//       case 'Material Consumption':
//         screenName = 'MaterialConsumption';
//         break;
//       default:
//         screenName = subItem.replace(/\s+/g, '');
//     }
//     navigation.navigate(screenName);
//   };

//   return (
//     <MainLayout title={project ? project.name : 'Project Dashboard'}>
//       <View style={[styles.headerContainer, { backgroundColor: colors.background }]}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
//           <View style={styles.filterRow}>
//             {filterOptions.map((filter, index) => (
//               <TouchableOpacity
//                 key={filter}
//                 onPress={() => handleFilterSelect(filter)}
//                 style={[
//                   styles.filterButton,
//                   selectedFilter === filter ? { backgroundColor: colors.primary } : { backgroundColor: '#E5E7EB' },
//                 ]}
//                 activeOpacity={0.7} // Subtle press effect
//                 accessibilityLabel={`Filter by ${filter}`}
//               >
//                 <Text
//                   style={[
//                     styles.filterText,
//                     selectedFilter === filter ? { color: '#FFFFFF' } : { color: colors.subtext },
//                   ]}
//                 >
//                   {filter}
//                 </Text>
//                 {dropdownItems[filter]?.length > 0 && (
//                   <Icon
//                     name={selectedFilter === filter ? 'expand-more' : 'chevron-right'}
//                     size={16}
//                     color={selectedFilter === filter ? '#FFFFFF' : colors.subtext}
//                   />
//                 )}
//               </TouchableOpacity>
//             ))}
//           </View>
//         </ScrollView>
//         {selectedFilter && dropdownItems[selectedFilter]?.length > 0 && (
//           <View style={styles.dropdownContainer}>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               <View style={styles.dropdownRow}>
//                 {dropdownItems[selectedFilter].map((item, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[
//                       styles.dropdownButton,
//                       selectedSubItem === item ? { backgroundColor: colors.primary } : { backgroundColor: colors.card },
//                     ]}
//                     onPress={() => handleSubItemSelect(item)}
//                     activeOpacity={0.7}
//                     accessibilityLabel={`Select ${item}`}
//                   >
//                     <Text
//                       style={[
//                         styles.dropdownText,
//                         selectedSubItem === item ? { color: '#FFFFFF' } : { color: colors.text },
//                       ]}
//                     >
//                       {item}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </ScrollView>
//           </View>
//         )}
//       </View>
//       <ScrollView style={[styles.contentContainer, { backgroundColor: colors.background }]}>
//         {project ? (
//           <>
//             {selectedSubItem && (
//               <View style={styles.selectedSubItem}>
//                 <Text style={styles.selectedSubItemText}>Selected: {selectedSubItem}</Text>
//               </View>
//             )}
//             <Text style={styles.sectionTitle}>Project Overview</Text>
//             <View style={styles.cardGrid}>
//               {cardData.map((item, index) => (
//                 <View
//                   key={index}
//                   style={[
//                     styles.card,
//                     { backgroundColor: colors.card, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 4 },
//                   ]}
//                 >
//                   <View style={[styles.cardHeader, { backgroundColor: item.gradient[0] }]}>
//                     <View style={styles.cardHeaderContent}>
//                       <Text style={styles.cardTitle}>{item.title}</Text>
//                       {getTrendIndicator(item.trend)}
//                     </View>
//                     <View style={styles.cardContent}>
//                       <View style={[styles.iconContainer, { backgroundColor: colors.card }]}>
//                         <Icon name={cardIcons[item.title] || 'info'} size={24} color={colors.primary} />
//                       </View>
//                       <Text style={styles.cardValue}>{item.value}</Text>
//                     </View>
//                   </View>
//                   <View style={styles.cardFooter}>
//                     <Text style={styles.cardSubheading}>{item.subheading}</Text>
//                   </View>
//                 </View>
//               ))}
//             </View>
//             <Text style={styles.sectionTitle}>Document Status</Text>
//             <View style={[styles.chartContainer, { width: screenWidth - 48 }]}>
//               <View style={styles.chartWrapper}>
//                 <PieChart
//                   data={pieData}
//                   donut
//                   innerRadius={innerRadius}
//                   radius={pieRadius}
//                   innerCircleColor={colors.card}
//                   centerLabelComponent={() => (
//                     <View style={styles.pieCenter}>
//                       <Text style={styles.pieValue}>100</Text>
//                       <Text style={styles.pieLabel}>Documents</Text>
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
//                   <View style={[styles.legendDot, { backgroundColor: colors.success }]} />
//                   <Text style={styles.legendText}>Approved: 45%</Text>
//                 </View>
//                 <View style={styles.legendItem}>
//                   <View style={[styles.legendDot, { backgroundColor: colors.warning }]} />
//                   <Text style={styles.legendText}>Revision: 30%</Text>
//                 </View>
//                 <View style={styles.legendItem}>
//                   <View style={[styles.legendDot, { backgroundColor: colors.info }]} />
//                   <Text style={styles.legendText}>Review: 25%</Text>
//                 </View>
//               </View>
//             </View>
//             <Text style={styles.sectionTitle}>Progress Timeline</Text>
//             <View style={[styles.chartContainer, { width: screenWidth - 48 }]}>
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
//                 xAxisLabelTextStyle={typography.xs}
//                 yAxisTextStyle={typography.xs}
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
//                       <View style={[styles.pointerLabel, { backgroundColor: colors.card }]}>
//                         <Text style={styles.pointerLabelText}>{item.value}</Text>
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
//   headerContainer: {
//     paddingHorizontal: 16,
//     paddingTop: 48,
//     paddingBottom: 16,
//   },
//   filterScroll: {
//     marginBottom: 16,
//   },
//   filterRow: {
//     flexDirection: 'row',
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 9999,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     marginRight: 12,
//   },
//   filterText: {
//     ...typography.md,
//     marginRight: 8,
//   },
//   dropdownContainer: {
//     backgroundColor: '#E0F2FE',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#BFDBFE',
//     padding: 8,
//   },
//   dropdownRow: {
//     flexDirection: 'row',
//     paddingVertical: 8,
//   },
//   dropdownButton: {
//     marginHorizontal: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 9999,
//   },
//   dropdownText: {
//     ...typography.sm,
//   },
//   contentContainer: {
//     flex: 1,
//     paddingHorizontal: 16,
//     paddingVertical: 24,
//   },
//   selectedSubItem: {
//     marginBottom: 24,
//     backgroundColor: '#E0F2FE',
//     padding: 16,
//     borderRadius: 8,
//   },
//   selectedSubItemText: {
//     ...typography.md,
//     color: colors.primary,
//   },
//   sectionTitle: {
//     ...typography.xl,
//     color: colors.text,
//     marginBottom: 24,
//   },
//   cardGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 32,
//   },
//   card: {
//     width: '48%',
//     marginBottom: 16,
//     borderRadius: 16,
//     overflow: 'hidden',
//   },
//   cardHeader: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   cardHeaderContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   cardTitle: {
//     ...typography.sm,
//     color: colors.subtext,
//   },
//   cardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   iconContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     opacity: 0.9,
//   },
//   cardValue: {
//     ...typography.lg,
//     color: colors.text,
//     flex: 1,
//     marginLeft: 12,
//   },
//   cardFooter: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   cardSubheading: {
//     ...typography.xs,
//     color: colors.subtext,
//   },
//   trendContainer: {
//     padding: 6,
//     borderRadius: 9999,
//   },
//   chartContainer: {
//     backgroundColor: colors.card,
//     borderRadius: 16,
//     padding: 24,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     marginBottom: 32,
//   },
//   chartWrapper: {
//     alignItems: 'center',
//   },
//   pieCenter: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pieValue: {
//     ...typography.lg,
//     color: colors.text,
//     fontWeight: '800',
//   },
//   pieLabel: {
//     ...typography.xs,
//     color: colors.subtext,
//   },
//   legendContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     marginTop: 24,
//   },
//   legendItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 12,
//     marginBottom: 12,
//     backgroundColor: '#F9FAFB',
//     padding: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//   },
//   legendDot: {
//     width: 16,
//     height: 16,
//     borderRadius: 9999,
//     marginRight: 8,
//   },
//   legendText: {
//     ...typography.sm,
//     color: colors.text,
//   },
//   pointerLabel: {
//     padding: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   pointerLabelText: {
//     ...typography.sm,
//     color: colors.text,
//   },
//   errorText: {
//     ...typography.md,
//     color: colors.subtext,
//   },
// });