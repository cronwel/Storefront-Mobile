import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./src/screens/HomeScreen"
import ComponentsScreen from "./src/screens/ComponentsScreen"
import LoginScreen from "./src/screens/LoginScreen"
import JunkScreen from "./src/screens/JunkScreen"
import ListScreen from "./src/screens/ListScreen"
import CaptureScreen from "./src/screens/CaptureScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component1: ComponentsScreen,
    Login: LoginScreen,
    Junk: JunkScreen,
    List: ListScreen,
    Capture: CaptureScreen,
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "Storefront",
      profile: "ComponentsScreen",
    },
  }
)

export default createAppContainer(navigator)
