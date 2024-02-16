import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../constants/theme";

const PaymentScreen = ({ route }) => {
  const { itemId } = route.params;
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8500/api/annonce/${itemId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.payment}>
      <View style={styles.summary}>
        <View style={styles.leftCol}>
          <Image style={styles.image} source={{ uri: post.photo }} />
        </View>
        <View style={styles.middleCol}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {post.titre}
          </Text>
        </View>
        <View style={styles.rightCol}>
          <Text style={styles.price}>{post.prix} $</Text>
        </View>
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.payBtn}>
          <Text style={styles.btnText}>Payer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  payment: {
    flex: 1,
    marginVertical: 10,
  },
  summary: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
  },
  leftCol: {
    borderRadius: 8,
    borderWidth: 1,
  },
  middleCol: {
    flex: 1,
    marginStart: 10,
    alignItems: "flex-end",
  },
  rightCol: { flex: 1, alignItems: "flex-end" },
  image: { resizeMode: "contain", width: 100, height: 100, borderRadius: 8 },
  price: {
    fontSize: 20,
  },
  name: { fontSize: 16 },
  payBtn: {
    width: 300,
    height: 50,
    backgroundColor: COLORS.primaryVariant,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: { color: COLORS.background, fontSize: 20 },
  action: {
    marginTop: 10,
    alignItems: "center",
  },
});
