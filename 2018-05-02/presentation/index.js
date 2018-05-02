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
  browsers: require('../assets/browsers.png'), // eslint-disable-line global-require
  babelAst: require('../assets/babel-ast.jpg'), // eslint-disable-line global-require
  babelAst2: require('../assets/babel-ast2.png'), // eslint-disable-line global-require
  middleware: require('../assets/middleware.png'), // eslint-disable-line global-require
  githubTrending: require('../assets/github-trending.png'), // eslint-disable-line global-require
  sleepingCat: require('../assets/sleeping-cat.jpg'), // eslint-disable-line global-require
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
              2018-05-02
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
          {/* =================================
            Express.js
            ================================= */}

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Express.js
            </Heading>
            <List>
              <ListItem>web framework for Node.js</ListItem>
              <ListItem>npm install express --save</ListItem>
              <ListItem>npm install express-generator -g</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={1} textColor="white">
              GitHub Trending
            </Heading>
            <Image src={images.githubTrending.replace('/', '')} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Express.js 101
            </Heading>
            <List>
              <ListItem>middleware</ListItem>
              <ListItem>routing</ListItem>
              <ListItem>request (query, params, body)</ListItem>
              <ListItem>response (send, json)</ListItem>
              <ListItem>render view</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Simple express.js server
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-init.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Middleware
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-middleware.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Middleware
            </Heading>
            <Image
              src={images.middleware.replace('/', '')}
              style={{ width: '80%' }}
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Middleware 針對 path
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-middleware-path.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Routing
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-routing.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              express.Router
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-router.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              解析 Request
            </Heading>
            <List>
              <ListItem>req.params</ListItem>
              <ListItem>req.query</ListItem>
              <ListItem>req.body</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              req.params (1/3)
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-req-params.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              req.query (2/3)
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-req-query.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              req.body (3/3)
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-req-body.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              回傳 Response
            </Heading>
            <List>
              <ListItem>res.send</ListItem>
              <ListItem>res.json</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              res.send(1/2)
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-res-send.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              res.json(2/2)
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-res-json.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              REST practice
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-rest-practice.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Render view
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-render-view.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Server side render
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              其實就是字串解析
            </Heading>
            <List>
              <ListItem>讀取 template</ListItem>
              <ListItem>語法分解（正規表達式）</ListItem>
              <ListItem>產生待執行語句</ListItem>
              <ListItem>與資料一起執行，產生字串</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              render template
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/render-template.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={1} textColor="white">
              中場休息
            </Heading>
            <Image src={images.sleepingCat.replace('/', '')} />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <Heading size={4} lineHeight={2} textColor="white">
              有了這些語法..但是..
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
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
            <Image
              src={images.browsers.replace('/', '')}
              style={{ width: '90%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              等到所有 browser 支援<br /> 是不實際的
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
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
            <Heading size={4} lineHeight={2} textColor="white">
              必須編譯 JavaScript<br /> 還有其他理由
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
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
            <br />
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
            <Link href="https://babeljs.io/repl/" target="_blank">
              <Image
                src={images.babelExample.replace('/', '')}
                style={{ width: '100%' }}
              />
            </Link>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              AST <br />(abstract syntax tree，抽象語法樹)
            </Heading>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              <Link href="https://astexplorer.net/" target="_blank">
                AST Explorer
              </Link>
            </Text>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Image
              src={images.babelAst2.replace('/', '')}
              style={{ width: '100%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Image
              src={images.babelAst.replace('/', '')}
              style={{ width: '100%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Babel 原理
            </Heading>
            <List>
              <ListItem>parser (code -> ast)</ListItem>
              <ListItem>transformer (ast -> ast')</ListItem>
              <ListItem>generator (ast' -> code')</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              簡單的 setup 步驟
            </Heading>
            <List>
              <ListItem>安裝 babel-cli, babel-preset-env</ListItem>
              <ListItem>寫 .babelrc，列出 presets 和 plugins</ListItem>
              <ListItem>寫對應的 compile npm scripts</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              安裝 babel-cli, babel-preset-env
            </Text>
            <br />
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/install-babel.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              寫 .babelrc，列出 presets 和 plugins
            </Text>
            <br />
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/babelrc.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              寫對應的 compile npm scripts
            </Text>
            <br />
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/npm-babel.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              實際操作
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              babel-preset-env
            </Heading>
            <List>
              <ListItem>preset 就是一組 config</ListItem>
              <ListItem>支援 ES2015, 2016, 2017 的編譯</ListItem>
              <ListItem>可以用參數指定支援瀏覽器或 Node 的程度</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              其他還有兩個很重要的語法..
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Object Rest Spread <br />
              <Link href="https://github.com/tc39/ecma262" target="_blank">
                (ecma262 stage 4)
              </Link>
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Object Rest
            </Heading>
            <br />
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
            <br />
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/object-spread.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              安裝{' '}
              <Link
                href="https://babeljs.io/docs/plugins/transform-object-rest-spread/"
                target="_blank"
              >
                babel-plugin-transform-object-rest-spread
              </Link>
            </Text>
            <br />
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/install-object-rest-spread.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              加到 plugins
            </Text>
            <br />
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/plugin-object-rest-spread.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Class Property <br />
              <Link href="https://github.com/tc39/ecma262" target="_blank">
                (ecma262 stage 3)
              </Link>
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Class Properties
            </Heading>
            <br />
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/class-properties.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              安裝{' '}
              <Link
                href="https://babeljs.io/docs/plugins/transform-class-properties/"
                target="_blank"
              >
                babel-plugin-transform-class-properties
              </Link>
            </Text>
            <br />
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/install-class-properties.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              加到 plugins
            </Text>
            <br />
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/plugin-class-properties.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              該使用 v6 還是 v7-beta?
            </Heading>
            <List>
              <ListItem>都可以</ListItem>
              <ListItem>v6 很穩定，v7-beta 也經過約 9-10 個月</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Babel 主要使用方式
            </Heading>
            <List>
              <ListItem>babel-cli</ListItem>
              <ListItem>
                babel-loader (Webpack, Create React App, Next.js)
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Babel 參考資料
            </Heading>
            <List>
              <ListItem>
                <Link
                  href="https://github.com/jamiebuilds/babel-handbook"
                  target="_blank"
                >
                  babel-handbook{' '}
                </Link>
              </ListItem>
            </List>
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
