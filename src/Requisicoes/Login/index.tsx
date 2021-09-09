import React, { useState } from 'react';
import { Button, TextInput, View,StyleSheet, Text } from 'react-native';

import acessaBackend from '../../api/axios';
interface IResponse{
  status: string;
}
export const Login: React.FC = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [status, setStatus]= useState('');

const handleLogar = async () => {
const data ={
  email,
  password
}

  const response = await acessaBackend.post('loginsimples',data);
  const {status} = response.data as IResponse;
  if(status === 'error'){
    setStatus('Erro: acesso negado');
  }else{
    setStatus('logado');
  }
}

  return (
  
  <View style={styles.container}>
    <TextInput 
      style={styles.input}
      placeholder="Digite seu email"
      value={email}
      onChangeText={setEmail}
    />
     <TextInput 
      style={styles.input}
      placeholder="Digite seu password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={true}
    />
    <Button title="logar" onPress={handleLogar}/>

    <Text>{status}</Text>
    
  </View>
  
);
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },
  input:{
    height:54,
    width:300,
    fontSize:18,
    borderRadius:5,
    borderWidth:1,
    marginBottom:10,
    backgroundColor:'#fff',
  }
})


