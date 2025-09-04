
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import MainLayout from '../../../components/MainLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;
const tableTotalWidth = 1200; // Fixed width based on column sum (96 + 240 + 112 + 96 + 112 + 112 + 80 + 144 + 208)

const activities = [
  {
    id: '1',
    name: 'Granite Horizon',
    actNo: 'GH101-WBS-00001',
    progress: 25,
    startDate: '2025-06-07',
    endDate: '2025-06-16',
    duration: 10,
    status: 'Not Started',
    assignedTo: 'Sonalika, Alan David',
    subActivities: [
      { id: '101', name: 'Survey', actNo: '1080', progress: 25, startDate: '2025-06-07', endDate: '2025-06-16', duration: 10, status: 'Not Started', assignedTo: 'Sonalika, Alan David' },
      { id: '102', name: 'Test', actNo: '1170', progress: 25, startDate: '2025-07-08', endDate: '2025-07-22', duration: 15, status: 'Not Started', assignedTo: 'Sonalika, Mukesh Sinha' },
      { id: '103', name: 'Pre-construction Test', actNo: '1200', progress: 25, startDate: '2025-07-01', endDate: '2025-07-30', duration: 30, status: 'In Progress', assignedTo: 'Mukesh Sinha' },
      { id: '104', name: 'Test', actNo: '1210', progress: 25, startDate: '2025-07-08', endDate: '2025-07-22', duration: 15, status: 'Not Started', assignedTo: 'Sonalika, Mukesh Sinha' },
      { id: '105', name: 'Land Survey and Soil Investigation', actNo: '1220', progress: 25, startDate: '2025-08-27', endDate: '2025-09-05', duration: 10, status: 'Not Started', assignedTo: 'Mukesh Sinha' },
      { id: '106', name: 'Brick Wall', actNo: '1290', progress: 25, startDate: '2025-09-06', endDate: '2025-09-15', duration: 10, status: 'Not Started', assignedTo: 'Mukesh Sinha' },
      { id: '107', name: 'Pre-construction Test', actNo: '1300', progress: 25, startDate: '2025-07-01', endDate: '2025-07-30', duration: 30, status: 'Not Started', assignedTo: 'Mukesh Sinha' },
      { id: '108', name: 'Survey', actNo: '1310', progress: 25, startDate: '2025-06-07', endDate: '2025-06-16', duration: 10, status: 'Not Started', assignedTo: 'Sonalika, Alan David' },
    ]
  },
  {
    id: '2',
    name: 'A Wing',
    actNo: 'GH101-WBS-00002',
    progress: 25,
    startDate: '2025-07-23',
    endDate: '2025-08-01',
    duration: 10,
    status: 'In Progress',
    assignedTo: 'Mukesh Sinha',
    subActivities: [
      { id: '201', name: 'Land Survey and Soil Investigation', actNo: '1000', progress: 25, startDate: '2025-07-23', endDate: '2025-08-01', duration: 10, status: 'In Progress', assignedTo: 'Mukesh Sinha' },
    ]
  },
];

