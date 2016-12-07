import React from 'react';
import {Link} from 'react-router';
//�����û��б�
export default class UserList extends React.Component{
    constructor(props){
        super(props);
        var persons = [{id:1,name:'zhangsan'},{id:2,name:"lisi"}];
        let { query } = props.location;
        persons = persons.filter(person=>person.name.indexOf(query.keyword)!=-1);
        this.state = {persons:persons};
    }
//Ϊʲô����Ҫ��this.state.persons ��Ϊ����״̬���ǿ��Ըı��
    render(){
        return (
            <ul className="list-group">
                {
                    this.state.persons.map(person=> <li className="list-group-item">
                        <Link to={"/user/detail/"+person.id}>{person.id}:{person.name}</Link>
                    </li>)
                }
            </ul>
        )
    }
}