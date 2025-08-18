// import React from 'react';
// import { StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MyTabs from './src/navigation/TabNavigator';
// import SignInScreen from './src/auth/SignInScreen';
// import SignUpScreen from './src/auth/SignUpScreen';
// import OTPScreen from './src/auth/OTPScreen';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}