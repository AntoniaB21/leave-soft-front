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
import { NavBarComponent } from 'app/components/NavBar/Loadable';
import { Logo } from 'app/components/Logo/Loadable';
import { DashboardIcon } from '@radix-ui/react-icons';
import { NavLink } from 'react-router-dom';
import { CalendarTime, Logout, Notification, PlaylistAdd, Settings } from 'tabler-icons-react';
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
              <div>
                <Group direction="column" grow>
                <Button
                  className={classes.button}
                  component={NavLink}
                  to="/prendre-un-off"
                  activeClassName="active"
                  exact
                >
                <ThemeIcon className={classes.icon} size="lg" variant="light">
                    <PlaylistAdd />
                  </ThemeIcon>
                      Prendre un off
                      </Button>
                <Button
                  className={classes.button}
                  component={NavLink}
                  to="/calendrier"
                  activeClassName="active"
                  exact
                >
                <ThemeIcon className={classes.icon} size="lg" variant="light">
                    <CalendarTime />
                  </ThemeIcon>
                      Calendrier
                      </Button>

                      <Button
                  className={classes.button}
                  component={NavLink}
                  to="/parametrages"
                  activeClassName="active"
                  exact
                >
                <ThemeIcon className={classes.icon} size="lg" variant="light">
                    <Settings />
                  </ThemeIcon>
                  Paramétrages
                      </Button>

                      <Button
                  className={classes.button}
                  component={NavLink}
                  to="/notifications"
                  activeClassName="active"
                  exact
                >
                <ThemeIcon className={classes.icon} size="lg" variant="light">
                    <Notification />
                  </ThemeIcon>
                  Notifications
                      </Button>

                      <Button
                  className={classes.button}
                  component={NavLink}
                  to="/logout"
                  activeClassName="active"
                  exact
                >
                <ThemeIcon className={classes.icon} size="lg" variant="light">
                    <Logout />
                  </ThemeIcon>
                  Logout
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
        <div style={{ marginLeft: '220px', minHeight: '100vh' }}>
          {props.children}
        </div>
      </AppShell>
        </>
        
      );

}

// export default function AppShellDemo() {
//   return (
//     <>
//     <AppShell
//       styles={{
//         main: {
//           background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
//         },
//       }}
//       navbarOffsetBreakpoint="sm"
//       fixed
//       navbar={
//         <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
//           <NavBarComponent />
//         </Navbar>
//       }
//       header={
//         <Header height={70} p="md">
//           <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
//             <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
//               <Burger
//                 opened={opened}
//                 onClick={() => setOpened((o) => !o)}
//                 size={30}
//                 color= "#1F66A8"
//                 mr="xl"
//               />
//             </MediaQuery>

//             <Logo/>
//           </div>
//         </Header>
//       }
//     >
//       <Text>Body of the test</Text>
//     </AppShell>
//     </>
    
//   );
// }

export default AdminLayout;
