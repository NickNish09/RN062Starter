import {StyleSheet} from 'react-native';
import {colors, fontFamiliy, fonts} from '../../styles/base';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 10,
  },

  innerContainer: {
    width: '90%',
    backgroundColor: '#212121',
    padding: 25,
    borderRadius: 5,
  },

  modalTitle: {
    fontSize: fonts.lg_lg,
    fontFamily: fontFamiliy.primary,
    color: '#ffffff',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    fontSize: fonts.md_md,
    fontFamily: fontFamiliy.primary,
    color: '#ffffff',
    marginVertical: 3,
    textAlign: 'center',
  },

  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  buttonCancel: {
    height: 40,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },

  buttonOk: {
    height: 40,
    minWidth: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
});

export default styles;
