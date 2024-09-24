import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [info, setInfo] = useState([]);
  const [value, setValue] = useState("");

  function handleChange(value) {
    if (value.trim() !== "") {
      setInfo((prevInfo) => [...prevInfo, value]);
      setValue("");
    }
  }

  function deleteTodo(index) {
    const updatedTodo = info.filter((_, i) => i !== index);
    setInfo(updatedTodo);
  }

  const handleButtonClick = () => {
    setInfo([]);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Todo App</h1>
          <div className="flex items-center space-x-3 mb-4">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => handleChange(value)}
            >
              +
            </button>
          </div>
          {info.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-50 p-4 mb-2 rounded-lg shadow-sm"
            >
              <h3 className="text-gray-800">{item}</h3>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                onClick={() => deleteTodo(index)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
          <button
            className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleButtonClick}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
