/* Essa página exemplifica o uso das seguintes libs:
  - react native elements
      https://reactnativeelements.com/docs/
  - react native masked text
    https://github.com/benhurott/react-native-masked-text
*/
import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {TextInputMask,TextInputMasked} from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useForm, Controller} from'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {InputForm} from '../components/InputForm';
import validationYup from '../utils/validationYup';

interface FormData{
  email:string;
  cpf:string;
  nome:string;
  senha:string;
}

export const ValidationReactHookForm: React.FC = () => {
    const {
      control, 
      handleSubmit,
      formState: { errors } 
    } = useForm({
      resolver:yupResolver(validationYup)
    });

  const salvar = (formData:FormData) => {
    Alert.alert(
      'cadastro realizado com sucesso',
      `${formData.email} ${formData.cpf} ${formData.nome}`,
      [{text: 'ok'}],
    );
  };
  return (
    <View style={styles.Container}>
      <Text h2>Cadastre-se </Text>
      <InputForm 
        name="email"
        control={control}
        placeholder="E-mail"
        keyboardType="email-address"
        error={errors.email? errors.email.message :''}
      />

      <InputForm 
        name="nome"
        control={control}
        placeholder="Nome"
        error={errors.nome? errors.nome.message :''}
      />
      
      <InputForm 
        name="senha"
        control={control}
        placeholder="Senha"
        error={errors.senha? errors.senha.message :''}
      />

      <Controller
          control={control}
          render={({field:{onChange, onBlur,value}})=>(
            <View style={styles.containerMask}>
              <TextInputMask 
                placeholder="cpf"
                type={'cpf'}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="number-pad"
                style={styles.maskedInput}        
              />
            </View>
          )}
          name="cpf"
        />
      {
        errors.cpf && (
          <View style={{marginVertical:10}}>
              <Text style={{color:'red'}}>{errors.cpf.message}</Text>
          </View>
        )
      }
      <Button 
        title="cadastrar"
        icon={<Icon name="check" size={15} color="white"/>}
        iconRight
        onPress={handleSubmit(salvar)}
        titleStyle={{marginHorizontal:30}}
        buttonStyle={{marginTop:50, marginHorizontal:30}}
      />
     </View>

  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    
  },
  containerMask: {
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  errorMessage: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    color: '#f00',
    fontSize: 12,
  },
  maskedInput: {
    flex: 1,
    height: 40,
    fontSize: 18,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignSelf: 'flex-start',
  },
 
});
