import React from 'react';
import {defaultFont, fontSizes} from '@fixtures/defaults';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

// Define your styles outside the component for better performance.
const styles = StyleSheet.create({
  default: {
    fontFamily: defaultFont.family, // ensure you use the correct property name
    fontSize: fontSizes['m'],
    marginHorizontal: 5,
  },
});

// Use React.forwardRef to forward the ref to the inner TextInput.
const BasicTextInput = React.forwardRef<TextInput, TextInputProps>(
  ({style, ...props}, ref) => {
    return <TextInput ref={ref} style={[styles.default, style]} {...props} />;
  },
);

export default BasicTextInput;
