import React, { useState, FormEvent } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem ,{Teacher}from '../../components/TeacherItem'
import Input from '../../components/Input/Index';
import Select from '../../components/Select';
import api from '../../Services/api';



function TeacherList() {

  const [teachers,setTeachers]=useState([]);
  const [subject,setSubject]=useState('');
  const [week_day,setWeek_day]=useState('');
  const [time,setTime]=useState('');

 async function searchTeachers(event:FormEvent){
   event.preventDefault()

   const response = await  api.get('classes',{
      params:{subject,
      week_day,
      time
    }
    })
    setTeachers(response.data)
 }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Este são os proffys disponíves.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select 
           name="subject" 
           label="Materias"
           value={subject}
           onChange={event=>{setSubject(event.target.value)}}
           options={[
            {value:'Artes', label:'Artes'},
            {value:'Biologia', label:'Biologia'},
            {value:'Ciências', label:'Ciências'},
            {value:'Educação Fisíca', label:'Educação Fiśica'},
            {value:'Fisíca', label:'Fisíca'},
            {value:'Geografia', label:'Geografia'},
            {value:'Matematíca', label:'Matematíca'},
            {value:'Quimica', label:'Quimica'},
            {value:'Filosofia', label:'Filosofia'},
            {value:'História', label:'Historia'}
          ]}
           />
          <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day}
            onChange={event=>{setWeek_day(event.target.value)}}
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
          <Input 
          name="time"
          label="Hora" 
          type="time"
          value={time}
          onChange={event=>{setTime(event.target.value)}}/>


        <button type="submit">  
          Buscar
        </button>
        </form>

      </PageHeader>
      <main>
        { teachers.map((teacher:Teacher)=> {
            return <TeacherItem key={teacher.id} teacher = {teacher}/>
          })
        
      
      }
        
      
      </main>
    </div>
  );
}
export default TeacherList;