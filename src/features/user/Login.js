import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, Pressable } from "react-native";
import { POST } from "../../helpers/httphelper";


const Login = ({ navigation }) => {
  const [email, setEmail] = useState("pramud@gmail.com");
  const [password, setPassword] = useState("1234");

  const login = async () => {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    POST("api/user/login", data)
      .then((res) => {
        if (res.message === "Login successful") {
          Alert.alert("Success login Success", res.message);
          navigation.navigate("Home");
        } else if (res.message === "Wrong password") {
          Alert.alert("Password Wrong", res.message);
        } else if (res.message === "User does not exist") {
          Alert.alert("User Name Wrong try again or register", res.message);
          navigation.navigate("Register");
        } else if (res.message === "Please enter all fields") {
          Alert.alert("Please enter all fields", res.message);
        } else {
          Alert.alert("Error", res.message);
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Login</Text>
      <TextInput style={styles.input} placeholder="Enter your email" onChangeText={(email) => setEmail(email)} />
      <TextInput style={styles.input} placeholder="Enter your password" onChangeText={(text) => setPassword(text)} />
      <Button style={styles.button} title="Login" onPress={() => login()} />
      <Pressable onPress={() => navigation.navigate("Register")}>
        <View>
          <Text style={styles.link}>
            Signup
          </Text>
        </View>
      </Pressable>

    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    cursor: "pointer",
    color: "red",
    backgroundColor: "red",
  },
  input: {
    borderRadius: 20,
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 10,
    cursor: "pointer",
  },
});
