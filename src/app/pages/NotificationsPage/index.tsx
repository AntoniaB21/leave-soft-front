/**
 *
 * NotificationsPage
 *
 */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Title } from '@mantine/core';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobal } from 'app/slice/selectors';
import { selectNotificationsPage } from './slice/selectors';
import { useNotificationsPageSlice } from './slice';

interface Props extends RouteComponentProps<any> {}

export const NotificationsPage = memo((props: Props) => {
  const dispatch = useDispatch();
  const { actions } = useNotificationsPageSlice();
  const [popupOpened, setPopupOpened] = React.useState(false);
  const { data, loading, message } = useSelector(selectNotificationsPage);
  const { user } = useSelector(selectGlobal);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadNotificationsRequest({ id: user.xyz }));
  });

  console.log('data in notifications page');
  console.log(data[0]["message"]);
  
  return (
    <Div>
      <Title>Mes notifications</Title>
      <p>{message}</p>
      <p>{data.map((item) => 
        <>
          <p>{item['message']}</p>
          <p>{item['createdAt']}</p>
        </>
      )}</p>
    </Div>
  );
});

const Div = styled.div``;
