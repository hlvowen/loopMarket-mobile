import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Badge } from "@rneui/themed";
import { getUserById } from "../../api/userService";
import { COLORS } from "../../constants/theme";
import ReusableButton from "../../components/Reusable/ReusableButton";

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserById("65dcfe5d277c2722bdfe9362").then((userResponse) => {
      setUser(userResponse);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ alignItems: "center", gap: 10 }}>
          <Avatar source={{ uri: user.photo }} size={64} rounded />
          <Text>
            {user.prenom} {user.nom}
          </Text>
          <Text>{user.email}</Text>
          <FlatList
            data={user.genresLecture}
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
          <ReusableButton
            width={150}
            height={40}
            borderWidth={2}
            bgColor={COLORS.primary}
            borderColor={COLORS.primaryVariant}
            borderRadius={4}
            label={"Déconnexion"}
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
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  card: {
    backgroundColor: "#FFEAD2",
    marginHorizontal: 40,
    padding: 20,
    borderRadius: 8,
  },
});
