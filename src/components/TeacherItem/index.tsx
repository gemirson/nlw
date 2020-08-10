
import React from 'react'
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../Services/api';


export interface Teacher {

    name: string;
    avatar: string;
    subject: string;
    whatsapp:string;
    bio: string;
    cost: number;
    id: number;
    user_id: number;

}

interface TeacherItemProps {

    teacher: Teacher

}


const TeacherItem: React.FunctionComponent<TeacherItemProps>=({teacher})=>  {
   
    function createNewConnections() {

        api.post('connections', {
            user_id: teacher.user_id,
        })
    }
    return (

        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/Hora
          <strong>R$ {teacher.cost}</strong>
                </p>
                <a target="_blank" onClick={createNewConnections} href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
        </a>
            </footer>
        </article>
    );
}

export default TeacherItem;