/**
 *
 * AddTagChildPage
 *
 */
import { Select, Space, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { selectGlobal } from 'app/slice/selectors';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useAddTagChildSlice } from './slice';
import { selectAddTagChild } from './slice/selectors';

interface Props extends RouteComponentProps<any> {}

export const AddTagChildPage = memo((props: Props) => {
  const { actions } = useAddTagChildSlice();
  const dispatch = useDispatch();
   const { loading, message, messageColor } = useSelector(selectAddTagChild);
   const { user } = useSelector(selectGlobal);

  const form = useForm({
    initialValues: {
      tagName: '',
      name: '',
      description: '',
      days:``,
      measureUnit:``
    },
  });
  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };
  
  useEffectOnMount(() => {
    dispatch(actions.loadTagListRequest({tagId:props.match.params.id}));
  });

  const handleSubmit = async (values: typeof form['values']) => {
    // dispatch(actions.addOffRequestInProgress(values));
  };
  console.log(props.match.params.id);

  return <Div>
    <Title order={2}>Ajouter un item</Title>
    {/* <form onSubmit={form.onSubmit(handleSubmit)}> */}
    <form>
    <Select
          label="Tag"
          required
          placeholder="Pick one"
          nothingFound="No tags"
          defaultValue="label1"
          data={[
            {value:'1', label:'label1'},
            {value:'2', label:'label2'},
            {value:'3', label:'label3'},
          ]}
          // {...form.getInputProps('team')}
      />
    <Space h="md" />
    <TextInput
             required
             label="Name"
             placeholder="name"
             {...form.getInputProps('name')}
    />
    <Space h="md" />
    <TextInput
             required
             label="Description"
             placeholder="description"
             {...form.getInputProps('description')}
    />
    <Space h="md" />
    <TextInput
             required
             label="Nombre de jours requis"
             placeholder="30"
             {...form.getInputProps('days')}
    />
    <Space h="md" />
    <TextInput
             required
             label="Unité de mesure"
             placeholder="Par an ou par mois"
             {...form.getInputProps('measureUnit')}
    />

    </form>
  </Div>;
});

const Div = styled.div``;
