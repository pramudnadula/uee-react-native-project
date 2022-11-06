import { StyleSheet, Text, View, TextInput, Button, Alert, Pressable, Image } from "react-native";
import { useState } from "react";
import { POST } from "../../helpers/httphelper";

function Register({ navigation }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const data = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    };

    POST("api/user/addUser", data)
      .then((res) => {
        if (res.message === "success") {
          Alert.alert("Success", res.message);
          navigation.navigate("Login");
        } else {
          Alert.alert("Error", res.message);
        }
        console.log(res.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/favicon.png')} style={styles.image} />
      <Text style={styles.title}>Please Register</Text>
      <TextInput style={styles.input} placeholder="Enter your first name" onChangeText={(text) => setFname(text)} />
      <TextInput style={styles.input} placeholder="Enter your last name" onChangeText={(text) => setLname(text)} />
      <TextInput style={styles.input} placeholder="Enter your email" onChangeText={(email) => setEmail(email)} />
      <TextInput style={styles.input} placeholder="Enter your password" onChangeText={(text) => setPassword(text)} />
      <Button style={styles.button} title="Register" onPress={() => register()} />
      <Pressable onPress={() => navigation.navigate("Login")}>
        <View>
          <Text style={styles.link}>
            Login
          </Text>
        </View>
      </Pressable>

    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    cursor: "pointer !important",
    color: "red !important",
    backgroundColor: "red !important",
    borderRadius: 20,
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
