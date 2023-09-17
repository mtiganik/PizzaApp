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
  calculatedPizzas: IPizzaCalculation[]

}

export const AppContext = React.createContext<IAppContext>({
  personCount: 1,
  onePersonEats: 150,
  newPizzaDiameter: 24,
  newPizzaPrice: 15.75,
  calculatedPizzas: []
});
