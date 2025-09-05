
// // import React, { useState } from 'react';
// // import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
// // import MainLayout from '../../../components/MainLayout';
// // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// // import Svg, { Circle } from 'react-native-svg';
// // import { LinearGradient } from 'expo-linear-gradient';

// // const screenWidth = Dimensions.get('window').width;
// // const tableTotalWidth = 1200; // Fixed width based on column sum (96 + 240 + 112 + 96 + 112 + 112 + 80 + 144 + 208)

// // const activities = [
// //   {
// //     id: '1',
// //     name: 'Granite Horizon',
// //     actNo: 'GH101-WBS-00001',
// //     progress: 25,
// //     startDate: '2025-06-07',
// //     endDate: '2025-06-16',
// //     duration: 10,
// //     status: 'Not Started',
// //     assignedTo: 'Sonalika, Alan David',
// //     subActivities: [
// //       { id: '101', name: 'Survey', actNo: '1080', progress: 25, startDate: '2025-06-07', endDate: '2025-06-16', duration: 10, status: 'Not Started', assignedTo: 'Sonalika, Alan David' },
// //       { id: '102', name: 'Test', actNo: '1170', progress: 25, startDate: '2025-07-08', endDate: '2025-07-22', duration: 15, status: 'Not Started', assignedTo: 'Sonalika, Mukesh Sinha' },
// //       { id: '103', name: 'Pre-construction Test', actNo: '1200', progress: 25, startDate: '2025-07-01', endDate: '2025-07-30', duration: 30, status: 'In Progress', assignedTo: 'Mukesh Sinha' },
// //       { id: '104', name: 'Test', actNo: '1210', progress: 25, startDate: '2025-07-08', endDate: '2025-07-22', duration: 15, status: 'Not Started', assignedTo: 'Sonalika, Mukesh Sinha' },
// //       { id: '105', name: 'Land Survey and Soil Investigation', actNo: '1220', progress: 25, startDate: '2025-08-27', endDate: '2025-09-05', duration: 10, status: 'Not Started', assignedTo: 'Mukesh Sinha' },
// //       { id: '106', name: 'Brick Wall', actNo: '1290', progress: 25, startDate: '2025-09-06', endDate: '2025-09-15', duration: 10, status: 'Not Started', assignedTo: 'Mukesh Sinha' },
// //       { id: '107', name: 'Pre-construction Test', actNo: '1300', progress: 25, startDate: '2025-07-01', endDate: '2025-07-30', duration: 30, status: 'Not Started', assignedTo: 'Mukesh Sinha' },
// //       { id: '108', name: 'Survey', actNo: '1310', progress: 25, startDate: '2025-06-07', endDate: '2025-06-16', duration: 10, status: 'Not Started', assignedTo: 'Sonalika, Alan David' },
// //     ]
// //   },
// //   {
// //     id: '2',
// //     name: 'A Wing',
// //     actNo: 'GH101-WBS-00002',
// //     progress: 25,
// //     startDate: '2025-07-23',
// //     endDate: '2025-08-01',
// //     duration: 10,
// //     status: 'In Progress',
// //     assignedTo: 'Mukesh Sinha',
// //     subActivities: [
// //       { id: '201', name: 'Land Survey and Soil Investigation', actNo: '1000', progress: 25, startDate: '2025-07-23', endDate: '2025-08-01', duration: 10, status: 'In Progress', assignedTo: 'Mukesh Sinha' },
// //     ]
// //   },
// // ];

// // const CircularProgress = ({ progress, size = 24, strokeWidth = 4 }) => {
// //   const radius = (size - strokeWidth) / 2;
// //   const circumference = 2 * Math.PI * radius;
// //   const strokeDashoffset = circumference - (progress / 100) * circumference;

// //   return (
// //     <View className="flex-row items-center justify-center">
// //       <Svg height={size} width={size}>
// //         <Circle
// //           cx={size / 2}
// //           cy={size / 2}
// //           r={radius}
// //           stroke="#e5e7eb"
// //           strokeWidth={strokeWidth}
// //           fill="none"
// //         />
// //         <Circle
// //           cx={size / 2}
// //           cy={size / 2}
// //           r={radius}
// //           stroke="#2563eb"
// //           strokeWidth={strokeWidth}
// //           fill="none"
// //           strokeDasharray={circumference}
// //           strokeDashoffset={strokeDashoffset}
// //           strokeLinecap="round"
// //           transform={`rotate(-90 ${size / 2} ${size / 2})`}
// //         />
// //       </Svg>
// //       <Text className="absolute text-[10px] text-gray-800">{progress}%</Text>
// //     </View>
// //   );
// // };

// // export default function ActivityScreen() {
// //   const [expandedItems, setExpandedItems] = useState({
// //     '1': true,
// //     '2': true
// //   });

// //   console.log('Screen Width:', screenWidth, 'Table Total Width:', tableTotalWidth);

// //   const toggleExpand = (id) => {
// //     setExpandedItems(prev => ({
// //       ...prev,
// //       [id]: !prev[id]
// //     }));
// //   };

// //   const StatusIndicator = ({ status }) => {
// //     let backgroundColor;
// //     switch(status) {
// //       case 'Not Started': backgroundColor = '#d1d5db'; break;
// //       case 'In Progress': backgroundColor = '#f59e0b'; break;
// //       case 'Completed': backgroundColor = '#16a34a'; break;
// //       default: backgroundColor = '#d1d5db';
// //     }
    
// //     return (
// //       <View className="flex-row items-center justify-center">
// //         <View className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor }} />
// //         <Text className="text-sm text-gray-800 font-medium">{status}</Text>
// //       </View>
// //     );
// //   };

// //   const ActionIcons = ({ item }) => (
// //     <View className="flex-row justify-center items-center">
// //       <TouchableOpacity className="mx-1 p-1.5 bg-blue-100/10 border border-gray-200 rounded-md shadow-sm">
// //         <Icon name="pencil-outline" size={16} color="#2563eb" />
// //       </TouchableOpacity>
// //       <TouchableOpacity className="mx-1 p-1.5 bg-purple-100/10 border border-gray-200 rounded-md shadow-sm">
// //         <Icon name="layers" size={16} color="#7c3aed" />
// //       </TouchableOpacity>
// //       <TouchableOpacity className="mx-1 p-1.5 bg-red-100/10 border border-gray-200 rounded-md shadow-sm">
// //         <Icon name="trash-can-outline" size={16}color="#dc2626" />
// //       </TouchableOpacity>
// //     </View>
// //   );

// //   const TableHeader = () => (
// //     <LinearGradient
// //       colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.3)']}
// //       className="p-3 border-b border-gray-200 shadow-md"
// //       style={{ width: tableTotalWidth, minWidth: tableTotalWidth }}
// //     >
// //       <View className="flex-row items-center">
// //         <View style={{ width: 96 }}><Text className="text-sm font-bold text-gray-800 text-center">Actions</Text></View>
// //         <View style={{ width: 240 }}><Text className="text-sm font-bold text-gray-800">Name</Text></View>
// //         <View style={{ width: 112 }}><Text className="text-sm font-bold text-gray-800">Act. No.</Text></View>
// //         <View style={{ width: 96 }}><Text className="text-sm font-bold text-gray-800 text-center">Progress</Text></View>
// //         <View style={{ width: 112 }}><Text className="text-sm font-bold text-gray-800">Start Date</Text></View>
// //         <View style={{ width: 112 }}><Text className="text-sm font-bold text-gray-800">End Date</Text></View>
// //         <View style={{ width: 80 }}><Text className="text-sm font-bold text-gray-800 text-center">Duration</Text></View>
// //         <View style={{ width: 144 }}><Text className="text-sm font-bold text-gray-800 text-center">Activity Status</Text></View>
// //         <View style={{ width: 208 }}><Text className="text-sm font-bold text-gray-800">Assign To</Text></View>
// //       </View>
// //     </LinearGradient>
// //   );

// //   const MainActivityRow = ({ item, level = 0 }) => (
// //     <TouchableOpacity 
// //       onPress={() => toggleExpand(item.id)}
// //       className="flex-row p-2 border-b border-gray-200"
// //       style={[{ width: tableTotalWidth, minWidth: tableTotalWidth }, level === 0 ? { backgroundColor: '#e0f2fe' } : { backgroundColor: '#f0f9ff' }]}
// //     >
// //       <View style={{ width: 96 }}><ActionIcons item={item} /></View>
// //       <View className="flex-row items-center" style={{ width: 240, paddingLeft: level * 20 }}>
// //         <Icon 
// //           name={expandedItems[item.id] ? 'chevron-down' : 'chevron-right'} 
// //           size={20} 
// //           color="#4b5563" 
// //           style={{ marginRight: 8 }}
// //         />
// //         <Text className={`text-sm text-gray-800 ${level === 0 ? 'font-bold' : 'font-semibold'}`}>{item.name}</Text>
// //       </View>
// //       <View style={{ width: 112 }}><Text className="text-sm text-gray-800 font-medium">{item.actNo}</Text></View>
// //       <View style={{ width: 96 }}><CircularProgress progress={item.progress} /></View>
// //       <View style={{ width: 112 }}><Text className="text-sm text-gray-800 font-medium">{item.startDate}</Text></View>
// //       <View style={{ width: 112 }}><Text className="text-sm text-gray-800 font-medium">{item.endDate}</Text></View>
// //       <View style={{ width: 80 }}><Text className="text-sm text-gray-800 font-medium text-center">{item.duration}</Text></View>
// //       <View style={{ width: 144 }}><StatusIndicator status={item.status} /></View>
// //       <View style={{ width: 208 }}><Text className="text-sm text-gray-800 font-medium">{item.assignedTo}</Text></View>
// //     </TouchableOpacity>
// //   );

// //   const SubActivityRow = ({ subItem, level = 1 }) => (
// //     <View 
// //       className="flex-row p-2 border-b border-gray-200"
// //       style={[{ width: tableTotalWidth, minWidth: tableTotalWidth }, level === 1 ? { backgroundColor: '#f9fafb' } : { backgroundColor: '#ffffff' }]}
// //     >
// //       <View style={{ width: 96 }}><ActionIcons item={subItem} /></View>
// //       <View style={{ width: 240, paddingLeft: level * 20 + 20 }}>
// //         <Text className="text-sm text-gray-800 font-medium">{subItem.name}</Text>
// //       </View>
// //       <View style={{ width: 112 }}><Text className="text-sm text-gray-800 font-medium">{subItem.actNo}</Text></View>
// //       <View style={{ width: 96 }}><CircularProgress progress={subItem.progress} /></View>
// //       <View style={{ width: 112 }}><Text className="text-sm text-gray-800 font-medium">{subItem.startDate}</Text></View>
// //       <View style={{ width: 112 }}><Text className="text-sm text-gray-800 font-medium">{subItem.endDate}</Text></View>
// //       <View style={{ width: 80 }}><Text className="text-sm text-gray-800 font-medium text-center">{subItem.duration}</Text></View>
// //       <View style={{ width: 144 }}><StatusIndicator status={subItem.status} /></View>
// //       <View style={{ width: 208 }}><Text className="text-sm text-gray-800 font-medium">{subItem.assignedTo}</Text></View>
// //     </View>
// //   );

// //   return (
// //     <MainLayout title="Activity">
// //       <View className="flex-1 bg-background">
// //         <View className="flex-row justify-between items-center p-4 border-b border-gray-200 bg-blue-100">
// //           <Text className="text-xl font-bold text-gray-800">Activity</Text>
// //           <View className="flex-row">
// //             <TouchableOpacity className="p-2 mx-1 bg-gray-100/10 border border-gray-200 rounded-md shadow-sm">
// //               <Icon name="refresh" size={20} color="#4b5563" />
// //             </TouchableOpacity>
// //             <TouchableOpacity className="p-2 mx-1 bg-blue-100/10 border border-gray-200 rounded-md shadow-sm">
// //               <Icon name="plus" size={20} color="#2563eb" />
// //             </TouchableOpacity>
// //             <TouchableOpacity className="p-2 mx-1 bg-green-100/10 border border-gray-200 rounded-md shadow-sm">
// //               <Icon name="download" size={20} color="#16a34a" />
// //             </TouchableOpacity>
// //             <TouchableOpacity className="p-2 mx-1 bg-purple-100/10 border border-gray-200 rounded-md shadow-sm">
// //               <Icon name="filter" size={20} color="#7c3aed" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>

