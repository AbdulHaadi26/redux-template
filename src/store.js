import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todos } from './redux/reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import Thunks from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = {
    todos
};

const rootReducer = combineReducers(reducers);

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}
const persisttedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(
    persisttedReducer, composeWithDevTools(
        applyMiddleware(Thunks)
    )
);