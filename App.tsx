import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [search_ph, setSearch_ph] = useState("");
  const [switch_on, setSwitch_on] = useState(false);
  const [like, setLike] = useState(false);
  const [price, setPrice] = useState("1,000");

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
        <View style={styles.h_nav_selected}></View>
        <View style={styles.h_spliter}></View>
      </View>

      <View style={styles.main}>
        <View style={styles.price_switch}>
          <View style={styles.price_switch_text}>
            <Text style={{ fontWeight: 500, fontSize: 14 }}>
              Display total price
            </Text>
            <Text style={{ color: "#777" }}>
              Includes all fees, before taxes
            </Text>
          </View>
          <Switch
            value={switch_on}
            onChange={() => {
              setSwitch_on(!switch_on);
              setPrice(switch_on ? "1,000" : "5,000");
            }}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.card_badge_layout}>
            <View style={styles.card_badge}>
              <Text style={{ fontSize: 12, fontWeight: 500 }}>
                Guest Favorite
              </Text>
            </View>
            <TouchableOpacity
              style={styles.card_heart}
              onPress={() => setLike(!like)}
            >
              { !like &&
              (<Image
                style={{ width: 28, height: 28 }}
                source={require("./assets/heart.png")}
              />)
              }
              {
                like &&
                (<Image
                  style={{ width: 28, height: 28 }}
                  source={require("./assets/heart-fill.png")}
                />)
              }
            </TouchableOpacity>
          </View>
          <Image
            source={require("./assets/forest-cabin.jpg")}
            style={styles.card_img}
          />
          <View style={styles.card_info}>
            <View style={styles.card_title_layout}>
              <Text style={styles.card_title}>Kimberley, Canada</Text>
              <Text>⭐️ 5.0</Text>
            </View>
            <Text style={styles.card_subtitle}>206 kilometers away</Text>
            <Text style={styles.card_subtitle}>Feb 1-6</Text>
            <View style={styles.card_price_layout}>
              <Text style={styles.card_price}>${price} CAD</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.alert_btn} onPress={() => alert("Alert Button Pressed")}>
          <Text style={{ fontSize: 16, fontWeight: 500, color: "#fff" }}>Alert</Text>
        </TouchableOpacity>       
      </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "25%",
    top: "15%",
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    zIndex: 20,
    pointerEvents: "none",
  },
  /* header */
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
    position: "absolute",
    top: 130,
    left: 25,
    width: 44,
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
  /* main area */
  main: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  price_switch: {
    width: 300,
    height: 60,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  price_switch_text: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: 12,
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
  card_title_layout: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
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
  card_price_layout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  card_price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  card_duration: {
    fontSize: 16,
    marginLeft: 5,
  },
  card_badge_layout: {
    position: "absolute",
    width: 280,
    top: 10,
    left: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 20,
  },
  card_badge: {
    width: 100,
    height: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  card_heart: {
    width: 28,
    height: 28,
  },
  /* footer */
  footer: {
    flex: 1,
  },
  alert_btn: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#000",
  },
});