// //         <ScrollView
// //           horizontal
// //           showsHorizontalScrollIndicator={true}
// //           contentContainerStyle={{ width: tableTotalWidth, minWidth: tableTotalWidth }}
// //           style={{ flexGrow: 0 }}
// //         >
// //           <View style={{ width: tableTotalWidth, minWidth: tableTotalWidth }}>
// //             <TableHeader />
// //             {activities.map((item) => (
// //               <React.Fragment key={item.id}>
// //                 <MainActivityRow item={item} level={item.id === '1' ? 0 : 1} />
// //                 {expandedItems[item.id] && item.subActivities.map(subItem => (
// //                   <SubActivityRow key={subItem.id} subItem={subItem} level={item.id === '1' ? 1 : 2} />
// //                 ))}
// //               </React.Fragment>
// //             ))}
// //           </View>
// //         </ScrollView>
// //       </View>
// //     </MainLayout>
// //   );
// // }
// ///////////////////////////////////////
// /////////////////////////////////////

// // import React, { useState, useMemo, useCallback } from 'react';
// // import { 
// //   View, 
// //   Text, 
// //   ScrollView, 
// //   TouchableOpacity, 
// //   Dimensions, 
// //   Platform,
// //   StyleSheet 
// // } from 'react-native';
// // import MainLayout from '../../../components/MainLayout';
// // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// // import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
// // import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

// // const { width: screenWidth } = Dimensions.get('window');

// // // Constants
// // const COLUMN_WIDTHS = {
// //   actions: 96,
// //   name: 240,
// //   actNo: 112,
// //   progress: 96,
// //   startDate: 112,
// //   endDate: 112,
// //   duration: 80,
// //   status: 144,
// //   assignedTo: 208,
// // };

// // const TABLE_TOTAL_WIDTH = Object.values(COLUMN_WIDTHS).reduce((sum, width) => sum + width, 0);

// // const STATUS_CONFIG = {
// //   'Not Started': { 
// //     color: '#94a3b8', 
// //     backgroundColor: '#f1f5f9',
// //     textColor: '#475569'
// //   },
// //   'In Progress': { 
// //     color: '#f59e0b', 
// //     backgroundColor: '#fef3c7',
// //     textColor: '#92400e'
// //   },
// //   'Completed': { 
// //     color: '#10b981', 
// //     backgroundColor: '#d1fae5',
// //     textColor: '#047857'
// //   }
// // };

// // const ACTIVITY_DATA = [
// //   {
// //     id: '1',
// //     name: 'Granite Horizon',
// //     actNo: 'GH101-WBS-00001',
// //     progress: 75,
// //     startDate: '2025-06-07',
// //     endDate: '2025-06-16',
// //     duration: 10,
// //     status: 'In Progress',
// //     assignedTo: 'Sonalika, Alan David',
// //     priority: 'High',
// //     subActivities: [
// //       { 
// //         id: '101', 
// //         name: 'Initial Survey & Planning', 
// //         actNo: '1080', 
// //         progress: 90, 
// //         startDate: '2025-06-07', 
// //         endDate: '2025-06-16', 
// //         duration: 10, 
// //         status: 'Completed', 
// //         assignedTo: 'Sonalika, Alan David' 
// //       },
// //       { 
// //         id: '102', 
// //         name: 'Quality Assurance Testing', 
// //         actNo: '1170', 
// //         progress: 60, 
// //         startDate: '2025-07-08', 
// //         endDate: '2025-07-22', 
// //         duration: 15, 
// //         status: 'In Progress', 
// //         assignedTo: 'Sonalika, Mukesh Sinha' 
// //       },
// //       { 
// //         id: '103', 
// //         name: 'Pre-construction Assessment', 
// //         actNo: '1200', 
// //         progress: 45, 
// //         startDate: '2025-07-01', 
// //         endDate: '2025-07-30', 
// //         duration: 30, 
// //         status: 'In Progress', 
// //         assignedTo: 'Mukesh Sinha' 
// //       },
// //       { 
// //         id: '104', 
// //         name: 'Material Testing & Validation', 
// //         actNo: '1210', 
// //         progress: 30, 
// //         startDate: '2025-07-08', 
// //         endDate: '2025-07-22', 
// //         duration: 15, 
// //         status: 'In Progress', 
// //         assignedTo: 'Sonalika, Mukesh Sinha' 
// //       },
// //       { 
// //         id: '105', 
// //         name: 'Land Survey and Soil Investigation', 
// //         actNo: '1220', 
// //         progress: 0, 
// //         startDate: '2025-08-27', 
// //         endDate: '2025-09-05', 
// //         duration: 10, 
// //         status: 'Not Started', 
// //         assignedTo: 'Mukesh Sinha' 
// //       },
// //       { 
// //         id: '106', 
// //         name: 'Foundation & Brick Wall Construction', 
// //         actNo: '1290', 
// //         progress: 0, 
// //         startDate: '2025-09-06', 
// //         endDate: '2025-09-15', 
// //         duration: 10, 
// //         status: 'Not Started', 
// //         assignedTo: 'Mukesh Sinha' 
// //       },
// //     ]
// //   },
// //   {
// //     id: '2',
// //     name: 'A Wing Development',
// //     actNo: 'GH101-WBS-00002',
// //     progress: 35,
// //     startDate: '2025-07-23',
// //     endDate: '2025-08-01',
// //     duration: 10,
// //     status: 'In Progress',
// //     assignedTo: 'Mukesh Sinha',
// //     priority: 'Medium',
// //     subActivities: [
// //       { 
// //         id: '201', 
// //         name: 'Site Preparation & Investigation', 
// //         actNo: '1000', 
// //         progress: 35, 
// //         startDate: '2025-07-23', 
// //         endDate: '2025-08-01', 
// //         duration: 10, 
// //         status: 'In Progress', 
// //         assignedTo: 'Mukesh Sinha' 
// //       },
// //     ]
// //   },
// // ];

// // // Enhanced Circular Progress Component
// // const CircularProgress = React.memo(({ progress, size = 28, strokeWidth = 3 }) => {
// //   const radius = (size - strokeWidth) / 2;
// //   const circumference = 2 * Math.PI * radius;
// //   const strokeDashoffset = circumference - (progress / 100) * circumference;

// //   const getProgressColor = (progress) => {
// //     if (progress >= 80) return '#10b981';
// //     if (progress >= 50) return '#f59e0b';
// //     if (progress > 0) return '#3b82f6';
// //     return '#94a3b8';
// //   };

// //   return (
// //     <View style={styles.progressContainer}>
// //       <Svg height={size} width={size}>
// //         <Defs>
// //           <LinearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
// //             <Stop offset="0%" stopColor={getProgressColor(progress)} stopOpacity="0.8" />
// //             <Stop offset="100%" stopColor={getProgressColor(progress)} stopOpacity="1" />
// //           </LinearGradient>
// //         </Defs>
// //         <Circle
// //           cx={size / 2}
// //           cy={size / 2}
// //           r={radius}
// //           stroke="#e5e7eb"
// //           strokeWidth={strokeWidth - 1}
// //           fill="none"
// //         />
// //         <Circle
// //           cx={size / 2}
// //           cy={size / 2}
// //           r={radius}
// //           stroke="url(#progressGradient)"
// //           strokeWidth={strokeWidth}
// //           fill="none"
// //           strokeDasharray={circumference}
// //           strokeDashoffset={strokeDashoffset}
// //           strokeLinecap="round"
// //           transform={`rotate(-90 ${size / 2} ${size / 2})`}
// //         />
// //       </Svg>
// //       <Text style={[styles.progressText, { fontSize: size * 0.28 }]}>
// //         {progress}%
// //       </Text>
// //     </View>
// //   );
// // });

// // // Enhanced Status Indicator
// // const StatusIndicator = React.memo(({ status }) => {
// //   const config = STATUS_CONFIG[status] || STATUS_CONFIG['Not Started'];
  
// //   return (
// //     <View style={[styles.statusContainer, { backgroundColor: config.backgroundColor }]}>
// //       <View style={[styles.statusDot, { backgroundColor: config.color }]} />
// //       <Text style={[styles.statusText, { color: config.textColor }]}>{status}</Text>
// //     </View>
// //   );
// // });

// // // Enhanced Action Icons
// // const ActionIcons = React.memo(({ item, onEdit, onView, onDelete }) => (
// //   <View style={styles.actionIconsContainer}>
// //     <TouchableOpacity 
// //       style={[styles.actionButton, styles.editButton]}
// //       onPress={() => onEdit?.(item)}
// //       activeOpacity={0.7}
// //     >
// //       <Icon name="pencil-outline" size={14} color="#3b82f6" />
// //     </TouchableOpacity>
// //     <TouchableOpacity 
// //       style={[styles.actionButton, styles.viewButton]}
// //       onPress={() => onView?.(item)}
// //       activeOpacity={0.7}
// //     >
// //       <Icon name="eye-outline" size={14} color="#8b5cf6" />
// //     </TouchableOpacity>
// //     <TouchableOpacity 
// //       style={[styles.actionButton, styles.deleteButton]}
// //       onPress={() => onDelete?.(item)}
// //       activeOpacity={0.7}
// //     >
// //       <Icon name="trash-can-outline" size={14} color="#ef4444" />
// //     </TouchableOpacity>
// //   </View>
// // ));

// // // Table Header Component
// // const TableHeader = React.memo(() => (
// //   <ExpoLinearGradient
// //     colors={['#f8fafc', '#f1f5f9']}
// //     style={[styles.tableHeader, { width: TABLE_TOTAL_WIDTH }]}
// //   >
// //     <View style={styles.headerRow}>
// //       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.actions }]}>
// //         <Text style={styles.headerText}>Actions</Text>
// //       </View>
// //       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.name }]}>
// //         <Text style={styles.headerText}>Activity Name</Text>
// //       </View>
// //       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.actNo }]}>
// //         <Text style={styles.headerText}>Activity No.</Text>
// //       </View>
// //       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.progress }]}>
// //         <Text style={styles.headerText}>Progress</Text>
// //       </View>
// //       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.startDate }]}>
// //         <Text style={styles.headerText}>Start Date</Text>
// //       </View>
// //       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.endDate }]}>
// //         <Text style={styles.headerText}>End Date</Text>
// //       </View>
// //       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.duration }]}>
// //         <Text style={styles.headerText}>Duration</Text>
// //       </View>
// //       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.status }]}>
// //         <Text style={styles.headerText}>Status</Text>
// //       </View>
// //       <View style={[styles.headerCell, { width: COLUMN_WIDTHS.assignedTo }]}>
// //         <Text style={styles.headerText}>Assigned To</Text>
// //       </View>
// //     </View>
// //   </ExpoLinearGradient>
// // ));

// // export default function ActivityScreen() {
// //   const [expandedItems, setExpandedItems] = useState({ '1': true, '2': true });
// //   const [selectedFilter, setSelectedFilter] = useState('all');

// //   const toggleExpand = useCallback((id) => {
// //     setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
// //   }, []);

// //   const handleEdit = useCallback((item) => {
// //     console.log('Edit item:', item);
// //     // Implement edit functionality
// //   }, []);

// //   const handleView = useCallback((item) => {
// //     console.log('View item:', item);
// //     // Implement view functionality
// //   }, []);

// //   const handleDelete = useCallback((item) => {
// //     console.log('Delete item:', item);
// //     // Implement delete functionality
// //   }, []);

// //   const handleRefresh = useCallback(() => {
// //     console.log('Refreshing data...');
// //     // Implement refresh functionality
// //   }, []);

// //   const handleAdd = useCallback(() => {
// //     console.log('Adding new activity...');
// //     // Implement add functionality
// //   }, []);

// //   const handleExport = useCallback(() => {
// //     console.log('Exporting data...');
// //     // Implement export functionality
// //   }, []);

// //   const handleFilter = useCallback(() => {
// //     console.log('Opening filters...');
// //     // Implement filter functionality
// //   }, []);

// //   const filteredActivities = useMemo(() => {
// //     return ACTIVITY_DATA; // Add filtering logic here if needed
// //   }, [selectedFilter]);

