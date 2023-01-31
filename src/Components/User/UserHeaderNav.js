import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import { userLogout } from '../../store/reducers/user';
import useMedia from '../../Hooks/useMedia';
import styles from './UserHeaderNav.module.css';
import { useDispatch } from 'react-redux';

const UserHeaderNav = () => {
  const { mobile } = useMedia('(max-width: 54rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();
  const ref = React.useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function loginOut() {
    dispatch(userLogout());
    navigate('/login');
  }

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          ref={ref}
          className={`${styles.mobileBtn} ${
            mobileMenu && styles.mobileBtnActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="menu"
        ></button>
      )}
      <nav
        className={`${!mobile ? styles.nav : styles.navMobile} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'Minha Conta'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatisticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={loginOut}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
