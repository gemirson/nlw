import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Este são os proffys disponíves.">
        <form id="search-teachers">

          <div className="input-block">
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>

      </PageHeader>
      <main>
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
            <br/><br/>
            Apaixonado por química orgânica
        </p>
        <footer>
          <p>
            Preço/Hora
            <strong>R$ 200</strong>
          </p>
          <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
          </button>
        </footer>
        </article>
      </main>
    </div>
  );
}
export default TeacherList;