import { useEffect, useState } from "react";
import Car from "../Car/types/Car";
import { Link } from "react-router-dom";

export default function Booking(): JSX.Element {
    const [cars, setCars] = useState<Car[]>([]);
    console.log(cars)
    useEffect(() => {},[]);
      return (
            <div>
              <h2>Guten Tag!!</h2>
              <form action="booking"></form>
              <Link to={"MainPage"}>Back</Link>
              </div>
          );
        }

