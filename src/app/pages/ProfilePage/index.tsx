import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { NavBarComponent } from 'app/components/NavBar/Loadable';
import { Logo } from 'app/components/Logo/Loadable';
import { CustomHeader } from 'app/components/Header';

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return <div>ProfilePageContent</div>
}