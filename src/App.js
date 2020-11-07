import './App.css';
import {useState} from 'react';
import Edit from "./Edit";

function App() {

    const [list, setList] = useState([])
    const [addInput, setAddInput] = useState('')


    const addToList = () => {
        setList([...list, {id: Math.random(), title: addInput}]);
        setAddInput('');
        console.log(list);
    }

    const deleteById = (id) => {
        const newList = list.filter(el => el.id !== id)
        setList(newList)
    }

    const move = (i, nextI) => {
        const newList = [...list];
        const currentEl = newList[i];
        newList[i] = newList[nextI];
        newList[nextI] = currentEl;
        setList(newList);
    }

    const update = (newTitle, id) => {
        const newList = list.map(el => {
            if (el.id === id) return {...el, title: newTitle}
            return el
        })
        setList(newList);
    }


    return (
        <div>
            <input type="text" value={addInput} onChange={(e) => {setAddInput(e.target.value)}}/>
            <button onClick={addToList}>add to list</button>

            {list.map((el, i) =>
                <li key={el.id}>
                    {el.title}

                    <button disabled={i === 0} onClick={() => move(i, i - 1)}>up</button>
                    {i !== list.length - 1 && <button onClick={() => move(i, i + 1)}>down</button>}
                    <Edit update={update} el={el}/>
                    <button onClick={() => deleteById(el.id)}>delete</button>
                </li>)}
        </div>
    );
}

export default App;
