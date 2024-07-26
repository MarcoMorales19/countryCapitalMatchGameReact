import { useState, useEffect} from "react";
import Messages from './Messages';

import './Button.css'

interface ButtonListProps {
  items: string[];
  isCorrectCapital: (optionOne: string, optionTwo: string) => boolean;
}

const button: React.FC<ButtonListProps> = ({ items, isCorrectCapital }) =>  {

  const getInitialState = (key: string, defaultValue: any) => {
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return defaultValue;
  };

  const [optionOne, setOptionOne] = useState<string>('');
  const [optionTwo, setOptionTwo] = useState<string>('');
  const [ correctArray, setCorrectArray] = useState<string[]>(() => getInitialState('correctArrayStore', []))
  const [ clickedArray, setClickedArray] = useState<string[]>([])
  const [ incorrectArray, setIncorrectArray] = useState<string[]>([])
  const [ errorsCounter, setErrorsCounter] = useState<number>(0)

  useEffect(() => {
    localStorage.setItem('correctArrayStore', JSON.stringify(correctArray));

  }, [correctArray]);


  

  const handleSaveOption = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    const currentValue = e.currentTarget.value

    if (!optionOne) {
      setOptionOne(currentValue);
      setClickedArray([...clickedArray, currentValue])
    } else if (!optionTwo) {
      setOptionTwo(currentValue);
      setClickedArray([...clickedArray, currentValue])
      const result = isCorrectCapital(optionOne, currentValue)
      if (result) {
        setCorrectArray([...correctArray, optionOne, currentValue]);
        setClickedArray([])
      }else {
        setErrorsCounter(errorsCounter+1) 
        setClickedArray([])
        setIncorrectArray([...incorrectArray, optionOne, currentValue]);
        setTimeout(() => {
          setIncorrectArray([]);
        }, 1000);
        
      }
      // Reset Values
      setOptionOne('');
      setOptionTwo('');
    } 


  }


  console.log(correctArray.length === 10)


  if(errorsCounter >= 3 || correctArray.length === 10){

    localStorage.clear();
    return ( <Messages  isWinner={correctArray.length === 10? true : false }/>)
  } 
    

  return (
    <>
      <div>
        
          {items.map((item, index) => {
            const isClicked = clickedArray.includes(item);
            const isCorrect = correctArray.includes(item);
            const isInCorrect = incorrectArray.includes(item);
          

            return(
                    <button 
                    key={index} 
                    disabled={isClicked || isCorrect} 
                    className={isClicked ? 'clicked' : isCorrect ? 'success': isInCorrect? 'incorrect' :'button'}
                    name={item} 
                    value={item} 
                    onClick={(event:React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => handleSaveOption(event)}>
                      {item}
                    </button>
            )
        })}
          </div>
          { errorsCounter > 0 && <p>Errors: {errorsCounter}</p>}
    </>
  )
}

export default button;

