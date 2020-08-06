
import React,{useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input/Index';
import TextArea from '../../components/TextArea/Index';
import Select from '../../components/Select/index';
import warningIcon from '../../assets/images/icons/warning.svg'
import {useHistory} from 'react-router-dom';

import './styles.css';
import api from '../../Services/api';



function TeacherForm() {

  const history = useHistory();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }

  ])

  function addNewScheduleItem() {

    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: ''
      }
    ])
  }

  function handleCreateClasses(event: FormEvent) {
    event.preventDefault()

  api.post('classes',{
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost:Number(cost),
      schedule:scheduleItems
    }).then(()=>{
      alert('Cadstro realizado com sucesso')
      history.push('/');
    }).catch(()=>{
      alert('Erro no cadastro')
    })

  }

  function setScheduleitemValue(position: number, field: string, value: string) {
    const updateScheduleItem = scheduleItems.map((scheduleItem, index) => {
      if( index === position) {
      return  { ...scheduleItem, [field]: value } 
    }
      
      return scheduleItem;
    });
    setScheduleItems(updateScheduleItem);
  }

  return (

    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primerio passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClasses}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }} />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value)
              }} />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value)
              }}
            />
            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value)
              }}
            />

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="suject"
              label="Materia"
              value={subject}
              onChange={(event) => { setSubject(event.target.value) }}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Fisíca', label: 'Educação Fiśica' },
                { value: 'Fisíca', label: 'Fisíca' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Matematíca', label: 'Matematíca' },
                { value: 'Quimíca', label: 'Quimíca' },
                { value: 'Filosofia', label: 'Filosofia' },
                { value: 'História', label: 'Historia' }
              ]}

            />

            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(event) => {
                setCost(event.target.value)
              }}
            />

          </fieldset>

          <fieldset>

            <legend>
              Horários disponíveis
           <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
           </button>
            </legend>

            {
              scheduleItems.map((scheduleItem, index) => {

                return (
                  <div key={scheduleItem.week_day} className="schedule-item">

                    <Select
                      name="week_day"
                      label="Dia da semana"
                      onChange={e => { setScheduleitemValue(index, 'week_day', e.target.value) }}
                      options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-Feira' },
                        { value: '2', label: 'Terç-Feira' },
                        { value: '3', label: 'Quarta-Feira' },
                        { value: '4', label: 'Quinta-Feira' },
                        { value: '5', label: 'Sexta-Feira' },
                        { value: '6', label: 'Sabado' },

                      ]}
                    />

                    <Input
                      name="from"
                      label="Das"
                      type="time"
                      onChange={e => { setScheduleitemValue(index, 'from', e.target.value) }} />
                    <Input
                      name="to"
                      label="Até"
                      type="time"
                      onChange={e => { setScheduleitemValue(index, 'to', e.target.value) }}
                    />
                  </div>
                )

              })
            }

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante<br />
              Preenchar todos os dados
          </p>

            <button type="submit">
              Salvar cadastro
          </button>

          </footer>
        </form>
      </main>
    </div>
  )

}
export default TeacherForm;
