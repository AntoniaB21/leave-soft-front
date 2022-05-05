/**
 *
 * ProfilePage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export const ProfilePage = memo((props: Props) => {

  return (
    <Div>
      Coucou
    </Div>
  );
});

const Div = styled.div``;
