import MenuData from './MenuData'
import Menu from './Menu'
import React from 'react'
import SignUp from './SignUp'

const MenuDataList = () => {
  return (
    <section className="Menu">
      <div className="MenuTitle">
        <h1>Online Menu</h1>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      </div>
      <section className=" MenuDataList">
        {MenuData.map((menu) => {
          const { img, title, description, price, id } = menu
          return (
            <Menu
              img={img}
              title={title}
              description={description}
              price={price}
              key={id}
            />
          )
        })}
      </section>
    </section>
  )
}

export default MenuDataList
