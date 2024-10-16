import React, { useState } from "react";
import "../App.css";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  const [isEditing, setIsEditing] = useState(null); 
  const [editText, setEditText] = useState(""); 

  function addActivity() {
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => i !== id);
    setlistData(updatedListData);
  }

  function removeAll() {
    setlistData([]);
  }

 
  function handleEdit(i, currentText) {
    setIsEditing(i); 
    setEditText(currentText); 
  }

  function saveEdit(i) {
    const updatedList = listData.map((item, id) =>
      id === i ? editText : item
    );
    setlistData(updatedList);
    setIsEditing(null); 
    setEditText(""); 
  }

  return (
    <div className="main">
      <div className="header">TODO LIST</div>
      <input
      className="main-input"
        type="text"
        placeholder="Add activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button className="button" onClick={addActivity}>
        Add
      </button>
      <p className="List-heading"> Your list:{")"}</p>

      {listData.length > 0 &&
        listData.map((data, i) => {
          return (
            <div key={i}>
              {isEditing === i ? (
                
                <>
                  <input
                    type="text"
                    className="edit-input"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button className="save-btn" onClick={() => saveEdit(i)}>Save</button>
                </>
              ) : (
                <>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button className="button edit-remove" onClick={() => removeActivity(i)}>
                      Remove
                    </button>
                    <button className="button edit-remove" onClick={() => handleEdit(i, data)}>
                      Edit
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}

      {listData.length >= 1 && (
        <button className="button" onClick={removeAll}>
          Remove All
        </button>
      )}
    </div>
  );
}

export default TodoList;
