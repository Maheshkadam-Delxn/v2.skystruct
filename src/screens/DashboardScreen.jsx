// // import React, { useState } from 'react';
// // import { View, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
// // import { Feather } from '@expo/vector-icons';
// // import { useRoute, useNavigation } from '@react-navigation/native';
// // import Sidebar from '../screens/components/Sidebar'; // Adjust the import path as necessary

// // export default function DashboardScreen() {
// //   const route = useRoute();
// //   const navigation = useNavigation();
// //   const { projectId } = route.params;
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   // Mock project data (replace with API call or data fetching logic)
// //   const projects = [
// //     {
// //       id: 1,
// //       name: 'Acura Heights Tower',
// //       progress: '64%',
// //       duration: '18 months',
// //       amount: '$2.5M',
// //       status: 'Under Construction'
// //     },
// //     {
// //       id: 2,
// //       name: 'Commercial Residences',
// //       progress: '89%',
// //       duration: '14 months',
// //       amount: '$1.8M',
// //       status: 'Under Construction'
// //     },
// //     {
// //       id: 3,
// //       name: 'Corporate Landmark Project',
// //       progress: '52%',
// //       duration: '24 months',
// //       amount: '$3.2M',
// //       status: 'In Design'
// //     },
// //   ];

// //   const project = projects.find(p => p.id === projectId);

// //   return (
// //     <>
// //       <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
// //       <View className="flex-1 flex-row bg-gray-50">
// //         {/* Sidebar (conditionally rendered) */}
// //         {isSidebarOpen && <Sidebar />}

// //         {/* Main Content */}
// //         <View className="flex-1">
// //           {/* Header */}
// //           <View className="bg-white px-6 py-4 flex-row justify-between items-center shadow-sm">
// //             <View className="flex-row items-center">
// //               <TouchableOpacity
// //                 className="mr-4"
// //                 onPress={() => setIsSidebarOpen(!isSidebarOpen)}
// //               >
// //                 <Feather name="menu" size={24} color="#2563eb" />
// //               </TouchableOpacity>
// //               <Text className="text-xl font-bold text-gray-800">
// //                 {project ? project.name : 'Project Not Found'}
// //               </Text>
// //             </View>
// //             <TouchableOpacity
// //               className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center"
// //               onPress={() => navigation.navigate('Profile')}
// //             >
// //               <Feather name="user" size={20} color="#2563eb" />
// //             </TouchableOpacity>
// //           </View>

// //           {/* Project Details */}
// //           <ScrollView className="flex-1 px-6 py-4">
// //             {project ? (
// //               <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
// //                 <Text className="text-lg font-semibold text-gray-800 mb-4">Project Details</Text>
// //                 <Text className="text-sm text-gray-600 mb-1">Status: {project.status}</Text>
// //                 <Text className="text-sm text-gray-600 mb-1">Duration: {project.duration}</Text>
// //                 <Text className="text-sm text-gray-600 mb-1">Amount: {project.amount}</Text>
// //                 <Text className="text-sm text-gray-600">Progress: {project.progress}</Text>
// //               </View>
// //             ) : (
// //               <Text className="text-sm text-gray-600">No project data available.</Text>
// //             )}
// //           </ScrollView>
// //         </View>
// //       </View>
// //     </>
// //   );
// // }
// import React from 'react';
// import { View, Text, ScrollView } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import MainLayout from '../screens/components/MainLayout'; // Adjust the import path as necessary

// export default function DashboardScreen() {
//   const route = useRoute();
//   const { projectId } = route.params;

//   // Mock project data (replace with API call or data fetching logic)
//   const projects = [
//     {
//       id: 1,
//       name: 'Acura Heights Tower',
//       progress: '64%',
//       duration: '18 months',
//       amount: '$2.5M',
//       status: 'Under Construction'
//     },
//     {
//       id: 2,
//       name: 'Commercial Residences',
//       progress: '89%',
//       duration: '14 months',
//       amount: '$1.8M',
//       status: 'Under Construction'
//     },
//     {
//       id: 3,
//       name: 'Corporate Landmark Project',
//       progress: '52%',
//       duration: '24 months',
//       amount: '$3.2M',
//       status: 'In Design'
//     },
//   ];

//   const project = projects.find(p => p.id === projectId);

//   return (
//     <MainLayout title={project ? project.name : 'Project Not Found'}>
//       <ScrollView className="flex-1 px-6 py-4">
//         {project ? (
//           <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
//             <Text className="text-lg font-semibold text-gray-800 mb-4">Project Details</Text>
//             <Text className="text-sm text-gray-600 mb-1">Status: {project.status}</Text>
//             <Text className="text-sm text-gray-600 mb-1">Duration: {project.duration}</Text>
//             <Text className="text-sm text-gray-600 mb-1">Amount: {project.amount}</Text>
//             <Text className="text-sm text-gray-600">Progress: {project.progress}</Text>
//           </View>
//         ) : (
//           <Text className="text-sm text-gray-600">No project data available.</Text>
//         )}
//       </ScrollView>
//     </MainLayout>
//   );
// }

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MainLayout from '../screens/components/MainLayout'; // Adjust the import path as necessary

export default function DashboardScreen() {
  const route = useRoute();
  const { projectId } = route.params || { projectId: 1 }; // Default to 1 if not provided

  // Mock project data (replace with API call or data fetching logic)
  const projects = [
    { id: 1, name: 'Acura Heights Tower', progress: '64%', duration: '18 months', amount: '$2.5M', status: 'Under Construction' },
    { id: 2, name: 'Commercial Residences', progress: '89%', duration: '14 months', amount: '$1.8M', status: 'Under Construction' },
    { id: 3, name: 'Corporate Landmark Project', progress: '52%', duration: '24 months', amount: '$3.2M', status: 'In Design' },
  ];

  const project = projects.find(p => p.id === projectId);

  return (
    <MainLayout title={project ? project.name : 'Project Dashboard'}>
      <ScrollView className="flex-1 px-6 py-4">
        {project ? (
          <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Project Details</Text>
            <Text className="text-sm text-gray-600 mb-1">Status: {project.status}</Text>
            <Text className="text-sm text-gray-600 mb-1">Duration: {project.duration}</Text>
            <Text className="text-sm text-gray-600 mb-1">Amount: {project.amount}</Text>
            <Text className="text-sm text-gray-600">Progress: {project.progress}</Text>
          </View>
        ) : (
          <Text className="text-sm text-gray-600">Project not found.</Text>
        )}
      </ScrollView>
    </MainLayout>
  );
}