/**
 *
 * SaveButton
 *
 */
import { Button } from '@mantine/core';
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {}

export function SaveButton(props) {
  return <Div>
    <Button variant="outline" color={props.color} radius="xl">
      {props.content}
    </Button>
  </Div>;
};

const Div = styled.div``;
