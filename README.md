
# RN-Pro-Base

Welcome to **RN-Pro-Base**, a robust and scalable React Native template designed to jumpstart your mobile app development. This template is built with TypeScript, Redux Toolkit, React Navigation, and more to provide a strong foundation for building high-quality mobile applications.

## Features

- **TypeScript**: Ensures type safety and scalable code.
- **React Navigation**: Provides intuitive and flexible screen navigation.
- **State Management**: Leverage Redux Toolkit, Redux Saga, and Redux Persist to handle complex state logic and persistence.
- **AsyncStorage**: Efficient local data storage with React Native AsyncStorage.
- **i18next**: Seamless internationalization support.
- **React Native SVG**: Handle scalable vector graphics with ease.
- **Reanimated 3 & React Native Gesture Handler**: Powerful animations and gesture controls.
- **Built-in Themes**: Support for both dark mode and light mode themes.
- **Reusable Components**: See [components section](#Components)

## Project Structure

```
/template
├── /__tests__                         # Test files
├── /android                           # Android-specific files
├── /ios                               # iOS-specific files
├── /src                               # Application source code
│   └── /assets                        # Images, fonts, etc.
│   ├── /components                    # Reusable components
│   │   ├── /reusable                  # Reusable components
│   │   │   ├── ButtonElement.tsx
│   │   │   ├── InputElement.tsx
│   │   │   ├── LinkElement.tsx
│   │   │   ├── ScreenContainer.tsx
│   │   │   ├── SeparatorElement.tsx
│   │   │   ├── StatusBarElement.tsx
│   │   │   ├── SwitchElement.tsx
│   │   │   ├── TextElement.tsx
│   ├── /fixtures                      # Constats
│   ├── /hooks                         # Custom hooks
│   ├── /navigation                    # Navigation setup
│   ├── /screens                       # Application screens
│   ├── /store                         # Redux-related files
│   ├── /types                         # Application types and interfaces
│   ├── /utils                         # Utilities
├── App.tsx                            # Entry point for the app
├── package.json                       # Project dependencies and scripts
└── README.md                          # Template's default instructions
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.x
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) or [Xcode](https://developer.apple.com/xcode/) for iOS development.

### Installation

1. **Install the Template**:
   ```bash
   npx react-native init <your-desired-project-name> --template https://github.com/Shai-E/rn-pro-base.git
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   ```bash
   cd ios && pod install && cd ..
   ```
   ```bash
   cd android && ./gradlew clean && cd ..
   ```

3. **Link Assets**: 
   Run this after adding new fonts to the assets folder

   ```bash
   npm run link-assets
   ```

4. **Start the Metro**:
   ```bash
   npm start
   ```

5. **Run the Project**:
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```

## Usage

### Components

- **`ButtonElement`**: The ButtonElement component is a customizable button for a React Native app, designed to be platform-specific (using TouchableOpacity for iOS and Pressable for Android). It supports various sizes, colors, and styles, and can optionally display a loading spinner. The button’s appearance and behavior can be controlled through props such as label, onPress, backgroundColor, borderColor, titleColor, fontSize, buttonSize, style, and setSpinner. The component leverages custom hooks for colors and utility functions for responsive dimensions.
- **`InputElement`**: The InputElement component is a highly customizable and animated input field for a React Native app. It features a floating label that animates based on the input's focus state, supports secure text entry with a toggleable visibility icon, and allows for validation with error message display. The component also provides options for adding left and right icons, adjusting the appearance and behavior through props like placeholder, secureTextEntry, validateInput, errorMessage, leftIcon, and rightIcon. The use of Reanimated enables smooth label animations, while the component adapts its styles dynamically based on the input's state and validation results.
- **`LinkElement`**: The LinkElement component is a simple and reusable link component for a React Native app. It wraps its children, which can be text or other elements, in a TouchableOpacity that opens the specified URL when pressed. The component utilizes custom colors through a hook and applies a specific style to the text to indicate it's a link. The url prop specifies the destination, and the component leverages React Native's Linking API to handle the URL navigation.
- **`ScreenContainer`**: The ScreenContainer component is a flexible and adaptive container for screens in a React Native app. It manages background color, status bar appearance, and optional scrollability. The component supports both View and SafeAreaView containers depending on the isScrollable prop. It integrates with the app's theme using custom colors and adapts to dark mode settings, adjusting the navigation bar color accordingly. Additionally, the component includes a StatusBarElement to control the status bar's style and color, and it dismisses the keyboard when tapping outside of input fields. This component is ideal for providing a consistent layout and handling screen-level configurations across the app.
- **`StatusBarElement`**: The StatusBarElement component is a simple wrapper around the React Native StatusBar component that adjusts the status bar's style and background color based on the screen's focus state. It uses the useIsFocused hook from React Navigation to ensure that the status bar is only updated when the screen is currently active. The barStyle and backgroundColor props allow customization of the status bar's appearance, making this component useful for managing the status bar in a navigation-based app. If the screen is not focused, the component returns null, leaving the status bar unchanged.
- **`SeparatorElement`**: The SeparatorElement component is a simple, customizable horizontal line used to separate content in a React Native app. It allows you to specify the color of the separator via the color prop, defaulting to the app's primary text color if none is provided. The component leverages custom colors through a hook and is styled to span the full width of its container with a default height of 1 pixel. It is useful for visually dividing sections of content in the app's layout.
- **`SwitchElement`**: The SwitchElement component is a customizable toggle switch for a React Native app that includes an animated thumb for smooth transitions. It displays a label alongside the switch and allows for an initial value and a callback function when the switch is toggled. The component uses react-native-reanimated for animating the switch thumb and adapts its colors based on the active or inactive state. The toggle behavior is controlled through the toggleSwitch function, which updates the state and triggers animations. The cb prop can be used to pass the new value back to a parent component.
- **`TextElement`**: The TextElement component is a versatile text component for a React Native app that allows for extensive customization of text styles and formatting. It supports various text decorations, such as bold, italic, underline, and strikethrough, and can also render list items with bullets or numbers. Additionally, it can style links, apply inline code formatting, and adjust text size through the fontSize prop. The component dynamically adapts its styles based on the provided props and includes a wrapper for list items to maintain proper alignment. It is ideal for displaying richly formatted text content within the app.

### State Management

The template is equipped with Redux Toolkit, Redux Saga, and Redux Persist to efficiently manage and persist the application state.

### Internationalization

Easily add new languages and handle translations using `i18next` and `react-i18next`.

### Theming

Built-in support for dark and light mode. Customize the themes in the `/src/themes` directory.

### Navigation

The navigation setup is handled by React Navigation. Modify the stack and tab navigation in the `/src/navigation` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or suggestions.

**Clone the Repository**:
   ```bash
   git clone https://github.com/Shai-E/rn-pro-base.git
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
