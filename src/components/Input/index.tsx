import React from 'react';
import { TextInput,StyleSheet, TextInputProps } from 'react-native';

import {maskCpf} from '../../utils/mask';

interface InputProps extends TextInputProps{
  mask: 'cep' |'phone' | 'cpf';
  inputMaskChange: (valor:string) => void;
}


export const Input: React.FC<InputProps> = ({
  mask, 
  inputMaskChange, 
  ...rest}) => {
  
function handleChange(valor:string){
    if(mask === 'cpf'){
        const value = maskCpf(valor);
        inputMaskChange(value)
    }else if (mask === 'cep'){
      //para mascara de cep
    }else if (mask === 'phone'){
      //mascara phoe
    }
}

  return (
    <TextInput 
      style={styles.input} 
      onChangeText={(cpf)=>(handleChange(cpf))}
      {...rest}
      />
  );
}
const styles = StyleSheet.create({
 
  input:{
    height:54,
    width:300,
    borderRadius:5,
    borderWidth:1,
    paddingHorizontal:10,
    marginTop:5
  },
 
})