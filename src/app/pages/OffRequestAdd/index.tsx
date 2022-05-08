/**
 *
 * OffRequestAdd
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Alert, Button, Textarea, TextInput, Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/hooks';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobal } from 'app/slice/selectors';
import { useOffRequestAddSlice } from './slice';
import { selectOffRequestAdd } from './slice/selectors';
import { AlertCircle } from 'tabler-icons-react';

interface Props extends RouteComponentProps<any> {}

export const OffRequestAdd = memo((props: Props) => {
  const { actions } = useOffRequestAddSlice();
  const dispatch = useDispatch();
   const { loading, message, messageColor } = useSelector(selectOffRequestAdd);
   const { user } = useSelector(selectGlobal); // get the user in global state

  const form = useForm({
    initialValues: {
      dateStart: '',
      dateEnd: '',
      comments: '',
      user:``,
    },
  });

  const handleSubmit = async (values: typeof form['values']) => {
    console.log('values');
    console.log(values);
    dispatch(actions.addOffRequestInProgress(values));
  };
  console.log({message});
  return (
    <Div>
      {
        message != '' &&
          <Alert icon={<AlertCircle size={16} />} title="Message" color={messageColor}>
            {message}
          </Alert>
      }
      <Title order={2}>Prendre un congés</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
      <DatePicker 
          allowFreeInput
          placeholder="Pick date"
          label="Date de début"
          required
          {...form.getInputProps('dateStart')}
      />
      <DatePicker 
          placeholder="Pick date"
          label="Date de fin"
          required
          {...form.getInputProps('dateEnd')}
      />
      <Textarea 
          placeholder="Your comment"
          label="Your comment"
          {...form.getInputProps('comments')}
      />
      
      <Button
               sx={{
                 marginTop: '15px',
               }}
               type="submit"
               loading={loading}
             >
              Sauvegarder
      </Button>
      <a href={`/profile/${user.xyz}`}>Retour à l'accueil</a>
      </form>
    </Div>
  );
});

const Div = styled.div``;
