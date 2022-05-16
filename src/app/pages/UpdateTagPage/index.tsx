/**
 *
 * UpdateTagPage
 *
 */
import { Button, Group, Space, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { setDefaultNamespace } from 'i18next';
import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useTagsListPageSlice } from '../TagsListPage/slice';
import { selectTagsListPage } from '../TagsListPage/slice/selectors';

interface Props extends RouteComponentProps<any> {}

export const UpdateTagPage = memo((props: Props) => {
  const { tags } = useSelector(selectTagsListPage);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };
  
  const form = useForm({
    initialValues: {
      name:``
    },
  });
  
  const handleSubmit = async (values: typeof form['values']) => {
    // dispatch(actions.addTagRequest(values));
    alert(values['name']);
  };

  console.log('tags');
  console.log(tags.find(tag => tag['slug'] === props.match.params.slug)?.['name']);
  console.log(props);
  return <Div>
  <Title order={2}>Modifier un tag</Title>
    <form onSubmit={form.onSubmit(handleSubmit)}>
    <TextInput
          label="Name"
          defaultValue={tags.find(tag => tag['slug'] === props.match.params.slug)?.['name']}
          placeholder="Name"
          {...form.getInputProps('name')}
        />
    <Space h="md" />
    <Group>
    <Link to="/tags">Retour</Link>
      <Button
                sx={{
                  marginTop: '15px',
                }}
                type="submit"
                radius="xl"
              >
          Sauvegarder
      </Button>
    </Group>
    </form>

  </Div>;
});

const Div = styled.div``;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

