# Install

```
$ npm install
```

# Build

```
$ npx webpack 
```

# クラスネーム

参考サイト：
https://qiita.com/masamitsu-konya/items/207bab779749774de5c3

```
$ npm install classnames --save
```


# Redux

参考サイト：
https://qiita.com/kiita312/items/49a1f03445b19cf407b7
https://qiita.com/maecho/items/e85abecd999257c2ca8c
https://qiita.com/kiita312/items/d769c85f446994349b52

```
$ npm install redux react-redux --save
```

ReactとReduxを結びつける

```
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'

const store = createStore(reducer)
