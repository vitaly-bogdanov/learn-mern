import React, { FC, useState } from 'react';
import IRouteProps from '../../abstractions/interfaces/IRouteProps';
import TUserFormData from '../../abstractions/types/TUserFormData';
import { useForm } from "react-hook-form";
import UserForm from '../../components/userForm/UserForm';
import serverAction from '../../serverAction';
import { AxiosResponse } from 'axios';

interface Props extends IRouteProps {}

const AuthorizationPage: FC<Props> = ({ title }) => {
  const { register, errors, handleSubmit } = useForm<TUserFormData>();
  const [formData, setFormData] = useState<TUserFormData>({email: '', password: ''})

  const onSubmit = async (data: TUserFormData) : Promise<void> => {
    await serverAction({
      method: 'POST',
      url: '/authorization', 
      data
    }, (response: AxiosResponse) => {
      console.dir(response);
      setFormData({email: '', password: ''});
    }, (error: Error) => {
      console.dir(error);
    });
  }

  return (
    <>
      <h1>{ title }</h1>
      <UserForm 
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        register={register}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  )
}

export default AuthorizationPage;