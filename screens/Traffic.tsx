import React from "react";
import { Text, View } from "react-native";
import { TRAFFIC_API_KEY } from "../secrets";
import { Traveltime } from "../types.d";

type Props = {};

const TrafficScreen: React.FC<Props> = () => {
  const [travelTime, setTravelTime] = React.useState<Traveltime>(null);
  React.useEffect(() => {
    const getTransit = async () => {
      const response = await fetch(
        "https://api.external.citymapper.com/api/1/directions/transit?start=51.5217,0.1259&end=51.5054,0.0235",
        // "https://api.external.citymapper.com/api/1/traveltimes?start=51.5217,0.1259&end=51.5054,0.0235",
        {
          headers: {
            "Citymapper-Partner-Key": TRAFFIC_API_KEY,
          },
        }
      );
      const json = await response.json();
      console.warn(json.routes.find());
      // setTravelTime(json);
    };
    getTransit();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Traffic!</Text>
      {travelTime && (
        <Text>Transit time {travelTime.transit_time_minutes} mins</Text>
      )}
    </View>
  );
};

export default TrafficScreen;
