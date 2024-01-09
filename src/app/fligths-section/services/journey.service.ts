import { journeyMapper } from '../mappers/journey.mapper';
import { Flight } from './../classes/Flight';
import { Injectable } from '@angular/core';


class PriorityQueue {
  queue: any[];
  constructor() {
    this.queue = [];
  }

  enqueue(element: any, priority: any) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift().element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}


@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor() { }


  dijkstra(graph: any, start: any, end: any) {
    const distances = {};
    const previous = {};
    const queue = new PriorityQueue();

    for (const node in graph) {
      (distances as any)[node] = Infinity;
    }

    (distances as any)[start] = 0;
    queue.enqueue(start, 0);

    while (!queue.isEmpty()) {
      const current = queue.dequeue();

      if (current === end) {
        break;
      }

      for (const neighbor in graph[current]) {
        const distance = (distances as any)[current] + graph[current][neighbor];
        if (distance < (distances as any)[neighbor]) {
          (distances as any)[neighbor] = distance;
          (previous as any)[neighbor] = current;
          queue.enqueue(neighbor, distance);
        }
      }
    }

    if ((distances as any)[end] === Infinity) {
      return [];
    }

    const path = [];
    let current = end;

    while (current !== start) {
      path.unshift(current);
      current = (previous as any)[current];
    }

    path.unshift(start);
    return path;
  }

  findCheapestRoute(flights: Flight[], origin: string, destination: string) {
    const originIndex = flights.findIndex((vuelo: Flight) => {
      return vuelo.origin === origin || vuelo.destination === origin;
    })
    const destinationIndex = flights.findIndex((vuelo: Flight) => {
      return vuelo.origin === destination || vuelo.destination === destination;
    })

    if (originIndex < 0 || destinationIndex < 0) {
      return undefined;
    }

    const graph = {};

    for (const flight of flights) {
      const departure = flight.origin;
      const arrival = flight.destination;
      const price = flight.price;

      if (!(graph as any)[departure]) {
        (graph as any)[departure] = {};
      }
      if (!(graph as any)[arrival]) {
        (graph as any)[arrival] = {};
      }

      (graph as any)[departure][arrival] = price;
    }

    const result = this.dijkstra(graph, origin, destination);

    return journeyMapper(this.formatJourney(flights, result), origin, destination)
  }

  formatJourney(flight: Flight[], result: any[]) {
    let results = [];
    for (let index = 0; index < result.length - 1; index++) {
      const flightDetail = flight.find((vuelo: Flight) => {
        return vuelo.origin === result[index] && vuelo.destination === result[index + 1]
      })
      if (flightDetail) {
        results.push(flightDetail)
      }
    }
    return results;

  }

}
