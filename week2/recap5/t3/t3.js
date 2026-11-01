'use strict';

async function getUser() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    if (!response.ok) {
      throw new Error('User not found');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error', error.message);
  }
}

getUser();
