// import React from 'react';
// import { View, Text, ScrollView, StatusBar } from 'react-native';
// import Sidebar from '../screens/components/Sidebar'; // Adjust the import path as necessary

// export default function ProjectOverviewScreen() {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
//       <View className="flex-1 flex-row bg-gray-50">
//         <Sidebar />
//         <ScrollView className="flex-1 px-6 py-4">
//           <Text className="text-2xl font-bold text-gray-800 mb-4">Project Overview</Text>
//           <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
//             <Text className="text-lg font-semibold text-gray-800 mb-4">Overview</Text>
//             <Text className="text-sm text-gray-600">This screen displays project timeline, milestones, and progress details.</Text>
//             {/* TODO: Add project overview content */}
//           </View>
//         </ScrollView>
//       </View>
//     </>
//   );
// }
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MainLayout from '../screens/components/MainLayout'; // Adjust the import path as necessary   

export default function ProjectOverviewScreen() {
  return (
    <MainLayout title="Project Overview">
      <ScrollView className="flex-1 px-6 py-4">
        <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Overview</Text>
          <Text className="text-sm text-gray-600">This screen displays project timeline, milestones, and progress details.</Text>
          {/* TODO: Add project overview content */}
        </View>
      </ScrollView>
    </MainLayout>
  );
}