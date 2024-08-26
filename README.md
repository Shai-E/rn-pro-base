
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
- **Reusable Components**: Includes components like `TextElement`, `ButtonElement`, `InputElement`, `SwitchElement`, `LinkElement`, and more.

## Project Structure

```
/MyCustomTemplate
├── /android         # Android-specific files
├── /ios             # iOS-specific files
├── /src             # Application source code
│   └── /assets      # Images, fonts, etc.
│   ├── /components  # Reusable components
│   ├── /fixtures    # Constats
│   ├── /hooks       # Custom hooks
│   ├── /navigation  # Navigation setup
│   ├── /screens     # Application screens
│   ├── /store       # Redux-related files
│   ├── /types       # Application types and interfaces
│   ├── /utils       # Utilities
├── App.tsx          # Entry point for the app
├── package.json     # Project dependencies and scripts
└── README.md        # This file
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
   cd ios && pod install && cd ..
   cd android && ./gradlew clean && cd ..
   ```

3. **Link Assets**:
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

- **`TextElement`**: Custom text component with theme support.
- **`ButtonElement`**: Reusable button component with custom styling options.
- **`InputElement`**: Custom input field component.
- **`SwitchElement`**: Cross-platform switch component.
- **`LinkElement`**: Custom link component with navigation support.

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

*  **Clone the Repository**:
   ```bash
   git clone https://github.com/Shai-E/rn-pro-base.git
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
