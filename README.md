# GenderMedia - TypeScript Project
The Project
This project involves the development of a TypeScript system that models the operational structure of an online media supporting gender equality. It focuses on interactions between media professionals, training programs, and publishing platforms.

## GenderMedia - The Idea
The concept originated from the need to promote gender equality and diversity in media. The system aims to showcase how technology can facilitate this goal through interfaces and classes representing key components: IProfessionistaMedia (Media Professional), IProgrammaFormazione (Training Program), and IPiattaforma (Platform).

## Requirements
To fulfill the project's objectives, the following components are defined:

IProfessionistaMedia: Interface representing media professionals with attributes like name, specialization, and experience.
IProgrammaFormazione: Interface representing training programs with details such as title, description, and participants.
IPiattaforma: Interface representing publishing platforms with attributes like name, type, and content categories.
Implementations are required for:

ProfessionistaMedia: Class implementing IProfessionistaMedia.
ProgrammaFormazione: Class implementing IProgrammaFormazione.
Piattaforma: Class implementing IPiattaforma.
## How to Install and Run the Project
To begin with the project, follow these steps:

Clone the Repository:

git clone [ https://github.com/your-username/gender-media-project](https://github.com/Fabrizio994/Progetto-ts.git)
cd gender-media-project
Install Dependencies:

npm install
Compile TypeScript Code:

npx tsc
Run the Project:

node dist/index.js
Ensure you have Node.js installed on your system to successfully run the project.

Optional: Run Tests:

If there are tests available in the project, you can run them using:

npm test
