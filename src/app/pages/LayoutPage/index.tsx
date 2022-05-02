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
} from '@mantine/core';
import { NavBarComponent } from 'app/components/NavBar/Loadable';
import { Logo } from 'app/components/Logo/Loadable';

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
              <NavBarComponent />
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