const CircularProgress = ({ progress, size = 24, strokeWidth = 4 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View className="flex-row items-center justify-center">
      <Svg height={size} width={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2563eb"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <Text className="absolute text-[10px] text-gray-800">{progress}%</Text>
    </View>
  );
};

export default function ActivityScreen() {
  const [expandedItems, setExpandedItems] = useState({
    '1': true,
    '2': true
  });

  console.log('Screen Width:', screenWidth, 'Table Total Width:', tableTotalWidth);

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const StatusIndicator = ({ status }) => {
    let backgroundColor;
    switch(status) {
      case 'Not Started': backgroundColor = '#d1d5db'; break;
      case 'In Progress': backgroundColor = '#f59e0b'; break;
      case 'Completed': backgroundColor = '#16a34a'; break;
      default: backgroundColor = '#d1d5db';
    }
    
    return (
      <View className="flex-row items-center justify-center">
        <View className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor }} />
        <Text className="text-sm text-gray-800 font-medium">{status}</Text>
      </View>
    );
  };

  const ActionIcons = ({ item }) => (
    <View className="flex-row justify-center items-center">
      <TouchableOpacity className="mx-1 p-1.5 bg-blue-100/10 border border-gray-200 rounded-md shadow-sm">
        <Icon name="pencil-outline" size={16} color="#2563eb" />
      </TouchableOpacity>
      <TouchableOpacity className="mx-1 p-1.5 bg-purple-100/10 border border-gray-200 rounded-md shadow-sm">
        <Icon name="layers" size={16} color="#7c3aed" />
      </TouchableOpacity>
      <TouchableOpacity className="mx-1 p-1.5 bg-red-100/10 border border-gray-200 rounded-md shadow-sm">
        <Icon name="trash-can-outline" size={16}color="#dc2626" />
      </TouchableOpacity>
    </View>
  );

  const TableHeader = () => (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.3)']}
      className="p-3 border-b border-gray-200 shadow-md"
      style={{ width: tableTotalWidth, minWidth: tableTotalWidth }}
    >
      <View className="flex-row items-center">
        <View style={{ width: 96 }}><Text className="text-sm font-bold text-gray-800 text-center">Actions</Text></View>
        <View style={{ width: 240 }}><Text className="text-sm font-bold text-gray-800">Name</Text></View>
        <View style={{ width: 112 }}><Text className="text-sm font-bold text-gray-800">Act. No.</Text></View>
        <View style={{ width: 96 }}><Text className="text-sm font-bold text-gray-800 text-center">Progress</Text></View>
        <View style={{ width: 112 }}><Text className="text-sm font-bold text-gray-800">Start Date</Text></View>
        <View style={{ width: 112 }}><Text className="text-sm font-bold text-gray-800">End Date</Text></View>
        <View style={{ width: 80 }}><Text className="text-sm font-bold text-gray-800 text-center">Duration</Text></View>
        <View style={{ width: 144 }}><Text className="text-sm font-bold text-gray-800 text-center">Activity Status</Text></View>
        <View style={{ width: 208 }}><Text className="text-sm font-bold text-gray-800">Assign To</Text></View>
      </View>
    </LinearGradient>
  );

  const MainActivityRow = ({ item, level = 0 }) => (
    <TouchableOpacity 
      onPress={() => toggleExpand(item.id)}
      className="flex-row p-2 border-b border-gray-200"
      style={[{ width: tableTotalWidth, minWidth: tableTotalWidth }, level === 0 ? { backgroundColor: '#e0f2fe' } : { backgroundColor: '#f0f9ff' }]}
    >
      <View style={{ width: 96 }}><ActionIcons item={item} /></View>
      <View className="flex-row items-center" style={{ width: 240, paddingLeft: level * 20 }}>
        <Icon 
          name={expandedItems[item.id] ? 'chevron-down' : 'chevron-right'} 
          size={20} 
          color="#4b5563" 
          style={{ marginRight: 8 }}
        />
        <Text className={`text-sm text-gray-800 ${level === 0 ? 'font-bold' : 'font-semibold'}`}>{item.name}</Text>
      </View>
      <View style={{ width: 112 }}><Text className="text-sm text-gray-800 font-medium">{item.actNo}</Text></View>
      <View style={{ width: 96 }}><CircularProgress progress={item.progress} /></View>
      <View style={{ width: 112 }}><Text className="text-sm text-gray-800 font-medium">{item.startDate}</Text></View>
      <View style={{ width: 112 }}><Text className="text-sm text-gray-800 font-medium">{item.endDate}</Text></View>
      <View style={{ width: 80 }}><Text className="text-sm text-gray-800 font-medium text-center">{item.duration}</Text></View>
      <View style={{ width: 144 }}><StatusIndicator status={item.status} /></View>
      <View style={{ width: 208 }}><Text className="text-sm text-gray-800 font-medium">{item.assignedTo}</Text></View>
    </TouchableOpacity>
  );

  const SubActivityRow = ({ subItem, level = 1 }) => (
    <View 
      className="flex-row p-2 border-b border-gray-200"
      style={[{ width: tableTotalWidth, minWidth: tableTotalWidth }, level === 1 ? { backgroundColor: '#f9fafb' } : { backgroundColor: '#ffffff' }]}
    >
      <View style={{ width: 96 }}><ActionIcons item={subItem} /></View>
      <View style={{ width: 240, paddingLeft: level * 20 + 20 }}>
        <Text className="text-sm text-gray-800 font-medium">{subItem.name}</Text>
      </View>
      <View style={{ width: 112 }}><Text className="text-sm text-gray-800 font-medium">{subItem.actNo}</Text></View>
      <View style={{ width: 96 }}><CircularProgress progress={subItem.progress} /></View>
      <View style={{ width: 112 }}><Text className="text-sm text-gray-800 font-medium">{subItem.startDate}</Text></View>
      <View style={{ width: 112 }}><Text className="text-sm text-gray-800 font-medium">{subItem.endDate}</Text></View>
      <View style={{ width: 80 }}><Text className="text-sm text-gray-800 font-medium text-center">{subItem.duration}</Text></View>
      <View style={{ width: 144 }}><StatusIndicator status={subItem.status} /></View>
      <View style={{ width: 208 }}><Text className="text-sm text-gray-800 font-medium">{subItem.assignedTo}</Text></View>
    </View>
  );

  return (
    <MainLayout title="Activity">
      <View className="flex-1 bg-background">
        <View className="flex-row justify-between items-center p-4 border-b border-gray-200 bg-blue-100">
          <Text className="text-xl font-bold text-gray-800">Activity</Text>
          <View className="flex-row">
            <TouchableOpacity className="p-2 mx-1 bg-gray-100/10 border border-gray-200 rounded-md shadow-sm">
              <Icon name="refresh" size={20} color="#4b5563" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 mx-1 bg-blue-100/10 border border-gray-200 rounded-md shadow-sm">
              <Icon name="plus" size={20} color="#2563eb" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 mx-1 bg-green-100/10 border border-gray-200 rounded-md shadow-sm">
              <Icon name="download" size={20} color="#16a34a" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 mx-1 bg-purple-100/10 border border-gray-200 rounded-md shadow-sm">
              <Icon name="filter" size={20} color="#7c3aed" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{ width: tableTotalWidth, minWidth: tableTotalWidth }}
          style={{ flexGrow: 0 }}
        >
          <View style={{ width: tableTotalWidth, minWidth: tableTotalWidth }}>
            <TableHeader />
            {activities.map((item) => (
              <React.Fragment key={item.id}>
                <MainActivityRow item={item} level={item.id === '1' ? 0 : 1} />
                {expandedItems[item.id] && item.subActivities.map(subItem => (
                  <SubActivityRow key={subItem.id} subItem={subItem} level={item.id === '1' ? 1 : 2} />
                ))}
              </React.Fragment>
            ))}
          </View>
        </ScrollView>
      </View>
    </MainLayout>
  );
}
// import React, { useState, useMemo, useCallback } from 'react';
// import { 
//   View, 
//   Text, 
//   ScrollView, 
//   TouchableOpacity, 
//   Dimensions, 
//   Platform,
//   StyleSheet 
// } from 'react-native';
// import MainLayout from '../../../components/MainLayout';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
// import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

