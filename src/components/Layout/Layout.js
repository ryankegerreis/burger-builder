import React from 'react';
import Aux from '../../HOC/Aux'

const Layout = (props) => (
  <Aux>
    <div>Toolbar, Sidedrawer, Backdrop.</div>
    <main className='Content'>
      {props.children}
    </main>

  </Aux>
)

export default Layout;