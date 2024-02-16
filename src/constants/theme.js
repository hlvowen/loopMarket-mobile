import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const COLORS = {
  primary: "#9EB384",
  primaryVariant: "#435334",
  secondary: "#D988B9",
  secondaryVariant: "#B0578D",
  background: "#fff",
  surface: "#fff",
  error: "#FF8080",
  onPrimary: "#fff",
  onSecondary: "#fff",
  onBackground: "#000",
  onSurface: "#000",
  onError: "#fff",
};

const SIZES = {
  xs: 10,
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
  xxl: 44,
  height,
  width,
};

const TEXT = {
  xxs: 11,
  xs: 13,
  s: 15,
  m: 17,
  l: 21,
  xl: 27,
  xxl: 32,
};

export { COLORS, SIZES, TEXT };
