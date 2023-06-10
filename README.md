# LumosTask 7
This is my Submisssion for Lumos Wizards program
## Problem staement
Develop a backend API using Node.js and Express that allows users to register, login, and create posts. The API should use JWT for authentication and allow users to upload images for their posts.

## NOTE FOR USE
### Please add an `.env` file containg enviroment variables -
#### MONGO_URL
#### JWT_SECRET 
#### PORT

Install node modules by doing
```bash
npm install
```
for starting server 
```bash
node index.js
```
## Defined Endpoints and their usage
### 1. Auth endpoints
#### POST  - `/auth/register`  - For user registration
#### POST - `/auth/login` - for user login

### 2. User endpoints
#### GET - `/users/userID`  - for getting user info with ID 

### 3. Post endpoints
#### POST - `/posts` - for posting a post on DB 
#### GET - `/posts` - for getting all the posts on database 
#### GET - `/posts/userID` - for getting posts of a perticular user

#### Note- use JWT bearer token  recieved during login for user and post endpoints to work

## Examples of implememtation
### User Register

<img width="971" alt="Register User" src="https://github.com/soham1826/LumosTask7/assets/107259970/2779480e-efe4-4aae-a81c-2113ba420a21">

### User Login

<img width="971" alt="Login User" src="https://github.com/soham1826/LumosTask7/assets/107259970/f60eaac5-84ce-4080-b7de-8f9f2cd34e32">

### Getting user info by ID

<img width="962" alt="Get user by ID" src="https://github.com/soham1826/LumosTask7/assets/107259970/06d67018-f6bc-4b67-b8d2-d5ba9e118df3">

### Creating a Post

<img width="972" alt="Creating Post" src="https://github.com/soham1826/LumosTask7/assets/107259970/bfb390da-c493-4bc9-aea1-427f328c2e31">

### Getting all posts

<img width="973" alt="Getting all posts for feed" src="https://github.com/soham1826/LumosTask7/assets/107259970/7bf1388d-49d5-4ebe-b389-988c1ee7ea98">

### Getting posts by userID

<img width="970" alt="getting post of perticular user" src="https://github.com/soham1826/LumosTask7/assets/107259970/d2b96842-7bb1-4f1f-a211-217f2587d43b">



