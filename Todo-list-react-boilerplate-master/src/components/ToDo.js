import React, { useState } from "react";
const ToDo=()=>{
    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState([]);
    const [editing , setEditing] = useState("");
    const [toggle, setToggle] = useState(false);
    function addItem(){
        if(item == ""){
            alert("Please Add Something!!!");
            return;
        }
        const newItem = {
            id: new Date().getTime().toString(),
            name: item,
        }
        if(toggle){
            const afterEdit = itemList.map((curritem)=>{
                if(curritem.id === editing.id){
                    return {...curritem, name:item}
                }
                return curritem;
            })
            setItemList(afterEdit);
            setItem("");
            setToggle(false)
            return;
        }
        setItemList([...itemList, newItem])
        setItem("")
    }
    function deleteItem(id){
        const afterDelete = itemList.filter((curItem)=>{
            return curItem.id !== id;
        })
        setItemList(afterDelete);
    }
    function editItem(curItem){
        setItem(curItem.name);
        setEditing(curItem);
        setToggle(true);
    }
    return(
        <>
            <input type="text" placeholder="Add your to do here..."value={item} onChange={(e)=>{setItem(e.target.value)}} />
            {toggle?<button onClick={addItem}>Save</button> : <button onClick={addItem}>Add Task</button>}
            <div className="All-Todos">
                {itemList.map((curItem)=>{
                    return(
                        <div key={curItem.id }>
                            <br/>
                            <span>{curItem.name}</span>
                            <button id="btn-id" onClick={()=>{ editItem(curItem) }} >Edit</button>
                            <button onClick={()=> deleteItem(curItem.id)}>Delete</button>
                            <br/>
                        </div>
                    )
                })}
            </div>
        </  >
    )
}
export default ToDo;