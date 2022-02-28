# boilerplate-es7-typescript

### Project Release Pipeline
- **Action**: *SPOC*
- **User stories**: *Product Manager*
- **Design**: *Product Manager*
- **Mockups/Contracts**: *Developer*
- **Architechture, HLD, and LLD**: *Developer*
- **Architechture, HLD, and LLD Approval**: *SENIOR DEV/EM/HOD/*
- **Development**: *Developer*
- **Unit testing**: *Developer*
- **Code Review**: *SENIOR DEV/EM/HOD/*
- **Staging**: *SENIOR DEV/EM/HOD/*
- **QA**: *QA team*
- **CUG/Business approval**: *Business*
- **Production**: *DevOps*

### Request Processing Pipeline
> - Routes-> Controllers-> Services-> Models
> - Detailed: ->RequestHandlers(Authentication -> Route Sanity)-> RequestValidator(middleware)
            -> Controller -> Services -> Models -> Database

### Folder Structure

- [**build**](build)
- [**src**](src)
    - [**app**](src/app)
        - [**constants**](src/app/constants)
        - [**controllers**](src/app/controllers)
        - [**helpers**](src/app/helpers)
        - [**models**](src/app/models)
        - [**routes**](src/app/routes)
        - [**schemas**](src/app/schemas)
        - [**services**](src/app/services)
        - [**validators**](src/app/validators)
    - [**configs**](src/configs)
    - [**test**](src/test)
        - [**models**](src/test/models)

#### build: [**build**](build)
> Contains project build.

#### test: [**test**](src/test)
> Contains all the test suite(unit test cases).

#### src: [**src**](src)
> Contains all the TS code.

#### configs: [**configs**](src/configs)
>
- Environment variables and default configs of server/database/service configuration.
- Always use uppercase for environment variables with **SNAKE CASE**.
- Server should **not start** if configs are missing.

#### app: [**app**](src/app)
>Contains **Routes, Controllers, Models, Services, Validators, Schemas and Constants**.

#### constants: [**constants**](src/app/constants)
> Contains all **constants** of used inside the application. Eg. CUSTOM_ERRORS, MICROSERVICES_ENDPOINTS, etc.

#### routes: [**routes**](src/app/routes)
> Contains route and a master Route handler i.e. index.js
**Avoid:** Creating functions in routes. Use middleware for custom functionalities.

#### controllers: [**controllers**](src/app/controllers)
> Contains controllers

#### models: [**models**](src/app/models)
> Contains models. DB calls

#### services: [**services**](src/app/services)
> Logic orchestration will happen at services layer

#### schemas: [**schemas**](src/app/schemas)
> DB Schema declaration

#### validators: [**validators**](src/app/validators)
> Request level validations. Will be used as middleware in respective route files.

#### How to setup:
>
- Upgrade to Node LTS.
- **Clone** the boilerplate.
- Create **start-server-sample** file containing all the environment variables without values.
- **Copy** start-server-sample keys to **start-server.sh**(create new file) and put "**npm start**" at the EOF.
- Now run the **start-server.sh** file and Bingo (:

#### Remember:
>
- Update and Commit the start-server-sample only with keys, so that it becomes easier to track what all environment variables are used across the project.
- Don't commit .sh files.
- You can configure the .editorconfig, tsconfig.json, .gitignore, .dockerignore as per the requirement.
- It is expected that you write the self documented code. Use proper variable name (Don't use shortcuts, abbvrs.)
- File naming under a controller/routes/models/schemas/validators/helpers should be on the name of domain.
  Like for user
  - FileName: User.js in respective folders
  - Routes: will be exported as UserRouter
  - Models: will be exported as UserModel
  - Controller: will be exported as UserController
  - Service: will be exported as UserService
  - Schemas: will be exported as UserSchema
>
- Instead for writing huge functions split them into multiple functions.

#### Versioning:
>
**APP_VERSIONING**
- Please maintain app version in package.json
- After releasing the first version(1.0.0) of application please update the version in the next release/hot-fix
>
**DB_VERSIONING**
- It's recommended to maintain DB version. If using Mongo use **__v** for versioning and for other DB's their respective version control functionalities.

#### Should follow:
> Not following above code structure and following principles will lead to PR rejection.
- **DRY** (Don't Repeat Yourself)
- **Single Responsibility Principle** (SRP)
- "**Keep it simple, stupid**" (KISS)
- **Separation of Concerns**
- **YAGNI** (You ain't gonna need it)
- **Avoid premature optimization**
- **S.O.L.I.D** programming principles
- **Modularity**

#### Code contribution guidelines:
[READ](https://docs.google.com/document/d/1ILol-Wq38pp31KhtHWF5eBQr7-7NDG4szgUBJ70zXlQ/edit)
