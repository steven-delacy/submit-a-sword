# Submit'a'Sword!

## The Tech

* [React](https://reactjs.org/docs/getting-started.html)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [Bulma (CSS framework)](https://bulma.io/documentation/)
* [Firebase] (https://firebase.google.com/)

## SUBMIT'A'SWORD
  * Using a db to store submitted form data inc a image
  * a button that pulls a random sword from the database and displays it


## User Stories

### MVP

#### As an unregistered User
  * I want to be able to submit all forms to the database
  * I want to be able to randomly generate a sword  from the database


## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Landing| View form for them to input details and a picture|
  | RandomSword| View of a random sword in the db
  

 ### SWORDS

 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_SWORD | sword | add a single sword item
 | DELETE_SWORD | sword | Delete a single sword item (admin only incase innapropriate amages are uploaded) |
 

 ### addForm
 | type | data | purpose |
 | --- | --- | --- |
 | ADD_SWORD | sword | Add a single sword item |


## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /login | Yes | Login a user (admin only) | The Users JWT Token |
| Get | /swords | Yes | Get a single sword | A single sword served up from the db |
| Post | /sword/add | Yes | Add a new sword | The sword item that has been saved in db read format |

## DB (Server Side)

### Users (Admin only)
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | username | String |
  | name | String |
  
  

### Sword 
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | sword_name | String |
  | category | String |
  | description | String |
  | sword_image | String |

 ---

## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
cp .env.example .env
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```
