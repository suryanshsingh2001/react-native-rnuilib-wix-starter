import React from 'react';
import {Button, Colors, Text, View} from 'react-native-ui-lib';


const App = () => {
  return (
    <View flex  center backgroundColor={Colors.$backgroundPrimaryLight}>
      <Text text50 center black marginB-20>
        Hello RNUILIB with React Native
      </Text>

      <Button label="Press Me" br20/>
    </View>
  );
};

export default App;
