/**
 *
 * AddUserPage
 *
 */
import { Select, Space, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { SaveButton } from 'app/components/Common/SaveButton';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useAddUserPageSlice } from './slice';

type NewType = RouteComponentProps<any>;

interface Props extends NewType {}

export const AddUserPage = memo((props: Props) => {
const dispatch = useDispatch();
  const { actions } = useAddUserPageSlice();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      team: '',
      contrat:``,
    },
  });
  
  const handleSubmit = async (values: typeof form['values']) => {
    console.log('add user values');
    console.log(values);
    dispatch(actions.addUserRequest(values));
  };
  
  return <Div>
      <Title order={2}>Ajouter un utilisateur</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
          required
          label="Email"
          placeholder="user@email.com"
          {...form.getInputProps('email')}
        />
      <Space h="md" />

      <TextInput
          required
          label="Password"
          placeholder="A safe default password"
          {...form.getInputProps('password')}
      />
      <Space h="md" />

      <Select
          label="Equipe"
          placeholder="Pick one"
          data={[
            { value: 'react', label: 'React' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
          ]}
          {...form.getInputProps('team')}
      />
      <Space h="md" />
      <Select
          label="Type de contrat"
          placeholder="Pick one"
          data={[
            { value: 'CDI', label: 'CDI' },
            { value: 'CDD', label: 'CDD' },
          ]}
          {...form.getInputProps('contrat')}
      />
      <Space h="md" />
      <SaveButton color="blue" content="Ajouter un utilisateur" />
      </form>
  </Div>;
});

const Div = styled.div``;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

