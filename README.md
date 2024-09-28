# React Native RNUILib Starter

[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2024-orange.svg)](https://hacktoberfest.com/)
[![Blog](https://img.shields.io/badge/Dev.to-2024-black.svg)](https://dev.to/suryanshsingh2001/how-to-setup-rnuilibwix-for-a-react-native-cli-project-36f)
[![React Native](https://img.shields.io/badge/React%20Native-v0.70+-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![RNUILib](https://img.shields.io/badge/RNUILib-v7.0+-00BFFF)](https://wix.github.io/react-native-ui-lib/)
[![React Navigation](https://img.shields.io/badge/React%20Navigation-v6.0+-6b52ae)](https://reactnavigation.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository provides a quick starter project for React Native using RNUILib (React Native UI Library) with React Native CLI, along with React Navigation integration. It's perfect for jumpstarting your React Native development with a solid foundation.

## 🚀 Features

- React Native CLI setup
- React Navigation pre-configured
- RNUILib (React Native UI Library) integration
- React Native Vector Icons setup
- Ready-to-use project structure

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-native-rnuilib-starter.git
   cd react-native-rnuilib-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Install iOS pods (if developing for iOS):
   ```bash
   cd ios && pod install && cd ..
   ```

## 🚀 Running the App

### For Android:

```bash
npx react-native run-android
```

### For iOS:

```bash
npx react-native run-ios
```

## 📁 Project Structure

```
react-native-rnuilib-starter/
├── src/
│   ├── components/
│   ├── navigation/
│   │   └── MainStackNavigator.js
│   ├── screens/
│   └── theme/
├── App.tsx
├── package.json
└── README.md
```

## 🎨 Customization

- The main app configuration is in `App.tsx`.
- Navigate to `src/navigation/MainStackNavigator.js` to modify the app's navigation structure.
- Add new screens in the `src/screens/` directory.
- Customize the app's theme in the `src/theme/` directory.

## 🤝 Contributing

Contributions to improve this starter template are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Native](https://reactnative.dev/)
- [RNUILib](https://wix.github.io/react-native-ui-lib/)
- [React Navigation](https://reactnavigation.org/)

## 📬 Contact

Suryansh Singh - [@suryansh_si](SuryanshSi2001)

Project Link: [https://github.com/suryanshsingh2001/react-native-rnuilib-wix-starter/]([https://github.com/yourusername/react-native-rnuilib-starter](https://github.com/suryanshsingh2001/react-native-rnuilib-wix-starter/))

---

Happy coding! 🎉
