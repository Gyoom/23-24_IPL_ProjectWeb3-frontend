import { React, useEffect, useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { Input, Button, Form } from 'antd';
// contexts
import { Context as UsersContext } from 'contexts/usersContext'
import { Context as ProductsContext } from 'contexts/productsContext'

const Register = () => {
    const navigate = useNavigate()
    const { authenticatedUser, register } = useContext(UsersContext)

    useEffect(() => {
      if (Object.keys(authenticatedUser).length === 0) {
        navigate("/login");
      }

    }, [authenticatedUser]);


    const handleSubmit = (values) => {
        register(values)

    }

    const handleErrorSubmit = (errorInfo) => {
      console.log('Failed:', errorInfo);
    }
  
    return (
      <>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={handleSubmit}
          onFinishFailed={handleErrorSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Firstname"
            name="name"
            placeholder="my product ..."
            rules={[{ required: true, message: 'Please input a name ...' }]}
          >
              <Input />
          </Form.Item>

          <Form.Item
            label="Lastname"
            name="name"
            placeholder="my product ..."
            rules={[{ required: true, message: 'Please input a name ...' }]}
          >
              <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="name"
            placeholder="my product ..."
            rules={[{ required: true, message: 'Please input a name ...' }]}
          >
              <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="name"
            placeholder="my product ..."
            rules={[{ required: true, message: 'Please input a name ...' }]}
          >
              <Input />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="name"
            placeholder="my product ..."
            rules={[{ required: true, message: 'Please input a name ...' }]}
          >
              <Input />
          </Form.Item>

          <Form.Item
            label="Role"
            name="name"
            placeholder="my product ..."
            rules={[{ required: true, message: 'Please input a name ...' }]}
          >
              <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
          <Button type="primary" htmlType="submit">
            Register
          </Button>
      </Form.Item>

        </Form>
      </>
    ) 
}

export default Register