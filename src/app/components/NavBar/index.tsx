import React from 'react';
import { CalendarTime, PlaylistAdd, Notification,Settings,Logout } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { Link, NavLink } from 'react-router-dom';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  link: string;
}

function MainLink({ icon, color, label, link }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Link to={link}>
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
        <Text variant="link" component="a" href={link}>{label}</Text>
      </Group>
      </Link>

    </UnstyledButton>
  );
}

const data = [
  { icon: <PlaylistAdd size={50} />, color: 'green', label: 'Prendre un off', link: 'prendre-un-off'},
  { icon: <CalendarTime size={50} />, color: 'blue', label: 'Calendrier', link:'calendrier'},
  { icon: <Settings size={50} />, color: 'blue', label: 'Paramétrages', link:'parametrages'},
  { icon: <Notification size={50} />, color: 'red', label: 'Notifications', link:'notifications'},
  { icon: <Logout size={50} />, color: 'white', label: 'Déconnexion', link:'logout'}
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}