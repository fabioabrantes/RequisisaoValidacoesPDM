import React from 'react';
import { StyleSheet, SafeAreaView,Text} from 'react-native';

import { Login } from './src/Requisicoes/Login';
import { ValidationManual } from './src/ValidationManual/Index';
import { Validation2 } from './src/Validation2';
import { ValidationFormik } from './src/ValidationFormik';
import { ValidationReactHookForm } from './src/ValidationReactHookForm';




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Login/> */}
      {/* <ValidationManual/> */}
      {/* <Validation2 /> */}
     {/*  <ValidationFormik /> */}
     <ValidationReactHookForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
