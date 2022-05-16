/**
 *
 * UsersListPage
 *
 */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components/macro';
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
  Title,
  Button,
  ThemeIcon
} from '@mantine/core';
import { Eye, Pencil, PlaylistAdd, Trash } from 'tabler-icons-react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useUsersListPageSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsersListPage } from './slice/selectors';
import { selectGlobal } from 'app/slice/selectors';

interface Props extends RouteComponentProps<any> {}

const jobColors = {
  engineer: 'blue',
  manager: 'cyan',
  designer: 'pink',
};

export const UsersListPage = memo((props: Props) => {
  const { actions } = useUsersListPageSlice();
  const dispatch = useDispatch();
  const { data, loading, message } = useSelector(selectUsersListPage);
  const { user } = useSelector(selectGlobal);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadUsersListRequest(true));
  });
  
  console.log({data});

  const rows = data.map((item) => (
    <tr key={item['@id']}>
      <td>
        <Group spacing={0}>
          <Text size="xs" weight={200}>
            {item['firstName']} {item['lastName']}
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          color="green"
        >
          {item['teams']['name']}
        </Badge>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <Pencil size={16} />
          </ActionIcon>
          <ActionIcon color="red">
            <Trash size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));
  return <><Div>
    <ScrollArea>
    <Title order={2}>Utilisateurs</Title>
    <Group spacing={0} position="right">
        <ActionIcon color="green" variant="light" aria-label="Settings" component={Link} to='/add-user'><PlaylistAdd/></ActionIcon>
    </Group>
    <Table>
        <thead>
          <tr>
            <th>Salarié</th>
            <th>Team</th>
            <th>Actions</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  </Div>
  </>
});

const Div = styled.div`
padding:10px,
`;
