import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [search_ph, setSearch_ph] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {!search_ph && (
          <Text style={styles.placeholder}>Start your search</Text>
        )}
        <TextInput
          style={styles.h_search}
          value={search_ph}
          onChangeText={setSearch_ph}
        />
        <View style={styles.h_nav}>
          <View style={styles.h_nav_item}>
            <TouchableOpacity>
              <Image
                source={require("./assets/cabins.png")}
                style={styles.h_nav_img}
              />
              <Text>Cabins</Text>
              <View style={styles.h_nav_selected}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.h_nav_item}>
            <TouchableOpacity>
              <Image
                source={require("./assets/icons.png")}
                style={styles.h_nav_img}
              />
              <Text>Icons</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.h_nav_item}>
            <TouchableOpacity>
              <Image
                source={require("./assets/lakefront.png")}
                style={styles.h_nav_img}
              />
              <Text>Lakefront</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.h_nav_item}>
            <TouchableOpacity>
              <Image
                source={require("./assets/tropical.png")}
                style={styles.h_nav_img}
              />
              <Text>Tropical</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.h_spliter}></View>
      </View>

      <View style={styles.main}>
        <View></View>
        <View style={styles.card}>
          <Image
            source={require("./assets/forest-cabin.jpg")}
            style={styles.card_img}
          />
          <View style={styles.card_info}>
            <Text style={styles.card_title}>Kimberley, Canada</Text>
            <Text style={styles.card_subtitle}>206 kilometers away</Text>
            <Text style={styles.card_subtitle}>Feb 1-6</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    position: "absolute",
    left: "25%",
    top: "12.5%",
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    zIndex: 20,
    pointerEvents: "none",
  },
  header: {
    flex: 1,
    height: 100,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "18%",
  },
  h_search: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  h_nav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },
  h_nav_item: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  h_nav_img: {
    width: 40,
    height: 40,
  },
  h_nav_selected: {
    height: 1,
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
  h_spliter: {
    width: "100%",
    height: 1,
    boxShadow: "0 6px 8px 0 #000, 0 8px 20px 0 rgba(0, 0, 0, 0.19)",
  },

  main: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    overflow: "hidden",
  },
  card_img: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  card_info: {
    marginTop: 10,
    gap: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  card_title: {
    fontSize: 16,
    fontWeight: "500",
  },
  card_subtitle: {
    fontSize: 16,
    color: "#777",
  },
  footer: {
    flex: 1,
  },
});
