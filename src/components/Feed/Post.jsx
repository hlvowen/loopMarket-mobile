import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./post.styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Post = ({ data, onPressCheckout, onPressInformation }) => {
  return (
    <View style={styles.post}>
      <Image
        style={[StyleSheet.absoluteFill, styles.image]}
        source={{ uri: `${data.photo}` }}
      />
      <View style={styles.content}>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={[StyleSheet.absoluteFillObject, styles.overlay]}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.footer}>
            <View style={styles.leftColumn}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
                {data.titre}
              </Text>
              <Text
                style={styles.caption}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {data.desc}
              </Text>
            </View>
            <View style={styles.rightColumn}>
              <TouchableOpacity onPress={onPressCheckout}>
                <FontAwesome5 name="shopping-cart" size={35} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressInformation}>
                <FontAwesome5 name="info-circle" size={35} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Post;
