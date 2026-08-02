import { StyleSheet } from 'react-native';
// Define reusable color constants for themes
export const Colors = {
  dark: 'black',
  light: 'white',
};
// Base container styles applied to both light and dark themes
const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
// Base box styles shared between themes
const baseBoxStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: 150,
  width: 150,
};
const lightStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.light,
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.dark,
  },
});
const darkStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.dark,
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.light,
  },
});
//function to return correct stylesheet based on theme flag
export default function getStyleSheet(useDarkTheme) {
  return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}