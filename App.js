import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./src/screens/HomeScreen"
import ComponentsScreen from "./src/screens/ComponentsScreen"
import LoginScreen from "./src/screens/LoginScreen"
import JunkScreen from "./src/screens/JunkScreen"
import ListScreen from "./src/screens/ListScreen"
import CaptureScreen from "./src/screens/CaptureScreen"
import ListViewScreen from "./src/screens/ListViewScreen"
import MainMenuScreen from "./src/screens/MainMenuScreen"
import ProductListScreen from "./src/screens/ProductListScreen"

const navigator = createStackNavigator(
  // these work with the .navigate function
  // example
  // inside of a Screen Button/TO
  // onPress={ () => props.navigation.navigate("Login")}
  {
    Home: HomeScreen,
    Component1: ComponentsScreen,
    Login: LoginScreen,
    Junk: JunkScreen,
    List: ListScreen,
    ListView: ListViewScreen,
    Capture: CaptureScreen,
    MainMenu: MainMenuScreen,
    ProductList: ProductListScreen,
  },
  {
    initialRouteName: "MainMenu",
    defaultNavigationOptions: {
      title: "Storefront",
      profile: "ComponentsScreen",
    },
  }
)

export default createAppContainer(navigator)
