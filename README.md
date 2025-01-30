# NoSQL Social Network API

## Description
This project is a full-stack social network API designed to support user interactions, including sharing thoughts, reacting to posts, and managing friend lists. Built with Express.js, MongoDB, and Mongoose, the API is optimized for handling large volumes of unstructured data efficiently.

## Table of Contents
1. [Description](#description)
2. [Table of Contents](#table-of-contents)
3. [Project Requiremnts](#project-requirements)
4. [Usage](#usage)
5. [Demonstration](#demonstration)
6. [Technologies Employed](#technologies-employed)
7. [Future Development](#future-development)
8. [Contributing](#contributing)
9. [Credits](#credits)
10. [Questions](#questions)
11. [License](#license)

## Project Requirements
### User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Usage
To make API calls using MongoDB and Express.js.

<!-- 
Please use Insomnia API collection found here for API calls:
[socialnetworkAPIs.json](https://github.com/user-attachments/files/18152714/socialnetworkAPIs.json) -->

To demonstrate code functionality run:
````
npm install
````
````
npm run start
````

### Key Features:
The API is fully deployed and ready for integration with front-end applications or mobile clients. It demonstrates modern backend practices and serves as a foundation for building scalable social networking platforms.

    - User account management and friend list creation.
    - Thought sharing and reactions to user content.
    - Scalable and flexible data architecture for real-world applications.

## Demonstration
<div style="margin-left: 40px;">
  Demonstration of the application's desktop interface:<br/>
  <img src="FILL.gif" alt="Demonstration video" width="550"/>
</div>
<br/>

<div style="margin-left: 40px;">
  Image of the application's desktop interface:<br/>
  <img src="Screenshot.png" alt="Screenshot" width="550"/>
</div>
<br/>

## Technologies Employed
**Backend:**  
    [![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
    [![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
    [![Mongoose](https://img.shields.io/badge/-Mongoose-880000?logo=mongoose&logoColor=white)](https://mongoosejs.com/)
    [![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)](https://expressjs.com/)


## Future Development
I do not plan to make any further developments on this project outside of using it as a learning and rescoure model.

## Contributing
Contributions are welcome and encouraged. To do so:
- Fork this repository. 
- Your pull request will need approval in order to merge to ```main```.
- Take a look at the [Future Development](#future-development) section to see what I am currently working on.

## Credits
This code was written as an excersice by edX coding bootcamp and modified to function by me.

## Questions
If you have any questions, please reach out to me at:
- Email: [skylarkline16@gmail.com](mailto:skylarkline16@gmail.com)
- GitHub: [skylark-shae](https://github.com/skylark-shae)

## License

This project is licensed under the MIT license.

The MIT License is a permissive software license originating at the Massachusetts Institute of Technology (MIT)[6] in the late 1980s.[7] As a permissive license, it puts very few restrictions on reuse and therefore has high license compatibility.

For more information visit [MIT Licensing](https://choosealicense.com/licenses/mit/).

- - -
© 2025 Sky-Shae Design. All Rights Reserved.
