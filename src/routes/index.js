import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Pages
import Main from "../Pages/Main";

// Pages Products
import Product from "../Pages/Products/Product";
import Featured from "../Pages/Products/Featured";
import Sells from "../Pages/Products/Sells";
import SelectedProduct from "../Pages/Products/SelectedProduct";

// Pages User
import Login from "../Pages/User/Login";
import Conta from "../Pages/User/Conta";

const Router = createAppContainer(
  createSwitchNavigator(
    {
      Inicio: {
        screen: Main
      },
      principal: {
        screen: createStackNavigator(
          { Product, Featured, Sells, SelectedProduct },
          {
            defaultNavigationOptions: {
              headerTransparent: true,
              headerTintColor: "#fff",
              headerTitle: "",
              headerLeftContainerStyle: {
                marginLeft: 30,
                marginRight: 30
              }
            }
          }
        )
      },
      User: {
        screen: createStackNavigator(
          {
            Login,
            Conta
          },
          {
            defaultNavigationOptions: {
              headerTransparent: true,
              headerTintColor: "#fff",
              headerTitle: "",
              headerLeftContainerStyle: {
                marginLeft: 30
              }
            }
          }
        )
      }
    },
    {
      initialRouteName: "Inicio"
    }
  )
);

export default Router;
