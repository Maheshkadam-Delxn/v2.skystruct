// import React from 'react';
// import { View, Text, ScrollView, StatusBar } from 'react-native';
// import Sidebar from '../screens/components/Sidebar'; // Adjust the import path as necessary

// export default function OrganizationEmailScreen() {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
//       <View className="flex-1 flex-row bg-gray-50">
//         <Sidebar />
//         <ScrollView className="flex-1 px-6 py-4">
//           <Text className="text-2xl font-bold text-gray-800 mb-4">Organization Email</Text>
//           <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
//             <Text className="text-lg font-semibold text-gray-800 mb-4">Email Settings</Text>
//             <Text className="text-sm text-gray-600">Manage organization email settings and communications.</Text>
//             {/* TODO: Add email configuration UI */}
//           </View>
//         </ScrollView>
//       </View>
//     </>
//   );
// }
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MainLayout from '../screens/components/MainLayout'; // Adjust the import path as necessary

export default function OrganizationEmailScreen() {
  return (
    <MainLayout title="Organization Email">
      <ScrollView className="flex-1 px-6 py-4">
        <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Email Settings</Text>
          <Text className="text-sm text-gray-600">Manage organization email settings and communications.</Text>
          {/* TODO: Add email configuration UI */}
        </View>
      </ScrollView>
    </MainLayout>
  );
}