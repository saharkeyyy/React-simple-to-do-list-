import React from 'react'

function Form({ SetinputText, SetTodos, Todos, inputText }) {
    const inputTextHandler = (e) => {
        SetinputText(e.target.value);
    };
    const SubmitTodoHandler = (e) => {
        e.preventDefault();
        SetTodos([
            ...Todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        SetinputText("");
    };

    return (
        <div>
            <form>
                <input type='text' placeholder='MY NEXT MOVE ' onChange={inputTextHandler} className='todo-input ' value={inputText} />
                <button onClick={SubmitTodoHandler} className='todo-button' type='submit'><i class='bx bx-plus'></i>  </button>
          <div className='select' >
            <select name='Todo' className='filter-todo '>
                <option value='all' > ALL</option>
                <option value='done' > DONE </option>
                <option value='will-done' > NOT DONE </option>
            </select>
          </div>
          
            </form>
        </div>
    )
}

export default Form
