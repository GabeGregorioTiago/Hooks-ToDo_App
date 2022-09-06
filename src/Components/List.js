import Reac, {useState} from "react"

function List(){
    const [item, setItem]=useState("");
    const [lista,setLista]=useState([]);
    const tarefa={tarefa:item,id:Date.now()};
    const Add=()=>{
         if(item!==""){
            setLista([...lista,tarefa]);
         }
         setItem("");
    };
    const Remove = (id)=>{
         setLista(lista.filter((item)=>item.id!==id));

    };
    const RemoveAll = (id)=>{
        setLista(lista.filter((item)=>item.id==id));

    }
    return(
         <div>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input value={item} onChange={(e)=>setItem(e.target.value)}/>
                <button onClick={()=>Add()}>Add</button>
                <button onClick={() => RemoveAll(item.id)}>Remove All</button>

            </form>
            <div>
              {
                    lista.map((item,index)=>(
                    <div>
                        <p>{item.tarefa}</p>
                        <button onClick={() => Remove(item.id)}>X</button>
                    </div>))
                }
            </div>
         </div>

    );

}

export default List;