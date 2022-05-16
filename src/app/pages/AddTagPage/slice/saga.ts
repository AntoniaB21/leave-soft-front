import { take, call, put, select, takeLatest, delay } from 'redux-saga/effects';
import api from 'utils/api';
import { addTagActions as actions } from '.';
import slugify from 'slugify';

function* addTag(action){
  try {
    console.log(action);
    yield call(api.post,'/api/tags',{
      name:action.payload.name,
      slug:slugify(action.payload.name),
    },{
      headers:{
        'Content-Type': 'application/json',
      }
    });
    yield put(actions.addTagSuccess({
      message:'Nouveau tag enregistré',
      messageColor:'green',
    }));
  } catch (error) {
    console.log('error', error.response.status);
    switch (error.response.status) {
      case 422:
        error.message = 'Vous avez deja des demandes en attente ou validées à ces dates'
        break;
      case 401:
        error.message = 'Votre session a expiré veuillez vous reconnecter'
        break;
      default:
        error.message = 'Une erreur est survenue. Veuillez recommencer'
        break;
    }
    yield put(actions.addTagFailure({
      message: `${error.message}`,
      messageColor:'red'
    }));
  }
}

export function* addTagSaga() {
  yield takeLatest(actions.addTagRequest.type, addTag);
}

