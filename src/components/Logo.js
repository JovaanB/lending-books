import * as React from "react";
import { Image } from "react-native";
import logo from "../assets/img/logo.png";

function Logo() {
  return <Image style={{ width: "90%", height: 40 }} source={logo} />;
}

export default Logo;
