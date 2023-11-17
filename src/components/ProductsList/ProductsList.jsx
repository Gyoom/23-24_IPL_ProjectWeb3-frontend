import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { List } from 'antd'

// contexts
import { Context as LoginContext } from 'contexts/loginContext'
import { Context as ProductContext } from 'contexts/productsContext'

const ProductList = () => {
    const navigate = useNavigate()
    const { productsList } = useContext(ProductContext);
    const { authenticatedUser } = useContext(LoginContext);
  
    useEffect(() => {
      if (authenticatedUser.length == 0) {
        navigate("/login");
      }
    }, [authenticatedUser]);

    return (
      <div>
        <List
          bordered
          header={<div>Products</div>}
          dataSource={productsList}
          renderItem={(item) => (
            <List.Item>
                <Link style={test} to={'/product/' + item.id}>{item.content}</Link>
            </List.Item>
          )}
        />
      </div>
    )
}

export default ProductList