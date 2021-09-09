import React,{useState} from 'react';
import { View,StyleSheet,Text, TextInput, Button, Alert } from 'react-native';

import { Input } from '../components/Input';

import {validaCpf,validaEmail} from '../utils/validation';


export const ValidationManual: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorCpf, setErrorCpf] = useState('');
  
  function handleName(text:string){
    setName(text);
  }

  const InputCpf = (valor:string) => {
    setCpf(valor)
    setErrorCpf('');
  }
  
  function validaCampos(){
    let error = false;
    if(!validaEmail(email)){
      setErrorEmail("Preencha seu email corretamente")
      error=true;
    }
    if(!validaCpf(cpf)){
      setErrorCpf("Preencha seu cpf corretamente")
      error=true;
    }
    return !error;
  }

  function salvar(){
    if(validaCampos()){
      let data ={
        email,
        cpf,
        password,
        name
      }

      Alert.alert(
        'cadastro realizado com sucesso', 
        `${data.email}${data.name}`,
        [{text:'ok'}]);
    }else{
      Alert.alert('Error:preencha corretamente os campos','',[{text:'ok'}]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={name}
        style={styles.input}
        onChangeText={(valor) => handleName(valor)}
      />

      <TextInput
        placeholder="Digite seu email"
        value={email}
        style={styles.input}
        onChangeText={(valor) => {
          setEmail(valor)
          setErrorEmail('')
        }}
      />
        {
        errorEmail.length > 0 && (
          <View style={{marginVertical:10}}>
            <Text style={{color:'red'}}>{errorEmail}</Text>
          </View>
        )
      }
      <TextInput
        placeholder="Digite sua senha"
        value={password}
        style={styles.input}
        onChangeText={(valor) => setPassword(valor)}
        secureTextEntry
      />

      {/* <TextInput
        placeholder="Digite seu CPF"
        value={cpf}
        style={styles.input}
        onChangeText={(valor) => {
          setCpf(valor)
          setErrorCpf('');
        }}
      /> */}
      <Input 
        mask='cpf' 
        placeholder="Digite seu CPF"
        inputMaskChange={InputCpf}
        value={cpf} 
      />
     
      {
        errorCpf.length > 0 && (
          <View style={{marginVertical:10}}>
            <Text style={{color:'red'}}>{errorCpf}</Text>
          </View>
        )
      }

      <View style={styles.containerButton}>
        <Button title="cadastrar" onPress={salvar}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  title:{
    fontSize:16,
    textAlign:'center',
    fontWeight:'bold',
  },
  input:{
    height:54,
    width:300,
    borderRadius:5,
    borderWidth:1,
    paddingHorizontal:10,
    marginTop:5
  },
  containerButton:{
    marginTop:10,
  }
})