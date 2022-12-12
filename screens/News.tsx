import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { response } from "../mockNewsAPIResponse";
import palette from "../palette";
import { NewsAPIResponse, NEWS_SOURCE, Article } from "../types.d";
import * as Speech from "expo-speech";
import { NEWS_API_KEY } from "../secrets";

type Props = {};

const { width } = Dimensions.get("window");

const NewsScreen: React.FC<Props> = () => {
  const [news, setNews] = React.useState<Article[]>(response.articles);
  const [error, setError] = React.useState<any>(null);
  const [isLoading, setISLoading] = React.useState<boolean>(false);
  const speak = () => {
    const thingToSay = "1";
    Speech.speak(thingToSay);
  };
  // React.useEffect(() => {
  //   const getNewsFromApiAsync = async () => {
  //     try {
  //       setError(null);
  //       setISLoading(true);
  //       const response = await fetch(
  // `https://newsapi.org/v2/top-headlines?sources=${NEWS_SOURCE.BLOOMBERG},${NEWS_SOURCE.BBC}&apiKey=${NEWS_API_KEY}`
  //       );
  //       const json: NewsAPIResponse = await response.json();
  //       if (json.status === "ok") {
  //         setNews(json.articles);
  //         setISLoading(false);
  //       }
  //     } catch (error) {
  //       setError(error);
  //       console.error(error);
  //     }
  //   };
  //   getNewsFromApiAsync();
  // }, []);
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        width,
      }}
    >
      <Text>News!</Text>
      {isLoading && (
        <ActivityIndicator size="large" color={palette.secondary.base} />
      )}
      {error && <Text>{error}</Text>}
      {news?.map((n) => (
        <Pressable
          onPress={() => Speech.speak(n.title)}
          key={n.title}
          style={{
            width: width - 40,
            marginVertical: 10,
            paddingVertical: 20,
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: palette.primary.light,
            borderRadius: 12,
          }}
        >
          <Text>{n.title}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default NewsScreen;
