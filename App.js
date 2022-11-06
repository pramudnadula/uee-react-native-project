import Login from "./src/features/user/Login";
import Register from "./src/features/user/Register";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/features/home/Home";


const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerShown: false
          }
        }>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer >

  );
}