// const { width: screenWidth } = Dimensions.get('window');

// // Constants
// const COLUMN_WIDTHS = {
//   actions: 96,
//   name: 240,
//   actNo: 112,
//   progress: 96,
//   startDate: 112,
//   endDate: 112,
//   duration: 80,
//   status: 144,
//   assignedTo: 208,
// };

// const TABLE_TOTAL_WIDTH = Object.values(COLUMN_WIDTHS).reduce((sum, width) => sum + width, 0);

// const STATUS_CONFIG = {
//   'Not Started': { 
//     color: '#94a3b8', 
//     backgroundColor: '#f1f5f9',
//     textColor: '#475569'
//   },
//   'In Progress': { 
//     color: '#f59e0b', 
//     backgroundColor: '#fef3c7',
//     textColor: '#92400e'
//   },
//   'Completed': { 
//     color: '#10b981', 
//     backgroundColor: '#d1fae5',
//     textColor: '#047857'
//   }
// };

// const ACTIVITY_DATA = [
//   {
//     id: '1',
//     name: 'Granite Horizon',
//     actNo: 'GH101-WBS-00001',
//     progress: 75,
//     startDate: '2025-06-07',
//     endDate: '2025-06-16',
//     duration: 10,
//     status: 'In Progress',
//     assignedTo: 'Sonalika, Alan David',
//     priority: 'High',
//     subActivities: [
//       { 
//         id: '101', 
//         name: 'Initial Survey & Planning', 
//         actNo: '1080', 
//         progress: 90, 
//         startDate: '2025-06-07', 
//         endDate: '2025-06-16', 
//         duration: 10, 
//         status: 'Completed', 
//         assignedTo: 'Sonalika, Alan David' 
//       },
//       { 
//         id: '102', 
//         name: 'Quality Assurance Testing', 
//         actNo: '1170', 
//         progress: 60, 
//         startDate: '2025-07-08', 
//         endDate: '2025-07-22', 
//         duration: 15, 
//         status: 'In Progress', 
//         assignedTo: 'Sonalika, Mukesh Sinha' 
//       },
//       { 
//         id: '103', 
//         name: 'Pre-construction Assessment', 
//         actNo: '1200', 
//         progress: 45, 
//         startDate: '2025-07-01', 
//         endDate: '2025-07-30', 
//         duration: 30, 
//         status: 'In Progress', 
//         assignedTo: 'Mukesh Sinha' 
//       },
//       { 
//         id: '104', 
//         name: 'Material Testing & Validation', 
//         actNo: '1210', 
//         progress: 30, 
//         startDate: '2025-07-08', 
//         endDate: '2025-07-22', 
//         duration: 15, 
//         status: 'In Progress', 
//         assignedTo: 'Sonalika, Mukesh Sinha' 
//       },
//       { 
//         id: '105', 
//         name: 'Land Survey and Soil Investigation', 
//         actNo: '1220', 
//         progress: 0, 
//         startDate: '2025-08-27', 
//         endDate: '2025-09-05', 
//         duration: 10, 
//         status: 'Not Started', 
//         assignedTo: 'Mukesh Sinha' 
//       },
//       { 
//         id: '106', 
//         name: 'Foundation & Brick Wall Construction', 
//         actNo: '1290', 
//         progress: 0, 
//         startDate: '2025-09-06', 
//         endDate: '2025-09-15', 
//         duration: 10, 
//         status: 'Not Started', 
//         assignedTo: 'Mukesh Sinha' 
//       },
//     ]
//   },
//   {
//     id: '2',
//     name: 'A Wing Development',
//     actNo: 'GH101-WBS-00002',
//     progress: 35,
//     startDate: '2025-07-23',
//     endDate: '2025-08-01',
//     duration: 10,
//     status: 'In Progress',
//     assignedTo: 'Mukesh Sinha',
//     priority: 'Medium',
//     subActivities: [
//       { 
//         id: '201', 
//         name: 'Site Preparation & Investigation', 
//         actNo: '1000', 
//         progress: 35, 
//         startDate: '2025-07-23', 
//         endDate: '2025-08-01', 
//         duration: 10, 
//         status: 'In Progress', 
//         assignedTo: 'Mukesh Sinha' 
//       },
//     ]
//   },
// ];

