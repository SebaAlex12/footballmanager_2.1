
import Dashboard from './layout/Dashboard';
import Notification from './common/Notification';

import './css/basic.module.css';

function App() {
  return (
    <div className='app-box'>
      <Notification/>
      <Dashboard/>
    </div>
  );
}

export default App;
