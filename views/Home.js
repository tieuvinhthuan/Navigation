/* eslint-disable max-len */
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {MediaProvider} from '../contexts/MediaContext';
import List from '../components/List';
import navigation from '../navigators/Navigator';


const Home = () => {
  return (
    <MediaProvider>
      <View style={styles.container}>
        <List navigation={navigation}></List>
      </View>
    </MediaProvider>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default Home;
