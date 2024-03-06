import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Post } from "../../components";
import P from "../../components/Feed/P";
import { COLORS, SIZES } from "../../constants/theme";

const FeedScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetch("https://preprod-loopmarket.gondwanna.eu/annonces-disponibles/5")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  handleRefresh = () => {
    setRefreshing(true);
    fetch("https://preprod-loopmarket.gondwanna.eu/annonces-disponibles/5")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error(error));
    setRefreshing(false);
  };

  // Quand on arrive au dernier post
  const onEndReached = () => {
    console.log("reached");
    fetch("https://preprod-loopmarket.gondwanna.eu/annonces-disponibles/5")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((newPost) => {
          // On vérifie si la nouvelle annonce récupérée n'est pas déjà présente dans la liste
          const isUnique = !posts.some(
            (post) => post["_id"]["$oid"] === newPost["_id"]["$oid"]
          );

          if (isUnique) {
            setPosts((currentPosts) => [...currentPosts, newPost]);
          }
        });
      })
      .catch((error) => console.error(error));
  };

  const renderItem = ({ item }) => {
    return (
      <P
        title={item.titre}
        caption={item.desc}
        price={item.prix}
        photo={item.photo}
        onPressPhoto={() =>
          navigation.navigate("PostDetails", {
            postId: item["_id"]["$oid"],
            vendeurId: item["vendeur_id"]["$oid"],
          })
        }
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item["_id"]["$oid"]}
        onEndReached={onEndReached}
        onEndReachedThreshold={1}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  feed: {},
});