// //   // Main Activity Row Component
// //   const MainActivityRow = React.memo(({ item, level = 0 }) => (
// //     <TouchableOpacity 
// //       onPress={() => toggleExpand(item.id)}
// //       style={[
// //         styles.activityRow, 
// //         { width: TABLE_TOTAL_WIDTH },
// //         level === 0 ? styles.mainActivityRow : styles.subMainActivityRow
// //       ]}
// //       activeOpacity={0.8}
// //     >
// //       <View style={[styles.cell, { width: COLUMN_WIDTHS.actions }]}>
// //         <ActionIcons 
// //           item={item} 
// //           onEdit={handleEdit}
// //           onView={handleView}
// //           onDelete={handleDelete}
// //         />
// //       </View>
// //       <View style={[styles.cell, styles.nameCell, { width: COLUMN_WIDTHS.name, paddingLeft: level * 20 }]}>
// //         <Icon 
// //           name={expandedItems[item.id] ? 'chevron-down' : 'chevron-right'} 
// //           size={18} 
// //           color="#64748b" 
// //           style={styles.expandIcon}
// //         />
// //         <Text style={[styles.activityName, level === 0 && styles.mainActivityName]}>
// //           {item.name}
// //         </Text>
// //       </View>
// //       <View style={[styles.cell, { width: COLUMN_WIDTHS.actNo }]}>
// //         <Text style={styles.cellText}>{item.actNo}</Text>
// //       </View>
// //       <View style={[styles.cell, styles.centerCell, { width: COLUMN_WIDTHS.progress }]}>
// //         <CircularProgress progress={item.progress} />
// //       </View>
// //       <View style={[styles.cell, { width: COLUMN_WIDTHS.startDate }]}>
// //         <Text style={styles.cellText}>{item.startDate}</Text>
// //       </View>
// //       <View style={[styles.cell, { width: COLUMN_WIDTHS.endDate }]}>
// //         <Text style={styles.cellText}>{item.endDate}</Text>
// //       </View>
// //       <View style={[styles.cell, styles.centerCell, { width: COLUMN_WIDTHS.duration }]}>
// //         <Text style={styles.cellText}>{item.duration}d</Text>
// //       </View>
// //       <View style={[styles.cell, styles.centerCell, { width: COLUMN_WIDTHS.status }]}>
// //         <StatusIndicator status={item.status} />
// //       </View>
// //       <View style={[styles.cell, { width: COLUMN_WIDTHS.assignedTo }]}>
// //         <Text style={styles.cellText} numberOfLines={2}>{item.assignedTo}</Text>
// //       </View>
// //     </TouchableOpacity>
// //   ));

// //   // Sub Activity Row Component
// //   const SubActivityRow = React.memo(({ subItem, level = 1 }) => (
// //     <View 
// //       style={[
// //         styles.activityRow, 
// //         { width: TABLE_TOTAL_WIDTH },
// //         level === 1 ? styles.subActivityRow : styles.deepSubActivityRow
// //       ]}
// //     >
// //       <View style={[styles.cell, { width: COLUMN_WIDTHS.actions }]}>
// //         <ActionIcons 
// //           item={subItem}
// //           onEdit={handleEdit}
// //           onView={handleView}
// //           onDelete={handleDelete}
// //         />
// //       </View>
// //       <View style={[styles.cell, { width: COLUMN_WIDTHS.name, paddingLeft: level * 20 + 20 }]}>
// //         <Text style={styles.subActivityName}>{subItem.name}</Text>
// //       </View>
// //       <View style={[styles.cell, { width: COLUMN_WIDTHS.actNo }]}>
// //         <Text style={styles.cellText}>{subItem.actNo}</Text>
// //       </View>
// //       <View style={[styles.cell, styles.centerCell, { width: COLUMN_WIDTHS.progress }]}>
// //         <CircularProgress progress={subItem.progress} />
// //       </View>
// //       <View style={[styles.cell, { width: COLUMN_WIDTHS.startDate }]}>
// //         <Text style={styles.cellText}>{subItem.startDate}</Text>
// //       </View>
// //       <View style={[styles.cell, { width: COLUMN_WIDTHS.endDate }]}>
// //         <Text style={styles.cellText}>{subItem.endDate}</Text>
// //       </View>
// //       <View style={[styles.cell, styles.centerCell, { width: COLUMN_WIDTHS.duration }]}>
// //         <Text style={styles.cellText}>{subItem.duration}d</Text>
// //       </View>
// //       <View style={[styles.cell, styles.centerCell, { width: COLUMN_WIDTHS.status }]}>
// //         <StatusIndicator status={subItem.status} />
// //       </View>
// //       <View style={[styles.cell, { width: COLUMN_WIDTHS.assignedTo }]}>
// //         <Text style={styles.cellText} numberOfLines={2}>{subItem.assignedTo}</Text>
// //       </View>
// //     </View>
// //   ));

// //   return (
// //     <MainLayout title="Activity Management">
// //       <View style={styles.container}>
// //         {/* Header Section */}
// //         <ExpoLinearGradient
// //           colors={['#ffffff', '#f8fafc']}
// //           style={styles.header}
// //         >
// //           <View style={styles.headerContent}>
// //             <View style={styles.headerLeft}>
// //               <Text style={styles.headerTitle}>Project Activities</Text>
// //               <Text style={styles.headerSubtitle}>
// //                 {filteredActivities.length} activities • {
// //                   filteredActivities.reduce((sum, item) => sum + (item.subActivities?.length || 0), 0)
// //                 } sub-activities
// //               </Text>
// //             </View>
// //             <View style={styles.headerActions}>
// //               <TouchableOpacity 
// //                 style={[styles.headerButton, styles.refreshButton]} 
// //                 onPress={handleRefresh}
// //                 activeOpacity={0.7}
// //               >
// //                 <Icon name="refresh" size={18} color="#6b7280" />
// //               </TouchableOpacity>
// //               <TouchableOpacity 
// //                 style={[styles.headerButton, styles.addButton]} 
// //                 onPress={handleAdd}
// //                 activeOpacity={0.7}
// //               >
// //                 <Icon name="plus" size={18} color="#3b82f6" />
// //               </TouchableOpacity>
// //               <TouchableOpacity 
// //                 style={[styles.headerButton, styles.exportButton]} 
// //                 onPress={handleExport}
// //                 activeOpacity={0.7}
// //               >
// //                 <Icon name="download" size={18} color="#10b981" />
// //               </TouchableOpacity>
// //               <TouchableOpacity 
// //                 style={[styles.headerButton, styles.filterButton]} 
// //                 onPress={handleFilter}
// //                 activeOpacity={0.7}
// //               >
// //                 <Icon name="filter-variant" size={18} color="#8b5cf6" />
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </ExpoLinearGradient>

// //         {/* Table Section */}
// //         <ScrollView
// //           horizontal
// //           showsHorizontalScrollIndicator={true}
// //           contentContainerStyle={{ width: TABLE_TOTAL_WIDTH, minWidth: TABLE_TOTAL_WIDTH }}
// //           style={styles.tableScrollView}
// //           bounces={false}
// //         >
// //           <View style={{ width: TABLE_TOTAL_WIDTH, minWidth: TABLE_TOTAL_WIDTH }}>
// //             <TableHeader />
// //             <ScrollView style={styles.tableBody} bounces={false}>
// //               {filteredActivities.map((item) => (
// //                 <React.Fragment key={item.id}>
// //                   <MainActivityRow item={item} level={0} />
// //                   {expandedItems[item.id] && item.subActivities?.map(subItem => (
// //                     <SubActivityRow key={subItem.id} subItem={subItem} level={1} />
// //                   ))}
// //                 </React.Fragment>
// //               ))}
// //             </ScrollView>
// //           </View>
// //         </ScrollView>
// //       </View>
// //     </MainLayout>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#ffffff',
// //   },
// //   header: {
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#e5e7eb',
// //     ...Platform.select({
// //       ios: {
// //         shadowColor: '#000',
// //         shadowOffset: { width: 0, height: 2 },
// //         shadowOpacity: 0.1,
// //         shadowRadius: 3,
// //       },
// //       android: {
// //         elevation: 3,
// //       },
// //     }),
// //   },
// //   headerContent: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //   },
// //   headerLeft: {
// //     flex: 1,
// //   },
// //   headerTitle: {
// //     fontSize: 20,
// //     fontWeight: '700',
// //     color: '#1f2937',
// //     marginBottom: 4,
// //   },
// //   headerSubtitle: {
// //     fontSize: 14,
// //     color: '#6b7280',
// //     fontWeight: '500',
// //   },
// //   headerActions: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   headerButton: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     marginLeft: 8,
// //     borderWidth: 1,
// //     borderColor: '#e5e7eb',
// //   },
// //   refreshButton: {
// //     backgroundColor: '#f9fafb',
// //   },
// //   addButton: {
// //     backgroundColor: '#eff6ff',
// //     borderColor: '#dbeafe',
// //   },
// //   exportButton: {
// //     backgroundColor: '#f0fdf4',
// //     borderColor: '#dcfce7',
// //   },
// //   filterButton: {
// //     backgroundColor: '#faf5ff',
// //     borderColor: '#f3e8ff',
// //   },
// //   tableScrollView: {
// //     flex: 1,
// //   },
// //   tableHeader: {
// //     borderBottomWidth: 2,
// //     borderBottomColor: '#d1d5db',
// //     ...Platform.select({
// //       ios: {
// //         shadowColor: '#000',
// //         shadowOffset: { width: 0, height: 1 },
// //         shadowOpacity: 0.1,
// //         shadowRadius: 2,
// //       },
// //       android: {
// //         elevation: 2,
// //       },
// //     }),
// //   },
// //   headerRow: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 12,
// //     paddingHorizontal: 8,
// //   },
// //   headerCell: {
// //     paddingHorizontal: 8,
// //   },
// //   headerText: {
// //     fontSize: 13,
// //     fontWeight: '700',
// //     color: '#374151',
// //     textAlign: 'center',
// //   },
// //   tableBody: {
// //     flex: 1,
// //   },
// //   activityRow: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f3f4f6',
// //     paddingVertical: 12,
// //     paddingHorizontal: 8,
// //     minHeight: 60,
// //   },
// //   mainActivityRow: {
// //     backgroundColor: '#f0f9ff',
// //     borderLeftWidth: 4,
// //     borderLeftColor: '#0ea5e9',
// //   },
// //   subMainActivityRow: {
// //     backgroundColor: '#f8fafc',
// //     borderLeftWidth: 3,
// //     borderLeftColor: '#64748b',
// //   },
// //   subActivityRow: {
// //     backgroundColor: '#fafafa',
// //     borderLeftWidth: 2,
// //     borderLeftColor: '#d1d5db',
// //   },
// //   deepSubActivityRow: {
// //     backgroundColor: '#ffffff',
// //     borderLeftWidth: 1,
// //     borderLeftColor: '#e5e7eb',
// //   },
// //   cell: {
// //     paddingHorizontal: 8,
// //     justifyContent: 'center',
// //   },
// //   centerCell: {
// //     alignItems: 'center',
// //   },
// //   nameCell: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   expandIcon: {
// //     marginRight: 8,
// //   },
// //   activityName: {
// //     fontSize: 14,
// //     color: '#374151',
// //     fontWeight: '600',
// //     flex: 1,
// //   },
// //   mainActivityName: {
// //     fontSize: 15,
// //     fontWeight: '700',
// //     color: '#1f2937',
// //   },
// //   subActivityName: {
// //     fontSize: 13,
// //     color: '#4b5563',
// //     fontWeight: '500',
// //   },
// //   cellText: {
// //     fontSize: 13,
// //     color: '#6b7280',
// //     fontWeight: '500',
// //   },
// //   progressContainer: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     position: 'relative',
// //   },
// //   progressText: {
// //     position: 'absolute',
// //     fontWeight: '600',
// //     color: '#374151',
// //   },
// //   statusContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingHorizontal: 8,
// //     paddingVertical: 4,
// //     borderRadius: 12,
// //     borderWidth: 1,
// //     borderColor: 'rgba(0, 0, 0, 0.1)',
// //   },
// //   statusDot: {
// //     width: 6,
// //     height: 6,
// //     borderRadius: 3,
// //     marginRight: 6,
// //   },
// //   statusText: {
// //     fontSize: 12,
// //     fontWeight: '600',
// //   },
// //   actionIconsContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   actionButton: {
// //     width: 28,
// //     height: 28,
// //     borderRadius: 6,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     marginHorizontal: 2,
// //     borderWidth: 1,
// //   },
// //   editButton: {
// //     backgroundColor: '#eff6ff',
// //     borderColor: '#dbeafe',
// //   },
// //   viewButton: {
// //     backgroundColor: '#faf5ff',
// //     borderColor: '#f3e8ff',
// //   },
// //   deleteButton: {
// //     backgroundColor: '#fef2f2',
// //     borderColor: '#fecaca',
// //   },
// // });






