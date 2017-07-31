import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  displayContainer: {
    flex: 2,
    backgroundColor: '#16a085',
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#21759b',
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#131418',
  },
  inputButtonText: {
    fontSize: 32,
    fontFamily: 'AppleSDGothicNeo-Medium',
    color: 'white',
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  },
  displayContainer: {
    flex: 2,
    backgroundColor: '#00b489',
    justifyContent: 'center',
  },
  displayText: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20,
  },
  inputButtonHighlighted: {
    backgroundColor: '#eb4924',
  },
});

export default Style;
