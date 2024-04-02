import React, {useState} from 'react';
import {View, Text, Button, Colors, Card} from 'react-native-ui-lib';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Home = ({navigation}) => {
  const [iconVisible, setIconVisible] = React.useState(false);

  const handleToggle = () => {
    setIconVisible(!iconVisible);
  };

  return (
    <View flex center backgroundColor={Colors.$backgroundPrimaryLight}>
      <Text text50 center black marginB-20>
        Hello RNUILIB with React Native
      </Text>
      <Button label="Press Me" br20 onPress={handleToggle} />

      {iconVisible && (


        <Card
        
            
            height={100}
            width={100}
            borderRadius={20}
            marginT-20
            padding-10
            backgroundColor={Colors.$primary}
            center
        >

      
          <MaterialIcons name="human-greeting" size={40} color={Colors.$textPrimary} />

        </Card>
      )}
    </View>
  );
};

export default Home;
