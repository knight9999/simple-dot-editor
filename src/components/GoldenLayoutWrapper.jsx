import GoldenLayout from 'golden-layout'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'

import App from '../containers/App'
import Tools from '../containers/Tools';

class GoldenLayoutWrapper extends React.Component {
  componentDidMount() {
    const config = {
      content: [{
        type: 'row',
        content: [{
          type: 'stack',
          content: [{
            type: 'react-component',
            component: 'App',
            props: { 
              label: 'A',
              dataId: "0",
              active: (value) => this.props.activeApp(value),
              updateMessage: (value) => this.props.updateMessage(value),
              updateData: (value) => this.props.updateData(value),
              updateColor: (value) => this.props.updateColor(value) 
            }
          }, {
            type: 'react-component',
            component: 'App',
            props: {
              label: 'B',
              dataId: "1",
              active: (value) => this.props.activeApp(value),
              updateMessage: (value) => this.props.updateMessage(value),
              updateData: (value) => this.props.updateData(value),
              updateColor: (value) => this.props.updateColor(value) 
            }
          }]
        }, {
          title: 'Tools',
          width: 50,
          type: 'react-component',
          component: 'Tools',
          props: { 
            // color: this.props.colors[this.props.selectedColor],
            // data: this.props.dataMap["0"],
            updateData: (newData) => this.props.updateData(newData)
          }
        }]
      }]
    }

    function wrapComponent(Component, store, options) {
      class Wrapped extends React.Component {
          constructor (container, config) {
            super(container, config)
            // console.log(container.glContainer)
            if (options) {
              if (options.width) {
                container.glContainer.setSize(options.width, container.glContainer.height)
              }
              if (options.overflow) {
                container.glContainer.getElement().css('overflow',options.overflow);
              }
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
    layout.registerComponent('App', 
      wrapComponent(App, 
        this.context.store,
        {overflow: "scroll"}
      )
    );
    layout.registerComponent('Tools',
      wrapComponent(Tools, 
        this.context.store, 
        {width: 100}
      )
    );
    layout.on('stackCreated', (stack) => {
      stack.on('activeContentItemChanged', (contentItem) => {
        if (contentItem.config.component == "App") {
          const dataId = contentItem.config.props.dataId;
          this.props.activeApp(dataId);
        }
      })
    })
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

