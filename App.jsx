import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, FlatList, Text } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';


export default function App() {
  const [list, setList] = useState([
    {text: 'qwerty', key: '1'},
    {text: 'uii', key: '2'},
    {text: 'dd', key: '3'},
    {text: 'lll', key: '4'},
  ])

  const addTask = (text) => {
    if (text) {
      setList((list)=> {
        return [
          {text: text, key: Math.random().toString()},
          ...list
        ]
      })
    }

  }

  const deleteTask = (key) => {
    setList((list) => {
      return list.filter(item => item.key !== key)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Form addTask={addTask} />
      <View>
        <FlatList data={list} renderItem={({ item }) => (
          <ListItem el={item} deleteTask={deleteTask} />
        )} />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});
