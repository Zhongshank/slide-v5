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
              API / HTTP / RESTful
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
              <ListItem>API</ListItem>
              <ListItem>HTTP Request</ListItem>
              <ListItem>HTTP Response</ListItem>
              <ListItem>RESTful</ListItem>
            </List>
          </BgSlide>
          {/* =================================
            RESTful
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              API
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Application Programming Interface
            </Heading>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              textColor="white"
            >
              應用程式介面<br />就是軟體系統不同組成部分銜接的約定
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <List>
              <ListItem>系統內部的 public function</ListItem>
              <ListItem>系統間的 API</ListItem>
              <ListItem>系統外的 API</ListItem>
              <ListItem>套件 API</ListItem>
              <ListItem>第三方 API</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              HTTP API 的組成
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              協定 Protocol
            </Heading>
            <List>
              <ListItem>HTTP (TCP/IP)</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              資料交換格式
            </Heading>
            <List>
              <ListItem>XML (SOAP, XML-RPC)</ListItem>
              <ListItem>JSON (REST, JSON-RPC, GraphQL)</ListItem>
              <ListItem>Protocol Buffers (gRPC)</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              現在 2018 年，JSON 是主流
            </Heading>
            <Image
              src={images.jsonTrend.replace('/', '')}
              style={{ width: '100%' }}
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              用 JSON.stringify 來把值轉成 JSON
            </Heading>
            <Image
              src="https://i.imgur.com/40nG1qm.png"
              style={{ width: '100%' }}
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              用 JSON.parse 來把 JSON 轉回值
            </Heading>
            <Image
              src="https://i.imgur.com/mcbe1Dz.png"
              style={{ width: '100%' }}
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              幾個 JSON 的注意事項
            </Heading>
            <List>
              <ListItem>是 String</ListItem>
              <ListItem>結尾不能有逗點</ListItem>
              <ListItem>Key 需要用雙引號("") 括起來</ListItem>
              <ListItem>(0, null, "", {'{}'}, [], false) 都是合法的值</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              今天重點放在 HTTP + REST 上
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              HTTP
            </Heading>
            <List>
              <ListItem>HyperText Transfer Protocol</ListItem>
              <ListItem>超文本傳輸協定</ListItem>
              <ListItem>
                HTTP Client 跟 Server 之間進行請求與回應的標準
              </ListItem>
              <ListItem>2015/5 發表了 HTTP/2</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Request & Response
            </Heading>
            <Image
              src="https://i.imgur.com/wj1Jjj6.png"
              style={{ width: '80%' }}
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Request & Response
            </Heading>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              textColor="white"
            >
              Client 跟 Server 必須盡可能地溝通<br />
              包括格式、語言、壓縮、快取時間、Cookie 等很多東西
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              <Link
                href="https://www.tutorialspoint.com/http/http_requests.htm"
                target="_blank"
              >
                HTTP Request
              </Link>
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              HTTP Request Example
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/http-request.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Request Line
            </Heading>
            <List>
              <ListItem>Method </ListItem>
              <ListItem>Path </ListItem>
              <ListItem>HTTP Version </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Request Line
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/http-request-line.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Request Headers
            </Heading>
            <List>
              <ListItem>定義好的欄位用來跟 Server 溝通</ListItem>
              <ListItem>Host: 主機位址</ListItem>
              <ListItem>Accept: 想接收的格式</ListItem>
              <ListItem>Content-Type: 發送的內容格式</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Request Headers
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/http-request-headers.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Request Body
            </Heading>
            <List>
              <ListItem>不一定要有</ListItem>
              <ListItem>跟 Headers 隔一行空行</ListItem>
              <ListItem>用 Content-Type 標注格式</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Request Body
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/http-request-body.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Request Body 常見格式 - urlencoded
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/http-request-urlencoded.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Request Body 常見格式 - json
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/http-request-json.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              傳參數三種方式
            </Heading>
            <List>
              <ListItem>query string</ListItem>
              <ListItem>parameter</ListItem>
              <ListItem>body</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              傳參數 - query string
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/http-request-query.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              傳參數 - parameter
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/http-request-param.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              URL structure
            </Heading>
            <Image
              src="https://i.imgur.com/n8fK3rH.png"
              style={{ width: '80%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              <Link
                href="https://www.tutorialspoint.com/http/http_responses.htm"
                target="_blank"
              >
                HTTP Response
              </Link>
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              HTTP Response Example
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/http-response.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Status Line
            </Heading>
            <List>
              <ListItem>HTTP Version </ListItem>
              <ListItem>Staus Code</ListItem>
              <ListItem>Status Text</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Status Line
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/http-response-line.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Response Headers
            </Heading>
            <List>
              <ListItem>定義好的欄位用來跟 Client 溝通</ListItem>
              <ListItem>Content-Length: 內容長度</ListItem>
              <ListItem>Content-Type: 發送的內容格式</ListItem>
              <ListItem>Set-Cookie: 請瀏覽器設定 cookie</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Response Headers
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/http-response-headers.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Request Body
            </Heading>
            <List>
              <ListItem>不一定要有</ListItem>
              <ListItem>跟 Headers 隔一行空行</ListItem>
              <ListItem>也可以用各種格式，並標注 Content-Type</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Request Body
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/http-response-body.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              JavaScript API / Library / Framework
            </Heading>
            <List>
              <ListItem>Server: express, koa</ListItem>
              <ListItem>Browser: XMLHttpRequest, fetch, axios</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              RESTful
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              REST
            </Heading>
            <List>
              <ListItem>
                表徵性狀態傳輸 (Representational State Transfer)
              </ListItem>
              <ListItem>2000 年就由 Roy Fielding 在博士論文提出</ListItem>
              <ListItem>但在 Rails 1.2 實作後才紅起來</ListItem>
              <ListItem>是設計「風格」而不是標準</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              RESTful
            </Heading>
            <List>
              <ListItem>符合 REST 設計風格的 API 稱為 RESTful API</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              RESTful
            </Heading>
            <List>
              <ListItem>資源是由 URI 指定</ListItem>
              <ListItem>
                對資源的操作包括獲取、創建、修改、刪除，剛好對應
                GET、POST、PUT、DELETE
              </ListItem>
              <ListItem>依照不同需求給予不同格式的回應</ListItem>
              <ListItem>利用 Cache 增加性能</ListItem>
              <ListItem>正確的 HTTP status code</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              資源是由 URI 指定
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Bad Examples
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/bad-api.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Why Bad?
            </Heading>
            <List>
              <ListItem>不統一，不好記憶</ListItem>
              <ListItem>重寫會不一樣</ListItem>
              <ListItem>GET / POST 無法看出來</ListItem>
              <ListItem>參數如何傳遞？</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              RESTful
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/good-api.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Good Part
            </Heading>
            <List>
              <ListItem>不同人依舊會實作相同 API</ListItem>
              <ListItem>清楚表示資源關係</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Stackoverflow Examples
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/stackoverflow-api.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              With params
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/api-params.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              CRUD
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              HTTP 動詞
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/CRUD.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Accept
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              利用 Accept 與 Server 溝通
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/accept.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Status Code
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              不同的 Status Code 區段
            </Heading>
            <List>
              <ListItem>{'1xx -> 訊息'}</ListItem>
              <ListItem>{'2xx -> 成功'}</ListItem>
              <ListItem>{'3xx -> 重導向'}</ListItem>
              <ListItem>{'4xx -> 用戶端錯誤'}</ListItem>
              <ListItem>{'5xx -> 伺服器端錯誤'}</ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              常見的 Status Code
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/status-code.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              幾點事項提醒
            </Heading>
            <List>
              <ListItem>RESTful 是風格，不是規範</ListItem>
              <ListItem>可以適當放寬設計</ListItem>
              <ListItem>
                避免
                <Link href="https://vinta.ws/blog/695" target="_blank">
                  工程師的鄙視鏈
                </Link>
              </ListItem>
            </List>
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
