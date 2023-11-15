import { Link } from 'react-router-dom'
import { List } from 'antd'
const ProductList = () => {


  return (
    <div>
      <List
        bordered
        header={<div>Anecdotes</div>}
        dataSource={anecdotes}
        renderItem={(item) => (
          <List.Item>
              <Link style={test} to={'/anecdote/' + item.id}>{item.content}</Link>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ProductList