import Button from '../components/Button';

import useCountryCapital   from '../hooks/useCountryCapital';

export const Page = () => {
  const { newArray, isCorrectCapital } = useCountryCapital();
  
  return (
    <>
    <h1>Country Capital Match Game</h1>
    <Button items={newArray} isCorrectCapital={isCorrectCapital}/>
    </>
  )
}