// import React, { useState, useCallback, useMemo, useRef } from 'react';
// import { 
//   View, 
//   Text, 
//   ScrollView, 
//   TouchableOpacity, 
//   Dimensions, 
//   ActivityIndicator,
//   TextInput,
//   Modal,
//   Alert,
//   Animated as RNAnimated,
//   PanResponder
// } from 'react-native';
// import MainLayout from '../../../components/MainLayout';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Svg, { Circle, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';
// import { LinearGradient } from 'expo-linear-gradient';
// import Animated, { 
//   FadeInDown, 
//   FadeOut, 
//   FadeInUp, 
//   SlideInRight,
//   SlideOutRight,
//   withSpring,
//   useSharedValue,
//   useAnimatedStyle,
//   runOnJS
// } from 'react-native-reanimated';

// const screenWidth = Dimensions.get('window').width;
// const cardWidth = Math.min(screenWidth - 32, 600);

// const activities = [
//   {
//     id: '1',
//     name: 'Granite Horizon',
//     actNo: 'GH101-WBS-00001',
//     progress: 65,
//     startDate: '2025-06-07',
//     endDate: '2025-06-16',
//     duration: 10,
//     status: 'In Progress',
//     priority: 'High',
//     assignedTo: 'Sonalika, Alan David',
//     description: 'Primary construction phase for the granite horizon development',
//     tags: ['Construction', 'Phase 1'],
//     budget: '$125,000',
//     subActivities: [
//       { 
//         id: '101', 
//         name: 'Site Survey', 
//         actNo: '1080', 
//         progress: 100, 
//         startDate: '2025-06-07', 
//         endDate: '2025-06-16', 
//         duration: 10, 
//         status: 'Completed', 
//         priority: 'Medium',
//         assignedTo: 'Sonalika, Alan David',
//         description: 'Complete site survey and mapping',
//         budget: '$15,000'
//       },
//       { 
//         id: '102', 
//         name: 'Soil Testing', 
//         actNo: '1170', 
//         progress: 80, 
//         startDate: '2025-07-08', 
//         endDate: '2025-07-22', 
//         duration: 15, 
//         status: 'In Progress', 
//         priority: 'High',
//         assignedTo: 'Sonalika, Mukesh Sinha',
//         description: 'Comprehensive soil analysis and testing',
//         budget: '$25,000'
//       },
//       { 
//         id: '103', 
//         name: 'Foundation Work', 
//         actNo: '1200', 
//         progress: 45, 
//         startDate: '2025-07-01', 
//         endDate: '2025-07-30', 
//         duration: 30, 
//         status: 'In Progress', 
//         priority: 'Critical',
//         assignedTo: 'Mukesh Sinha',
//         description: 'Foundation laying and structural work',
//         budget: '$60,000'
//       }
//     ],
//   },
//   {
//     id: '2',
//     name: 'A Wing Construction',
//     actNo: 'GH101-WBS-00002',
//     progress: 30,
//     startDate: '2025-07-23',
//     endDate: '2025-08-01',
//     duration: 10,
//     status: 'Not Started',
//     priority: 'Medium',
//     assignedTo: 'Mukesh Sinha',
//     description: 'Main building wing construction activities',
//     tags: ['Building', 'Wing A'],
//     budget: '$200,000',
//     subActivities: [
//       { 
//         id: '201', 
//         name: 'Site Preparation', 
//         actNo: '1000', 
//         progress: 30, 
//         startDate: '2025-07-23', 
//         endDate: '2025-08-01', 
//         duration: 10, 
//         status: 'Not Started', 
//         priority: 'Medium',
//         assignedTo: 'Mukesh Sinha',
//         description: 'Site clearing and preparation work',
//         budget: '$35,000'
//       },
//     ],
//   },
// ];

// // Enhanced Circular Progress with gradient and animation
// const CircularProgress = React.memo(({ progress, size = 44, strokeWidth = 4 }) => {
//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (progress / 100) * circumference;

//   const getProgressColor = (progress) => {
//     if (progress >= 80) return '#10b981'; // green
//     if (progress >= 50) return '#f59e0b'; // yellow
//     if (progress >= 20) return '#3b82f6'; // blue
//     return '#ef4444'; // red
//   };

//   return (
//     <View className="items-center justify-center">
//       <Svg height={size} width={size}>
//         <Defs>
//           <SvgGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <Stop offset="0%" stopColor={getProgressColor(progress)} stopOpacity="0.8" />
//             <Stop offset="100%" stopColor={getProgressColor(progress)} stopOpacity="1" />
//           </SvgGradient>
//         </Defs>
//         <Circle 
//           cx={size / 2} 
//           cy={size / 2} 
//           r={radius} 
//           stroke="#e5e7eb" 
//           strokeWidth={strokeWidth} 
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
//       <View className="absolute items-center">
//         <Text className="text-xs font-bold text-gray-800">{progress}%</Text>
//       </View>
//     </View>
//   );
// });

// // Enhanced Status Indicator with priority
// const StatusIndicator = React.memo(({ status, priority }) => {
//   const statusConfig = {
//     'Not Started': { color: '#9ca3af', bg: '#f3f4f6', icon: 'clock-outline' },
//     'In Progress': { color: '#f59e0b', bg: '#fef3c7', icon: 'progress-clock' },
//     'Completed': { color: '#10b981', bg: '#d1fae5', icon: 'check-circle' },
//   };

//   const priorityConfig = {
//     'Low': { color: '#10b981', border: '#10b981' },
//     'Medium': { color: '#f59e0b', border: '#f59e0b' },
//     'High': { color: '#ef4444', border: '#ef4444' },
//     'Critical': { color: '#7c2d12', border: '#dc2626' },
//   };

//   const config = statusConfig[status] || statusConfig['Not Started'];
//   const priorityStyle = priorityConfig[priority] || priorityConfig['Medium'];

//   return (
//     <View className="items-end space-y-1">
//       <View className="flex-row items-center px-2 py-1 rounded-full" style={{ backgroundColor: config.bg }}>
//         <Icon name={config.icon} size={12} color={config.color} style={{ marginRight: 4 }} />
//         <Text className="text-xs font-semibold" style={{ color: config.color }}>{status}</Text>
//       </View>
//       <View 
//         className="px-2 py-0.5 rounded border" 
//         style={{ borderColor: priorityStyle.border, backgroundColor: `${priorityStyle.color}10` }}
//       >
//         <Text className="text-xs font-medium" style={{ color: priorityStyle.color }}>{priority}</Text>
//       </View>
//     </View>
//   );
// });

// // Swipeable Action Panel
// const SwipeableActions = ({ item, onEdit, onView, onDelete }) => {
//   const translateX = useSharedValue(0);
//   const opacity = useSharedValue(1);

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ translateX: translateX.value }],
//     opacity: opacity.value,
//   }));

//   const panGesture = PanResponder.create({
//     onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dx) > 10,
//     onPanResponderMove: (_, gestureState) => {
//       translateX.value = Math.min(0, gestureState.dx);
//     },
//     onPanResponderRelease: (_, gestureState) => {
//       if (gestureState.dx < -100) {
//         translateX.value = withSpring(-120);
//       } else {
//         translateX.value = withSpring(0);
//       }
//     },
//   });

//   return (
//     <View className="relative">
//       <Animated.View style={animatedStyle} {...panGesture.panHandlers}>
//         <View className="absolute right-0 top-0 bottom-0 flex-row items-center">
//           {[
//             { icon: 'pencil-outline', color: '#ffffff', bg: '#2563eb', action: () => onEdit(item) },
//             { icon: 'eye-outline', color: '#ffffff', bg: '#7c3aed', action: () => onView(item) },
//             { icon: 'trash-can-outline', color: '#ffffff', bg: '#dc2626', action: () => onDelete(item) },
//           ].map(({ icon, color, bg, action }, index) => (
//             <TouchableOpacity
//               key={index}
//               className="w-10 h-10 items-center justify-center mx-1 rounded-lg shadow-lg"
//               style={{ backgroundColor: bg }}
//               onPress={action}
//             >
//               <Icon name={icon} size={18} color={color} />
//             </TouchableOpacity>
//           ))}
//         </View>
//       </Animated.View>
//     </View>
//   );
// };

// // Enhanced Activity Card with more details
// const ActivityCard = React.memo(({ item, level = 0, toggleExpand, isExpanded }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <Animated.View entering={FadeInDown.delay(level * 100)} exiting={FadeOut}>
//       <TouchableOpacity
//         onPress={() => toggleExpand(item.id)}
//         className={`rounded-2xl shadow-lg mb-4 overflow-hidden ${
//           level === 0 ? 'bg-white' : 'bg-gray-50'
//         }`}
//         style={{ 
//           width: cardWidth,
//           elevation: level === 0 ? 8 : 4,
//           shadowColor: '#000',
//           shadowOffset: { width: 0, height: level === 0 ? 4 : 2 },
//           shadowOpacity: level === 0 ? 0.1 : 0.05,
//           shadowRadius: level === 0 ? 8 : 4,
//         }}
//       >
//         {/* Header with gradient */}
//         <LinearGradient
//           colors={level === 0 ? ['#3b82f6', '#1e40af'] : ['#6b7280', '#4b5563']}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//           className="p-4"
//         >
//           <View className="flex-row justify-between items-center">
//             <View className="flex-row items-center flex-1">
//               <Icon
//                 name={isExpanded ? 'chevron-down' : 'chevron-right'}
//                 size={24}
//                 color="#ffffff"
//                 style={{ marginRight: 12 }}
//               />
//               <View className="flex-1">
//                 <Text className="text-lg font-bold text-white">{item.name}</Text>
//                 <Text className="text-sm text-white/80 mt-1">{item.actNo}</Text>
//                 {item.tags && (
//                   <View className="flex-row mt-2">
//                     {item.tags.map((tag, index) => (
//                       <View key={index} className="bg-white/20 px-2 py-1 rounded-full mr-2">
//                         <Text className="text-xs text-white font-medium">{tag}</Text>
//                       </View>
//                     ))}
//                   </View>
//                 )}
//               </View>
//             </View>
//             <CircularProgress progress={item.progress} size={50} strokeWidth={5} />
//           </View>
//         </LinearGradient>

//         {/* Content */}
//         <View className="p-4 space-y-3">
//           {/* Key Info Row */}
//           <View className="flex-row justify-between items-center">
//             <View className="flex-1">
//               <Text className="text-xs text-gray-500 mb-1">Duration</Text>
//               <View className="flex-row items-center">
//                 <Icon name="calendar-range" size={16} color="#6b7280" />
//                 <Text className="text-sm font-semibold text-gray-800 ml-2">{item.duration} days</Text>
//               </View>
//             </View>
//             <View className="flex-1">
//               <Text className="text-xs text-gray-500 mb-1">Budget</Text>
//               <View className="flex-row items-center">
//                 <Icon name="currency-usd" size={16} color="#6b7280" />
//                 <Text className="text-sm font-semibold text-gray-800 ml-2">{item.budget || 'N/A'}</Text>
//               </View>
//             </View>
//             <StatusIndicator status={item.status} priority={item.priority} />
//           </View>

//           {/* Dates */}
//           <View className="bg-gray-50 rounded-xl p-3">
//             <View className="flex-row justify-between">
//               <View className="flex-1">
//                 <Text className="text-xs text-gray-500 mb-1">Start Date</Text>
//                 <Text className="text-sm font-medium text-gray-800">{item.startDate}</Text>
//               </View>
//               <View className="flex-1 items-end">
//                 <Text className="text-xs text-gray-500 mb-1">End Date</Text>
//                 <Text className="text-sm font-medium text-gray-800">{item.endDate}</Text>
//               </View>
//             </View>
//           </View>

//           {/* Assigned To */}
//           <View className="flex-row items-center">
//             <Icon name="account-group" size={16} color="#6b7280" />
//             <Text className="text-sm text-gray-600 ml-2">Assigned to: </Text>
//             <Text className="text-sm font-semibold text-gray-800">{item.assignedTo}</Text>
//           </View>

//           {/* Description (if available) */}
//           {item.description && (
//             <View className="bg-blue-50 rounded-xl p-3">
//               <Text className="text-sm text-gray-700">{item.description}</Text>
//             </View>
//           )}

