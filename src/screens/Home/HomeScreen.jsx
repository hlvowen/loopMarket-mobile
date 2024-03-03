import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Post } from "../../components";
import { FlatList } from "react-native-gesture-handler";
import { getPosts } from "../../api/postService";
import { SIZES } from "../../constants/theme";

const HomeScreen = ({ navigation }) => {
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
      <Post
        data={item}
        onPressCheckout={() =>
          navigation.navigate("Payment", { itemId: item["_id"]["$oid"] })
        }
      />
    );
  };

  // Quand on arrive au dernier post
  const onEndReached = () => {
    fetch("http://localhost:8500/api/annonces-disponibles/5")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((newPost) => {
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

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item["_id"]["$oid"]}
        snapToInterval={SIZES.height}
        snapToAlignment="start"
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={1}
      />
    </View>
  );
};

export default HomeScreen;
