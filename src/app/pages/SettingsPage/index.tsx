/**
 *
 * SettingsPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobal } from 'app/slice/selectors';
import { Accordion, Grid, Space, createStyles, Title, Center } from '@mantine/core';

const data = [];

interface Props extends RouteComponentProps<any> {}

const useStyles = createStyles(theme => ({
  container:{
    padding:'10px',
  }
}));

export const SettingsPage = memo((props: Props) => {
  const { user } = useSelector(selectGlobal);

  const { classes } = useStyles();
  return (
    <Div>
      <Title>Administration</Title>
    </Div>
  );
});

const Div = styled.div``;
