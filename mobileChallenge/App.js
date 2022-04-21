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
        <View style={{flex: 1, padding: 24}}>
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
              <Text style={{fontSize: 18, color: 'green', textAlign: 'center'}}>
                {data.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'green',
                  textAlign: 'center',
                  paddingBottom: 10,
                }}
              >
                Articles:
              </Text>
              {/* <FlatList
                data={data.articles}
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                  <Text>{item.id + '. ' + item.title}</Text>
                )}
              /> */}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