//           {/* Action Buttons */}
//           <View className="flex-row justify-end space-x-2 pt-2 border-t border-gray-100">
//             <TouchableOpacity
//               className="bg-blue-100 px-4 py-2 rounded-lg flex-row items-center"
//               onPress={() => setShowDetails(!showDetails)}
//             >
//               <Icon name="information-outline" size={16} color="#2563eb" />
//               <Text className="text-blue-600 font-medium ml-2">Details</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               className="bg-green-100 px-4 py-2 rounded-lg flex-row items-center"
//               onPress={() => console.log('Edit', item.id)}
//             >
//               <Icon name="pencil-outline" size={16} color="#059669" />
//               <Text className="text-green-600 font-medium ml-2">Edit</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Expanded Details */}
//           {showDetails && (
//             <Animated.View entering={FadeInUp} className="bg-gray-50 rounded-xl p-3 mt-2">
//               <Text className="text-sm font-semibold text-gray-800 mb-2">Additional Details</Text>
//               <View className="space-y-1">
//                 <Text className="text-xs text-gray-600">Activity ID: {item.id}</Text>
//                 <Text className="text-xs text-gray-600">Priority Level: {item.priority}</Text>
//                 <Text className="text-xs text-gray-600">Progress: {item.progress}% Complete</Text>
//               </View>
//             </Animated.View>
//           )}
//         </View>
//       </TouchableOpacity>

//       {/* Sub-activities */}
//       {isExpanded && Array.isArray(item.subActivities) && item.subActivities.length > 0 && (
//         <Animated.View entering={SlideInRight} exiting={SlideOutRight} className="ml-6 mt-2">
//           {item.subActivities.map((subItem, index) => (
//             <ActivityCard
//               key={subItem.id}
//               item={subItem}
//               level={level + 1}
//               toggleExpand={() => {}}
//               isExpanded={false}
//             />
//           ))}
//         </Animated.View>
//       )}
//     </Animated.View>
//   );
// });

// // Enhanced Filter Modal
// const FilterModal = ({ visible, onClose, currentFilter, onApplyFilter }) => {
//   const [tempFilter, setTempFilter] = useState(currentFilter);

//   return (
//     <Modal visible={visible} animationType="slide" transparent>
//       <View className="flex-1 bg-black/50 justify-end">
//         <Animated.View entering={SlideInRight} className="bg-white rounded-t-3xl p-6">
//           <View className="flex-row justify-between items-center mb-6">
//             <Text className="text-xl font-bold text-gray-900">Filter Activities</Text>
//             <TouchableOpacity onPress={onClose}>
//               <Icon name="close" size={24} color="#6b7280" />
//             </TouchableOpacity>
//           </View>
          
//           <View className="space-y-4">
//             <Text className="text-lg font-semibold text-gray-800">Status</Text>
//             {['All', 'Not Started', 'In Progress', 'Completed'].map((status) => (
//               <TouchableOpacity
//                 key={status}
//                 className={`p-3 rounded-xl border-2 ${
//                   tempFilter === status || (status === 'All' && !tempFilter)
//                     ? 'border-blue-500 bg-blue-50' 
//                     : 'border-gray-200'
//                 }`}
//                 onPress={() => setTempFilter(status === 'All' ? null : status)}
//               >
//                 <Text className={`font-medium ${
//                   tempFilter === status || (status === 'All' && !tempFilter)
//                     ? 'text-blue-600' 
//                     : 'text-gray-700'
//                 }`}>
//                   {status}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
          
//           <View className="flex-row space-x-3 mt-6">
//             <TouchableOpacity
//               className="flex-1 bg-gray-100 p-4 rounded-xl"
//               onPress={onClose}
//             >
//               <Text className="text-center font-semibold text-gray-700">Cancel</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               className="flex-1 bg-blue-500 p-4 rounded-xl"
//               onPress={() => {
//                 onApplyFilter(tempFilter);
//                 onClose();
//               }}
//             >
//               <Text className="text-center font-semibold text-white">Apply Filter</Text>
//             </TouchableOpacity>
//           </View>
//         </Animated.View>
//       </View>
//     </Modal>
//   );
// };

// // Main Activity Screen Component
// const ActivityScreen = () => {
//   const [expandedItems, setExpandedItems] = useState({ '1': true });
//   const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
//   const [filterStatus, setFilterStatus] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFilterModal, setShowFilterModal] = useState(false);

//   const toggleExpand = useCallback((id) => {
//     setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
//   }, []);

//   const handleSort = useCallback((key) => {
//     setSortConfig(prev => ({
//       key,
//       direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
//     }));
//   }, []);

//   const handleRefresh = useCallback(() => {
//     setIsLoading(true);
//     setTimeout(() => setIsLoading(false), 1500);
//   }, []);

//   const sortedAndFilteredActivities = useMemo(() => {
//     let result = [...activities];
    
//     // Apply search filter
//     if (searchQuery.trim()) {
//       result = result.filter(item => 
//         item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.actNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.assignedTo.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
    
//     // Apply status filter
//     if (filterStatus) {
//       result = result.filter(item => item.status === filterStatus);
//     }
    
//     // Apply sorting
//     return result.sort((a, b) => {
//       const aValue = a[sortConfig.key] || '';
//       const bValue = b[sortConfig.key] || '';
//       if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
//       if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
//       return 0;
//     });
//   }, [sortConfig, filterStatus, searchQuery]);

//   if (isLoading) {
//     return (
//       <MainLayout title="Activity">
//         <View className="flex-1 justify-center items-center bg-gray-50">
//           <View className="bg-white p-8 rounded-3xl shadow-lg items-center">
//             <ActivityIndicator size="large" color="#3b82f6" />
//             <Text className="mt-4 text-lg font-semibold text-gray-800">Loading activities...</Text>
//             <Text className="mt-2 text-sm text-gray-600">Please wait while we fetch your data</Text>
//           </View>
//         </View>
//       </MainLayout>
//     );
//   }

//   return (
//     <MainLayout title="Activity">
//       <View className="flex-1 bg-gray-50">
//         {/* Enhanced Header */}
//         <LinearGradient 
//           colors={['#3b82f6', '#1e40af', '#1e3a8a']} 
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//           className="px-4 pt-4 pb-6"
//         >
//           <View className="flex-row justify-between items-center mb-4">
//             <View>
//               <Text className="text-2xl font-bold text-white">Project Activities</Text>
//               <Text className="text-sm text-white/80 mt-1">
//                 {sortedAndFilteredActivities.length} activities • {filterStatus || 'All statuses'}
//               </Text>
//             </View>
//             <View className="flex-row space-x-2">
//               <TouchableOpacity
//                 className="p-3 bg-white/20 rounded-full"
//                 onPress={handleRefresh}
//               >
//                 <Icon name="refresh" size={20} color="#ffffff" />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 className="p-3 bg-white/20 rounded-full"
//                 onPress={() => console.log('Add activity')}
//               >
//                 <Icon name="plus" size={20} color="#ffffff" />
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Search Bar */}
//           <View className="bg-white/10 rounded-2xl px-4 py-3 mb-4">
//             <View className="flex-row items-center">
//               <Icon name="magnify" size={20} color="#ffffff" style={{ marginRight: 12 }} />
//               <TextInput
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//                 placeholder="Search activities, IDs, or assignees..."
//                 placeholderTextColor="#ffffff80"
//                 className="flex-1 text-white text-base"
//               />
//               {searchQuery.length > 0 && (
//                 <TouchableOpacity onPress={() => setSearchQuery('')}>
//                   <Icon name="close-circle" size={20} color="#ffffff80" />
//                 </TouchableOpacity>
//               )}
//             </View>
//           </View>

//           {/* Filter and Sort Controls */}
//           <View className="flex-row justify-between">
//             <TouchableOpacity
//               className="flex-row items-center bg-white/20 px-4 py-2 rounded-xl"
//               onPress={() => setShowFilterModal(true)}
//             >
//               <Icon name="filter-outline" size={16} color="#ffffff" />
//               <Text className="text-white font-medium ml-2">Filter</Text>
//               {filterStatus && (
//                 <View className="ml-2 bg-white/30 px-2 py-0.5 rounded-full">
//                   <Text className="text-xs text-white">{filterStatus}</Text>
//                 </View>
//               )}
//             </TouchableOpacity>

//             <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
//               {[
//                 { key: 'name', label: 'Name' },
//                 { key: 'progress', label: 'Progress' },
//                 { key: 'status', label: 'Status' },
//                 { key: 'priority', label: 'Priority' }
//               ].map(({ key, label }) => (
//                 <TouchableOpacity
//                   key={key}
//                   onPress={() => handleSort(key)}
//                   className={`flex-row items-center px-3 py-2 rounded-xl mr-2 ${
//                     sortConfig.key === key ? 'bg-white/30' : 'bg-white/10'
//                   }`}
//                 >
//                   <Text className="text-white font-medium text-sm">{label}</Text>
//                   {sortConfig.key === key && (
//                     <Icon
//                       name={sortConfig.direction === 'asc' ? 'arrow-up' : 'arrow-down'}
//                       size={14}
//                       color="#ffffff"
//                       style={{ marginLeft: 4 }}
//                     />
//                   )}
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </View>
//         </LinearGradient>

//         {/* Activities List */}
//         <ScrollView 
//           contentContainerStyle={{ padding: 16 }}
//           showsVerticalScrollIndicator={false}
//         >
//           {sortedAndFilteredActivities.length > 0 ? (
//             sortedAndFilteredActivities.map((item, index) => (
//               <ActivityCard
//                 key={item.id}
//                 item={item}
//                 level={0}
//                 toggleExpand={toggleExpand}
//                 isExpanded={expandedItems[item.id]}
//               />
//             ))
//           ) : (
//             <Animated.View 
//               entering={FadeInUp} 
//               className="items-center justify-center py-16 bg-white rounded-3xl shadow-lg"
//             >
//               <Icon name="folder-search-outline" size={64} color="#d1d5db" />
//               <Text className="text-xl font-semibold text-gray-600 mt-4">No activities found</Text>
//               <Text className="text-sm text-gray-500 mt-2 text-center px-8">
//                 {searchQuery ? 
//                   'Try adjusting your search terms or filters' : 
//                   'Get started by creating your first activity'
//                 }
//               </Text>
//               <TouchableOpacity 
//                 className="bg-blue-500 px-6 py-3 rounded-xl mt-6"
//                 onPress={() => console.log('Add first activity')}
//               >
//                 <Text className="text-white font-semibold">Add Activity</Text>
//               </TouchableOpacity>
//             </Animated.View>
//           )}
//         </ScrollView>

//         {/* Filter Modal */}
//         <FilterModal
//           visible={showFilterModal}
//           onClose={() => setShowFilterModal(false)}
//           currentFilter={filterStatus}
//           onApplyFilter={setFilterStatus}
//         />
//       </View>
//     </MainLayout>
//   );
// };

// export default ActivityScreen;




// import React, { useState, useCallback, useMemo } from 'react';
// import { 
//   View, 
//   Text, 
//   ScrollView, 
//   TouchableOpacity, 
//   Dimensions, 
//   ActivityIndicator,
//   TextInput,
//   Modal,
// } from 'react-native';
// import MainLayout from '../../../components/MainLayout';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Svg, { Circle, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';
// import { LinearGradient } from 'expo-linear-gradient';
// import Animated, { 
//   FadeInDown, 
//   FadeOut, 
//   FadeInUp, 
//   SlideInRight,
//   SlideOutRight,
// } from 'react-native-reanimated';

// const screenWidth = Dimensions.get('window').width;
// const cardWidth = Math.min(screenWidth - 32, 600);

// const activities = [
//   {
//     id: '1',
//     name: 'Granite Horizon',
//     actNo: 'GH101-WBS-00001',
//     progress: 65,
//     startDate: '2025-06-07',
//     endDate: '2025-06-16',
//     duration: 10,
//     status: 'In Progress',
//     priority: 'High',
//     assignedTo: 'Sonalika, Alan David',
//     description: 'Primary construction phase for the granite horizon development',
//     tags: ['Construction', 'Phase 1'],
//     budget: '$125,000',
//     subActivities: [
//       { 
//         id: '101', 
//         name: 'Site Survey', 
//         actNo: '1080', 
//         progress: 100, 
//         startDate: '2025-06-07', 
//         endDate: '2025-06-16', 
//         duration: 10, 
//         status: 'Completed', 
//         priority: 'Medium',
//         assignedTo: 'Sonalika, Alan David',
//         description: 'Complete site survey and mapping',
//         budget: '$15,000'
//       },
//       { 
//         id: '102', 
//         name: 'Soil Testing', 
//         actNo: '1170', 
//         progress: 80, 
//         startDate: '2025-07-08', 
//         endDate: '2025-07-22', 
//         duration: 15, 
//         status: 'In Progress', 
//         priority: 'High',
//         assignedTo: 'Sonalika, Mukesh Sinha',
//         description: 'Comprehensive soil analysis and testing',
//         budget: '$25,000'
//       },
//       { 
//         id: '103', 
//         name: 'Foundation Work', 
//         actNo: '1200', 
//         progress: 45, 
//         startDate: '2025-07-01', 
//         endDate: '2025-07-30', 
//         duration: 30, 
//         status: 'In Progress', 
//         priority: 'Critical',
//         assignedTo: 'Mukesh Sinha',
//         description: 'Foundation laying and structural work',
//         budget: '$60,000'
//       }
//     ],
//   },
//   {
//     id: '2',
//     name: 'A Wing Construction',
//     actNo: 'GH101-WBS-00002',
//     progress: 30,
//     startDate: '2025-07-23',
//     endDate: '2025-08-01',
//     duration: 10,
//     status: 'Not Started',
//     priority: 'Medium',
//     assignedTo: 'Mukesh Sinha',
//     description: 'Main building wing construction activities',
//     tags: ['Building', 'Wing A'],
//     budget: '$200,000',
//     subActivities: [
//       { 
//         id: '201', 
//         name: 'Site Preparation', 
//         actNo: '1000', 
//         progress: 30, 
//         startDate: '2025-07-23', 
//         endDate: '2025-08-01', 
//         duration: 10, 
//         status: 'Not Started', 
//         priority: 'Medium',
//         assignedTo: 'Mukesh Sinha',
//         description: 'Site clearing and preparation work',
//         budget: '$35,000'
//       },
//     ],
//   },
// ];

