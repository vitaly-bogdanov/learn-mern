import React, { FC, ChangeEvent, Dispatch , SetStateAction} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DeepMap, FieldError } from "react-hook-form";
import TUserFormData from '../../abstractions/types/TUserFormData';
import classes from './userForm.module.scss';

interface Props {
  handleSubmit: Function,
  onSubmit(data: TUserFormData): void,
  errors: DeepMap<TUserFormData,  FieldError>,
  register: Function,
  formData: TUserFormData,
  setFormData: Dispatch<SetStateAction<TUserFormData>>
}

const UserForm: FC<Props> = ({ handleSubmit, errors, register, onSubmit, formData, setFormData }) => {

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.userForm} noValidate autoComplete="off">
      <div>
        <TextField
          error={!!errors.email}
          name="email"
          id="outlined-error-helper-text"
          label="Email"
          value={formData.email}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setFormData((prev: TUserFormData) => {
              return {...prev, email: event.target.value}
            }) 
          }}
          helperText={errors.email?.message}
          variant="outlined"
          inputRef={register({
            required: 'Поле обязательно для заполнения',
            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, message: 'Некорректный email' }
          })}
        />
      </div>
      <div>
        <TextField
          error={!!errors.password}
          name="password"
          id="outlined-error-helper-text"
          label="Password"
          value={formData.password}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => {
              return {...prev, password: event.target.value}
            })
          }}
          helperText={errors.password?.message}
          variant="outlined"
          inputRef={register({
            required: 'Поле обязательно для заполнения',
            maxLength: { value: 10, message: 'Максимальная длинна 10 символов'},
            minLength: { value: 5, message: 'Миниальная длинна 5 символов'}
          })}
        />
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary">
          Primary
        </Button>
      </div>
    </form>
  );
}

export default UserForm;