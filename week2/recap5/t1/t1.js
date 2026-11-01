'use strict';

async function getUser() {
  const response = await fetch('https://reqres.in/api/users/1', {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  });
  const data = await response.json();
  console.log(data);
}

getUser();