// // Circular Progress with subtle gradient
// const CircularProgress = React.memo(({ progress, size = 44, strokeWidth = 4 }) => {
//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (progress / 100) * circumference;

//   const getProgressColor = (progress) => {
//     if (progress >= 80) return '#22c55e'; // green
//     if (progress >= 50) return '#eab308'; // yellow
//     if (progress >= 20) return '#3b82f6'; // blue
//     return '#ef4444'; // red
//   };

//   return (
//     <View className="items-center justify-center">
//       <Svg height={size} width={size}>
//         <Defs>
//           <SvgGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <Stop offset="0%" stopColor={getProgressColor(progress)} stopOpacity="0.9" />
//             <Stop offset="100%" stopColor={getProgressColor(progress)} stopOpacity="1" />
//           </SvgGradient>
//         </Defs>
//         <Circle 
//           cx={size / 2} 
//           cy={size / 2} 
//           r={radius} 
//           stroke="#e5e7eb" 
//           strokeWidth={strokeWidth} 
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
//       <View className="absolute items-center">
//         <Text className="text-xs font-semibold text-gray-700">{progress}%</Text>
//       </View>
//     </View>
//   );
// });

// // Status Indicator with professional styling
// const StatusIndicator = React.memo(({ status, priority }) => {
//   const statusConfig = {
//     'Not Started': { color: '#6b7280', bg: '#f3f4f6', icon: 'clock-outline' },
//     'In Progress': { color: '#2563eb', bg: '#dbeafe', icon: 'progress-clock' },
//     'Completed': { color: '#16a34a', bg: '#dcfce7', icon: 'check-circle' },
//   };

//   const priorityConfig = {
//     'Low': { color: '#16a34a', border: '#16a34a' },
//     'Medium': { color: '#d97706', border: '#d97706' },
//     'High': { color: '#dc2626', border: '#dc2626' },
//     'Critical': { color: '#991b1b', border: '#b91c1c' },
//   };

//   const config = statusConfig[status] || statusConfig['Not Started'];
//   const priorityStyle = priorityConfig[priority] || priorityConfig['Medium'];

//   return (
//     <View className="items-end space-y-1">
//       <View className="flex-row items-center px-2 py-1 rounded-md" style={{ backgroundColor: config.bg }}>
//         <Icon name={config.icon} size={12} color={config.color} style={{ marginRight: 4 }} />
//         <Text className="text-xs font-medium" style={{ color: config.color }}>{status}</Text>
//       </View>
//       <View 
//         className="px-2 py-0.5 rounded-md border" 
//         style={{ borderColor: priorityStyle.border, backgroundColor: `${priorityStyle.color}10` }}
//       >
//         <Text className="text-xs font-medium" style={{ color: priorityStyle.color }}>{priority}</Text>
//       </View>
//     </View>
//   );
// });

// // Activity Card with professional light blue styling
// const ActivityCard = React.memo(({ item, level = 0, toggleExpand, isExpanded }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <Animated.View entering={FadeInDown.delay(level * 100)} exiting={FadeOut}>
//       <TouchableOpacity
//         onPress={() => toggleExpand(item.id)}
//         className={`rounded-xl shadow-md mb-4 overflow-hidden ${
//           level === 0 ? 'bg-white' : 'bg-gray-50'
//         }`}
//         style={{ 
//           width: cardWidth,
//           elevation: level === 0 ? 6 : 3,
//           shadowColor: '#000',
//           shadowOffset: { width: 0, height: level === 0 ? 3 : 1 },
//           shadowOpacity: level === 0 ? 0.08 : 0.04,
//           shadowRadius: level === 0 ? 6 : 3,
//         }}
//       >
//         {/* Header with subtle gradient */}
//         <LinearGradient
//           colors={level === 0 ? ['#eff6ff', '#dbeafe'] : ['#f3f4f6', '#e5e7eb']}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//           className="p-4"
//         >
//           <View className="flex-row justify-between items-center">
//             <View className="flex-row items-center flex-1">
//               <Icon
//                 name={isExpanded ? 'chevron-down' : 'chevron-right'}
//                 size={20}
//                 color="#1e3a8a"
//                 style={{ marginRight: 12 }}
//               />
//               <View className="flex-1">
//                 <Text className="text-base font-semibold text-gray-900">{item.name}</Text>
//                 <Text className="text-xs text-gray-600 mt-1">{item.actNo}</Text>
//                 {item.tags && (
//                   <View className="flex-row mt-2">
//                     {item.tags.map((tag, index) => (
//                       <View key={index} className="bg-blue-100 px-2 py-0.5 rounded-md mr-2">
//                         <Text className="text-xs text-blue-700 font-medium">{tag}</Text>
//                       </View>
//                     ))}
//                   </View>
//                 )}
//               </View>
//             </View>
//             <CircularProgress progress={item.progress} size={44} strokeWidth={4} />
//           </View>
//         </LinearGradient>

//         {/* Content */}
//         <View className="p-4 space-y-3">
//           {/* Key Info Row */}
//           <View className="flex-row justify-between items-center">
//             <View className="flex-1">
//               <Text className="text-xs text-gray-500 mb-1">Duration</Text>
//               <View className="flex-row items-center">
//                 <Icon name="calendar-range" size={16} color="#6b7280" />
//                 <Text className="text-sm font-medium text-gray-700 ml-2">{item.duration} days</Text>
//               </View>
//             </View>
//             <View className="flex-1">
//               <Text className="text-xs text-gray-500 mb-1">Budget</Text>
//               <View className="flex-row items-center">
//                 <Icon name="currency-usd" size={16} color="#6b7280" />
//                 <Text className="text-sm font-medium text-gray-700 ml-2">{item.budget || 'N/A'}</Text>
//               </View>
//             </View>
//             <StatusIndicator status={item.status} priority={item.priority} />
//           </View>

//           {/* Dates */}
//           <View className="bg-gray-50 rounded-lg p-3">
//             <View className="flex-row justify-between">
//               <View className="flex-1">
//                 <Text className="text-xs text-gray-500 mb-1">Start Date</Text>
//                 <Text className="text-sm font-medium text-gray-700">{item.startDate}</Text>
//               </View>
//               <View className="flex-1 items-end">
//                 <Text className="text-xs text-gray-500 mb-1">End Date</Text>
//                 <Text className="text-sm font-medium text-gray-700">{item.endDate}</Text>
//               </View>
//             </View>
//           </View>

//           {/* Assigned To */}
//           <View className="flex-row items-center">
//             <Icon name="account-group" size={16} color="#6b7280" />
//             <Text className="text-sm text-gray-600 ml-2">Assigned to: </Text>
//             <Text className="text-sm font-medium text-gray-700">{item.assignedTo}</Text>
//           </View>

//           {/* Description */}
//           {item.description && (
//             <View className="bg-blue-50 rounded-lg p-3">
//               <Text className="text-sm text-gray-600">{item.description}</Text>
//             </View>
//           )}

//           {/* Action Buttons */}
//           <View className="flex-row justify-end space-x-2 pt-2 border-t border-gray-100">
//             <TouchableOpacity
//               className="bg-blue-50 px-4 py-2 rounded-md flex-row items-center"
//               onPress={() => setShowDetails(!showDetails)}
//             >
//               <Icon name="information-outline" size={16} color="#2563eb" />
//               <Text className="text-blue-700 font-medium ml-2">Details</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               className="bg-blue-50 px-4 py-2 rounded-md flex-row items-center"
//               onPress={() => console.log('Edit', item.id)}
//             >
//               <Icon name="pencil-outline" size={16} color="#2563eb" />
//               <Text className="text-blue-700 font-medium ml-2">Edit</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Expanded Details */}
//           {showDetails && (
//             <Animated.View entering={FadeInUp} className="bg-gray-50 rounded-lg p-3 mt-2">
//               <Text className="text-sm font-semibold text-gray-800 mb-2">Additional Details</Text>
//               <View className="space-y-1">
//                 <Text className="text-xs text-gray-600">Activity ID: {item.id}</Text>
//                 <Text className="text-xs text-gray-600">Priority Level: {item.priority}</Text>
//                 <Text className="text-xs text-gray-600">Progress: {item.progress}% Complete</Text>
//               </View>
//             </Animated.View>
//           )}
//         </View>
//       </TouchableOpacity>

//       {/* Sub-activities */}
//       {isExpanded && Array.isArray(item.subActivities) && item.subActivities.length > 0 && (
//         <Animated.View entering={SlideInRight} exiting={SlideOutRight} className="ml-6 mt-2">
//           {item.subActivities.map((subItem, index) => (
//             <ActivityCard
//               key={subItem.id}
//               item={subItem}
//               level={level + 1}
//               toggleExpand={() => {}}
//               isExpanded={false}
//             />
//           ))}
//         </Animated.View>
//       )}
//     </Animated.View>
//   );
// });

// // Filter Modal with professional styling
// const FilterModal = ({ visible, onClose, currentFilter, onApplyFilter }) => {
//   const [tempFilter, setTempFilter] = useState(currentFilter);

//   return (
//     <Modal visible={visible} animationType="slide" transparent>
//       <View className="flex-1 bg-black/30 justify-end">
//         <Animated.View entering={SlideInRight} className="bg-white rounded-t-2xl p-6">
//           <View className="flex-row justify-between items-center mb-4">
//             <Text className="text-lg font-semibold text-gray-900">Filter Activities</Text>
//             <TouchableOpacity onPress={onClose}>
//               <Icon name="close" size={20} color="#6b7280" />
//             </TouchableOpacity>
//           </View>
          
//           <View className="space-y-3">
//             <Text className="text-base font-medium text-gray-800">Status</Text>
//             {['All', 'Not Started', 'In Progress', 'Completed'].map((status) => (
//               <TouchableOpacity
//                 key={status}
//                 className={`p-3 rounded-lg border ${
//                   tempFilter === status || (status === 'All' && !tempFilter)
//                     ? 'border-blue-500 bg-blue-50' 
//                     : 'border-gray-200'
//                 }`}
//                 onPress={() => setTempFilter(status === 'All' ? null : status)}
//               >
//                 <Text className={`font-medium ${
//                   tempFilter === status || (status === 'All' && !tempFilter)
//                     ? 'text-blue-600' 
//                     : 'text-gray-700'
//                 }`}>
//                   {status}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
          
//           <View className="flex-row space-x-3 mt-6">
//             <TouchableOpacity
//               className="flex-1 bg-gray-100 p-3 rounded-lg"
//               onPress={onClose}
//             >
//               <Text className="text-center font-medium text-gray-700">Cancel</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               className="flex-1 bg-blue-500 p-3 rounded-lg"
//               onPress={() => {
//                 onApplyFilter(tempFilter);
//                 onClose();
//               }}
//             >
//               <Text className="text-center font-medium text-white">Apply Filter</Text>
//             </TouchableOpacity>
//           </View>
//         </Animated.View>
//       </View>
//     </Modal>
//   );
// };

// // Main Activity Screen Component
// const ActivityScreen = () => {
//   const [expandedItems, setExpandedItems] = useState({ '1': true });
//   const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
//   const [filterStatus, setFilterStatus] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFilterModal, setShowFilterModal] = useState(false);

//   const toggleExpand = useCallback((id) => {
//     setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
//   }, []);

//   const handleSort = useCallback((key) => {
//     setSortConfig(prev => ({
//       key,
//       direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
//     }));
//   }, []);

