import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableButton from "../../components/Reusable/ReusableButton";
import { placeAnOffer } from "../../api/negociationService";

const getMinimumOfferPrice = (offerPrice) => {
  let result = offerPrice - offerPrice * 0.4;
  return result.toFixed(2);
};

const PlaceAnOfferScreen = ({ route, navigation }) => {
  const { postId, vendeurId, prix } = route.params;
  const [priceOffer, setPriceOffer] = useState(0);
  const [canSubmitOffer, setCanSubmitOffer] = useState(false);

  useEffect(() => {
    if (Number(priceOffer) >= Number(getMinimumOfferPrice(prix))) {
      setCanSubmitOffer(true);
    } else {
      setCanSubmitOffer(false);
    }
  }, [priceOffer]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.header}>
        <View style={{ alignItems: "flex-start", marginStart: 10, flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={{ color: COLORS.background, fontSize: 14 }}>
              Annuler
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: COLORS.background,
            }}
          >
            Faire une offre
          </Text>
        </View>
      </SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.yourOfferTitle}>Ton offre:</Text>
          <TextInput
            placeholder={`${prix} €`}
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => setPriceOffer(text)}
          />
          {!canSubmitOffer && (
            <Text
              style={{ color: COLORS.error, fontSize: 11, fontWeight: "600" }}
            >
              Ton offre doit être de {getMinimumOfferPrice(prix)} € minimum (40
              % de réduction)
            </Text>
          )}
          <View style={styles.btnContainer}>
            <ReusableButton
              height={40}
              borderWidth={2}
              bgColor={COLORS.primary}
              borderColor={COLORS.primaryVariant}
              borderRadius={4}
              label={"Proposer"}
              labelColor={COLORS.primaryVariant}
              fontSize={16}
              onPress={() => {
                placeAnOffer({
                  annonce_nego_id: postId,
                  vendeur_nego_id: vendeurId,
                  acheteur_nego_id: "65dcfe5d277c2722bdfe9363",
                  ancien_prix: prix,
                  nouveau_prix: priceOffer,
                })
                  .then((response) => {
                    console.log(response);
                    Alert.alert("Votre proposition a été envoyée");
                    navigation.goBack();
                  })
                  .catch((error) => {
                    Alert.alert("Une erreur est survenue");
                  });
              }}
              disabled={canSubmitOffer ? false : true}
              opacity={canSubmitOffer ? 1 : 0.6}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PlaceAnOfferScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFEAD2" },
  header: {
    backgroundColor: COLORS.primary,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inner: { padding: 16 },
  yourOfferTitle: {
    fontSize: 14,
    color: COLORS.primaryVariant,
  },
  textInput: {
    height: 40,
    borderColor: COLORS.primaryVariant,
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  btnContainer: {
    flex: 1,
    marginTop: 35,
  },
});
