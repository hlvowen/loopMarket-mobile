import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Post } from "../../components";
import P from "../../components/Feed/P";
import { COLORS } from "../../constants/theme";

const FeedScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8500/api/annonces-disponibles/5")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]["_id"]["$oid"]);
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <P
        title={item.titre}
        caption={item.desc}
        price={item.prix}
        photo={item.photo}
        onPressPhoto={() =>
          navigation.navigate("PostDetails", { postId: item["_id"]["$oid"] })
        }
      />
    );
  };

  return (
    <View style={styles.feed}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  feed: {
    flex: 1,
  },
});
