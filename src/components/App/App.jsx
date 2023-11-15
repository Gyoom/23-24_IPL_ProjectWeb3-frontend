import { useState, useEffect, useContext } from 'react'
import { useNavigate, Link, Route, Routes, useMatch } from 'react-router-dom'
import { Layout, message } from 'antd'
// components
import ProductList from 'components/ProductsList/ProductsList'
import NewProduct from 'components/NewProduct/NewProduct'
import Product from 'components/Product/Product'
import FooterPage from 'components/Footer/FooterPage'
import Login from 'components/Login/Login'
// contexts
import { Context as LoginContext } from 'contexts/LoginContext'

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

  const [messageApi, contextHolder] = message.useMessage();

  const padding = {
    paddingRight: 20,
    color: '#fff',
  }

  const match = useMatch('/anecdote/:id')
    const anecdote = match 
        ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
        : null

  return (
    <Layout>
      <Header style={headerStyle}>
          <h1 style={{height:10}}>E-Products</h1>
          <div>
            <Link style={padding} to={'/'}>Products</Link>
            <Link style={padding} to={'/newProduct'}>New Products</Link>
            <Link style={padding} to={'/command'}>Command</Link>
            { authenticatedUser == null ? <Link style={padding} to={'/login'}>Login</Link> : "" }
          </div>
      </Header>
      <Content style={contentStyle}>    
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/newAnecdote" element={<NewProduct />} />
            <Route path="/anecdote/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </Content>
      <Footer style={footerStyle}><FooterPage /></Footer>
    </Layout>
  )
}

export default App
