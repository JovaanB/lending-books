import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/views/LoginScreen";
import CreateAccountScreen from "./src/views/CreateAccountScreen";
import HomeScreen from "./src/views/HomeScreen";
import DetailsScreen from "./src/views/DetailsScreen";
import CreatePostScreen from "./src/views/CreatePostScreen";
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
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