// // Enhanced Circular Progress Component
// const CircularProgress = React.memo(({ progress, size = 28, strokeWidth = 3 }) => {
//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (progress / 100) * circumference;

//   const getProgressColor = (progress) => {
//     if (progress >= 80) return '#10b981';
//     if (progress >= 50) return '#f59e0b';
//     if (progress > 0) return '#3b82f6';
//     return '#94a3b8';
//   };

//   return (
//     <View style={styles.progressContainer}>
//       <Svg height={size} width={size}>
//         <Defs>
//           <LinearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <Stop offset="0%" stopColor={getProgressColor(progress)} stopOpacity="0.8" />
//             <Stop offset="100%" stopColor={getProgressColor(progress)} stopOpacity="1" />
//           </LinearGradient>
//         </Defs>
//         <Circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           stroke="#e5e7eb"
//           strokeWidth={strokeWidth - 1}
//           fill="none"
//         />
//         <Circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           stroke="url(#progressGradient)"
//           strokeWidth={strokeWidth}
//           fill="none"
//           strokeDasharray={circumference}
//           strokeDashoffset={strokeDashoffset}
//           strokeLinecap="round"
//           transform={`rotate(-90 ${size / 2} ${size / 2})`}
//         />
//       </Svg>
//       <Text style={[styles.progressText, { fontSize: size * 0.28 }]}>
//         {progress}%
//       </Text>
//     </View>
//   );
// });

