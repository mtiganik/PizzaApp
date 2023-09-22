import React from "react"

export interface IPizzaCalculation {
  diameter: number;
  price: number;
}

export interface IAppContext{
  personCount: number,
  onePersonEats: number,
  newPizzaDiameter: number, 
  newPizzaPrice: number,
  calculatedPizzas: IPizzaCalculation[];
  addOneToCount?: () => void;

}

export const DefaultAppState: IAppContext ={
  personCount: 1,
  onePersonEats: 150,
  newPizzaDiameter: 24,
  newPizzaPrice: 15.75,
  calculatedPizzas: [],
}
export const AppContext = React.createContext<IAppContext>(DefaultAppState)