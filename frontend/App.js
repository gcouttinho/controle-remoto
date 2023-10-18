import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import controll from "./screens/controll";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="controll" component={controll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;