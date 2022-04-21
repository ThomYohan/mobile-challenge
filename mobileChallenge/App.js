/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/users.json?page=20&count=5&key=930279b0')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView
    // style={backgroundStyle}
    >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // style={backgroundStyle}
      >
        <Header />
        <View style={sectionContainer}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Text style={sectionTitle}>Users</Text>
              <FlatList
                data={data.name}
                keyExtractor={({id}, index) => id}
                style={sectionDescription}
                renderItem={({item}) => (
                  <Text>{item.id + '. ' + item.name}</Text>
                )}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    padding: 24,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    fontSize: 13,
    fontWeight: '400',
    marginTop: 8,
  },
});

export default App;
