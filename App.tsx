import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import palette from "./palette";
import NewsScreen from "./screens/News";
import TrafficScreen from "./screens/Traffic";
import WeatherScreen from "./screens/Weather";
import ROUTES from "./routeNames";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === ROUTES.NEWS) {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (route.name === ROUTES.TRAFFIC) {
              iconName = focused ? "train" : "train-outline";
            } else if (route.name === ROUTES.WEATHER) {
              iconName = focused ? "cloud" : "cloud-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: palette.primary.base,
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name={ROUTES.NEWS} component={NewsScreen} />
        <Tab.Screen name={ROUTES.TRAFFIC} component={TrafficScreen} />
        <Tab.Screen name={ROUTES.WEATHER} component={WeatherScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