//   const handleRefresh = useCallback(() => {
//     setIsLoading(true);
//     setTimeout(() => setIsLoading(false), 1500);
//   }, []);

//   const sortedAndFilteredActivities = useMemo(() => {
//     let result = [...activities];
    
//     // Apply search filter
//     if (searchQuery.trim()) {
//       result = result.filter(item => 
//         item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.actNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.assignedTo.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
    
//     // Apply status filter
//     if (filterStatus) {
//       result = result.filter(item => item.status === filterStatus);
//     }
    
//     // Apply sorting
//     return result.sort((a, b) => {
//       const aValue = a[sortConfig.key] || '';
//       const bValue = b[sortConfig.key] || '';
//       if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
//       if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
//       return 0;
//     });
//   }, [sortConfig, filterStatus, searchQuery]);

//   if (isLoading) {
//     return (
//       <MainLayout title="Activity">
//         <View className="flex-1 justify-center items-center bg-gray-50">
//           <View className="bg-white p-6 rounded-2xl shadow-md items-center">
//             <ActivityIndicator size="large" color="#2563eb" />
//             <Text className="mt-3 text-base font-medium text-gray-700">Loading activities...</Text>
//           </View>
//         </View>
//       </MainLayout>
//     );
//   }

//   return (
//     <MainLayout title="Activity">
//       <View className="flex-1 bg-gray-50">
//         {/* Header with subtle gradient */}
//         <LinearGradient 
//           colors={['#eff6ff', '#dbeafe']} 
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//           className="px-4 pt-4 pb-6"
//         >
//           <View className="flex-row justify-between items-center mb-4">
//             <View>
//               <Text className="text-xl font-semibold text-gray-900">Project Activities</Text>
//               <Text className="text-xs text-gray-600 mt-1">
//                 {sortedAndFilteredActivities.length} activities • {filterStatus || 'All statuses'}
//               </Text>
//             </View>
//             <View className="flex-row space-x-2">
//               <TouchableOpacity
//                 className="p-2 bg-blue-50 rounded-md"
//                 onPress={handleRefresh}
//               >
//                 <Icon name="refresh" size={18} color="#2563eb" />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 className="p-2 bg-blue-50 rounded-md"
//                 onPress={() => console.log('Add activity')}
//               >
//                 <Icon name="plus" size={18} color="#2563eb" />
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Search Bar */}
//           <View className="bg-white rounded-lg px-4 py-2 mb-4 shadow-sm">
//             <View className="flex-row items-center">
//               <Icon name="magnify" size={18} color="#6b7280" style={{ marginRight: 8 }} />
//               <TextInput
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//                 placeholder="Search activities, IDs, or assignees..."
//                 placeholderTextColor="#9ca3af"
//                 className="flex-1 text-gray-700 text-sm"
//               />
//               {searchQuery.length > 0 && (
//                 <TouchableOpacity onPress={() => setSearchQuery('')}>
//                   <Icon name="close-circle" size={18} color="#9ca3af" />
//                 </TouchableOpacity>
//               )}
//             </View>
//           </View>

//           {/* Filter and Sort Controls */}
//           <View className="flex-row justify-between">
//             <TouchableOpacity
//               className="flex-row items-center bg-blue-50 px-3 py-2 rounded-md"
//               onPress={() => setShowFilterModal(true)}
//             >
//               <Icon name="filter-outline" size={16} color="#2563eb" />
//               <Text className="text-blue-700 font-medium ml-2 text-sm">Filter</Text>
//               {filterStatus && (
//                 <View className="ml-2 bg-blue-100 px-2 py-0.5 rounded-md">
//                   <Text className="text-xs text-blue-700">{filterStatus}</Text>
//                 </View>
//               )}
//             </TouchableOpacity>

//             <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
//               {[
//                 { key: 'name', label: 'Name' },
//                 { key: 'progress', label: 'Progress' },
//                 { key: 'status', label: 'Status' },
//                 { key: 'priority', label: 'Priority' }
//               ].map(({ key, label }) => (
//                 <TouchableOpacity
//                   key={key}
//                   onPress={() => handleSort(key)}
//                   className={`flex-row items-center px-3 py-2 rounded-md mr-2 ${
//                     sortConfig.key === key ? 'bg-blue-100' : 'bg-blue-50'
//                   }`}
//                 >
//                   <Text className="text-blue-700 font-medium text-sm">{label}</Text>
//                   {sortConfig.key === key && (
//                     <Icon
//                       name={sortConfig.direction === 'asc' ? 'arrow-up' : 'arrow-down'}
//                       size={14}
//                       color="#2563eb"
//                       style={{ marginLeft: 4 }}
//                     />
//                   )}
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </View>
//         </LinearGradient>

//         {/* Activities List */}
//         <ScrollView 
//           contentContainerStyle={{ padding: 16 }}
//           showsVerticalScrollIndicator={false}
//         >
//           {sortedAndFilteredActivities.length > 0 ? (
//             sortedAndFilteredActivities.map((item, index) => (
//               <ActivityCard
//                 key={item.id}
//                 item={item}
//                 level={0}
//                 toggleExpand={toggleExpand}
//                 isExpanded={expandedItems[item.id]}
//               />
//             ))
//           ) : (
//             <Animated.View 
//               entering={FadeInUp} 
//               className="items-center justify-center py-12 bg-white rounded-2xl shadow-md"
//             >
//               <Icon name="folder-search-outline" size={48} color="#d1d5db" />
//               <Text className="text-base font-medium text-gray-600 mt-3">No activities found</Text>
//               <Text className="text-xs text-gray-500 mt-2 text-center px-8">
//                 {searchQuery ? 
//                   'Try adjusting your search terms or filters' : 
//                   'Get started by creating your first activity'
//                 }
//               </Text>
//               <TouchableOpacity 
//                 className="bg-blue-500 px-6 py-2 rounded-md mt-4"
//                 onPress={() => console.log('Add first activity')}
//               >
//                 <Text className="text-white font-medium text-sm">Add Activity</Text>
//               </TouchableOpacity>
//             </Animated.View>
//           )}
//         </ScrollView>

//         {/* Filter Modal */}
//         <FilterModal
//           visible={showFilterModal}
//           onClose={() => setShowFilterModal(false)}
//           currentFilter={filterStatus}
//           onApplyFilter={setFilterStatus}
//         />
//       </View>
//     </MainLayout>
//   );
// };

// export default ActivityScreen;

import React, { useState, useCallback, useMemo } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions, 
  ActivityIndicator,
  TextInput,
  Modal
} from 'react-native';
import MainLayout from '../../../components/MainLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  FadeInDown, 
  FadeOut, 
  FadeInUp,
  SlideInRight
} from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;
const cardWidth = Math.min(screenWidth - 32, 600);

const activities = [
  {
    id: '1',
    name: 'Granite Horizon',
    actNo: 'GH101-WBS-00001',
    progress: 65,
    startDate: '2025-06-07',
    endDate: '2025-06-16',
    duration: 10,
    status: 'In Progress',
    priority: 'High',
    assignedTo: 'Sonalika, Alan David',
    description: 'Primary construction phase for the granite horizon development',
    tags: ['Construction', 'Phase 1'],
    budget: '$125,000',
    subActivities: [
      { 
        id: '101', 
        name: 'Site Survey', 
        actNo: '1080', 
        progress: 100, 
        startDate: '2025-06-07', 
        endDate: '2025-06-16', 
        duration: 10, 
        status: 'Completed', 
        priority: 'Medium',
        assignedTo: 'Sonalika, Alan David',
        description: 'Complete site survey and mapping',
        budget: '$15,000'
      },
      { 
        id: '102', 
        name: 'Soil Testing', 
        actNo: '1170', 
        progress: 80, 
        startDate: '2025-07-08', 
        endDate: '2025-07-22', 
        duration: 15, 
        status: 'In Progress', 
        priority: 'High',
        assignedTo: 'Sonalika, Mukesh Sinha',
        description: 'Comprehensive soil analysis and testing',
        budget: '$25,000'
      }
    ],
  },
  {
    id: '2',
    name: 'A Wing Construction',
    actNo: 'GH101-WBS-00002',
    progress: 30,
    startDate: '2025-07-23',
    endDate: '2025-08-01',
    duration: 10,
    status: 'Not Started',
    priority: 'Medium',
    assignedTo: 'Mukesh Sinha',
    description: 'Main building wing construction activities',
    tags: ['Building', 'Wing A'],
    budget: '$200,000',
    subActivities: [
      { 
        id: '201', 
        name: 'Site Preparation', 
        actNo: '1000', 
        progress: 30, 
        startDate: '2025-07-23', 
        endDate: '2025-08-01', 
        duration: 10, 
        status: 'Not Started', 
        priority: 'Medium',
        assignedTo: 'Mukesh Sinha',
        description: 'Site clearing and preparation work',
        budget: '$35,000'
      },
    ],
  },
];

// Circular Progress Component
const CircularProgress = ({ progress, size = 44, strokeWidth = 4 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getProgressColor = (progress) => {
    if (progress >= 80) return '#10b981';
    if (progress >= 50) return '#f59e0b';
    if (progress >= 20) return '#3b82f6';
    return '#ef4444';
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: '#f8fafc',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: strokeWidth,
        borderColor: '#e5e7eb'
      }}>
        <View style={{
          width: size - strokeWidth * 2,
          height: size - strokeWidth * 2,
          borderRadius: (size - strokeWidth * 2) / 2,
          backgroundColor: getProgressColor(progress) + '20',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{ 
            fontSize: 12, 
            fontWeight: '700', 
            color: getProgressColor(progress) 
          }}>
            {progress}%
          </Text>
        </View>
      </View>
    </View>
  );
};

// Status Indicator Component
const StatusIndicator = ({ status, priority }) => {
  const statusConfig = {
    'Not Started': { color: '#6b7280', bg: '#f3f4f6', icon: 'clock-outline' },
    'In Progress': { color: '#f59e0b', bg: '#fef3c7', icon: 'progress-clock' },
    'Completed': { color: '#10b981', bg: '#d1fae5', icon: 'check-circle' },
  };

  const priorityConfig = {
    'Low': { color: '#10b981' },
    'Medium': { color: '#f59e0b' },
    'High': { color: '#ef4444' },
    'Critical': { color: '#dc2626' },
  };

  const config = statusConfig[status] || statusConfig['Not Started'];
  const priorityStyle = priorityConfig[priority] || priorityConfig['Medium'];

  return (
    <View style={{ alignItems: 'flex-end', gap: 4 }}>
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        backgroundColor: config.bg 
      }}>
        <Icon name={config.icon} size={14} color={config.color} style={{ marginRight: 4 }} />
        <Text style={{ 
          fontSize: 12, 
          fontWeight: '600', 
          color: config.color 
        }}>
          {status}
        </Text>
      </View>
      <View style={{ 
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        backgroundColor: priorityStyle.color + '10'
      }}>
        <Text style={{ 
          fontSize: 11, 
          fontWeight: '600', 
          color: priorityStyle.color 
        }}>
          {priority}
        </Text>
      </View>
    </View>
  );
};

