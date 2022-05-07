/**
 *
 * MyOffsList
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobal } from 'app/slice/selectors';
import { selectMyOffsList } from './slice/selectors';
import { useMyOffsListSlice } from './slice';

interface Props extends RouteComponentProps<any> {}

export const MyOffsList = memo((props: Props) => {
  const { actions } = useMyOffsListSlice();
  const dispatch = useDispatch();
  const { loading } = useSelector(selectMyOffsList);
  const { user } = useSelector(selectGlobal);
  
  return (
    <Div>
      Coucou mes offs list
    </Div>
  );
});

const Div = styled.div``;
