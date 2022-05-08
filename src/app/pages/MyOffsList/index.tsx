/**
 *
 * MyOffsList
 *
 */
import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobal } from 'app/slice/selectors';
import { selectMyOffsList } from './slice/selectors';
import { useMyOffsListSlice } from './slice';
import { selectProfilePage } from '../ProfilePage/slice/selectors';
import { ActionIcon, Badge, Button, createStyles, Group, Modal, Table, Title } from '@mantine/core';
import { Ballpen, Eye, Pencil, Trash, X } from 'tabler-icons-react';
import { Popup } from 'app/components/Common/Popup';

interface Props extends RouteComponentProps<any> {}

export const MyOffsList = memo((props: Props) => {
  const useStyles = createStyles((theme, _params, getRef) => {
    return {
      pagination: {
        marginTop: 10,
        float: 'right',
      },
      button:{
        '&:hover': {
          cursor: 'pointer',
        },
      },
      modal:{
        backgroundColor:'white',
        opacity:1
      }
    };
  });
  const { actions } = useMyOffsListSlice();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectMyOffsList);
  const { user } = useSelector(selectGlobal);
  const [opened, setOpened] = useState(false);

  const { classes } = useStyles();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadMyOffRequestInProgress({ id: user.xyz }));
  });

  function badgeColor (element) {
    switch (element) {
      case "accepted":
        return "green";
        break;
      case "rejected":
        return "red";
        break;
      case "draft":
        return "gray";
        break;
      case "pending":
        return "orange";
        break;
      default:
        return "white";
        break;
    }
  }

  const viewOffRequestDetails = item => {
    <Popup
    opened={opened}
    handleClose={() => setOpened(false)}
    size={'90%'}
    title={'PopUp ouvert'}
    overflow={'inside'}
    content={
      <>
        <p><span>Du:{new Date(item['dateStart']).toLocaleDateString()} au {new Date(item['dateEnd']).toLocaleDateString()}</span></p>
        <p><span>Nombre de jours: {item['count']}</span></p>
        <p><span>Commentaires: {item['comments']}</span></p>
      </>
    }
  >
  </Popup>
  }
  return (
    <Div>
      <Title order={3}>Mes demandes de congés</Title>
      <Table verticalSpacing="sm">
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
        <tr key={item['@id']}>
          <td>Du {new Date(item['dateStart']).toLocaleDateString()} au {new Date(item['dateEnd']).toLocaleDateString()}</td>
            <td><Badge color={badgeColor(item['status'])}>{item['status']}</Badge></td>
            <td>
            <ActionIcon color="gray"><Eye size={20} onClick={() => setOpened(true)}></Eye></ActionIcon>
            <Popup
              opened={opened}
              handleClose={() => setOpened(false)}
              size={'90%'}
              title={'PopUp ouvert'}
              overflow={'inside'}
              content={
                <>
                  <p><span>Du: {new Date(item['dateStart']).toLocaleDateString()} au {new Date(item['dateEnd']).toLocaleDateString()}</span></p>
                  <p><span>Nombre de jours: {item['count']}</span></p>
                  <p><span>Commentaires: {item['comments']}</span></p>
                </>
              }
            >
            </Popup>
            { item['status'] === 'draft' && 
                  <>
                  <Group>
                    <ActionIcon color="grey"><Pencil size={16}></Pencil></ActionIcon>
                    <ActionIcon color="red"><Trash size={16} onClick={() => setOpened(true)}></Trash></ActionIcon>
                  </Group>
                  </>
            }
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