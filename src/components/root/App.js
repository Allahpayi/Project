import { Switch, Route } from 'react-router-dom';
import '../../assets/css/style.css'
import Products from '../products/Products';
import BlogDetail from '../section/BlogDetail';
import Dashboard from './Dashboard'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path ="/" component={Dashboard} />
        <Route path ="/blog-detail/:id" component={BlogDetail} />
        <Route path ="/products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
