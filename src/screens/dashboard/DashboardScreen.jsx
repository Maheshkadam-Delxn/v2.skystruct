import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MainLayout from '../components/MainLayout';
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

// Filter options for header
const filterOptions = [
  'Project Resources',
  'Project Planning',
  'Payments',
  'Work Order',
  'Inventory',
  'Approvals',
  'Reports',
];

// Dropdown menu items structure
const dropdownItems = {
  'Project Resources': ['Bill of Quantity', 'Drawing', 'Documents'],
  'Project Planning': ['Activity', 'Project Planner', 'Resource'],
  'Payments': ['Indent', 'Purchase Order', 'Good Receive Note', 'Bill Payment', 'Expense'],
  'Work Order': ['Work Order', 'Advance Payment', 'Bill', 'Bill Payment'],
  'Inventory': [],
  'Approvals': ['RFI', 'Snagging Report', 'Inspection', 'Submittals'],
  'Reports': ['Daily Progress', 'Activity Timelines', 'Material Consumption'],
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
  const [selectedFilter, setSelectedFilter] = useState(null); // Changed to null initially
  const [selectedSubItem, setSelectedSubItem] = useState(null);

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

  // Handle filter selection
  const handleFilterSelect = (filter) => {
    // If clicking the same filter, deselect it
    if (selectedFilter === filter) {
      setSelectedFilter(null);
      setSelectedSubItem(null);
    } else {
      setSelectedFilter(filter);
      setSelectedSubItem(null);
    }
  };

  // Handle sub-item selection
  const handleSubItemSelect = (subItem) => {
    setSelectedSubItem(subItem);
  };

  return (
    <MainLayout title={project ? project.name : 'Project Dashboard'}>
      {/* Dashboard Header */}
      <View className="bg-blue-100 px-6 pb-6 pt-14 shadow-sm">
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          className="mb-4"
        >
          <View className="flex-row">
            {filterOptions.map((filter, index) => (
              <TouchableOpacity
                key={filter}
                onPress={() => handleFilterSelect(filter)}
                className={`mr-3 flex-row items-center rounded-full px-4 py-2 ${
                  selectedFilter === filter ? 'bg-blue-600' : 'bg-gray-100'
                }`}
              >
                <Text
                  className={`font-medium mr-2 ${
                    selectedFilter === filter ? 'text-white' : 'text-gray-600'
                  }`}
                >
                  {filter}
                </Text>
                {/* Dropdown icon - only show if the filter has sub-items */}
                {dropdownItems[filter] && dropdownItems[filter].length > 0 && (
                  <Text style={{ color: selectedFilter === filter ? 'white' : '#6B7280', fontSize: 12, marginLeft: 4 }}>
                    {selectedFilter === filter ? '▼' : ''}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        
        {/* Sub-items displayed only when a filter with sub-items is selected */}
        {selectedFilter && dropdownItems[selectedFilter] && dropdownItems[selectedFilter].length > 0 && (
          <View className="bg-blue-50 rounded-lg mt-2 border border-blue-200">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row py-3 px-2">
                {dropdownItems[selectedFilter].map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    className={`mx-2 px-4 py-2 rounded-full ${
                      selectedSubItem === item ? 'bg-blue-600' : 'bg-white'
                    }`}
                    onPress={() => handleSubItemSelect(item)}
                  >
                    <Text className={`font-medium ${
                      selectedSubItem === item ? 'text-white' : 'text-gray-700'
                    }`}>
                      {item}
                    </Text>
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
            {/* Show selected sub-item if any */}
            {selectedSubItem && (
              <View className="mb-6 bg-blue-50 p-4 rounded-lg">
                <Text className="text-lg font-semibold text-blue-800">
                  Selected: {selectedSubItem}
                </Text>
              </View>
            )}

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