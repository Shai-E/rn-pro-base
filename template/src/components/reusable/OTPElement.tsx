import React, {useState, useRef} from 'react';

import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Dimensions,
} from 'react-native';
import BasicTextInput from './BasicTextInput';

interface OTPElementProps {
  numberOfDigits: number;
  containerWidth?: number;
  center?: boolean;
  style?: any;
  containerStyle?: any;
  onOTPComplete?: (otp: string) => void;
}

const MARGIN = 4;

const OTPElement: React.FC<OTPElementProps> = ({
  numberOfDigits,
  onOTPComplete,
  containerWidth,
  center,
  style,
  containerStyle,
}) => {
  // Create state as an array of empty strings, one for each digit.
  const [otp, setOtp] = useState<string[]>(Array(numberOfDigits).fill(''));

  // Hold refs for each TextInput.
  const inputsRef = useRef<Array<TextInput | null>>([]);

  // Helper function to focus the input at a specific index.
  const focusInput = (index: number) => {
    if (index >= 0 && index < numberOfDigits && inputsRef.current[index]) {
      inputsRef.current[index]?.focus();
    }
  };

  // Update the OTP state when a digit is entered.
  const handleChangeText = (text: string, index: number) => {
    // Only allow numeric input.
    if (!/^\d*$/.test(text)) return;

    const newOtp = [...otp];
    // If text is pasted or somehow contains multiple digits, take only the last one.
    const digit = text.slice(-1);
    newOtp[index] = digit;
    setOtp(newOtp);

    // Auto-advance focus if a digit was entered.
    if (digit && index < numberOfDigits - 1) {
      focusInput(index + 1);
    }

    // If all digits are filled, you can notify the parent.
    if (newOtp.every(val => val !== '')) {
      onOTPComplete && onOTPComplete(newOtp.join(''));
    }
  };

  // Handle backspace: if the current field is empty, move to the previous field.
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      focusInput(index - 1);
    }
  };

  return (
    <View style={[styles.container, {alignSelf: center?'center':'auto'}, containerStyle]}>
      {Array.from({length: numberOfDigits}).map((_, index) => (
        <BasicTextInput
          key={index}
          ref={ref => {
            inputsRef.current[index] = ref;
          }}
          selectTextOnFocus
          onPress={() => focusInput(index)}
          style={[
            styles.input,
            {
              width:
                (containerWidth || Dimensions.get('window').width) / numberOfDigits - MARGIN * 2,
            },
            style,
          ]}
          keyboardType="numeric"
          maxLength={1}
          value={otp[index]}
          onChangeText={text => handleChangeText(text, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          autoFocus={index === 0}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  input: {
    borderBottomWidth: 2,
    fontSize: 32,
    textAlign: 'center',
    marginHorizontal: MARGIN,
  },
});

export default OTPElement;
