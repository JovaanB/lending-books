import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/views/LoginScreen";
import CreateAccountScreen from "./src/views/CreateAccountScreen";
import ProfileScreen from "./src/views/ProfileScreen";
import HomeScreen from "./src/views/HomeScreen";
import LibraryScreen from "./src/views/LibraryScreen";
import OneBookScreen from "./src/views/OneBookScreen";
import LendingScreen from "./src/views/LendingScreen";
import SubscribeScreen from "./src/views/SubscribeScreen";
import Logo from "./src/components/Logo";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#db5842",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: (props) => <Logo {...props} />,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen
          name="Home"
          options={{ title: "LENDING BOOKS", headerBackVisible: false }}
          component={HomeScreen}
        />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="OneBook" component={OneBookScreen} />
        <Stack.Screen name="Lending" component={LendingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Subscribe" component={SubscribeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
