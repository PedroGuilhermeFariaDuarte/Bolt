import React from "react";
import { StatusBar } from "react-native";

// Routes
import Router from "./routes";

function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FFF" />
      <Router />
    </>
  );
}

export default Index;
