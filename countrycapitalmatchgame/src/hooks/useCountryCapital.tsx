import { useEffect, useState } from "react";

interface Country {
  country: string;
  capital: string;
}


export default function useCountryCapital() {

  const [newArray, setNewArray] = useState<string[]>([]);

  useEffect(() => { 
    setNewArray(shuffleArray(countries))
  },[] )

  const countries: Country[] = [
    { country: 'USA', capital: 'Washington, D.C.' },
    { country: 'Mexico', capital: 'Mexico City' },
    { country: 'Canada', capital: 'Ottawa' },
    { country: 'Spain', capital: 'Madrid' },
    { country: 'Japan', capital: 'Tokyo' },
  ];
  

  function shuffleArray(array: Country[]): string[] {
    const copy: string[] = array.flatMap(item => [item.country, item.capital]);
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  
  const isCorrectCapital = ( optionOne: string, optionTwo: string): boolean => {
    const country = countries.find(c => c.country === optionOne || c.capital === optionOne);
    if (country) {
      return country.country === optionOne ? country.capital === optionTwo : country.country === optionTwo;
    }
    return false;
  }
  



  return { newArray, isCorrectCapital };
}