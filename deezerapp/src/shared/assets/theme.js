import { Dimensions, Platform } from 'react-native';
import { DefaultTheme } from "@react-navigation/native";
export const isPlatform = Platform.OS;
export const size = Dimensions.get("window");
export const { width, height } = Dimensions.get("window");

export const colors = {
    primary: "#144973",
    white: "#ffff",
    darkgrey: "#53596c",
    lightgrey: "#f2f2f4",
}

let navTheme = DefaultTheme;
navTheme.colors.background = colors.white;
export const theme = navTheme;