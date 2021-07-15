import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./src/screens/HomeScreen"
import ComponentsScreen from "./src/screens/ComponentsScreen"
import LoginScreen from "./src/screens/LoginScreen"
import JunkScreen from "./src/screens/JunkScreen"
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component1: ComponentsScreen,
    Login: LoginScreen,
    Junk: JunkScreen,
  },
  {
    initialRouteName: "Junk",
    defaultNavigationOptions: {
      title: "App",
      profile: "ComponentsScreen",
    },
  }
)

export default createAppContainer(navigator)
