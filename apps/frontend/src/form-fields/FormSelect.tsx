import { TextField, type TextFieldProps } from "@mui/material";
import {
  useController,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import React from "react";

type FormSelectProps<TForm extends FieldValues> = UseControllerProps<
  TForm,
  FieldPath<TForm>
> &
  Omit<TextFieldProps, "name" | "defaultValue"> & {
    children: React.ReactNode;
  };

export const FormSelect = <TForm extends FieldValues>({
  name,
  control,
  rules,
  shouldUnregister,
  disabled,
  children,
  ...textFieldProps
}: FormSelectProps<TForm>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    shouldUnregister,
    disabled,
  });

  return (
    <TextField
      {...textFieldProps}
      {...field}
      select
      value={field.value ?? ""}
      inputRef={field.ref}
      error={Boolean(fieldState.error)}
      helperText={fieldState.error?.message ?? textFieldProps.helperText}
    >
      {children}
    </TextField>
  );
};