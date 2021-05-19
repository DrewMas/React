import {useEffect, useReducer, useState} from "react";

// export default function ConstrolledForm() {
//
//     let [users, setUsers] = useState([]);
//     let [user, setUser] = useState(null);
//     let [userId, setUserId] = useState(0);
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(value => value.json())
//             .then(value => {
//                 setUsers([...value])
//             })
//
//     },[])
//
//     useEffect(() => {
//         if (userId > 0){
//             fetch('https://jsonplaceholder.typicode.com/users/' + userId)
//                 .then(value => value.json())
//                 .then(value => {
//                     setUser({...value});
//                 })
//         }
//     },[userId])
//
//
//     let getUsersDetails = (e) => {
//         e.preventDefault();
//         console.log(e.target.user.value);
//     };
//
//
//     function onSelect(e) {
//         setUserId(e.target.value);
//     }
//
//     return (
//        <div>
//            <form onSubmit={getUsersDetails}>
//                <select name="user" onChange={onSelect}>
//                    {
//                        users.map(value => <option value={value.id} key={value.id}>{value.name}</option>)
//                    }
//                </select>
//                <button>details</button>
//            </form>
//            {user && <div>{JSON.stringify(user)}</div>}
//        </div>
//     );
// }

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {...state, users: action.payload};
        case 'SET_USER':
            return {...state, user: action.payload};
        case 'SET_USER_ID':
            return {...state, userId: action.payload};
        default:
            return state;
    }
}

export default function ConstrolledForm() {

    let [state, dispatch] = useReducer(reducer, {users: [], user: null, userId: 0});
    let {users, user, userId} = state;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'SET_USERS', payload: value});
            })

    }, [])

    useEffect(() => {
        if (userId > 0) {
            fetch('https://jsonplaceholder.typicode.com/users/' + userId)
                .then(value => value.json())
                .then(value => {
                    dispatch({type: 'SET_USER', payload: value});
                })
        }
    }, [userId])


    let getUsersDetails = (e) => {
        e.preventDefault();
        console.log(e.target.user.value);
    };


    function onSelect(e) {
        dispatch({type: 'SET_USER_ID', payload: e.target.value});
    }

    return (
        <div>
            <form onSubmit={getUsersDetails}>
                <select name="user" onChange={onSelect}>
                    {
                        users.map(value => <option value={value.id} key={value.id}>{value.name}</option>)
                    }
                </select>
                <button>details</button>
            </form>
            {user && <div>{JSON.stringify(user)}</div>}
        </div>
    );
}