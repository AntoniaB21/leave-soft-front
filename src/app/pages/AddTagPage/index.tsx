/**
 *
 * AddTagPage
 *
 */
import { Button, Group, Space, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { CtaButtonSave } from 'app/components/Common/CtaButtonSave';
import { selectGlobal } from 'app/slice/selectors';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import slugify from 'slugify';
import styled from 'styled-components/macro';
import { useAddTagSlice } from './slice';
import { selectAddTag } from './slice/selectors';

interface Props extends RouteComponentProps<any> {}

export const AddTagPage = memo((props: Props) => {
  const { user } = useSelector(selectGlobal);
  const dispatch = useDispatch();
  const { actions } = useAddTagSlice();
  const { loading, message, messageColor } = useSelector(selectAddTag);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };
  
  const form = useForm({
    initialValues: {
      name:``
    },
  });

  const handleSubmit = async (values: typeof form['values']) => {
    dispatch(actions.addTagRequest(values));
  };
  return <Div>
    <Title order={2}>Ajouter un tag</Title>
    <form onSubmit={form.onSubmit(handleSubmit)}>
    <TextInput
          required
          label="Name"
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
