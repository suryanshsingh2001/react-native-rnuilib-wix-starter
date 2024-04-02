# Setting up RNUILIB with React Native CLI App

## Introduction

This guide will help you set up the RNUILIB library with a React Native CLI app. RNUILIB is a UI library for React Native that provides a set of components and themes to build beautiful and responsive apps.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node
- npm
- React Native CLI
- Android Studio or Xcode (for iOS development)

## Starting Note

If you just want to setup this within a second, you can clone the repository and start working on it. Here is the link to the repository: [RNUILIB-React-Native-CLI]()



## Create a New React Native App

Firstly create your react native app with name(here MyApp) by running the following command:
```bash
npx react-native init MyApp
```

Once the project is built, navigate to the project directory:
```bash
cd MyApp
```

## React Navigation Library Installation (Optional)

If you want to use React Navigation library in your project, you can install it by running the following command:
```bash
npm install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler
```

This will install the required dependencies for React Navigation library.
Also, you can install the stack navigator by running the following command:
```bash
npm install @react-navigation/stack
```

Note: Make sure to import react-native-gesture-handler in your project's entry file (e.g. App.js or index.js) as shown below:
```javascript
import 'react-native-gesture-handler';
```

## RNUILIB Installation

To install the RNUILIB library, run the following command:
```bash
npm install react-native-ui-lib
```

Make sure to install the peer dependencies by running the following command:

```bash
npm i react-native-reanimated react-native-gesture-handler
```

Note: Make sure to setup react-native-reanimated in `babel.config.js` file as shown below:
```javascript
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};
```

## Dive in Code

Firstly, start by building your app by running the following command:
```bash
npx react-native run-android
```
or
```bash
npx react-native run-ios
```


Once the app is built, you can start by modifying the App.js file in your project directory.

```javascript
import React from 'react';
import {Colors, Text, View} from 'react-native-ui-lib';


const App = () => {
  return (
    <View flex center backgroundColor={Colors.$backgroundPrimaryLight}>
      <Text text30 white>
        Hello RNUILIB with React Native
      </Text>
    </View>
  );
};

export default App;
```

You may look into the RNUILIB documentation for more information on how to use the library.