// // Enhanced Status Indicator
// const StatusIndicator = React.memo(({ status }) => {
//   const config = STATUS_CONFIG[status] || STATUS_CONFIG['Not Started'];
  
//   return (
//     <View style={[styles.statusContainer, { backgroundColor: config.backgroundColor }]}>
//       <View style={[styles.statusDot, { backgroundColor: config.color }]} />
//       <Text style={[styles.statusText, { color: config.textColor }]}>{status}</Text>
//     </View>
//   );
// });

// // Enhanced Action Icons
// const ActionIcons = React.memo(({ item, onEdit, onView, onDelete }) => (
//   <View style={styles.actionIconsContainer}>
//     <TouchableOpacity 
//       style={[styles.actionButton, styles.editButton]}
//       onPress={() => onEdit?.(item)}
//       activeOpacity={0.7}
//     >
//       <Icon name="pencil-outline" size={14} color="#3b82f6" />
//     </TouchableOpacity>
//     <TouchableOpacity 
//       style={[styles.actionButton, styles.viewButton]}
//       onPress={() => onView?.(item)}
//       activeOpacity={0.7}
//     >
//       <Icon name="eye-outline" size={14} color="#8b5cf6" />
//     </TouchableOpacity>
//     <TouchableOpacity 
//       style={[styles.actionButton, styles.deleteButton]}
//       onPress={() => onDelete?.(item)}
//       activeOpacity={0.7}
//     >
//       <Icon name="trash-can-outline" size={14} color="#ef4444" />
//     </TouchableOpacity>
//   </View>
// ));

// // Table Header Component
// const TableHeader = React.memo(() => (
//   <ExpoLinearGradient
//     colors={['#f8fafc', '#f1f5f9']}
//     style={[styles.tableHeader, { width: TABLE_TOTAL_WIDTH }]}
//   >
//     <View style={styles.headerRow}>
//       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.actions }]}>
//         <Text style={styles.headerText}>Actions</Text>
//       </View>
//       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.name }]}>
//         <Text style={styles.headerText}>Activity Name</Text>
//       </View>
//       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.actNo }]}>
//         <Text style={styles.headerText}>Activity No.</Text>
//       </View>
//       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.progress }]}>
//         <Text style={styles.headerText}>Progress</Text>
//       </View>
//       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.startDate }]}>
//         <Text style={styles.headerText}>Start Date</Text>
//       </View>
//       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.endDate }]}>
//         <Text style={styles.headerText}>End Date</Text>
//       </View>
//       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.duration }]}>
//         <Text style={styles.headerText}>Duration</Text>
//       </View>
//       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.status }]}>
//         <Text style={styles.headerText}>Status</Text>
//       </View>
//       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.assignedTo }]}>
//         <Text style={styles.headerText}>Assigned To</Text>
//       </View>
//     </View>
//   </ExpoLinearGradient>
// ));

// export default function ActivityScreen() {
//   const [expandedItems, setExpandedItems] = useState({ '1': true, '2': true });
//   const [selectedFilter, setSelectedFilter] = useState('all');

