import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const reducer = (initialState=0, action) => {
  switch( action.type )
  {
    case  'INC':
      return initialState + 1;

    case  'DEC':
      return initialState - 1;

    default:
    break;
  }

  return initialState;
}

const middleware = applyMiddleware( logger() );

const store = createStore( reducer, 1, middleware );

store.dispatch( { type: 'INC'} );
store.dispatch( { type: 'INC'} );
store.dispatch( { type: 'INC'} );
store.dispatch( { type: 'DEC'} );
store.dispatch( { type: 'DEC'} );
store.dispatch( { type: 'DEC'} );

