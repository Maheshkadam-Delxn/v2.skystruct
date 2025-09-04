import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import MainLayout from '../../../components/MainLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ActivityScreen() {
  const [expandedItems, setExpandedItems] = useState({
    '1': true, // Granite Horizon expanded by default
    '2': true   // A Wing expanded by default
  });
  
  const screenWidth = Dimensions.get('window').width;
  const tableTotalWidth = screenWidth * 2; // Wider table for all columns
  
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
      assignedTo: 'Sonalika,Alan David',
      subActivities: [
        { id: '101', name: 'survey', actNo: '1080', progress: 25, startDate: '2025-06-07', endDate: '2025-06-16', duration: 10, status: 'Not Started', assignedTo: 'Sonalika,Alan David' },
        { id: '102', name: 'TEST', actNo: '1170', progress: 25, startDate: '2025-07-08', endDate: '2025-07-22', duration: 15, status: 'Not Started', assignedTo: 'Sonalika,Mukesh Sinha' },
        { id: '103', name: 'Pre construction test', actNo: '1200', progress: 25, startDate: '2025-07-01', endDate: '2025-07-30', duration: 30, status: 'In Progress', assignedTo: 'Mukesh Sinha' },
        { id: '104', name: 'TEST', actNo: '1210', progress: 25, startDate: '2025-07-08', endDate: '2025-07-22', duration: 15, status: 'Not Started', assignedTo: 'Sonalika,Mukesh Sinha' },
        { id: '105', name: 'Land survey and soil investigation', actNo: '1220', progress: 25, startDate: '2025-08-27', endDate: '2025-09-05', duration: 10, status: 'Not Started', assignedTo: 'Mukesh Sinha' },
        { id: '106', name: 'brick wall', actNo: '1290', progress: 25, startDate: '2025-09-06', endDate: '2025-09-15', duration: 10, status: 'Not Started', assignedTo: 'Mukesh Sinha' },
        { id: '107', name: 'Pre construction test', actNo: '1300', progress: 25, startDate: '2025-07-01', endDate: '2025-07-30', duration: 30, status: 'Not Started', assignedTo: 'Mukesh Sinha' },
        { id: '108', name: 'survey', actNo: '1310', progress: 25, startDate: '2025-06-07', endDate: '2025-06-16', duration: 10, status: 'Not Started', assignedTo: 'Sonalika,Alan David' },
      ]
    },
    {
      id: '2',
      name: '~ A Wing',
      actNo: 'GH101-WBS-00002',
      progress: 25,
      startDate: '2025-07-23',
      endDate: '2025-08-01',
      duration: 10,
      status: 'In Progress',
      assignedTo: 'Mukesh Sinha',
      subActivities: [
        { id: '201', name: 'Land survey and soil investigation', actNo: '1000', progress: 25, startDate: '2025-07-23', endDate: '2025-08-01', duration: 10, status: 'In Progress', assignedTo: 'Mukesh Sinha' },
      ]
    },
  ];

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const StatusIndicator = ({ status }) => {
    let backgroundColor;
    switch(status) {
      case 'Not Started': backgroundColor = '#d1d5db'; break; // gray
      case 'In Progress': backgroundColor = '#f59e0b'; break; // amber
      case 'Completed': backgroundColor = '#10b981'; break; // green
      default: backgroundColor = '#d1d5db';
    }
    
    return (
      <View className="flex-row items-center justify-center">
        <View 
          className="w-3 h-3 rounded-full mr-1" 
          style={{ backgroundColor }}
        />
        <Text className="text-sm">{status}</Text>
      </View>
    );
  };

  const ActionIcons = ({ item }) => (
    <View className="flex-row justify-center items-center">
      {/* Edit icon with tooltip effect */}
      <TouchableOpacity className="mx-1 p-1 bg-blue-100 rounded-full">
        <Icon name="square-edit-outline" size={16} color="#2563eb" />
      </TouchableOpacity>
      
      {/* Copy/Duplicate icon */}
      <TouchableOpacity className="mx-1 p-1 bg-purple-100 rounded-full">
        <Icon name="layers" size={16} color="#7c3aed" />
      </TouchableOpacity>
      
      {/* Delete icon */}
      <TouchableOpacity className="mx-1 p-1 bg-red-100 rounded-full">
        <Icon name="trash-can-outline" size={16} color="#dc2626" />
      </TouchableOpacity>
      
      {/* View details/more options icon */}
      {/* <TouchableOpacity className="mx-1 p-1 bg-gray-100 rounded-full">
        <Icon name="dots-horizontal" size={16} color="#4b5563" />
      </TouchableOpacity> */}
    </View>
  );

  const ProgressBar = ({ progress }) => (
    <View className="flex-row items-center justify-center">
      <View className="w-full bg-gray-200 rounded-full h-2.5 mr-1">
        <View 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{width: `${progress}%`}}
        />
      </View>
      {/* <Text className="text-xs">{progress}%</Text> */}
    </View>
  );

  // Column widths adjusted to match the target image exactly
  const TableHeader = () => (
    <View className="flex-row bg-gray-200 p-2 border-b border-gray-300" style={{ width: tableTotalWidth }}>
      <View className="w-24"><Text className="text-sm font-bold text-center">Actions</Text></View>
      <View className="w-60"><Text className="text-sm font-bold">Name</Text></View>
      <View className="w-28"><Text className="text-sm font-bold">Act. No.</Text></View>
      <View className="w-24"><Text className="text-sm font-bold text-center">Progress</Text></View>
      <View className="w-28"><Text className="text-sm font-bold">Start Date</Text></View>
      <View className="w-28"><Text className="text-sm font-bold">End Date</Text></View>
      <View className="w-20"><Text className="text-sm font-bold text-center">Duration</Text></View>
      <View className="w-36"><Text className="text-sm font-bold text-center">Activity Status</Text></View>
      <View className="w-52"><Text className="text-sm font-bold">Assign To</Text></View>
    </View>
  );

  const MainActivityRow = ({ item, level = 0 }) => (
    <TouchableOpacity 
      onPress={() => toggleExpand(item.id)}
      className="flex-row p-2 border-b border-gray-200"
      style={[{ width: tableTotalWidth }, level === 0 ? { backgroundColor: '#e0f2fe' } : { backgroundColor: '#f0f9ff' }]}
    >
      <View className="w-24"><ActionIcons item={item} /></View>
      <View className="w-60 flex-row items-center" style={{ paddingLeft: level * 20 }}>
        <Icon 
          name={expandedItems[item.id] ? 'chevron-down' : 'chevron-right'} 
          size={20} 
          color="#4b5563" 
          style={{marginRight: 4}}
        />
        <Text className="text-sm font-medium">{item.name}</Text>
      </View>
      <View className="w-28"><Text className="text-sm">{item.actNo}</Text></View>
      <View className="w-24"><ProgressBar progress={item.progress} /></View>
      <View className="w-28"><Text className="text-sm">{item.startDate}</Text></View>
      <View className="w-28"><Text className="text-sm">{item.endDate}</Text></View>
      <View className="w-20"><Text className="text-sm text-center">{item.duration}</Text></View>
      <View className="w-36"><StatusIndicator status={item.status} /></View>
      <View className="w-52"><Text className="text-sm">{item.assignedTo}</Text></View>
    </TouchableOpacity>
  );

  const SubActivityRow = ({ subItem, level = 1 }) => (
    <View 
      className="flex-row p-2 border-b border-gray-200"
      style={[{ width: tableTotalWidth }, level === 1 ? { backgroundColor: '#f9fafb' } : { backgroundColor: '#ffffff' }]}
    >
      <View className="w-24"><ActionIcons item={subItem} /></View>
      <View className="w-60" style={{ paddingLeft: level * 20 + 20 }}>
        <Text className="text-sm">{subItem.name}</Text>
      </View>
      <View className="w-28"><Text className="text-sm">{subItem.actNo}</Text></View>
      <View className="w-24"><ProgressBar progress={subItem.progress} /></View>
      <View className="w-28"><Text className="text-sm">{subItem.startDate}</Text></View>
      <View className="w-28"><Text className="text-sm">{subItem.endDate}</Text></View>
      <View className="w-20"><Text className="text-sm text-center">{subItem.duration}</Text></View>
      <View className="w-36"><StatusIndicator status={subItem.status} /></View>
      <View className="w-52"><Text className="text-sm">{subItem.assignedTo}</Text></View>
    </View>
  );

  return (
    <MainLayout title="Activity">
      <View className="flex-1 bg-white">
        {/* Header with title and buttons */}
        <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
          <Text className="text-xl font-bold text-gray-800">Activity</Text>
          <View className="flex-row">
            <TouchableOpacity className="p-2 mx-1 bg-gray-100 rounded-full">
              <Icon name="refresh" size={22} color="#4b5563" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 mx-1 bg-blue-100 rounded-full">
              <Icon name="plus" size={22} color="#2563eb" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 mx-1 bg-green-100 rounded-full">
              <Icon name="download" size={22} color="#16a34a" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 mx-1 bg-purple-100 rounded-full">
              <Icon name="filter" size={22} color="#7c3aed" />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Table content with horizontal scrolling */}
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View>
            <TableHeader />
            
            {/* Granite Horizon - Main Project */}
            <MainActivityRow item={activities[0]} level={0} />
            
            {/* Granite Horizon Sub-activities */}
            {expandedItems['1'] && activities[0].subActivities.map(subItem => (
              <SubActivityRow key={subItem.id} subItem={subItem} level={1}/>
            ))}
            
            {/* A Wing - Sub Project (indented under Granite Horizon) */}
            <MainActivityRow item={activities[1]} level={1} />
            
            {/* A Wing Sub-activities */}
            {expandedItems['2'] && activities[1].subActivities.map(subItem => (
              <SubActivityRow key={subItem.id} subItem={subItem} level={2} />
            ))}
          </View>
        </ScrollView>
      </View>
    </MainLayout>
  );
}