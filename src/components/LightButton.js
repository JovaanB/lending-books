import React from "react";
import { Button } from "react-native-elements";

const LightButton = ({ icon, url, buttonText, navigation }) => {
  return (
    <Button
      icon={icon}
      onPress={() => (url ? navigation.navigate(url) : console.log("Action"))}
      title={buttonText}
      buttonStyle={{
        backgroundColor: "rgba(244, 244, 244, 1)",
        borderRadius: 3,
      }}
      containerStyle={{
        height: 40,
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}
      titleStyle={{ marginHorizontal: 20, color: "black" }}
    />
  );
};

export default LightButton;
