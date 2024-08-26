import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  TextInputProps,
} from 'react-native';
// styles
import EyeIcon from '@src/assets/icons/Eye';
import EyeOffIcon from '@src/assets/icons/EyeOff';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useColors} from '@hooks/useColors';
import {wp} from '@services/dimensions/dimensions';

interface InputElementProps extends TextInputProps {
  placeholder: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  errorMessage?: string;
  secureTextEntry?: boolean;
  validateInput?: (text: string) => boolean;
}

const InputElement: React.FC<InputElementProps> = ({
  placeholder,
  leftIcon,
  rightIcon,
  errorMessage,
  validateInput,
  secureTextEntry,
  ...props
}) => {
  const colors = useColors();
  const [text, setText] = useState('');
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  const [isValid, setIsValid] = useState(false);

  const labelPositionY = useSharedValue(0);
  const labelPositionX = useSharedValue(0);
  const labelSize = useSharedValue(16);
  const labelPadding = useSharedValue(0);
  const inputRef = useRef<TextInput>(null);

  const isLeftIcon = secureTextEntry || leftIcon;

  const handleFocus = () => animateLabel(-20, 12, 10, isLeftIcon ? -45 : -10);
  const handleBlur = () => !text && animateLabel(0, 16, 0, 0);
  const handleChangeText = (input: string) => {
    setText(input);
    validateInput && setIsValid(validateInput(input));
  };

  const animateLabel = (
    y: number,
    size: number,
    padding: number,
    x: number,
  ) => {
    labelPositionY.value = withTiming(y, {duration: 150});
    labelSize.value = withTiming(size, {duration: 150});
    labelPadding.value = withTiming(padding, {duration: 150});
    labelPositionX.value = withTiming(x, {duration: 150});
  };

  const labelStyle = useAnimatedStyle(() => ({
    transform: [
      {translateY: labelPositionY.value},
      {translateX: labelPositionX.value},
    ],
    fontSize: labelSize.value,
    backgroundColor: colors.primary,
    paddingHorizontal: labelPadding.value,
  }));

  const dynamicStyles = StyleSheet.create({
    inputContainer: {
      borderColor:
        isValid && errorMessage ? colors.warning : colors.placeholder,
    },
    label: {left: isLeftIcon ? 50 : 15, color: colors.primaryText},
    input: {
      color: colors.primaryText,
    },
    errorText: {
      color: colors.warning,
    },
  });

  const displayLeftIcon = isLeftIcon && <Pressable
  onPress={() => {
    inputRef.current?.focus();
    secureTextEntry && setIsSecure(prev => !prev);
  }}
  style={styles.icon}>
  {secureTextEntry ? (
    isSecure ? (
      <EyeOffIcon height={22} width={22} color={colors.primaryText} />
    ) : (
      <EyeIcon height={22} width={22} color={colors.primaryText} />
    )
  ) : (
    leftIcon
  )}
</Pressable>;

  const displayRightIcon = rightIcon && (
    <View style={styles.icon}>{rightIcon}</View>
  );

  const animatedLabel = (
    <Animated.Text style={[styles.label, dynamicStyles.label, labelStyle]}>
      {placeholder}
    </Animated.Text>
  );

  const input = (
    <TextInput
      ref={inputRef}
      style={[styles.input, dynamicStyles.input]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChangeText={handleChangeText}
      secureTextEntry={isSecure}
      value={text}
      {...props}
    />
  );

  const displayError = !isValid && errorMessage && (
    <Text style={[styles.errorText, dynamicStyles.errorText]}>
      {errorMessage}
    </Text>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={[styles.inputContainer, dynamicStyles.inputContainer]}>
          {displayLeftIcon}
          {animatedLabel}
          {input}
          {displayRightIcon}
        </View>
        {displayError}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: wp('90%'),
    marginHorizontal: 'auto',
  },
  icon: {
    marginHorizontal: 5,
  },
  label: {
    position: 'absolute',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  errorText: {
    fontSize: 12,
    marginTop: 5,
    width: wp('90%'),
    marginHorizontal: 'auto',
  },
});

export default InputElement;
