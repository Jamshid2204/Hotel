import React from "react"
import "./download.css"

const Download = () => {
  return (
    <>
      <section className='download top'>
        <div className='container flex_space'>
          <div className='row'>
            <h3>Bizning ilovamizni yuklab oling</h3>
            <h1>Mobil qurilmangiz uchun ushbu ilovani yuklab oling</h1>
            <ul>
              <li>&#10003; Shablon yordamida tarmoqdagi yaqin atrofdagi mehmonxonani toping</li>
              <li>&#10003; Qog'ozsiz tasdiqni oling</li>
              <li>&#10003; Qayerda bo'lmasin, o'zgarishlar qiling</li>
              <li>&#10003; 24/7 mijozlarga xizmat ko'rsatish 40 dan ortiq tillarda</li>
              <li>&#10003; Hech qanday bron qilish yoki kredit karta to'lovlarsiz</li>
              <li>&#10003; Hech qanday bron qilish yoki kredit karta to'lovlarsiz</li>
              <li>&#10003; O'zingizning sharhlaringiz va rasmlaringizni qo'shing</li>
            </ul>
            <div className='img flex'>
              <img src='/images/appstore-button.png' alt='' />
              <img src='/images/google-play-button.png' alt='' />
            </div>
          </div>
          <div className='row row2'>
            <img src='/images/app-image-1.png' alt='' className='image' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Download
