import './index.css';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import ProjectPanel from './projectpanel';
import ParticleBackground from './particleBackground';
import ContactPage from './contact';

function App() {
  return (
    <>
    <Router>
    <div className='border-wrap'>
    <h1 className='logo-name'>Quanah B.</h1>
    <ul className='navigation'>
      <Link className='nav-drop' to='/'>About</Link>
      <Link className='nav-drop' to='/about'>Projects</Link>
      <Link className='nav-drop' to='/contact'>Contact</Link>
    </ul>
    <Switch>
    <Route exact path='/'>
    <div>
    <motion.div className='' initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 0.6 }}>
      <p className='about-text'>
      Hey, my name is Quanah Bennett. I am a young front-end developer who can build your website or blog with an assortment
      of languages and libraries. No matter what you need, ranging from updates to an already existing site, all the way to
      building you a custom website or application from scratch.
      </p>
    </motion.div>
    </div>
    </Route>
    <Route exact path='/about'>
      <motion.div className='project-panel' initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 0.6 }}>
      <ProjectPanel/>
      </motion.div>
    </Route>
    <Route exact path='/contact'>
      <ContactPage/>
    </Route>
    </Switch>
    </div>
    </Router>
    <ParticleBackground/>
    </>
  );
}

export default App;
