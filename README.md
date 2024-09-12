# Project Name

> Description the project.


## Built With

- Prisma
- Frameworks
- Technologies used


## Getting Started

### 1. **Prisma Client**: 
   **Auto-generated and type-safe query builder for Node.js & TypeScript**
   - **Description**: Prisma Client is an advanced database ORM (Object-Relational Mapper) that automatically generates TypeScript/JavaScript code based on your database schema. This client allows you to interact with your database using a simple, readable, and type-safe API. It eliminates many common issues related to traditional SQL queries by providing type safety, which means your queries are checked at compile time, catching potential errors early.
   - **Key Features**:
     - **Type Safety**: Provides auto-completion and error detection, ensuring that database queries are accurate and match the schema.
     - **Query Builder**: Enables developers to construct database queries using JavaScript or TypeScript, reducing the need for raw SQL.
     - **Supports Relational Databases**: Prisma Client can be used with databases like PostgreSQL, MySQL, SQLite, SQL Server, and others.

### 2. **Prisma Migrate**: 
   **Migration system**
   - **Description**: Prisma Migrate is a database migration tool that helps you evolve your database schema over time, tracking changes in a version-controlled manner. It allows developers to easily make schema adjustments, such as adding or removing tables, columns, indexes, etc., while keeping the existing data intact.
   - **Key Features**:
     - **Declarative Schema Changes**: Define your schema changes in your Prisma schema file and let Prisma generate the migration scripts.
     - **Version Control**: Every schema change is saved as a migration file, allowing you to rollback or track database changes over time.
     - **Safe and Predictable Migrations**: Generates database-specific SQL migration scripts that are optimized and predictable.
     - **Rollback Support**: Offers the ability to rollback database changes in case of errors or undesired outcomes.

### 3. **Prisma Studio**: 
   **GUI to view and edit data in your database**
   - **Description**: Prisma Studio is a powerful graphical user interface (GUI) tool that allows developers and administrators to interact with the database data directly from their browser or development environment. With Prisma Studio, you can easily view, edit, and manage your database records without having to write SQL queries manually.
   - **Key Features**:
     - **Visual Data Exploration**: Browse through your database records in an intuitive UI, making it easy to understand relationships and structures.
     - **Data Editing**: You can insert, update, and delete data within your tables directly from the interface.
     - **Real-time Data View**: Changes to your database schema or data are reflected instantly, making it convenient for debugging and development.
     - **Easy Management of Relationships**: Prisma Studio simplifies managing and navigating relationships between tables in relational databases, like foreign key constraints.



### Prerequisites

### Setup

```
npm i typescript ts-node @types/node -D
npx tsc --init 
npm i prisma
npx prisma init --datasource-provider sqlite

```
#### After creating models
```
  npx prisma migrate dev --name init
```

### Install

### Usage

### Run tests

### Deployment



## Authors

👤 **Belay Birhanu G**

- GitHub: [@githubhandle](https://github.com/belaymit)
- Twitter: [@twitterhandle](https://twitter.com/2belamit)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/belay-bgwa/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./LICENSE) licensed.