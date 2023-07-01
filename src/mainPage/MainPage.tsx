import { useEffect, useState } from "react";
import Car from "../Car/types/Car";
import style from "../Car/Car.module.css"
import { Link, Outlet, useParams } from "react-router-dom";
import Booking from "../Booking/Booking";


export default function MainPage(): JSX.Element {
  const [cars, setCars] = useState<Car[]>([]);
  const {id} = useParams()
  useEffect(() => {
    fetch("https://artemshvidchenko.github.io/car_api/cars_list.json")
      .then((res) => res.json())
      .then((obj) => setCars(obj.autos));
  }, []);
  return (
    
    !id?(
    <div>
      <ul className={style.parentContainer}>
        {cars.map((car) => (
          <li className={style.item} key={car.id}>
            <div className={style.imageContainer}>
              <img className={style.image} src={car.link} alt="" />
              <p>{`${car.title} ${car.year}`}</p>
              <Link className={style.button} to={car.id.toString()}>Booking</Link>   
            </div>
          </li>
        ))}
      </ul>
    </div>
     ):
    (<Outlet />)
    
    );
}
