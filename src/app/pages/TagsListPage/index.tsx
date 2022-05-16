/**
 *
 * TagsListPage
 *
 */
import { ActionIcon, createStyles, Group, Table, Title } from '@mantine/core';
import { Popup } from 'app/components/Common/Popup';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Badge, Pencil, PlaylistAdd, Trash } from 'tabler-icons-react';
import { useTagsListPageSlice } from './slice';
import { selectTagsListPage } from './slice/selectors';
import { useHistory } from 'react-router-dom';


interface Props extends RouteComponentProps<any> {}

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    tableHead: {
      marginTop:10,
      float: 'right',
    }
  };
});
export const TagsListPage = memo((props: Props) => {
  const history = useHistory();
  const { classes } = useStyles();
  const { actions } = useTagsListPageSlice();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectTagsListPage);
  const [popupOpened, setPopupOpened] = React.useState(false);
  
  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadTagsListRequest({}));
  });

  // const AddTagItem = (tagId) => {
  //   dispatch(actions.acceptOffRequest({tagId}));
  // };

  console.log(data);
  return <Div>
  <Title order={3}>Tags</Title>
  <Group spacing={0} position="right">
  <Link to='add-tag'><ActionIcon color="green" variant="light"><PlaylistAdd/></ActionIcon></Link>
  </Group>
  <Table verticalSpacing="sm">
    <thead>
      <tr>
        <th>Nom</th>
        <th className={classes.tableHead}>Actions</th>
      </tr>
    </thead>
    <tbody>
    {data.map(item =>
    <>
    <tr key={item['@id']}>
      <td>
        {/* <span className={classes.textSpan}> */}
        <span>{item['name']}</span>
      </td>
      <td>
        <Group spacing={0} position="right">
          <>
              <ActionIcon>
                <PlaylistAdd size={16} onClick={()=> history.push(`${(item['@id'])}/addItem`)}/>
              </ActionIcon>
              <ActionIcon>
                <Pencil size={16} />
              </ActionIcon>
              <ActionIcon color="red">
                <Trash size={16} />
              </ActionIcon>
          </>
        </Group>
      </td>
    </tr>
    </>
  )}
    </tbody>
  </Table>
  
</Div>
});

const Div = styled.div``;
function setOpened(arg0: boolean) {
  throw new Error('Function not implemented.');
}
