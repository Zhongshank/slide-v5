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
  babel: require('../assets/babel.png'), // eslint-disable-line global-require
  babelExample: require('../assets/babel-example.png'), // eslint-disable-line global-require
  caniuse: require('../assets/caniuse.png'), // eslint-disable-line global-require
  comptable: require('../assets/comp-table.png'), // eslint-disable-line global-require
  socket: require('../assets/socket.png'), // eslint-disable-line global-require
  babelIs: require('../assets/babel-is.png'), // eslint-disable-line global-require
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
              複習常見的 ES6 (ES2015) 語法
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Arrow function
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/arrow-function.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Class
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/class-1.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/class-2.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Destructuring
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/destructuring.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Default Parameter
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/default.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Array Rest
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/rest.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Array Spread
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/spread.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Const
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/const.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Let
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/let.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Import, Export
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/import-export.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={1} textColor="white">
              要用舊的語法做出相同的功能可以參考
            </Heading>
            <Link href="https://github.com/addyosmani/es6-equivalents-in-es5">
              ECMAScript 6 equivalents in ES5
            </Link>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              有了這些語法..但是..
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              瀏覽器不一定支援
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              用來查瀏覽器支援度的{' '}
              <Link href="http://caniuse.com/" target="_blank">
                caniuse
              </Link>
            </Heading>
            <Image
              src={images.caniuse.replace('/', '')}
              style={{ width: '90%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              JavaScript
              <Link
                href="https://kangax.github.io/compat-table/es6/"
                target="_blank"
              >
                {' '}
                版本相容性 table
              </Link>
            </Heading>
            <Image
              src={images.comptable.replace('/', '')}
              style={{ width: '90%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              等到所有 browser 支援<br /> 是不實際的
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              還有這種做法
            </Heading>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              <Link href="http://outdatedbrowser.com/en" target="_blank">
                http://outdatedbrowser.com/en
              </Link>
            </Text>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              必須編譯 JavaScript<br /> 還有其他理由
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              在網路上傳輸：size 很重要
            </Heading>
            <List>
              <ListItem>Gzip：可壓縮至原本 30%</ListItem>
              <ListItem>Uglify：可壓縮至原本 50%</ListItem>
              <ListItem>
                壓縮後通常會命名為
                .min.js，例如：https://fb.me/react-0.13.3.min.js
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              瀏覽器 socket 數量限制
            </Heading>
            <Image
              src={images.socket.replace('/', '')}
              style={{ width: '60%' }}
            />
            <Text textColor="primary">在 HTTP2 普及之前</Text>
            <List>
              <ListItem>把檔案串接 (concat) 成一個大檔</ListItem>
              <ListItem>用多個網域來放 static resource</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Dead Code Elimination
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/dead-code-1.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/dead-code-2.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Babel
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Image
              src={images.babel.replace('/', '')}
              style={{ width: '100%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              JavaScript to JavaScript
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Why?
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Image
              src={images.babelIs.replace('/', '')}
              style={{ width: '90%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Image
              src={images.babelExample.replace('/', '')}
              style={{ width: '100%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              簡單的 setup 步驟
            </Heading>
            <List>
              <ListItem>
                安裝 babel-cli, babel-preset-react, babel-preset-env,
                babel-plugin-transform-object-rest-spread
              </ListItem>
              <ListItem>寫 .babelrc，列出 presets 和 plugins</ListItem>
              <ListItem>寫對應的 compile npm scripts</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              實際操作
            </Heading>
            <Link
              href="https://github.com/web-seminar/slide-v3/tree/gh-pages/4/demo/babel-setup"
              target="_blank"
            >
              範例
            </Link>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              One more thing..
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Object Rest Spread!
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              A stage 3 proposal in<br />
              <Link href="https://github.com/tc39/ecma262" target="_blank">
                tc39/ecma262
              </Link>
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Object Rest
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/object-rest.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Object Spread
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/object-spread.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Class Property
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/object-rest.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
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
