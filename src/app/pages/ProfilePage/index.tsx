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
import { Badge, Button, createStyles, Grid,Title } from '@mantine/core';
import { Palette, Flame } from 'tabler-icons-react';
import { ThemeIcon, Accordion, Space, Container} from '@mantine/core';

interface Props extends RouteComponentProps<any> {}

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    container:{
      backgroundColor: theme.colors.pink[0],
    }
  };
});

export const ProfilePage = memo((props: Props) => {
  const { classes } = useStyles();
  const { actions } = useProfilePageSlice();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectProfilePage);
  const [popupOpened, setPopupOpened] = React.useState(false);
  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadUserInfoRequest({ id: props.match.params.id }));
  });

  return (
    <Div>
        <p>Bonjour</p>
          <Title order={5}>{data.firstName} {data.lastName}</Title>
          <p>Ce mois-ci il vous reste </p>
          <Title order={2}>{data.daysLeft}</Title>
          <p>jours</p>

          <a href="/prendre-un-off"><Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            Prendre un off
          </Button></a>
      <Space h="md" />

      <Accordion disableIconRotation>
      <Accordion.Item
        label="Statistiques"
        icon={
          <ThemeIcon color="blue" variant="light">
            <Palette size={14} />
          </ThemeIcon>
        }
      >
         <p>Jours restants : {data.daysLeft}</p>
         <p>Jours acquis : {data.daysEarned}</p>
         <p>Jours pris : {data.daysTaken}</p>
      </Accordion.Item>

      <Accordion.Item
        label="Informations personnelles"
        icon={
          <ThemeIcon color="blue" variant="light">
            <Flame size={14} />
          </ThemeIcon>
        }
      >
      <p>Team: <Badge>{data.teams["name"]}</Badge></p>
      <p>Contrat: <Badge>{data.tagItems[0]["name"]}</Badge></p>
      <p>Depuis : {data.dateEntrance}</p>
      </Accordion.Item>
      <Accordion.Item
        label="Votre dernière demande de congés"
        icon={
          <ThemeIcon color="blue" variant="light">
            <Flame size={14} />
          </ThemeIcon>
        }
      >
        Pour visualiser vos demandes de congés
        <a href="/mes-demandes"><Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            Mes demandes
          </Button></a>
      </Accordion.Item>
      
    </Accordion>

    </Div>
    
  );
});

const Div = styled.div``;