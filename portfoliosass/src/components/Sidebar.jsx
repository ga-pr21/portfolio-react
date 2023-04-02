import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import Avatar from '../img/fotinha2.jpg';

import '../styles/components/sidebar.sass';
const Sidebar = () => {
  return (<aside id="sidebar">
    <img src={Avatar} alt="Gabriel Nogueira" />
    <p className="title">Programador</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="" className="btn">download curriculo</a>
  </aside>
  );
};

export default Sidebar;