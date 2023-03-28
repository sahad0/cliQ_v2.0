import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Router from './src/router/router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {persistReducer,persistStore} from 'redux-persist';
import cartReducer from './src/store/store';
import channelParticipantReducer from './src/store/participantsStore';
import colorReducer from './src/store/colorStore';
import messageReducer from './src/store/messageStore';
import axios from 'axios';




const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  auth : cartReducer,
  channelParticipant : channelParticipantReducer,
  color: colorReducer,
  message:messageReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
      cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
const persistor = persistStore(store);





export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



axios.defaults.baseURL = 'http://192.168.1.108:6969/api';



function App(): JSX.Element {


  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;

