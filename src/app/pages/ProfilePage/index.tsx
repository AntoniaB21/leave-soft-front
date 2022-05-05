/**
 *
 * ProfilePage
 *
 */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { RouteComponentProps } from 'react-router';
import { useProfilePageSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectProfilePage } from './slice/selectors';

interface Props extends RouteComponentProps<any> {}

export const ProfilePage = memo((props: Props) => {
  const { actions } = useProfilePageSlice(); // lui
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectProfilePage);
  // const [popupOpened, setPopupOpened] = React.useState(false);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadUserInfoRequest({ id: props.match.params.id }));
  });

  return (
      <h1>Coucou</h1>
  );
});

const Div = styled.div``;
