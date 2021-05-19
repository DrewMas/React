import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import Counter from "./component/Counter";
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const counter = useSelector((state) => state.counter)

    const dispatch = useDispatch();

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={() => {
                dispatch({type: 'INC'});
            }}>INC
            </button>
            <button onClick={() => {
                dispatch({type: 'DEC'});
            }}>DEC
            </button>
            <button onClick={() => {
                dispatch({type: 'RES'});
            }}>RES
            </button>
        </>


    )
}

export default function App() {

    // const initialState = {
    //     counter: 0
    // }
    //
    // const reducer = (state = initialState, action) => {
    //     switch (action.type) {
    //         case 'INC': {
    //             return {
    //                 ...state, counter: state.counter + 1
    //             }
    //         }
    //
    //         case 'DEC': {
    //             return {
    //                 ...state, counter: state.counter - 1
    //             }
    //         }
    //
    //         case 'RES': {
    //             return {
    //                 ...state, counter: 0
    //             }
    //         }
    //
    //         default:
    //             return state;
    //     }
    // }
    //
    //     const store = createStore(reducer);

    // store.subscribe(() => {
    //     console.log('tut', store.getState());
    // })
    //
    // store.dispatch({type: 'INC'})
    // store.dispatch({type: 'INC'})
    // store.dispatch({type: 'INC'})
    // store.dispatch({type: 'INC'})
    // store.dispatch({type: 'INC'})
    //
    // setTimeout(() => {
    //     store.dispatch({type: 'RES'})
    // }, 1000)


    return (
        <div>
            <Counter/>

        </div>
    );
}