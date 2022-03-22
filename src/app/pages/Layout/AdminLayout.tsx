/**
 *
 * AdminLayout
 *
 */
import React from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Title,
  Button,
  Group,
  ThemeIcon,
} from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { createStyles } from '@mantine/core';
import { DashboardIcon, GlobeIcon, ArchiveIcon } from '@radix-ui/react-icons';

import { User } from 'app/components/User';

const useStyles = createStyles(theme => ({
  icon: {
    marginRight: theme.spacing.sm,
  },
  button: {
    '& > div': {
      justifyContent: 'flex-start',
    },
    '&.active': {
      backgroundColor: 'rgb(37, 38, 43)',
    },
    padding: '10px 18px',
    height: '100%',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgb(37, 38, 43)',
    },
  },
}));

const AdminLayout = props => {
  const { classes } = useStyles();

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 250 }}>
          <Navbar.Section grow mt="lg">
            <div>
              <Group direction="column" grow>
                <Button
                  className={classes.button}
                  component={NavLink}
                  to="/"
                  activeClassName="active"
                  exact
                >
                  <ThemeIcon className={classes.icon} size="lg" variant="light">
                    <DashboardIcon />
                  </ThemeIcon>
                  Dashboard
                </Button>
                <Button
                  className={classes.button}
                  component={NavLink}
                  to="/campaigns"
                  exact
                >
                  <ThemeIcon
                    className={classes.icon}
                    size="lg"
                    variant="light"
                    color="red"
                  >
                    <ArchiveIcon />
                  </ThemeIcon>
                  Campaigns
                </Button>
                <Button
                  className={classes.button}
                  component={NavLink}
                  to="/websites"
                  exact
                >
                  <ThemeIcon
                    className={classes.icon}
                    size="lg"
                    variant="light"
                    color="grape"
                  >
                    <GlobeIcon />
                  </ThemeIcon>
                  Websites
                </Button>
              </Group>
            </div>
          </Navbar.Section>
          <Navbar.Section>
            <User onLogout={props.onLogout} username={props.username} />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} >
          <Title order={2}>DocDisplay Manager</Title>
        </Header>
      }
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {props.children}
    </AppShell>
  );
};

export default AdminLayout;
