import { View, Text, Image } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";

const CheckoutScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image
          style={{ width: SIZES.width, height: 400, resizeMode: "contain" }}
          source={require("../../assets/book.jpg")}
        />
      </View>
    </View>
  );
};

export default CheckoutScreen;
