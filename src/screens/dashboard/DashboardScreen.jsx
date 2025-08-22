
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
      <DashboardHeader />
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
              <View className="flex-row justify-start flex-wrap mt-8">
                {pieData.map((item, index) => (
                  <View
                    key={index}
                    className="flex-row items-center mx-4 mb-3 bg-gray-50 p-3 rounded-lg shadow-sm"
                  >
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