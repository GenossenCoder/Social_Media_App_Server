const {gql} = require('apollo-server')
const typeDefs = gql`
    type Post {
        id: ID!
        theme: String!
        title: String!
        content: String!
        createdAt: String!
        username: String!
        comments: [Comment]!
        likes:[Like]
    }
    type Comment{
        id: ID!
        username: String,
        title:String,
        createdAt:String,
        content:String
        likes:[Like]
    }
    type Like{
        id:ID!
        username: String,
        createdAt:String,
    }
    type UserPost{
        id: String!, 
        createdAt: String!,
        title: String!
    }
    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
        Posts: [UserPost]
        
    }
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Theme{
        theme: String!
        posts:[String]
    }
    type Query{
        getPosts:[Post]
        getPost(postId:ID!): Post!
        getThemes:[Theme]
        getTheme(theme:String!): Theme!
        getThemedPosts(theme:String!):[Post]
        search(filter: String!):[Post!]
        getUser(id:String!): User!
    }
    type Mutation{
        register(registerInput: RegisterInput):User!
        login(username: String!, password: String!): User!
        createPost(theme: String!, title: String!, content: String):Post!
        deletePost(id: ID!):String!
        createComment(postId:String! title: String!, content: String!,):Post!
        deleteComment(postId:ID! commentId: String!):Post!
        likePost(postId:ID!):Post!
        likeComment(postId:String! commentId:String!):Post
    }
`
module.exports = typeDefs