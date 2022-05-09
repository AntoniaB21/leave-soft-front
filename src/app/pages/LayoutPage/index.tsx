import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  createStyles,
  Group,
  Button,
  UnstyledButton,
  ThemeIcon,
} from '@mantine/core';
import { Logo } from 'app/components/Logo/Loadable';
import { CalendarTime, Logout, Notes, Notification, PlaylistAdd, Settings, ThumbUp, UserExclamation, Users } from 'tabler-icons-react';
import { User } from 'app/components/User';
import { useSelector } from 'react-redux';
import { selectGlobal } from 'app/slice/selectors';
import { Thumb } from '@mantine/core/lib/components/ColorPicker/Thumb/Thumb';

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
  const { user } = useSelector(selectGlobal);
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
        <>
        <AppShell
          styles={{
            main: {
              background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          }}
          navbarOffsetBreakpoint="sm"
          fixed
          navbar={
            <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
              <Navbar.Section>
                <UnstyledButton
                  sx={(theme) => ({
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                    activeClassName:"active",
                    '&:hover': {
                      backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    },
                  })}
                >
                  <Group>
                    <ThemeIcon color="green" variant="light">
                      <PlaylistAdd/>
                    </ThemeIcon>
                    <Text variant="link" component="a" href="/prendre-un-off">Faire une demande</Text>
                  </Group>
                </UnstyledButton>
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
                    '&.active': {
                      backgroundColor: 'rgb(37, 38, 43)',
                    },
                  })}
                >
                  <Group>
                    <ThemeIcon color="yellow" variant="light">
                      <CalendarTime/>
                    </ThemeIcon>
                    <Text variant="link" component="a" href="/mes-offs">Mes congés</Text>
                  </Group>
                </UnstyledButton>
                
                   {
                        user.info.roles.includes('ROLE_ADMIN') &&
                        <>
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
                              '&.active': {
                                backgroundColor: 'rgb(37, 38, 43)',
                              },
                            })}
      
                            >
                            <Group>
                              <ThemeIcon color="blue" variant="light">
                                <Users/>
                              </ThemeIcon>
                              <Text variant="link" component="a" href="/users">Users</Text>
                            </Group>
                      </UnstyledButton>

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
                              '&.active': {
                                backgroundColor: 'rgb(37, 38, 43)',
                              },
                            })}
                            >
                            <Group>
                              <ThemeIcon color="red" variant="light">
                                <Users/>
                              </ThemeIcon>
                              <Text variant="link" component="a" href="/parametres">Teams</Text>
                            </Group>
                      </UnstyledButton>

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
                              '&.active': {
                                backgroundColor: 'rgb(37, 38, 43)',
                              },
                            })}
      
                            >
                            <Group>
                              <ThemeIcon color="yellow" variant="light">
                                <Notes/>
                              </ThemeIcon>
                              <Text variant="link" component="a" href="/workflow">Tags</Text>
                            </Group>
                      </UnstyledButton>

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
                              '&.active': {
                                backgroundColor: 'rgb(37, 38, 43)',
                              },
                            })}
      
                            >
                            <Group>
                              <ThemeIcon color="blue" variant="light">
                                <UserExclamation/>
                              </ThemeIcon>
                              <Text variant="link" component="a" href="/workflow">Workflows</Text>
                            </Group>
                      </UnstyledButton>
                  </>
                  }

                  {
                        (user.info.roles.includes('ROLE_MANAGER') || user.info.roles.includes('ROLE_ADMIN') ) &&
                        <>
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
                                '&.active': {
                                  backgroundColor: 'rgb(37, 38, 43)',
                                },
                              })}
                            >
                              <Group>
                                <ThemeIcon color="grey" variant="light">
                                  <ThumbUp/>
                                </ThemeIcon>
                                <Text variant="link" component="a" href="/validation-conges">Validation des congés</Text>
                              </Group>
                            </UnstyledButton>
                        </>
                  }
              </Navbar.Section>
              <Navbar.Section>
                  <User onLogout={props.onLogout} username={props.username} />
              </Navbar.Section>
            </Navbar>
          }
          header={
            <Header height={70} p="md">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size={30}
                    color= "#1F66A8"
                    mr="xl"
                  />
                </MediaQuery>
    
                <Logo/>
              </div>
            </Header>
          }
        >
          {props.children}
      </AppShell>
        </>
      );

}
export default AdminLayout;
