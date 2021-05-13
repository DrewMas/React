import {useEffect, useState} from "react";
import User from "../user/User";
import './Users.css';
import axiosInstance from '../../services/api.js'


export default function Users() {

    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState(null);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(value => {
        //         return value.json()
        //     })
        //     .then(json => {
        //         setUsers([...json]);
        //     });
        axiosInstance.get('/users').then(value => setUsers(value.data));
    }, []);

    const search = (id) => {
        let findedUser = users.find(value => value.id === id);
        setSingleUser(findedUser);
    };

    return (
        <div className={'wrap'}>
            <div className={'usersBox'}>{
                users.map((value) => <User
                    key={value.id}
                    item={value}
                    search={search}
                />)
            }</div>
            <div className={'singleUserBox'}>
                {
                    singleUser ? (
                        <div>Customer's user name is <i>{singleUser.username}</i> <br/>
                            Phone number is  {singleUser.phone}
                            <br/></div>) : (<div></div>)
                }
            </div>

        </div>
    );
}