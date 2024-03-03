import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Post } from "../../components";
import P from "../../components/Feed/P";
import { COLORS, SIZES } from "../../constants/theme";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const FeedScreen = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8500/api/annonces-disponibles/6")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // Quand on arrive au dernier post
  const onEndReached = () => {
    console.log("reached");
    fetch("http://localhost:8500/api/annonces-disponibles/10")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((newPost) => {
          console.log("newPost", newPost);
          // Check if the new post already exists in the posts array
          const isUnique = !posts.some((post) => post.id === newPost.id); // Assuming each post has an 'id' property

          // If the post is unique, add it to the posts array
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
          navigation.navigate("PostDetails", { postId: item["_id"]["$oid"] })
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
      />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  feed: {},
});
