import { useState } from "react"
import ItemLists from "./ItemLists"

const ResCategories = ({catData})=>{
    // console.log('cat', catData?.itemCards);
    const [onChange, setOnChange] = useState(true);
    return(
        <div>
            {/* Accordian Header */}
            <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={()=>setOnChange(!onChange)}>
                    <span className="font-bold text-lg">{catData.title} ({catData.itemCards.length})</span>
                    <span className="cursor-pointer">{onChange ? '⬇️' : '⬆️'}</span>
                </div>
                <div>
                    {/* Accordian Body */}
                    {
                        onChange  &&
                        <ItemLists items={catData?.itemCards}/>
                    }
                </div>
            </div>
            
        </div>
    )
}
export default ResCategories