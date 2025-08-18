// // // import React from 'react';
// // // import { StatusBar } from 'react-native';
// // // import { NavigationContainer } from '@react-navigation/native';
// // // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // // import MyTabs from './src/navigation/TabNavigator';
// // // import SignInScreen from './src/auth/SignInScreen';
// // // import SignUpScreen from './src/auth/SignUpScreen';
// // // import OTPScreen from './src/auth/OTPScreen';
// // // import './global.css';

// // // const Stack = createNativeStackNavigator();

// // // export default function App() {
// // //   return (
// // //     <NavigationContainer>
// // //       <StatusBar barStyle="dark-content" backgroundColor="#fff" />
// // //       <Stack.Navigator 
// // //         initialRouteName="SignIn"
// // //         screenOptions={{ headerShown: false }}
// // //       >
// // //         <Stack.Screen name="SignIn" component={SignInScreen} />
// // //         <Stack.Screen name="SignUp" component={SignUpScreen} />
// // //         <Stack.Screen name="OTP" component={OTPScreen} />
// // //         <Stack.Screen 
// // //           name="Main" 
// // //           component={MyTabs}
// // //           options={{
// // //             gestureEnabled: false, // Prevent swipe back to auth
// // //           }}
// // //         />
// // //       </Stack.Navigator>
// // //     </NavigationContainer>
// // //   );
// // // }
// // import React from 'react';
// // import { StatusBar } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import MyTabs from './src/navigation/TabNavigator';
// // import SignInScreen from './src/auth/SignInScreen';
// // import SignUpScreen from './src/auth/SignUpScreen';
// // import OTPScreen from './src/auth/OTPScreen';
// // import DashboardScreen from './src/screens/DashboardScreen';
// // import AddNewProjectScreen from './src/screens/AddNewProjectScreen';
// // import './global.css';

// // const Stack = createNativeStackNavigator();

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <StatusBar barStyle="dark-content" backgroundColor="#fff" />
// //       <Stack.Navigator 
// //         initialRouteName="SignIn"
// //         screenOptions={{ headerShown: false }}
// //       >
// //         <Stack.Screen name="SignIn" component={SignInScreen} />
// //         <Stack.Screen name="SignUp" component={SignUpScreen} />
// //         <Stack.Screen name="OTP" component={OTPScreen} />
// //         <Stack.Screen 
// //           name="Main" 
// //           component={MyTabs}
// //           options={{
// //             gestureEnabled: false, // Prevent swipe back to auth
// //           }}
// //         />
// //         <Stack.Screen name="Dashboard" component={DashboardScreen} />
// //         <Stack.Screen name="AddNewProject" component={AddNewProjectScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }
// import React from 'react';
// import { StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MyTabs from './src/navigation/TabNavigator';
// import SignInScreen from './src/auth/SignInScreen';
// import SignUpScreen from './src/auth/SignUpScreen';
// import OTPScreen from './src/auth/OTPScreen';
// import DashboardScreen from './src/screens/DashboardScreen';
// import AddNewProjectScreen from './src/screens/AddNewProjectScreen';
// import ProjectOverviewScreen from './src/screens/ProjectOverviewScreen';
// import OrganizationEmailScreen from './src/screens/OrganizationEmailScreen';
// import UsersMembersScreen from './src/screens/UsersMembersScreen';
// import UsersVendorsScreen from './src/screens/UsersVendorsScreen';
// import SettingsPermissionScreen from './src/screens/SettingsPermissionScreen';
// import SettingsEventsScreen from './src/screens/SettingsEventsScreen';
// import SettingsReminderScreen from './src/screens/SettingsReminderScreen';
// import SettingsScheduleScreen from './src/screens/SettingsScheduleScreen';
// import MyProjectsScreen from './src/screens/MyProjectsScreen';
// import './global.css';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar barStyle="dark-content" backgroundColor="#fff" />
//       <Stack.Navigator 
//         initialRouteName="SignIn"
//         screenOptions={{ headerShown: false }}
//       >
//         <Stack.Screen name="SignIn" component={SignInScreen} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen name="OTP" component={OTPScreen} />
//         <Stack.Screen 
//           name="Main" 
//           component={MyTabs}
//           options={{
//             gestureEnabled: false, // Prevent swipe back to auth
//           }}
//         />
//         <Stack.Screen name="Dashboard" component={DashboardScreen} />
//         <Stack.Screen name="AddNewProject" component={AddNewProjectScreen} />
//         <Stack.Screen name="ProjectOverview" component={ProjectOverviewScreen} />
//         <Stack.Screen name="OrganizationEmail" component={OrganizationEmailScreen} />
//         <Stack.Screen name="UsersMembers" component={UsersMembersScreen} />
//         <Stack.Screen name="UsersVendors" component={UsersVendorsScreen} />
//         <Stack.Screen name="SettingsPermission" component={SettingsPermissionScreen} />
//         <Stack.Screen name="SettingsEvents" component={SettingsEventsScreen} />
//         <Stack.Screen name="SettingsReminder" component={SettingsReminderScreen} />
//         <Stack.Screen name="SettingsSchedule" component={SettingsScheduleScreen} />
//         <Stack.Screen name="MyProjects" component={MyProjectsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './src/navigation/TabNavigator';
import SignInScreen from './src/auth/SignInScreen';
import SignUpScreen from './src/auth/SignUpScreen';
import OTPScreen from './src/auth/OTPScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import AddNewProjectScreen from './src/screens/AddNewProjectScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProjectOverviewScreen from './src/screens/ProjectOverviewScreen';
import OrganizationEmailScreen from './src/screens/OrganizationEmailScreen';
import UsersMembersScreen from './src/screens/UsersMembersScreen';
import UsersVendorsScreen from './src/screens/UsersVendorsScreen';
import SettingsPermissionScreen from './src/screens/SettingsPermissionScreen';
import SettingsEventsScreen from './src/screens/SettingsEventsScreen';
import SettingsReminderScreen from './src/screens/SettingsReminderScreen';
import SettingsScheduleScreen from './src/screens/SettingsScheduleScreen';
import MyProjectsScreen from './src/screens/MyProjectsScreen';
import './global.css';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Stack.Navigator 
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen 
          name="Main" 
          component={MyTabs}
          options={{
            gestureEnabled: false, // Prevent swipe back to auth
          }}
        />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="AddNewProject" component={AddNewProjectScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ProjectOverview" component={ProjectOverviewScreen} />
        <Stack.Screen name="OrganizationEmail" component={OrganizationEmailScreen} />
        <Stack.Screen name="UsersMembers" component={UsersMembersScreen} />
        <Stack.Screen name="UsersVendors" component={UsersVendorsScreen} />
        <Stack.Screen name="SettingsPermission" component={SettingsPermissionScreen} />
        <Stack.Screen name="SettingsEvents" component={SettingsEventsScreen} />
        <Stack.Screen name="SettingsReminder" component={SettingsReminderScreen} />
        <Stack.Screen name="SettingsSchedule" component={SettingsScheduleScreen} />
        <Stack.Screen name="MyProjects" component={MyProjectsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}