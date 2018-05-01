import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Slide,
  Spectacle,
  Text,
  S,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import BgSlide from './BgSlide';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  bootstrap: require('../assets/bootstrap.png'), // eslint-disable-line global-require
  promise: require('../assets/promise.png'), // eslint-disable-line global-require
  jsonTrend: require('../assets/jsonTrend.png'), // eslint-disable-line global-require
  fetch: require('../assets/fetch.png'), // eslint-disable-line global-require
  rootComponent: require('../assets/root-component.png'), // eslint-disable-line global-require
  containerComponent: require('../assets/container-components.png'), // eslint-disable-line global-require
  reduxAsyncActions: require('../assets/redux-async-actions.png'), // eslint-disable-line global-require
  relay: require('../assets/relay.png'), // eslint-disable-line global-require
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: 'white',
    tertiary: 'white',
    quartenary: 'white',
  },
  {
    primary: 'Open Sans Condensed',
    secondary: 'Open Sans Condensed',
    tertiary: 'Open Sans Condensed',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck
          transition={['zoom', 'slide']}
          transitionDuration={500}
          textColor="white"
          progress="bar"
        >
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Web Programming
            </Heading>
            <Heading size={5} fix textColor="white">
              2018-04-25
            </Heading>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              Express / Babel
            </Text>
          </BgSlide>
          {/* =================================
            Outline
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>Express</ListItem>
              <ListItem>Babel</ListItem>
            </List>
          </BgSlide>
          {/* =================================
            kpman 部分
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              kpman 部分
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Express
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              kpman 部分結束
            </Heading>
          </BgSlide>
          {/* =================================
            chentsulin 部分
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              chentsulin 部分
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Babel
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              chentsulin 部分結束
            </Heading>
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
