import { useContext } from 'react'
import { useNavigate, Link, Route, Routes, useMatch } from 'react-router-dom'
import { Layout, message } from 'antd'
// components
import ProductsList from 'components/ProductsList/ProductsList'
import NewProduct from 'components/NewProduct/NewProduct'
import Product from 'components/Product/Product'
import FooterPage from 'components/Footer/FooterPage'
import Login from 'components/Login/Login'
// contexts
import { Context as LoginContext } from 'contexts/usersContext'
import { Context as ProductContext } from 'contexts/productsContext'
import Command from 'components/Command/Command'
import CustomersList from 'components/CustomersList/CustomersList'
import EmployeesList from 'components/EmployeesList/EmployeesLIst'
import Register from 'components/Register/Register'

const { Header, Footer, Content } = Layout;

const headerStyle = {
  color: '#fff',
  backgroundColor: '#7dbcea',
  
  height: 100
};
const contentStyle = {
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
  const { authenticatedUser, logout } = useContext(LoginContext)
  const { productsList } = useContext(ProductContext)

  const padding = {
    paddingRight: 20,
    color: '#fff',
  }

  const match = useMatch('/product/:id')
    const product = match 
        ? productsList.find(product => product.id === Number(match.params.id))
        : null

  return (
    <Layout>
      <Header style={headerStyle}>
          <h1 style={{height:10}}>E-Products</h1>
          <div>
            { Object.keys(authenticatedUser).length > 0 ? 
                <>
                  <Link style={padding} to={'/'}>Products</Link>  
                  <Link style={padding} to={'/newProduct'}>New Products</Link> 
                  <Link style={padding} to={'/order'}>Order</Link>  
                  <Link style={padding} to={'/customers'}>Customers</Link>  
                  <Link style={padding} to={'/employees'}>Employees</Link>  
                  <Link style={padding} to={'/logout'} onClick={() => logout()}>{ authenticatedUser.firstname + " " +  authenticatedUser.lastname} logout</Link>
                </> 
                : "" }
            { Object.keys(authenticatedUser).length === 0 ? 
                <>
                  <Link style={padding} to={'/login'}>Login</Link>
                  <Link style={padding} to={'/register'}>Register</Link>
                </>
                : "" }

          </div>
      </Header>
      <Content style={contentStyle}>    
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Login />} />
            <Route path="/newProduct" element={<NewProduct />} />
            <Route path="/products/:id" element={<Product product={product}/>} />
            <Route path="/order" element={<Command />} />
            <Route path="/customers" element={<CustomersList />} />
            <Route path="/employees" element={<EmployeesList />} />
          </Routes>
      </Content>
      <Footer style={footerStyle}><FooterPage /></Footer>
    </Layout>
  )
}

export default App
