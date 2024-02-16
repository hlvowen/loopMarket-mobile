import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  post: {
    width: SIZES.width,
    height: SIZES.height,
  },
  image: {
    resizeMode: "cover",
    width: SIZES.width,
    height: SIZES.height,
  },
  content: { flex: 1, padding: 20 },
  footer: { marginTop: 600, flexDirection: "row", alignItems: "flex-end" },
  leftColumn: { flex: 2, gap: 10 },
  rightColumn: { flex: 2, gap: 10, alignItems: "flex-end" },
  title: {
    color: COLORS.background,
    fontSize: 20,
    fontWeight: "bold",
  },
  caption: {
    color: COLORS.background,
    fontSize: 14,
  },
  overlay: { top: "30%" },
});

export default styles;