//   const toggleExpand = useCallback((id) => {
//     setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
//   }, []);

//   const handleEdit = useCallback((item) => {
//     console.log('Edit item:', item);
//     // Implement edit functionality
//   }, []);

//   const handleView = useCallback((item) => {
//     console.log('View item:', item);
//     // Implement view functionality
//   }, []);

//   const handleDelete = useCallback((item) => {
//     console.log('Delete item:', item);
//     // Implement delete functionality
//   }, []);

//   const handleRefresh = useCallback(() => {
//     console.log('Refreshing data...');
//     // Implement refresh functionality
//   }, []);

//   const handleAdd = useCallback(() => {
//     console.log('Adding new activity...');
//     // Implement add functionality
//   }, []);

//   const handleExport = useCallback(() => {
//     console.log('Exporting data...');
//     // Implement export functionality
//   }, []);

//   const handleFilter = useCallback(() => {
//     console.log('Opening filters...');
//     // Implement filter functionality
//   }, []);

//   const filteredActivities = useMemo(() => {
//     return ACTIVITY_DATA; // Add filtering logic here if needed
//   }, [selectedFilter]);

//   // Main Activity Row Component
//   const MainActivityRow = React.memo(({ item, level = 0 }) => (
//     <TouchableOpacity 
//       onPress={() => toggleExpand(item.id)}
//       style={[
//         styles.activityRow, 
//         { width: TABLE_TOTAL_WIDTH },
//         level === 0 ? styles.mainActivityRow : styles.subMainActivityRow
//       ]}
//       activeOpacity={0.8}
//     >
//       <View style={[styles.cell, { width: COLUMN_WIDTHS.actions }]}>
//         <ActionIcons 
//           item={item} 
//           onEdit={handleEdit}
//           onView={handleView}
//           onDelete={handleDelete}
//         />
//       </View>
//       <View style={[styles.cell, styles.nameCell, { width: COLUMN_WIDTHS.name, paddingLeft: level * 20 }]}>
//         <Icon 
//           name={expandedItems[item.id] ? 'chevron-down' : 'chevron-right'} 
//           size={18} 
//           color="#64748b" 
//           style={styles.expandIcon}
//         />
//         <Text style={[styles.activityName, level === 0 && styles.mainActivityName]}>
//           {item.name}
//         </Text>
//       </View>
//       <View style={[styles.cell, { width: COLUMN_WIDTHS.actNo }]}>
//         <Text style={styles.cellText}>{item.actNo}</Text>
//       </View>
//       <View style={[styles.cell, styles.centerCell, { width: COLUMN_WIDTHS.progress }]}>
//         <CircularProgress progress={item.progress} />
//       </View>
//       <View style={[styles.cell, { width: COLUMN_WIDTHS.startDate }]}>
//         <Text style={styles.cellText}>{item.startDate}</Text>
//       </View>
//       <View style={[styles.cell, { width: COLUMN_WIDTHS.endDate }]}>
//         <Text style={styles.cellText}>{item.endDate}</Text>
//       </View>
//       <View style={[styles.cell, styles.centerCell, { width: COLUMN_WIDTHS.duration }]}>
//         <Text style={styles.cellText}>{item.duration}d</Text>
//       </View>
//       <View style={[styles.cell, styles.centerCell, { width: COLUMN_WIDTHS.status }]}>
//         <StatusIndicator status={item.status} />
//       </View>
//       <View style={[styles.cell, { width: COLUMN_WIDTHS.assignedTo }]}>
//         <Text style={styles.cellText} numberOfLines={2}>{item.assignedTo}</Text>
//       </View>
//     </TouchableOpacity>
//   ));

