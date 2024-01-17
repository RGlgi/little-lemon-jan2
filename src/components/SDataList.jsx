import SData from './SData'
import S from './S'
import React from 'react'

const SDataList = () => {
  return (
    <section className="Sp">
      <div className="SpTitleButton ">
        <h2>This week's Specials!</h2>
        <button className="Button1">Online Menu</button>{' '}
      </div>

      <section className="SDataList">
        {SData.map((s) => {
          const { img, title, description, price, id } = s
          return (
            <S
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

export default SDataList
