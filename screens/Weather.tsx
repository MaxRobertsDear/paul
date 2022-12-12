import React from "react";
import { Text, View } from "react-native";
import { WEATHER_API_KEY } from "../secrets";
import { ForecastDay, WeatherAPIResponse } from "../types.d";

type Props = {};

const WeatherScreen: React.FC<Props> = () => {
  const [forecastDay, setForecastDay] =
    React.useState<ForecastDay["day"]>(null);
  React.useEffect(() => {
    const getForecast = async () => {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=London&days=1&aqi=no&alerts=no`
      );
      const json: WeatherAPIResponse = await response.json();
      setForecastDay(json.forecast.forecastday[0].day);
    };
    getForecast();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Weather!</Text>
      {forecastDay && (
        <>
          <Text>Will it rain? {forecastDay.daily_will_it_rain}</Text>
          <Text>Will it snow? {forecastDay.daily_will_it_snow}</Text>
          <Text>High of {forecastDay.maxtemp_c} celsius</Text>
        </>
      )}
    </View>
  );
};

export default WeatherScreen;
