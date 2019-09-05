/* eslint-disable max-len */
import React from 'react';
import {
  StateProvider,
} from 'react-native';


import {navigator} from './navigators/Navigator';


const App = () => {
  return (
    <StateProvider>
      <navigator></navigator>
    </StateProvider>
  );
};

/* const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});*/

export default App;
