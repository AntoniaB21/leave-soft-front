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
import { Avatar, Badge, Button, Center, createStyles, Divider, Grid,Group,Title } from '@mantine/core';
import { Palette, Flame, SpacingHorizontal } from 'tabler-icons-react';
import { ThemeIcon, Accordion, Space, Container} from '@mantine/core';
import { CtaButtonSave } from 'app/components/Common/CtaButtonSave';

interface Props extends RouteComponentProps<any> {}

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    container:{
      backgroundColor: theme.colors.pink[0],
    },
    subtitle:{
      fontWeight:'700'
    },
    avatarGroup:{
      margin:'20px'
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
      <Title order={5}>Bonjour {data.firstName}</Title>
      <Group className={classes.avatarGroup}>
        <Avatar size="lg" color="violet" radius="xl">{data.firstName.charAt(0).toUpperCase()}{data.lastName.charAt(0).toUpperCase()}</Avatar>
        <div>
        <span className={classes.subtitle}>{data.firstName} {data.lastName}</span>
          <p>{data.jobTitle}</p>
          <p>Responsable RH</p>
        </div>
      </Group>
      <span className={classes.subtitle}>Jours restants : </span><span>{data.daysLeft}</span>
      <Divider my="sm" />
      <span className={classes.subtitle}>Jours acquis : </span><span>{data.daysEarned}</span>
      <Divider my="sm" />
      <span className={classes.subtitle}>Jours pris : </span><span>{data.daysTaken}</span>
      <Divider my="sm" />
      <span className={classes.subtitle}>Type de contrat : </span><span>{data.tagItems[0]["name"]}</span>
      <Divider my="sm" />
      {/* <p>Team: <Badge>{data.teams["name"]}</Badge></p> */}
      <span className={classes.subtitle}>Date d'entrée : </span><span>{data.dateEntrance}</span>
      <Divider my="sm" />
      <Space h="md"/>
      <Center>
        <CtaButtonSave content="Prendre un congé" target="/prendre-un-off" />
      </Center>
    </Div>
    
  );
});

const Div = styled.div``;