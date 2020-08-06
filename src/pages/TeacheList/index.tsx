import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input/Index';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Este são os proffys disponíves.">
        <form id="search-teachers">
          <Input name="subject" label="Materias" />
          <Input name="week_day" label="Dia da semana" />
          <Input name="time" label="Hora" />

        </form>

      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}
export default TeacherList;