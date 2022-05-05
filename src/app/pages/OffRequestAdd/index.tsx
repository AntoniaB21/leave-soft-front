/**
 *
 * OffRequestAdd
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Button, Textarea, TextInput, Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobal } from 'app/slice/selectors';
import { useOffRequestAddSlice } from './slice';
import { selectOffRequestAdd } from './slice/selectors';

interface Props {}
export const OffRequestAdd = memo((props: Props) => {
  const { actions } = useOffRequestAddSlice();
  const dispatch = useDispatch();
   const { loading } = useSelector(selectOffRequestAdd);
   const { user } = useSelector(selectGlobal); // get the user in global state
 
  console.log('props in request add page');
  console.log(props);
  console.log('user');
  console.log(user.xyz);
  return (
    <Div>
      {/*  {t(...messages.someThing())}  */}
      <Title order={2}>Prendre un off</Title>
      <form>
      <DatePicker placeholder="Pick date" label="Date de début" required />
      <DatePicker placeholder="Pick date" label="Date de fin" required />
      <Textarea placeholder="Your comment" label="Your comment"/>
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
