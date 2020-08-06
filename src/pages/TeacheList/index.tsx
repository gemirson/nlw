import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input/Index';
import Select from '../../components/Select';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Este são os proffys disponíves.">
        <form id="search-teachers">
          <Select 
           name="subject" 
           label="Materias"
           options={[
            {value:'Artes', label:'Artes'},
            {value:'Biologia', label:'Biologia'},
            {value:'Ciências', label:'Ciências'},
            {value:'Educação Fisíca', label:'Educação Fiśica'},
            {value:'Fisíca', label:'Fisíca'},
            {value:'Geografia', label:'Geografia'},
            {value:'Matematíca', label:'Matematíca'},
            {value:'Quimíca', label:'Quimíca'},
            {value:'Filosofia', label:'Filosofia'},
            {value:'História', label:'Historia'}
          ]}
           />
          <Select 
            name="week_day" 
            label="Dia da semana"
            options={[
              {value:'0', label:'Domingo'},
              {value:'1', label:'Segunda-Feira'},
              {value:'2', label:'Terç-Feira'},
              {value:'3', label:'Quarta-Feira'},
              {value:'4', label:'Quinta-Feira'},
              {value:'5', label:'Sexta-Feira'},
              {value:'6', label:'Sabado'},
              
            ]}
             />
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