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


# GoldenLayout

wrapcomponentを次のように

```
    function wrapComponent(Component, store) {
      class Wrapped extends React.Component {
          constructor (container, config) {
            super(container, config)
            // console.log(container.glContainer.parent)
            // http://golden-layout.com/docs/Container.html
            var tab = container.glContainer.parent.tab
            tab.element.append($('<div class="messageCounter">123</div>') )
            console.log(tab.header)
          }
          render () {
              return (
                  <Provider store={store}>
                      <Component {...this.props}/>
                  </Provider>
              );
          }
      }
      return Wrapped;
    };
```
とすることで、tabオブジェクトやheaderオブジェクトにアクセスすることが出来る。

