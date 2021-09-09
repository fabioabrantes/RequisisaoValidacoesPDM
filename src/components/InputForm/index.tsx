import React from 'react';
import { View } from 'react-native';
import {Control, Controller} from'react-hook-form';
import {Input,InputProps} from 'react-native-elements';

interface Props extends InputProps{
  control:Control;
  name:string;
  error:string
}
export const InputForm: React.FC<Props> = ({
  control,
  name,
  error,
  ...rest
}) => {
  return (
    <>
      <Controller 
        control={control}
        render={({field:{onChange, onBlur,value}})=>(
          <Input 
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            errorMessage={error}
            {...rest}
          />
        )}
        name={name}
      />
    </>
  );
}
