import axios from 'axios';
import md5 from "crypto-js/md5";

const getComics = async (page) => {
  const ts = Math.round(+new Date()/1000); // unix timestamp
  const publicKey = 'bec32e75bb7bcc25d2000ece9b8b0c68';
  const privateKey = 'd956f8633169d9bdef3e639df1b21df54924d904';
  const hash = md5(ts + privateKey + publicKey).toString();

  const comics = await axios.get(
    `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${page}`
  );

  //   const comics = await axios.get(' http://localhost:3000/comics')

  return comics.data.data.results;
};

export default getComics;