export type Article = {
  author: string;
  publishedAt: string;
  source: {}[];
  title: string;
  url: string;
};

export type NewsAPIResponse = {
  articles: Article[];
  status: "ok" | "error";
  totalResults: number;
};

export enum NEWS_SOURCE {
  BBC = "bbc-news",
  BLOOMBERG = "bloomberg",
  BUSINESS_INSIDER = "business-insider",
  CNN = "cnn",
  GOOGLE_NEWS = "google-news",
  NEW_YORK_MAGAZINE = "new-york-magazine",
  REUTERS = "reuters",
  TECHCRUNS = "techcrunch",
  TECHRADAR = "techradar",
  THE_WASHINGTON_POST = "the-washington-post",
}

export interface Condition {
  code: number;
  icon: string;
  text: string;
}

export interface ForecastDay {
  day: {
    avghumidity: number;
    avgtemp_c: number;
    avgtemp_f: number;
    avgvis_km: number;
    avgvis_miles: number;
    condition: Condition;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    maxtemp_c: number;
    maxtemp_f: number;
    maxwind_kph: number;
    maxwind_mph: number;
    mintemp_c: number;
    mintemp_f: number;
    totalprecip_in: number;
    totalprecip_mm: number;
    totalsnow_cm: number;
    uv: number;
  };
}

export interface Current {
  cloud: number;
  condition: Condition;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface Location {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}

export interface WeatherAPIResponse {
  current: Current;
  forecast: Forecast;
  location: Location;
}

export interface Routes {
  distance_meters: number;
  duration_accuracy: string;
  duration_seconds: number;
  end: string[];
  legs: string[];
  requested_time_type: string;
  route_arrival_time: Date;
  route_departure_time: Date;
  signature: string;
  start: string[];
}

export interface Traveltime {
  transit_time_minutes: number;
  walk_travel_time_minutes: number;
}
