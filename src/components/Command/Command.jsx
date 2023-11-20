import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// contexts
import { Context as LoginContext } from 'contexts/usersContext'

const Command = () => {
    const navigate = useNavigate()
    const { authenticatedUser } = useContext(LoginContext);

    useEffect(() => {
      if (authenticatedUser.length == 0) {
        navigate("/login");
      }
    }, [authenticatedUser]);

    return (
        <></>
    )
}

export default Command