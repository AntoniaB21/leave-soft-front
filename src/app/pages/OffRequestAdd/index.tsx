/**
 *
 * OffRequestAdd
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Textarea, TextInput, Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/hooks';

interface Props {}
export const OffRequestAdd = memo((props: Props) => {
  return (
    <Div>
      {/*  {t(...messages.someThing())}  */}
      <Title order={2}>Prendre un off</Title>
      <form>
      <DatePicker placeholder="Pick date" label="Date de début" required />
      <DatePicker placeholder="Pick date" label="Date de fin" required />
      <Textarea placeholder="Your comment" label="Your comment"/>
      </form>
    </Div>
  );
});

const Div = styled.div``;
