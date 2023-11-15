const Product = ({ anecdote }) => {


    return (
         <p>{anecdote.content} BY {anecdote.author} </p>
    )
}

export default Product