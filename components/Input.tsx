import {Input as RNInput} from '@rneui/themed';
import {Controller} from 'react-hook-form';

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  rules?: any;
  control: any;
}

export default function Input(props: InputProps) {
  const {label, rules, placeholder, keyboardType, name, control} = props;
  return (
    <Controller
      rules={rules}
      control={control}
      render={({field: {value, onChange}, fieldState}) => (
        <RNInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChange}
          label={label}
          disabledInputStyle={{
            opacity: 0.8,
          }}
          keyboardType={keyboardType}
          returnKeyType="done"
          errorStyle={{color: 'red'}}
          errorMessage={fieldState.error && fieldState.error.message}
          {...props}
        />
      )}
      name={name}
    />
  );
}
