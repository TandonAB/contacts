import axios from 'axios';

// const corsURL = 'https://cors-anywhere.herokuapp.com/';

export default axios.create({
  baseURL: `https://reqres.in/api`
});