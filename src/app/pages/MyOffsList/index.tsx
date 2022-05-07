/**
 *
 * MyOffsList
 *
 */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobal } from 'app/slice/selectors';
import { selectMyOffsList } from './slice/selectors';
import { useMyOffsListSlice } from './slice';
import { selectProfilePage } from '../ProfilePage/slice/selectors';
import { Badge, Table, Title } from '@mantine/core';
import { Ballpen, Eye, Pencil, X } from 'tabler-icons-react';
interface Props extends RouteComponentProps<any> {}

export const MyOffsList = memo((props: Props) => {
  const { actions } = useMyOffsListSlice();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectMyOffsList);
  const { user } = useSelector(selectGlobal);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadMyOffRequestInProgress({ id: user.xyz }));
  });

  return (
    <Div>
      <Title order={3}>Mes demandes de congés</Title>
      <Table>
        <thead>
          <tr>
            <th>Dates</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {data.map(item =>
        <>
        <tr>
          <td>Du {item['dateStart']} au {item['dateEnd']}</td>
            <td><Badge>{item['status']}</Badge></td>
            <td>
              <Eye size={20}></Eye><Pencil size={20}></Pencil><X size={20}></X>
          </td>
        </tr>
        </>
      )}
        </tbody>
      </Table>
      
    </Div>
  );
});

const Div = styled.div``;
