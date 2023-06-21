import { count } from "console";
import { FunctionComponent, useEffect, useState } from "react";

interface Props {
  title: string;
  genre: "comdey" | "horror";
  seasonsCount: number;
}

export const FilmDetails: FunctionComponent<Props> = ({
  title,
  genre,
  seasonsCount,
}) => {
    let [count,setCount] = useState(0);
    useEffect(()=>{
        console.log('count:', count);
        return () => {}
    },[count]);
    
  return (
    <div>
      <p>{title || "Unknown Film"}</p>
      {Boolean(genre) && <p>{genre}</p>}
      {/* булиан не отобразит */}
      <p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : "Нет"}</p>
      <div>
        <button onClick={()=> {count = count - 1}}>-</button>
        {count}
        <button onClick={()=>{count = count + 1}}>+</button>
      </div>
    </div>
  );
};
