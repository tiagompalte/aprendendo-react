import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
  <div>    
    <Pai nome="João" sobrenome="Silva">
      {/* Como passo os componentes filhos aqui? */}
      <Filho nome="Pedro" />
      <Filho nome="João" />
      <Filho nome="Carla" />
    </Pai>
  </div>
, document.getElementById('root'))