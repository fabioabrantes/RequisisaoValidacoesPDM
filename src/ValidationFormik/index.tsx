/* Essa página exemplifica o uso das seguintes libs:
  - react native elements
      https://reactnativeelements.com/docs/
  - react native masked text
    https://github.com/benhurott/react-native-masked-text
  - formik
    https://formik.org/docs/overview
  - yup
    https://github.com/jquense/yup
*/
import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {TextInputMask,TextInputMasked} from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';

import validationYup from '../utils/validationYup';

interface Dados{
  email:string;
  cpf:string;
  nome:string;
  senha:string;
}
export const ValidationFormik: React.FC = () => {
 

  const salvar = (data:Dados) => {
    
     Alert.alert(
        'cadastro realizado com sucesso',
        `${data.email} ${data.cpf} ${data.nome}`,
        [{text: 'ok'}],
      );
    }

  return (

    <Formik
      initialValues={{
        nome:'',
        email:'',
        senha:'',
        cpf:'',
      }}
      onSubmit={values => salvar(values)}
      validationSchema={validationYup}
    >

      {({values,handleChange,handleSubmit,errors,touched,handleBlur,isValid})=>(
          <View style={styles.Container}>
          <Text h2>Cadastre-se </Text>
          
          <Input 
            placeholder="E-mail"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            keyboardType="email-address"
            errorMessage={(touched.email && errors.email)? errors.email:''}
           />
          
          <Input 
            placeholder="nome"
            value={values.nome}
            onChangeText={handleChange('nome')}
            onBlur={handleBlur('nome')}
            errorMessage={(touched.nome && errors.nome)? errors.nome :''}
          />
          
          <Input 
            placeholder="senha"
            value={values.senha}
            onChangeText={handleChange('senha')}
            secureTextEntry={true}
            onBlur={handleBlur('senha')}
            errorMessage={(touched.senha && errors.senha)? errors.senha:''}

          />
          

          <View style={styles.containerMask}>
              <TextInputMask 
                placeholder="cpf"
                type={'cpf'}
                value={values.cpf}
                onChangeText={handleChange('cpf')}
                keyboardType="number-pad"
                style={styles.maskedInput}
                returnKeyType="done"
                onBlur={handleBlur('cpf')}
                
              />
          </View>
          {
            touched.cpf && errors.cpf && (
              <View style={{marginVertical:10}}>
                  <Text style={{color:'red'}}>{errors.cpf}</Text>
              </View>
            )
          }
          <Button 
            title="cadastrar"
            icon={<Icon name="check" size={15} color="white"/>}
            iconRight
            onPress={()=>handleSubmit()}
            disabled={!isValid}
            titleStyle={{marginHorizontal:30}}
            buttonStyle={{marginTop:50, marginHorizontal:30}}
          />
        </View>
      )

    }
    </Formik>
  
  );

};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop:30,
    
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
  button: {
    marginTop: 80,
    width: '80%',
  },
});
