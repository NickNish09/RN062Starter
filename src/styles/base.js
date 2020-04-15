import {StyleSheet, Dimensions} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const base_hight = 800; //896 - iphone 11 max

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  primary: '#f8a204',
  primary_dark: '#f97613',
  secondary: '#FF4804',
  tertiary: '#ffab6a',
  orange: '#ED7F41',
  orange_dark: '#E27900',
  dark: '#171718',
  light_gray: '#929292',
  light_green: '#54c442',
  lighter_green: 'rgba(83,203,65,0.53)',
  lighter_gray: 'rgba(146,146,146,0.52)',
  black: '#151515',
  dark_gray: 'rgb(70,79,95)',
  new_background: '#1A1A1A',
  bottom_tabs_color: '#212121',
};

export const padding = {
  x_sm: 5,
  sm: 10,
  sm_md: 15,
  md: 20,
  md_md: 25,
  lg: 30,
  lg_md: 35,
  xl: 40,
};

export const fonts = {
  x_sm: RFValue(8, base_hight),
  ex_sm: RFValue(10, base_hight),
  sm: RFValue(12, base_hight),
  sm_md: RFValue(15, base_hight),
  md: RFValue(18, base_hight),
  md_md: RFValue(21, base_hight),
  md_lg: RFValue(24, base_hight),
  lg: RFValue(28, base_hight),
  lg_lg: RFValue(31, base_hight),
  ex_lg: RFValue(35, base_hight),
};

export const fontFamiliy = {
  primary: 'Montserrat-Black',
  primaryBold: 'Montserrat-Bold',
};

const baseStyles = {
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth,
  },
  header: {
    backgroundColor: colors.primary,
    fontSize: fonts.lg,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: colors.primary,
    fontSize: fonts.lg,
    fontWeight: 'bold',
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl,
  },
  textSecondary: {
    color: colors.light_gray,
    fontSize: fonts.md_md,
  },
  textSecondaryMd: {
    color: colors.light_gray,
    fontSize: fonts.md,
    paddingLeft: 7,
  },
  textRanking: {
    color: colors.light_gray,
    fontSize: fonts.ex_lg,
  },
  iconPrimary: {
    color: '#ffffff',
    fontSize: 25,
  },
  backgroundPrimary: {
    backgroundColor: '#BC0000',
  },
  tabStyle: {
    backgroundColor: colors.secondary,
    color: '#fff',
  },
  logoStyle: {
    width: dimensions.fullWidth,
    resizeMode: 'contain',
    marginTop: 25,
  },
  inputLogin: {
    color: '#fff',
    padding: 12,
    fontSize: 20,
  },
  inputSet: {
    color: '#000',
    padding: 8,
    fontSize: 18,
    flex: 1,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSet: {
    color: '#000',
    paddingTop: 18,
    paddingBottom: 18,
    fontSize: 18,
  },
  versus: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  versusMid: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerAll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  primaryHeading: {
    color: '#000',
    fontSize: 25,
  },
  spinnerTextStyle: {
    color: '#fff',
    fontSize: 28,
  },
};

export default function createStyles(overrides = {}) {
  return StyleSheet.create({...baseStyles, ...overrides});
}
