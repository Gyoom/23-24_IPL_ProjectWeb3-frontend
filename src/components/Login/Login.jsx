import { React, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Button, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Password from 'antd/es/input/Password';

// contexts
import { Context as LoginContext } from 'contexts/loginContext'

const Login = () => {
    const navigate = useNavigate()
    const { authenticatedUser } = useContext(LoginContext);

    useEffect(() => {
      if (authenticatedUser.length != 0) {
        navigate("/");
      }
    }, [authenticatedUser]);

    const handleSubmit = (values) => {
      const content = values.content
      const author = values.author
      const info = values.info 
    }

    const handleErrorSubmit = (errorInfo) => {
      console.log('Failed:', errorInfo);
    }
  
    return (
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit}
        onFinishFailed={handleErrorSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="username"
          name="username"
          placeholder="..."
          rules={[{ required: true, message: 'Please input a login' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
          label="mdp"
          name="mdp"
          rules={[{ required: true, message: 'Please input a password' }]}
        >
            <Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
    </Form.Item>

      </Form>
      // <div>
      //   <h2>create a new anecdote</h2>
      //   <form>
      //     <div>
      //       <Input name='content' placeholder='content ...' value={content} onChange={(e) => setContent(e.target.value)}/>
      //     </div>
      //     <br />
      //     <div>
      //       <Input prefix={<UserOutlined />} name='author' placeholder='author ...' value={author} onChange={(e) => setAuthor(e.target.value)}/>
      //     </div>
      //     <br />
      //     <div>
      //       <Input addonBefore='http://127.0.0.1:5173/' name='info' placeholder='url ...' value={info} onChange={(e) => setInfo(e.target.value)}/>
      //     </div>
      //     <br />
      //     <Button type="primary" onClick={handleSubmit}>Create</Button>
      //   </form>
      // </div>
    )
  
}

export default Login