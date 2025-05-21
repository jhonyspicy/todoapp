import React from 'react';

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = React.useState('');

  const hadleSubmit = (e) => {
    e.preventDefault();

    setTaskList([
      ...taskList,
      {
        id: taskList.length + 1,
        text: inputText,
        completed: false,
      },
    ]);

    setInputText('');
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={hadleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>
          <i className="fa-regular fa-square-plus"></i>
        </button>
      </form>
    </div>
  );
};
