const OrderOnlineList = (props) => {
  const { title, description, price } = props

  return (
    <div>
      <article className="orderList">
        <h2>{title}</h2>
        <h4>{description}</h4>

        <h4>{price}</h4>
        <hr />
      </article>
    </div>
  )
}

export default OrderOnlineList
