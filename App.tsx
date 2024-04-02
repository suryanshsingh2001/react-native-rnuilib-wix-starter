import React from 'react';
import MainStackNavigator from './routes/MainStackNavigator';
const App = () => {
  const [iconVisible, setIconVisible] = React.useState(false);
  return (
   <MainStackNavigator/>
  );
};

export default App;
