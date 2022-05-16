/**
 *
 * AddTagPage
 *
 */
import { Group, Space, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { CtaButtonSave } from 'app/components/Common/CtaButtonSave';
import { selectGlobal } from 'app/slice/selectors';
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useAddTagSlice } from './slice';
import { selectAddTag } from './slice/selectors';

interface Props extends RouteComponentProps<any> {}

export const AddTagPage = memo((props: Props) => {
  const { user } = useSelector(selectGlobal);
  const dispatch = useDispatch();
  const { actions } = useAddTagSlice();
  const { loading, message, messageColor } = useSelector(selectAddTag);

  const form = useForm({
    initialValues: {
      name:``
    },
  });

  const handleSubmit = async (values: typeof form['values']) => {
    console.log(values);
    dispatch(actions.addTagRequest(values));
  };
  return <Div>
    <Title order={2}>Ajouter un tag</Title>
    <form>
    <TextInput
          required
          label="Name"
          placeholder="Name"
          {...form.getInputProps('name')}
        />
    <Space h="md" />
    <Group>
    <Link to="/tags">Retour</Link>
    <CtaButtonSave content={'Sauvegarder'} target={'/tags'}/>
    </Group>
    </form>
  </Div>;
});

const Div = styled.div``;
