import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./src/screens/HomeScreen"
import LoginScreen from "./src/screens/A_AccessScreens/LoginScreen"
import CartScreen from "./src/screens/E_CartScreens/CartScreen"
import JunkScreen from "./src/screens/X_Random/JunkScreen"
import ListScreen from "./src/screens/ListScreen"
import CaptureScreen from "./src/screens/C_AdminScreens/CaptureScreen"
import ListViewScreen from "./src/screens/ListViewScreen"
import MainMenuScreen from "./src/screens/MainMenuScreen"
import ProductListScreen from "./src/screens/D_ProductScreens/ProductListScreen"

const navigator = createStackNavigator(
  // these work with the .navigate function
  // example
  // inside of a Screen Button/TO
  // onPress={ () => props.navigation.navigate("Login")}
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Cart: CartScreen,
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
      profile: "User",
    },
  }
)

export default createAppContainer(navigator)
