import {useEffect, useState} from "react";
import {getShips} from "../../services/LaunchesServices";
import Ship from "../ship/Ship";

export default function Ships () {

    let [ships, setShips] = useState([]);

    useEffect(()=> {
        getShips().then(value => setShips([...value]))
    }, [])


    return (
      <div>
          {ships.map((ship,index) => <Ship key={index} ship={ship}/>)}
      </div>
    );
}