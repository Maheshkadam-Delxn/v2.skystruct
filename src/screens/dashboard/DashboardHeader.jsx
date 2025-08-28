// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

// const filterOptions = [
//   'Project Resources',
//   'Project Planning',
//   'Payments',
//   'Work Order',
//   'Inventory',
//   'Approvals',
//   'Reports',
// ];

// export default function DashboardHeader() {
//   const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);

//   return (
//     <View className="bg-blue-100 px-6 pb-6 pt-14 shadow-sm">
     

//       {/* Filter Tabs with Project Counts */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
//         <View className="flex-row">
//           {filterOptions.map((filter, index) => (
//             <TouchableOpacity
//               key={filter}
//               onPress={() => setSelectedFilter(filter)}
//               className={`mr-3 flex-row items-center rounded-full px-4 py-2 ${
//                 selectedFilter === filter ? 'bg-blue-600' : 'bg-gray-100'
//               }`}
//             >
//               <Text
//                 className={`font-medium ${
//                   selectedFilter === filter ? 'text-white' : 'text-gray-600'
//                 }`}
//               >
//                 {filter}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }