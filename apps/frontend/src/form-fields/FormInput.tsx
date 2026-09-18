import { useController, FieldValues, UseControllerProps } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

type FormInputProps<TForm extends FieldValues> = UseControllerProps<TForm> &
  Omit<TextFieldProps, 'name' | 'defaultValue'>;

export const FormInput = <TForm extends FieldValues>({
  name,
  control,
  rules,
  shouldUnregister,
  disabled,
  ...textFieldProps
}: FormInputProps<TForm>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    shouldUnregister,
    disabled,
  });

  return (
    <TextField
      {...field}
      {...textFieldProps}
      error={!!error}
      helperText={error ? error.message : textFieldProps.helperText}
      fullWidth
      variant="outlined"
    />
  );
};