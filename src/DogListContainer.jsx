import{ useState } from 'react';
import{ useEffect } from 'react';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState("https://dog.ceo/dog-api/");

  const doHoge = async () => {
    try{
      const response = await fetch("https://dog.ceo/api/breeds/list/all"); 
      const data = await response.json();
      setBreeds(data.message); 
    } catch (error) {
      console.error("gige")
    }
  };

  useEffect(() => {
    doHoge();
  },[]);

  return <>
    <img src={breeds}/>
  </>
}

export default DogListContainer
