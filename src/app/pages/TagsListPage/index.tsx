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
import { useModals } from '@mantine/modals';

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
  const { tags, loading } = useSelector(selectTagsListPage);
  const [popupOpened, setPopupOpened] = React.useState(false);
  
  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };
  
  useEffectOnMount(() => {
    dispatch(actions.loadTagsListRequest({}));
  });
  

  const deleteTagAction = (itemId) => {
    dispatch(actions.deleteTagAction({itemId}));
  };
  
  const modals = useModals();

  const openConfirmModal = (itemId: never) => modals.openConfirmModal({
    title: 'Supprimer un tag',
    children: (
      <p>
        Supprimer un tag entraînera la suppression de ses tags enfants. Cette action est irreversible.
        Voulez-vous vraiment continuer ?
      </p>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => deleteTagAction(itemId),
  });
  
  // const AddTagItem = (tagId) => {
  //   dispatch(actions.acceptOffRequest({tagId}));
  // };

  console.log(tags);

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
    {tags.map(item =>
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
                <PlaylistAdd size={16} onClick={()=> history.push(`${(item['slug'])}/addItem`)}/>
              </ActionIcon>
              <ActionIcon>
                <Pencil size={16} onClick={()=> history.push(`/tags/${(item['slug'])}/edit`)}/>
              </ActionIcon>
              <ActionIcon color="red">
                <Trash size={16} onClick={() => openConfirmModal(item['@id'])}/>
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

