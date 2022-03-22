/**
 *
 * User
 *
 */
import React, { memo } from 'react';
import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import { ExitIcon } from '@radix-ui/react-icons';
import { createStyles } from '@mantine/core';

interface Props {
  username: string;
  onLogout: Function;
}

const useStyles = createStyles(theme => ({
  icon: {
    marginRight: '4px',
  },
  button: {
    color: '#C1C2C5',
    '& span': {
      verticalAlign: 'middle',
    },
    '&:hover': {
      '& > div': {
        color: 'rgb(25, 113, 194)',
      },
    },
  },
}));

export const User = memo((props: Props) => {
  const { classes } = useStyles();

  const handleLogout = () => {
    console.log('logout');
    props.onLogout();
  };

  return (
    <Group>
      <Avatar alt="no image here" />
      <div>
        <Text size="sm">{props.username}</Text>
        <UnstyledButton onClick={handleLogout} className={classes.button}>
          <Text size="sm">
            <ExitIcon className={classes.icon} />
            <span>Logout</span>
          </Text>
        </UnstyledButton>
      </div>
    </Group>
  );
});
