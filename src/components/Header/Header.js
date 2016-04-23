/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';
import injectTapEventPlugin from 'react-tap-event-plugin';


class Header extends Component {


  handleTouchTap() {
  alert('onTouchTap triggered on the title component');
 }

  handleActive(tab) {
    alert(`A tab with this route property ${tab.props.route} was activated.`);
  }

  render() {

    var styles = {
      title: {
        cursor: 'pointer'
      }
    };



    return (
      <div className={s.root}>
          <AppBar className={s.pwAppBar}
            title={<span style={styles.title}>Title</span>}
          onTitleTouchTap={this.handleTouchTap}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}>

         </AppBar>
      </div>
    );
  }

}
injectTapEventPlugin();
export default withStyles(Header, s);
