/**
 *
 * AddTagChildPage
 *
 */
import { Button, Group, NumberInput, Select, Space, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { selectGlobal } from 'app/slice/selectors';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useTagsListPageSlice } from '../TagsListPage/slice';
import { useAddTagChildSlice } from './slice';
import { selectAddTagChild } from './slice/selectors';

interface Props extends RouteComponentProps<any> {}

export const AddTagChildPage = memo((props: Props) => {
  const { actions } = useAddTagChildSlice();
  const dispatch = useDispatch();
   const { loading, message, messageColor, data} = useSelector(selectAddTagChild);
   const { user } = useSelector(selectGlobal);

  const form = useForm({
    initialValues: {
      tag: '',
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
    // dispatch(actions.loadTagListRequest({tagId:props.match.params.id}));
    dispatch(actions.loadTagListRequest({}));
  });

  const handleSubmit = async (values: typeof form['values']) => {
    dispatch(actions.addTagChildRequest(values));
  };

  console.log(props.match.params.id);
  console.log(data);

  return <Div>
    <Title order={2}>Ajouter un item</Title>
    <form onSubmit={form.onSubmit(handleSubmit)}>
    <Select
          label="Tag"
          required
          placeholder="Pick one"
          nothingFound="No tags"
          defaultValue="label1"
          data={data.map(tag => tag['@id'])}
          {...form.getInputProps('tag')}
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
    <NumberInput
             required
             defaultValue={25}
             label="Nombre de jours requis"
             placeholder="30"
             {...form.getInputProps('days')}
    />
    <Space h="md" />
    <Select
             required
             label="Unité de mesure"
             data={[
               {value:'par an', label:'par an'},
               {value:'par mois', label:'par mois'},
             ]}
             {...form.getInputProps('measureUnit')}
    />
    <Group>
    <Link to="/tags">Retour</Link>
    <Button
                sx={{
                  marginTop: '15px',
                }}
                type="submit"
                loading={loading}
                radius="xl"
              >
                Sauvegarder
    </Button>
    </Group>
    </form>
  </Div>;
});

const Div = styled.div``;
