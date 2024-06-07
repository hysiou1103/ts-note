import axios from 'axios';
import _ from 'lodash';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// API Response
// {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//     lat: "-37.3159",
//     lng: "81.1496"
//     }
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets"
//     }
// }

axios
  .get<User>('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => {
    console.log('woo');
    const { data } = res; // data Type 為USER
    printUser(data);
  })
  .catch((e) => console.log('error', e));

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}

axios
  .get<User[]>('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    console.log('woo');
    const { data } = res; // data Type 為USER
    data.forEach(printUser);
  })
  .catch((e) => console.log('error', e));
