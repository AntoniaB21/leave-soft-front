/**
 *
 * ValidationListPage
 *
 */
import { ActionIcon, Group, Space, Table, Title } from '@mantine/core';
import { useValidatedState } from '@mantine/hooks';
import { Popup } from 'app/components/Common/Popup';
import { selectGlobal } from 'app/slice/selectors';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Badge, Eye, ThumbDown, ThumbUp } from 'tabler-icons-react';
import { useValidationListSlice } from './slice';
import { selectValidationList } from './slice/selectors';

interface Props extends RouteComponentProps<any> {}

export const ValidationListPage = memo((props: Props) => {
  const { actions } = useValidationListSlice();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectValidationList);
  const { user } = useSelector(selectGlobal);
  
  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.getValidationListRequest({ id: user.xyz }));
  });

  console.log(data);

  return <Div>
    <Title order={2}>Validation des congés</Title>
    <Space h="md" />
    <Table>
      <thead>
      <tr>
        <th>Dates</th>
        <th>Salarié</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        {data !== null &&
        data.map(item =>
        <>
      <tr key={item['@id']}>
        <td>
          <span>
            Du {new Date(item['dateStart']).toLocaleDateString()} au {new Date(item['dateEnd']).toLocaleDateString()}
          </span>
            </td>
          <td>{item['user']['firstName']}{item['user']['lastName']}</td>
          <td>
          <Group spacing={0} position="right"></Group>
        
          <ActionIcon color="green">
              <ThumbUp size={20}></ThumbUp>
          </ActionIcon>
          <ActionIcon color="red">
              <ThumbDown size={20}></ThumbDown>
          </ActionIcon>

        </td>
      </tr>
  </>
)}
        {data === [] &&
        <p>Pas de demande de congés</p>}
      </tbody>
    </Table>
  </Div>;
});

const Div = styled.div``;

