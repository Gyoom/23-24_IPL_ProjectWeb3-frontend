import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// contexts
import { Context as LoginContext } from 'contexts/loginContext'

const Product = ({ anecdote }) => {
    const navigate = useNavigate()
    const { authenticatedUser } = useContext(LoginContext);

    useEffect(() => {
      if (authenticatedUser.length == 0) {
        navigate("/login");
      }
    }, [authenticatedUser]);

    return (
         <p>{anecdote.content} BY {anecdote.author} </p>
    )
}

export default Product