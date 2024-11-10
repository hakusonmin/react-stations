// @ts-check
import DogImage from './DogImage';
import{ useState } from 'react';


export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://dog.ceo/dog-api/");

  const doHoge = async () => {
    try{
      const response = await fetch("https://dog.ceo/api/breeds/image/random"); 
      const data = await response.json();
      setDogUrl(data.message); 
    } catch (error) {
      console.error("gige")
    }
  };
  //↓まずこんな感じでimageUrl定義してあげてください じゃないとエラーが出る
  const imageUrl = "https://dog.ceo/dog-api/"

  return (
  <>
    <h2>犬の画像を表示するアプリです。</h2>
    <img src={dogUrl}/>
  <button onClick={doHoge}>
    更新
  </button>
  <DogImage imageUrl={imageUrl} />
  </>
  );
}

export default Description
