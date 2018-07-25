import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'

ReactDOM.render(
  <Family lastName="Palte">
    <Member name="Tiago"/>
  </Family>
, document.getElementById('app'))