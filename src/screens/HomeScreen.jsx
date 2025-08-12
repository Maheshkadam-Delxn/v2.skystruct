import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-yellow-100 p-6">
      <Text className="text-4xl font-bold text-yellow-800 mb-4">
        🏗️ Construction Dashboard
      </Text>

      <View className="bg-white p-4 rounded-xl shadow-md mb-4">
        <Text className="text-lg font-semibold text-gray-800">
          Current Project:
        </Text>
        <Text className="text-base text-gray-600">
          Downtown Commercial Complex
        </Text>
      </View>

      <View className="bg-white p-4 rounded-xl shadow-md mb-4">
        <Text className="text-lg font-semibold text-gray-800">
          Workers on Site:
        </Text>
        <Text className="text-base text-gray-600">54</Text>
      </View>

      <View className="bg-white p-4 rounded-xl shadow-md mb-4">
        <Text className="text-lg font-semibold text-gray-800">
          Today Tasks:
        </Text>
        <Text className="text-base text-gray-600">
          - Pour concrete for foundation{'\n'}
          - Install scaffolding for Block B
        </Text>
      </View>
    </View>
  );
}

// 
// //
// import React from 'react';
// import { View, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Import navigation hook

// export default function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <View className="flex-1 bg-yellow-100 p-6">
//       <Text className="text-4xl font-bold text-yellow-800 mb-4">
//         🏗️ Construction Dashboard
//       </Text>

//       <View className="bg-white p-4 rounded-xl shadow-md mb-4">
//         <Text className="text-lg font-semibold text-gray-800">
//           Current Project:
//         </Text>
//         <Text className="text-base text-gray-600">
//           Downtown Commercial Complex
//         </Text>
//       </View>

//       <View className="bg-white p-4 rounded-xl shadow-md mb-4">
//         <Text className="text-lg font-semibold text-gray-800">
//           Workers on Site:
//         </Text>
//         <Text className="text-base text-gray-600">54</Text>
//       </View>

//       <View className="bg-white p-4 rounded-xl shadow-md mb-4">
//         <Text className="text-lg font-semibold text-gray-800">
//           Today Tasks:
//         </Text>
//         <Text className="text-base text-gray-600">
//           - Pour concrete for foundation{'\n'}
//           - Install scaffolding for Block B
//         </Text>
//       </View>
//     </View>
//   );
// }