//   // Sub Activity Row Component
//   const SubActivityRow = React.memo(({ subItem, level = 1 }) => (
//     <View 
//       style={[
//         styles.activityRow, 
//         { width: TABLE_TOTAL_WIDTH },
//         level === 1 ? styles.subActivityRow : styles.deepSubActivityRow
//       ]}
//     >
//       <View style={[styles.cell, { width: COLUMN_WIDTHS.actions }]}>
//         <ActionIcons 
//           item={subItem}
//           onEdit={handleEdit}
//           onView={handleView}
//           onDelete={handleDelete}
//         />
//       </View>
//       <View style={[styles.cell, { width: COLUMN_WIDTHS.name, paddingLeft: level * 20 + 20 }]}>
//         <Text style={styles.subActivityName}>{subItem.name}</Text>
//       </View>
//       <View style={[styles.cell, { width: COLUMN_WIDTHS.actNo }]}>
//         <Text style={styles.cellText}>{subItem.actNo}</Text>
//       </View>
//       <View style={[styles.cell, styles.centerCell, { width: COLUMN_WIDTHS.progress }]}>
//         <CircularProgress progress={subItem.progress} />
//       </View>
//       <View style={[styles.cell, { width: COLUMN_WIDTHS.startDate }]}>
//         <Text style={styles.cellText}>{subItem.startDate}</Text>
//       </View>
//       <View style={[styles.cell, { width: COLUMN_WIDTHS.endDate }]}>
//         <Text style={styles.cellText}>{subItem.endDate}</Text>
//       </View>
//       <View style={[styles.cell, styles.centerCell, { width: COLUMN_WIDTHS.duration }]}>
//         <Text style={styles.cellText}>{subItem.duration}d</Text>
//       </View>
//       <View style={[styles.cell, styles.centerCell, { width: COLUMN_WIDTHS.status }]}>
//         <StatusIndicator status={subItem.status} />
//       </View>
//       <View style={[styles.cell, { width: COLUMN_WIDTHS.assignedTo }]}>
//         <Text style={styles.cellText} numberOfLines={2}>{subItem.assignedTo}</Text>
//       </View>
//     </View>
//   ));

//   return (
//     <MainLayout title="Activity Management">
//       <View style={styles.container}>
//         {/* Header Section */}
//         <ExpoLinearGradient
//           colors={['#ffffff', '#f8fafc']}
//           style={styles.header}
//         >
//           <View style={styles.headerContent}>
//             <View style={styles.headerLeft}>
//               <Text style={styles.headerTitle}>Project Activities</Text>
//               <Text style={styles.headerSubtitle}>
//                 {filteredActivities.length} activities • {
//                   filteredActivities.reduce((sum, item) => sum + (item.subActivities?.length || 0), 0)
//                 } sub-activities
//               </Text>
//             </View>
//             <View style={styles.headerActions}>
//               <TouchableOpacity 
//                 style={[styles.headerButton, styles.refreshButton]} 
//                 onPress={handleRefresh}
//                 activeOpacity={0.7}
//               >
//                 <Icon name="refresh" size={18} color="#6b7280" />
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={[styles.headerButton, styles.addButton]} 
//                 onPress={handleAdd}
//                 activeOpacity={0.7}
//               >
//                 <Icon name="plus" size={18} color="#3b82f6" />
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={[styles.headerButton, styles.exportButton]} 
//                 onPress={handleExport}
//                 activeOpacity={0.7}
//               >
//                 <Icon name="download" size={18} color="#10b981" />
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={[styles.headerButton, styles.filterButton]} 
//                 onPress={handleFilter}
//                 activeOpacity={0.7}
//               >
//                 <Icon name="filter-variant" size={18} color="#8b5cf6" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ExpoLinearGradient>

