
import React from 'react';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Input from '../../components/Input/Index';
// import { Container } from './styles';

function TeacherForm() {
  return (

    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primerio passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />

        </fieldset>

        <fieldset>
          <legend>Suas aula</legend>
          <Input name="suject" label="Materia" />
          <Input name="cost" label="Custo da sua hora por aula" />

        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante<br />
            Preenchar todos os dados
          </p>

          <button type="button">
            Salvar cadastro
          </button>

        </footer>
      </main>
    </div>
  )
}
export default TeacherForm;
