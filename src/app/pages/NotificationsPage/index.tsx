/**
 *
 * NotificationsPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Title } from '@mantine/core';

interface Props {}

export const NotificationsPage = memo((props: Props) => {
  return (
    <Div>
      <Title>Mes notifications</Title>
      <p>2022-04-01 : Votre demande de congés a été acceptée </p>
      <p>2022-03-20 : Votre demande de congés a été refusée </p>
    </Div>
  );
});

const Div = styled.div``;
