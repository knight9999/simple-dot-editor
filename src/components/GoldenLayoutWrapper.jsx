import GoldenLayout from 'golden-layout'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'

import AppContainer from '../containers/App'
import Tools from './Tools';

class GoldenLayoutWrapper extends React.Component {
  componentDidMount() {
    const config = {
      content: [{
        type: 'row',
        content: [{
          type: 'stack',
          content: [{
            type: 'react-component',
            component: 'AppContainer',
              props: { label: 'A' }
          }, {
            type: 'react-component',
            component: 'AppContainer',
            props: { label: 'B' }
          }]
        }, {
          title: 'Tools',
          width: 50,
          type: 'react-component',
          component: 'Tools',
          props: { 
            color: this.props.colors[this.props.selectedColor],
            data: this.props.data,
            updateData: (newData) => this.props.updateData(newData)
          }
        }]
      }]
    }

    function wrapComponent(Component, store, options) {
      class Wrapped extends React.Component {
          constructor (container, config) {
            super(container, config)
            console.log(container.glContainer)
            if (options && options.width) {
              container.glContainer.setSize(options.width, container.glContainer.height)
            }
            // // console.log(container.glContainer.parent)
            // // http://golden-layout.com/docs/Container.html
            // var tab = container.glContainer.parent.tab
            // tab.element.append($('<div class="messageCounter">123</div>') )
            // console.log(tab.header)
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

    var layout = new GoldenLayout(config, this.layout);
    layout.registerComponent('AppContainer', wrapComponent(AppContainer, this.context.store))
    layout.registerComponent('Tools',wrapComponent(Tools, this.context.store, { width: 100 }))
    layout.init();

    window.addEventListener('resize', () => {
      layout.updateSize();
    });
  }

  render() {
    return (
        <div className='goldenLayout' ref={input => this.layout = input}/>
    );
  }
}

GoldenLayoutWrapper.contextTypes = {
  store: PropTypes.object.isRequired
}

export default GoldenLayoutWrapper

