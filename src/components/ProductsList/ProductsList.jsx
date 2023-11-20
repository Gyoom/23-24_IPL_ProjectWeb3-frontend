import { useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { List } from 'antd'

// contexts
import { Context as LoginContext } from 'contexts/usersContext'
import { Context as ProductContext } from 'contexts/productsContext'

const ProductsList = () => {
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
          header={<p>Products available for sales</p>}
          dataSource={productsList}
          renderItem={(item) => (
            <>
              <List.Item>
                  <Link style={{color:"#FAFAFA"}} to={'/products/' + item.id}>{item.productName}</Link>
              </List.Item>
            </>
          )}
        />
      </div>
    )
}

export default ProductsList