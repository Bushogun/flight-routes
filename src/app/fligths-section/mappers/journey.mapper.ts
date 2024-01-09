import { Flight } from '../classes/Flight';
import { Journey } from '../classes/Journey';

export function journeyMapper(flights:Flight[] , origin:string, destination:string):Journey{
    const totalPrice = flights.reduce(function (acc, obj) { return acc + Number(obj.price); }, 0);
    return new Journey(flights , origin, destination, totalPrice)
}
