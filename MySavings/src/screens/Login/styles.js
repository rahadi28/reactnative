import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F3C51',
  },
  logo: {
    height: 100,
    width: 125,
  },
  title: {
    fontFamily: 'Dosis-ExtraLight',
    fontSize: 18,
    color: '#E4EBED',
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 80,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    width: 280,
    marginBottom: 25,
    borderBottomColor: '#AFB6C0',
    borderBottomWidth: 1,
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'center',
    marginEnd: 10,
    tintColor: '#AFB6C0',
  },
  textInput: {
    flex: 1,
    alignItems: 'stretch',
    fontSize: 18,
    color: '#E4EBED',
    letterSpacing: 1,
    fontFamily: 'Dosis-ExtraLight',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 280,
    marginTop: 32,
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: 'Dosis-SemiBold',
    fontSize: 20,
    color: '#E4EBED',
    letterSpacing: 1,
  },
  touchableText: {
    fontSize: 16,
    color: '#AFB6C0',
    letterSpacing: 1,
    fontFamily: 'Dosis-ExtraLight',
    marginTop: 20,
  },
});
