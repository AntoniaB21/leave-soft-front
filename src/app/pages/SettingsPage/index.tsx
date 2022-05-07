/**
 *
 * SettingsPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobal } from 'app/slice/selectors';
import { Accordion } from '@mantine/core';
import { AccordionIcon } from '@chakra-ui/react';

const data = [];

const charactersList = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    label: 'Spongebob Squarepants',
    description: 'Not just a sponge',
    content: 'SpongeBob is a childish and joyful sea sponge who lives in a pineapple with his pet snail Gary in the underwater city of Bikini Bottom. He works as a fry cook at the Krusty Krab, a job which he is exceptionally skilled at and enjoys thoroughly. ',
  },
]

interface Props extends RouteComponentProps<any> {}

export const SettingsPage = memo((props: Props) => {
  const { user } = useSelector(selectGlobal);
  const dispatch = useDispatch();

  console.log('user in settings page');
  console.log(user);

  return (
    <Div>
      {/* <Accordion disableIconRotation>
          <Link to ="/users"><Accordion.Item label="Utilisateurs">
            Créez les nouveaux comptes, gérer vos utilisateurs
            </Accordion.Item>
          </Link> */}
          <Link to ="/users">Teams</Link>
          <Link to ="/tags">Tags</Link>
          <Link to ="/workflow">Workflow</Link>
          <Link to ="/offs-validation">Validation des congés</Link>
      {/* </Accordion> */}
    </Div>
  );
});

const Div = styled.div``;
