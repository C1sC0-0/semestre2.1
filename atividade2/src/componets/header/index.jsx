// src\componets\header\index.jsx

import {NavLink} from 'react-router-dom'
import './index.css'
import logo from '../../assets/react.svg'

function Header() {
  return (
    <Header className="header">
        <div className="header-wrap">
            <Link to='/' className="logo">
                <img src={logo} alt="logo" />
                <span>Contabilidade Dendezeiros</span>
            </Link>
            <nav className="nav">
                <NavLink to='/servicos' className={({isActive}) => isActive ? 'link active' : 'link'}>Servicos</NavLink>
                <NavLink to='/sobre-nos' className={({isActive}) => isActive ? 'link active' : 'link'}>Sobre</NavLink>
                <NavLink to='/Fale-conosco' className={({isActive}) => isActive ? 'link active' : 'link'}>Contato</NavLink>
            </nav>
        </div>
    </Header>

  )
}

export default Header
