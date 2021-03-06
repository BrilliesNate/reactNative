import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import argonTheme from "../constants/Theme";
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Dashboard":
        return (
          <MaterialIcons name="dashboard" size={20} color={focused ? "white" : argonTheme.COLORS.PRIMARY} />
        );
      case "Events":
        return (
          <FontAwesome5 name="server" size={20} color={focused ? "white" : argonTheme.COLORS.ERROR} />
        );
      case "Advanced User":
        return (
          <FontAwesome name="wrench" size={20} color={focused ? "white" : argonTheme.COLORS.PRIMARY} />
        );
      case "My Charts":
        return (
          <AntDesign name="areachart" size={20}
          color={focused ? "white" : argonTheme.COLORS.WARNING} />
        );
      case "My Devices":
        return (
          <MaterialIcons name="device-hub" size={20}
          color={focused ? "white" : argonTheme.COLORS.INFO} />
        );
      case "Settings":
        return (<Feather name="settings" size={20} color={focused ? "white" : "rgba(0,0,0,0.5)"} />);
      case "Log out":
        return <Icon />;
      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() =>
          title == "Getting Started"
            ? Linking.openURL(
                "https://demos.creative-tim.com/argon-pro-react-native/docs/"
              ).catch(err => console.error("An error occurred", err))
            : navigation.navigate(title)
        }
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "rgba(0,0,0,0.5)"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
