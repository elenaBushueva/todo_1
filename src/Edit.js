import {useState} from 'react';

function Edit(props) {
    const [toggle, setToggle] = useState(false)
    const [updateInput, setUpdateInput] = useState('')

    const updateToggle = () => {
        props.update(updateInput, props.el.id);
        setToggle(false);
    }

    return (
        <div>
                    <button onClick={() => setToggle(!toggle)}>edit</button>

                    {toggle &&
                    <input type="text" value={updateInput}
                           onChange={(e) => setUpdateInput(e.target.value)}/>}
                    {toggle && <button onClick={updateToggle}>update</button>}
        </div>
    );
}

export default Edit;
