**Install the Template**:
   ```bash
   npx react-native init <your-desired-project-name> --template https://github.com/Shai-E/rn-pro-base.git
   ```

Navigate to the project folder that was created created.

**Install the Dependencies**:
   ```bash
   npm i
   cd ios && pod install && cd ..
   cd android && ./gradlew clean && cd ..
   ```

**Run the Metro**:
   ```bash
   npm start
   ```