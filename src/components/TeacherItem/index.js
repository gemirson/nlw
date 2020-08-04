
import React from 'react'
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (

        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/43867047?s=400&u=fe07fbcd20ee505c73edfab1ff4a055a32e8aa24&v=4" alt="Gemirson" />
                <div>
                    <strong>Gemirson</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologia de quimica avançada.
          <br /><br />
                Apaixonado por química orgânica
      </p>
            <footer>
                <p>
                    Preço/Hora
          <strong>R$ 200</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;