export interface AppConfig {
  FORECAST_IO: {
    apiUrl: string;
    apiKey: string;
  };
  DEFAULT_LOCATION: {
    LATITUDE: number;
    LONGITUDE: number;
  }
}

export const CONFIG: AppConfig = {
  FORECAST_IO: {
    apiUrl: 'https://api.forecast.io/forecast',
    apiKey: ''
  },
  DEFAULT_LOCATION: {
    LATITUDE: 0,
    LONGITUDE: 0
  }
};