//         {/* Table Section */}
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={true}
//           contentContainerStyle={{ width: TABLE_TOTAL_WIDTH, minWidth: TABLE_TOTAL_WIDTH }}
//           style={styles.tableScrollView}
//           bounces={false}
//         >
//           <View style={{ width: TABLE_TOTAL_WIDTH, minWidth: TABLE_TOTAL_WIDTH }}>
//             <TableHeader />
//             <ScrollView style={styles.tableBody} bounces={false}>
//               {filteredActivities.map((item) => (
//                 <React.Fragment key={item.id}>
//                   <MainActivityRow item={item} level={0} />
//                   {expandedItems[item.id] && item.subActivities?.map(subItem => (
//                     <SubActivityRow key={subItem.id} subItem={subItem} level={1} />
//                   ))}
//                 </React.Fragment>
//               ))}
//             </ScrollView>
//           </View>
//         </ScrollView>
//       </View>
//     </MainLayout>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   header: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#e5e7eb',
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 3,
//       },
//     }),
//   },
//   headerContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   headerLeft: {
//     flex: 1,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#1f2937',
//     marginBottom: 4,
//   },
//   headerSubtitle: {
//     fontSize: 14,
//     color: '#6b7280',
//     fontWeight: '500',
//   },
//   headerActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 8,
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//   },
//   refreshButton: {
//     backgroundColor: '#f9fafb',
//   },
//   addButton: {
//     backgroundColor: '#eff6ff',
//     borderColor: '#dbeafe',
//   },
//   exportButton: {
//     backgroundColor: '#f0fdf4',
//     borderColor: '#dcfce7',
//   },
//   filterButton: {
//     backgroundColor: '#faf5ff',
//     borderColor: '#f3e8ff',
//   },
//   tableScrollView: {
//     flex: 1,
//   },
//   tableHeader: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#d1d5db',
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.1,
//         shadowRadius: 2,
//       },
//       android: {
//         elevation: 2,
//       },
//     }),
//   },
//   headerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 8,
//   },
//   headerCell: {
//     paddingHorizontal: 8,
//   },
//   headerText: {
//     fontSize: 13,
//     fontWeight: '700',
//     color: '#374151',
//     textAlign: 'center',
//   },
//   tableBody: {
//     flex: 1,
//   },
//   activityRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#f3f4f6',
//     paddingVertical: 12,
//     paddingHorizontal: 8,
//     minHeight: 60,
//   },
//   mainActivityRow: {
//     backgroundColor: '#f0f9ff',
//     borderLeftWidth: 4,
//     borderLeftColor: '#0ea5e9',
//   },
//   subMainActivityRow: {
//     backgroundColor: '#f8fafc',
//     borderLeftWidth: 3,
//     borderLeftColor: '#64748b',
//   },
//   subActivityRow: {
//     backgroundColor: '#fafafa',
//     borderLeftWidth: 2,
//     borderLeftColor: '#d1d5db',
//   },
//   deepSubActivityRow: {
//     backgroundColor: '#ffffff',
//     borderLeftWidth: 1,
//     borderLeftColor: '#e5e7eb',
//   },
//   cell: {
//     paddingHorizontal: 8,
//     justifyContent: 'center',
//   },
//   centerCell: {
//     alignItems: 'center',
//   },
//   nameCell: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   expandIcon: {
//     marginRight: 8,
//   },
//   activityName: {
//     fontSize: 14,
//     color: '#374151',
//     fontWeight: '600',
//     flex: 1,
//   },
//   mainActivityName: {
//     fontSize: 15,
//     fontWeight: '700',
//     color: '#1f2937',
//   },
//   subActivityName: {
//     fontSize: 13,
//     color: '#4b5563',
//     fontWeight: '500',
//   },
//   cellText: {
//     fontSize: 13,
//     color: '#6b7280',
//     fontWeight: '500',
//   },
//   progressContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//   },
//   progressText: {
//     position: 'absolute',
//     fontWeight: '600',
//     color: '#374151',
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: 'rgba(0, 0, 0, 0.1)',
//   },
//   statusDot: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     marginRight: 6,
//   },
//   statusText: {
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   actionIconsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   actionButton: {
//     width: 28,
//     height: 28,
//     borderRadius: 6,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 2,
//     borderWidth: 1,
//   },
//   editButton: {
//     backgroundColor: '#eff6ff',
//     borderColor: '#dbeafe',
//   },
//   viewButton: {
//     backgroundColor: '#faf5ff',
//     borderColor: '#f3e8ff',
//   },
//   deleteButton: {
//     backgroundColor: '#fef2f2',
//     borderColor: '#fecaca',
//   },
// });
