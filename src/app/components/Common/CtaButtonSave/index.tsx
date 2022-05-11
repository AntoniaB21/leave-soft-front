/**
*
* CtaButtonSave
*
*/
import { Button } from '@mantine/core';
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
  content: string;
  target: string;
}

export const CtaButtonSave = memo((props: Props) => {

  return (
  <Div>
      <a href={props.target}>
        <Button variant="outline" color={'#1F66A8'} radius="xl">
          {props.content}
        </Button>
    </a>
  </Div>
  );

});

const Div = styled.div``;
