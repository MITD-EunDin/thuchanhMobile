import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Carrot } from 'lucide-react-native';

export default function OnBoarding({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Hình ảnh nền */}
      <Image 
        source={{ uri: "https://s3-alpha-sig.figma.com/img/65e9/1e96/4e8f13cbdb37604e351d37d72a1eb837?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Foh1zfeF4zAC3eiToyQPw2iuFp31NTGYCNcWJklEvSYhYk3pe0-9IAm1A6t7ugITNmSo4-RNYky4E5At7O~9yLmqOLZOPLhNMo1beNiO-4ROypp9x8JuYcPWfNUdAMevkQsJXH-zaajhGI7vrD6IOA1dlLwAeX3V7vR9UXP5VQf2Wy9OwiuRQaxHcUcTzECyvuMHUA4mm5QPVnxvvMdVItd1XOJqbfW1iQpCEtSLT0fYtav61yGy-BQpqmYacW3QE9Ara7eRaz8EXA~DgWIGEuqWxzRHSXx8TomNAX0utUHbBdyeIAE1bEW9PUvww15iroOyzD34SI3hxUkc~LsoQg__" }} 
        style={styles.productImage}
      />

      {/* Nội dung chính */}
      <View style={styles.content}>
        <Carrot size={70} color="white" />
        <Text style={styles.textmain}>Welcome</Text>
        <Text style={styles.textmain}>to our store</Text>
        <Text style={styles.text}>Get our groceries as fast as one hour</Text>

        {/* Nút Get Started */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Loginup")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#53B175"
  },
  productImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Hiệu ứng mờ
    padding: 20,
    borderRadius: 15,
  },
  textmain: {
    color: "white",
    fontSize: 30, 
    fontWeight: "bold",
    marginTop: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#ffcc00",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
});
