import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { Divider, Badge } from "@rneui/themed";
import ReusableButton from "../../components/Reusable/ReusableButton";
import { Ionicons } from "@expo/vector-icons";

const PostDetailsScreen = ({ route, navigation }) => {
  const { postId } = route.params;
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8500/api/annonce/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <SafeAreaView
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View style={{ flex: 2 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons
                name="arrow-back-circle"
                size={35}
                color={COLORS.primaryVariant}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 300,
            }}
          >
            <Text numberOfLines={1}>{post.titre}</Text>
          </View>
          <View style={{ flex: 2 }}></View>
        </SafeAreaView>
      </View>
      <ScrollView style={styles.screenContainer}>
        <View>
          <Image source={{ uri: post.photo }} style={styles.photo} />
        </View>
        <View style={styles.secondSection}>
          <Text style={styles.title}>{post.titre}</Text>
          <Text style={styles.price}>{post.prix} €</Text>
          <Divider inset={true} insetType="middle" />
          <Text style={styles.caption}>{post.desc}</Text>
          <FlatList
            data={post.genre}
            renderItem={({ item }) => (
              <Badge
                value={item}
                badgeStyle={{ backgroundColor: COLORS.primaryVariant }}
                containerStyle={{ marginEnd: 5 }}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <View style={styles.card}>
        <ReusableButton
          width={150}
          height={40}
          borderWidth={2}
          bgColor={COLORS.primary}
          borderColor={COLORS.primaryVariant}
          borderRadius={4}
          label={"Faire une offre"}
          labelColor={COLORS.primaryVariant}
          fontSize={16}
          onPress={() => {
            navigation.navigate("PlaceAnOffer", {
              postId: post["_id"]["$oid"],
              prix: post.prix,
              vendeurId: post["vendeur_id"]["$oid"],
            });
          }}
        />
        <ReusableButton
          width={150}
          height={40}
          borderWidth={2}
          bgColor={COLORS.primaryVariant}
          borderColor={COLORS.primaryVariant}
          borderRadius={4}
          label={"Acheter"}
          labelColor={COLORS.primary}
          fontSize={16}
          onPress={() =>
            navigation.navigate("Payment", { postId: post["_id"]["$oid"] })
          }
        />
      </View>
    </View>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#FFEAD2",
  },
  photo: {
    width: SIZES.width,
    height: 300,
    resizeMode: "stretch",
  },
  card: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.background,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  secondSection: {
    flex: 1,
    padding: 10,
    gap: 20,
    backgroundColor: COLORS.background,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 8,
  },
  title: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 18, fontWeight: "bold" },
  caption: { fontSize: 14 },
  header: {
    backgroundColor: COLORS.background,
    height: 100,
  },
});
