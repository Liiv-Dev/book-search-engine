const typeDefs = `
type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: Author[], description: String!, title: String!, bookId: Sting!, image: String!, link: String!): User
    removeBook(bookId: String!): User
}

type User {
    _id: ID
    username: String
    email: String
    bootCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID
    authors: [Strings]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    tokern: ID!
    user: User
}`;

module.exports = typeDefs