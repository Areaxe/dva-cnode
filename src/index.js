import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// 4. Router
app.router(require('./router'));
app.model(require('./models/topic'));

// 5. Start
app.start('#root');
