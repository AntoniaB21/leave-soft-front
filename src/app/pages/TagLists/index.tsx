import React, { memo, useEffect, useMemo } from 'react';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
} from '@chakra-ui/react';
import NavBar from 'app/components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { useWebsitesPageSlice } from './slice';
import { selectWebsitesPage } from './slice/selectors';
interface Props {}

export const WebsitesPage = memo((props: Props) => {
  const { actions } = useWebsitesPageSlice();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectWebsitesPage);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(actions.loadWebsitesRequest(true));
  });

  const columns = useMemo(
    () => [
      {
        Header: '#ID',
        accessor: 'id',
        disableFilters: true,
      },
      {
        Header: 'Name',
        accessor: 'name',
        disableFilters: true,
      },
      {
        id: 'details',
        Header: 'Actions',
        disableSortBy: true,
        sortable: false,
        ilterable: false,
        accessor: 'id',
        disableFilters: true,

        Cell: ({ value }) => {
          return <Button>Edit</Button>;
        },
      },
    ],
    [],
  );
  
  return (
    <div>
      <NavBar/>
      <Heading order={2}>Tags</Heading>
      {!loading && (
        <Table variant='simple'>
           <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                 
              </Tbody>
        </Table>
      )}
    </div>
  );
});
