import React, { useState } from "react";
import "../App.css";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity() {
    // setlistData([...listData, activity])
    // console.log(listDatas)
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    });
    setlistData(updatedListData);
  }
  
  function removeAll(){
    setlistData([])
  }

  return (
    <div className="main">
      <div className="header">TODO LIST</div>
      <input
        type="text"
        placeholder="add activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button className="button" onClick={addActivity}>
        Add
      </button>
      <p className="List-heading"> Here is your list:{")"}</p>
      {listData != [] &&
        listData.map((data, i) => {
          return (
            <>
              <p key={i}>
                <div className="listData">{data}</div>
                <div className="btn-position">
                  <button className="button " onClick={() => removeActivity(i)}>
                    Remove
                  </button>
                </div>
              </p>
            </>
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