// Activity Card Component
const ActivityCard = ({ item, level = 0, toggleExpand, isExpanded }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Animated.View entering={FadeInDown.delay(level * 100)}>
      <TouchableOpacity
        onPress={() => toggleExpand(item.id)}
        style={{
          borderRadius: 20,
          backgroundColor: level === 0 ? '#ffffff' : '#f8fafc',
          marginBottom: 16,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: level === 0 ? 0.1 : 0.05,
          shadowRadius: level === 0 ? 8 : 4,
          elevation: level === 0 ? 4 : 2,
        }}
      >
        {/* Header */}
        <LinearGradient
          colors={level === 0 ? ['#3b82f6', '#2563eb'] : ['#6b7280', '#4b5563']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ padding: 20 }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <Icon
                name={isExpanded ? 'chevron-down' : 'chevron-right'}
                size={24}
                color="#ffffff"
                style={{ marginRight: 12 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ 
                  fontSize: 18, 
                  fontWeight: '700', 
                  color: '#ffffff',
                  marginBottom: 4
                }}>
                  {item.name}
                </Text>
                <Text style={{ 
                  fontSize: 13, 
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: 8
                }}>
                  {item.actNo}
                </Text>
                {item.tags && (
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 4 }}>
                    {item.tags.map((tag, index) => (
                      <View key={index} style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 12
                      }}>
                        <Text style={{ 
                          fontSize: 11, 
                          color: '#ffffff',
                          fontWeight: '500'
                        }}>
                          {tag}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </View>
            <CircularProgress progress={item.progress} size={50} strokeWidth={5} />
          </View>
        </LinearGradient>

        {/* Content */}
        <View style={{ padding: 20, gap: 16 }}>
          {/* Key Info */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={{ fontSize: 12, color: '#6b7280' }}>Duration</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="calendar-range" size={16} color="#6b7280" />
                <Text style={{ 
                  fontSize: 14, 
                  fontWeight: '600', 
                  color: '#374151',
                  marginLeft: 8
                }}>
                  {item.duration} days
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={{ fontSize: 12, color: '#6b7280' }}>Budget</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="currency-usd" size={16} color="#6b7280" />
                <Text style={{ 
                  fontSize: 14, 
                  fontWeight: '600', 
                  color: '#374151',
                  marginLeft: 8
                }}>
                  {item.budget || 'N/A'}
                </Text>
              </View>
            </View>
            <StatusIndicator status={item.status} priority={item.priority} />
          </View>

          {/* Dates */}
          <View style={{ 
            backgroundColor: '#f8fafc', 
            borderRadius: 16, 
            padding: 16,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <View style={{ gap: 4 }}>
              <Text style={{ fontSize: 12, color: '#6b7280' }}>Start Date</Text>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>
                {item.startDate}
              </Text>
            </View>
            <View style={{ alignItems: 'flex-end', gap: 4 }}>
              <Text style={{ fontSize: 12, color: '#6b7280' }}>End Date</Text>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>
                {item.endDate}
              </Text>
            </View>
          </View>

          {/* Assigned To */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="account-group" size={16} color="#6b7280" />
            <Text style={{ 
              fontSize: 14, 
              color: '#6b7280',
              marginLeft: 8
            }}>
              Assigned to:{' '}
            </Text>
            <Text style={{ 
              fontSize: 14, 
              fontWeight: '600', 
              color: '#374151'
            }}>
              {item.assignedTo}
            </Text>
          </View>

          {/* Description */}
          {item.description && (
            <View style={{ 
              backgroundColor: '#eff6ff', 
              borderRadius: 16, 
              padding: 16
            }}>
              <Text style={{ 
                fontSize: 14, 
                color: '#374151',
                lineHeight: 20
              }}>
                {item.description}
              </Text>
            </View>
          )}

          {/* Action Buttons */}
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'flex-end', 
            gap: 12,
            paddingTop: 16,
            borderTopWidth: 1,
            borderTopColor: '#f3f4f6'
          }}>
            <TouchableOpacity
              style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: '#eff6ff',
                borderRadius: 12
              }}
              onPress={() => setShowDetails(!showDetails)}
            >
              <Icon name="information-outline" size={16} color="#2563eb" />
              <Text style={{ 
                color: '#2563eb', 
                fontWeight: '600',
                marginLeft: 8
              }}>
                Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: '#ecfdf5',
                borderRadius: 12
              }}
              onPress={() => console.log('Edit', item.id)}
            >
              <Icon name="pencil-outline" size={16} color="#059669" />
              <Text style={{ 
                color: '#059669', 
                fontWeight: '600',
                marginLeft: 8
              }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>

          {/* Expanded Details */}
          {showDetails && (
            <Animated.View entering={FadeInUp} style={{ 
              backgroundColor: '#f8fafc', 
              borderRadius: 16, 
              padding: 16,
              marginTop: 8
            }}>
              <Text style={{ 
                fontSize: 14, 
                fontWeight: '600', 
                color: '#374151',
                marginBottom: 8
              }}>
                Additional Details
              </Text>
              <View style={{ gap: 4 }}>
                <Text style={{ fontSize: 12, color: '#6b7280' }}>
                  Activity ID: {item.id}
                </Text>
                <Text style={{ fontSize: 12, color: '#6b7280' }}>
                  Priority Level: {item.priority}
                </Text>
                <Text style={{ fontSize: 12, color: '#6b7280' }}>
                  Progress: {item.progress}% Complete
                </Text>
              </View>
            </Animated.View>
          )}
        </View>
      </TouchableOpacity>

      {/* Sub-activities */}
      {isExpanded && item.subActivities && item.subActivities.length > 0 && (
        <Animated.View entering={SlideInRight} style={{ marginLeft: 24, marginTop: -8 }}>
          {item.subActivities.map((subItem) => (
            <ActivityCard
              key={subItem.id}
              item={subItem}
              level={level + 1}
              toggleExpand={() => {}}
              isExpanded={false}
            />
          ))}
        </Animated.View>
      )}
    </Animated.View>
  );
};

// Filter Modal Component
const FilterModal = ({ visible, onClose, currentFilter, onApplyFilter }) => {
  const [tempFilter, setTempFilter] = useState(currentFilter);

  const filters = ['All', 'Not Started', 'In Progress', 'Completed'];

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }}>
        <Animated.View entering={FadeInUp} style={{ 
          backgroundColor: '#ffffff', 
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          padding: 24
        }}>
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 24
          }}>
            <Text style={{ 
              fontSize: 20, 
              fontWeight: '700', 
              color: '#1f2937' 
            }}>
              Filter Activities
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color="#6b7280" />
            </TouchableOpacity>
          </View>
          
          <View style={{ gap: 12 }}>
            <Text style={{ 
              fontSize: 16, 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              Status
            </Text>
            {filters.map((status) => (
              <TouchableOpacity
                key={status}
                style={{
                  padding: 16,
                  borderRadius: 16,
                  borderWidth: 2,
                  borderColor: (tempFilter === status || (status === 'All' && !tempFilter)) 
                    ? '#3b82f6' 
                    : '#e5e7eb',
                  backgroundColor: (tempFilter === status || (status === 'All' && !tempFilter)) 
                    ? '#eff6ff' 
                    : '#ffffff'
                }}
                onPress={() => setTempFilter(status === 'All' ? null : status)}
              >
                <Text style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: (tempFilter === status || (status === 'All' && !tempFilter))
                    ? '#3b82f6'
                    : '#374151'
                }}>
                  {status}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <View style={{ 
            flexDirection: 'row', 
            gap: 12, 
            marginTop: 24 
          }}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#f3f4f6',
                padding: 16,
                borderRadius: 16,
                alignItems: 'center'
              }}
              onPress={onClose}
            >
              <Text style={{ 
                fontSize: 14, 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#3b82f6',
                padding: 16,
                borderRadius: 16,
                alignItems: 'center'
              }}
              onPress={() => {
                onApplyFilter(tempFilter);
                onClose();
              }}
            >
              <Text style={{ 
                fontSize: 14, 
                fontWeight: '600', 
                color: '#ffffff' 
              }}>
                Apply Filter
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

// Main Activity Screen Component
const ActivityScreen = () => {
  const [expandedItems, setExpandedItems] = useState({ '1': true });
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [filterStatus, setFilterStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);

  const toggleExpand = useCallback((id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const handleSort = useCallback((key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  }, []);

  const handleRefresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const sortedAndFilteredActivities = useMemo(() => {
    let result = [...activities];
    
    // Apply search filter
    if (searchQuery.trim()) {
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.actNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.assignedTo.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply status filter
    if (filterStatus) {
      result = result.filter(item => item.status === filterStatus);
    }
    
    // Apply sorting
    return result.sort((a, b) => {
      const aValue = a[sortConfig.key] || '';
      const bValue = b[sortConfig.key] || '';
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [sortConfig, filterStatus, searchQuery]);

  if (isLoading) {
    return (
      <MainLayout title="Activity">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc' }}>
          <View style={{ 
            backgroundColor: '#ffffff', 
            padding: 32, 
            borderRadius: 24,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4
          }}>
            <ActivityIndicator size="large" color="#3b82f6" />
            <Text style={{ 
              marginTop: 16, 
              fontSize: 16, 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              Loading activities...
            </Text>
            <Text style={{ 
              marginTop: 8, 
              fontSize: 14, 
              color: '#6b7280' 
            }}>
              Please wait while we fetch your data
            </Text>
          </View>
        </View>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Activity">
      <View style={{ flex: 1, backgroundColor: '#f8fafc' }}>
        {/* Header */}
        <LinearGradient 
          colors={['#3b82f6', '#2563eb', '#1e40af']} 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ padding: 20 }}
        >
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 20
          }}>
            <View>
              <Text style={{ 
                fontSize: 24, 
                fontWeight: '700', 
                color: '#ffffff' 
              }}>
                Project Activities
              </Text>
              <Text style={{ 
                fontSize: 14, 
                color: 'rgba(255, 255, 255, 0.8)',
                marginTop: 4
              }}>
                {sortedAndFilteredActivities.length} activities • {filterStatus || 'All statuses'}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TouchableOpacity
                style={{ 
                  padding: 12, 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                  borderRadius: 16 
                }}
                onPress={handleRefresh}
              >
                <Icon name="refresh" size={20} color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ 
                  padding: 12, 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                  borderRadius: 16 
                }}
                onPress={() => console.log('Add activity')}
              >
                <Icon name="plus" size={20} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Bar */}
          <View style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: 16, 
            padding: 16,
            marginBottom: 16
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="magnify" size={20} color="#ffffff" style={{ marginRight: 12 }} />
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search activities, IDs, or assignees..."
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                style={{ 
                  flex: 1, 
                  color: '#ffffff', 
                  fontSize: 16 
                }}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setSearchQuery('')}>
                  <Icon name="close-circle" size={20} color="rgba(255, 255, 255, 0.6)" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Filter and Sort Controls */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 16
              }}
              onPress={() => setShowFilterModal(true)}
            >
              <Icon name="filter-outline" size={16} color="#ffffff" />
              <Text style={{ 
                color: '#ffffff', 
                fontWeight: '600',
                marginLeft: 8
              }}>
                Filter
              </Text>
              {filterStatus && (
                <View style={{ 
                  marginLeft: 8, 
                  backgroundColor: 'rgba(255, 255, 255, 0.3)', 
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 12
                }}>
                  <Text style={{ 
                    fontSize: 12, 
                    color: '#ffffff' 
                  }}>
                    {filterStatus}
                  </Text>
                </View>
              )}
            </TouchableOpacity>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
              {[
                { key: 'name', label: 'Name' },
                { key: 'progress', label: 'Progress' },
                { key: 'status', label: 'Status' },
                { key: 'priority', label: 'Priority' }
              ].map(({ key, label }) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => handleSort(key)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 16,
                    marginRight: 8,
                    backgroundColor: sortConfig.key === key 
                      ? 'rgba(255, 255, 255, 0.3)' 
                      : 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <Text style={{ 
                    fontSize: 12, 
                    color: '#ffffff', 
                    fontWeight: '600' 
                  }}>
                    {label}
                  </Text>
                  {sortConfig.key === key && (
                    <Icon
                      name={sortConfig.direction === 'asc' ? 'arrow-up' : 'arrow-down'}
                      size={14}
                      color="#ffffff"
                      style={{ marginLeft: 4 }}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </LinearGradient>

        {/* Activities List */}
        <ScrollView 
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
        >
          {sortedAndFilteredActivities.length > 0 ? (
            sortedAndFilteredActivities.map((item) => (
              <ActivityCard
                key={item.id}
                item={item}
                level={0}
                toggleExpand={toggleExpand}
                isExpanded={expandedItems[item.id]}
              />
            ))
          ) : (
            <Animated.View 
              entering={FadeInUp}
              style={{ 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: 40,
                backgroundColor: '#ffffff',
                borderRadius: 24,
                margin: 16
              }}
            >
              <Icon name="folder-search-outline" size={64} color="#d1d5db" />
              <Text style={{ 
                fontSize: 18, 
                fontWeight: '600', 
                color: '#6b7280',
                marginTop: 16
              }}>
                No activities found
              </Text>
              <Text style={{ 
                fontSize: 14, 
                color: '#9ca3af',
                marginTop: 8,
                textAlign: 'center'
              }}>
                {searchQuery ? 
                  'Try adjusting your search terms or filters' : 
                  'Get started by creating your first activity'
                }
              </Text>
              <TouchableOpacity 
                style={{ 
                  backgroundColor: '#3b82f6', 
                  paddingHorizontal: 24,
                  paddingVertical: 12,
                  borderRadius: 16,
                  marginTop: 16
                }}
                onPress={() => console.log('Add first activity')}
              >
                <Text style={{ 
                  color: '#ffffff', 
                  fontWeight: '600' 
                }}>
                  Add Activity
                </Text>
              </TouchableOpacity>
            </Animated.View>
          )}
        </ScrollView>

        {/* Filter Modal */}
        <FilterModal
          visible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          currentFilter={filterStatus}
          onApplyFilter={setFilterStatus}
        />
      </View>
    </MainLayout>
  );
};

export default ActivityScreen;