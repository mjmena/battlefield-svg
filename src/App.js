import React from 'react';

import {Provider} from 'react-redux';
import PropTypes from 'prop-types';

import Battlefield from './containers/Battlefield';
import ColorPicker from './containers/ColorPicker';
import PlayerList from './containers/PlayerList';
import State from './containers/State';
import Toolbar from './containers/Toolbar';
import { DragDropContextProvider } from 'react-dnd';
import MouseBackEnd from 'react-dnd-mouse-backend'
import DragPreviewLayer from './components/DragPreviewLayer';

const PlayerApp = ({store}) => {
  const pane = {
    position: "fixed",
    top: 0,
    right: 0,
    backgroundColor: "rgba(242,242,242,.5)",
    borderRadius: 25,
    padding: 25,
    zIndex:10,
    height:'100%',
    overflow:'scroll',
    width:"250px"
  }

  return (
    <Provider store={store}>
      <span>
        <DragDropContextProvider backend={MouseBackEnd}>
          <span>
            <Battlefield/>
            <DragPreviewLayer />
          </span>
        </DragDropContextProvider>
        <div style={pane}>
          <PlayerList/>
          <Toolbar/>
          <ColorPicker/>
          <State/>
        </div>
      </span>
    </Provider>
  )
}

PlayerApp.propTypes = {
  store: PropTypes.object
}

export default PlayerApp
