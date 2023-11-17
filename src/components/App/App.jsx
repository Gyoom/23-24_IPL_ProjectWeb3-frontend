import { useContext } from 'react'
import { useNavigate, Link, Route, Routes, useMatch } from 'react-router-dom'
import { Layout, message } from 'antd'
// components
import ProductList from 'components/ProductsList/ProductsList'
import NewProduct from 'components/NewProduct/NewProduct'
import Product from 'components/Product/Product'
import FooterPage from 'components/Footer/FooterPage'
import Login from 'components/Login/Login'
// contexts
import { Context as LoginContext } from 'contexts/loginContext'
import Command from 'components/Command/Command'

const { Header, Footer, Content } = Layout;

const headerStyle = {
  color: '#fff',
  backgroundColor: '#7dbcea',
  
  height: 100
};
const contentStyle = {
  color: '#fff',
  backgroundColor: '#108ee9',
  padding: 50
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const App = () => {

  const navigate = useNavigate()
  const { authenticatedUser } = useContext(LoginContext);

  const padding = {
    paddingRight: 20,
    color: '#fff',
  }

  const match = useMatch('/product/:id')
    const product = match 
        ? anecdotes.find(product => product.id === Number(match.params.id))
        : null

  return (
    <Layout>
      <Header style={headerStyle}>
          <h1 style={{height:10}}>E-Products</h1>
          <div>
            { authenticatedUser.length != 0 ? <Link style={padding} to={'/'}>Products</Link> : "" }
            { authenticatedUser.length != 0 ? <Link style={padding} to={'/newProduct'}>New Products</Link> : "" }
            { authenticatedUser.length != 0 ? <Link style={padding} to={'/command'}>Command</Link> : "" }
            { authenticatedUser.length == 0 ? <Link style={padding} to={'/login'}>Login</Link> : "" }
          </div>
      </Header>
      <Content style={contentStyle}>    
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/command" element={<Command />} />
            <Route path="/newProduct" element={<NewProduct />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </Content>
      <Footer style={footerStyle}><FooterPage /></Footer>
    </Layout>
  )
}

export default App
