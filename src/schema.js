const {gql} = require('apollo-server')
const typeDefs = gql`
type Query{
    getGroup(id:ID!):Group
    getAllGroups:[Group!]!
    getOrg(id:ID!):Org
    getAllOrgs:[Org!]!
    getSite(id:ID!):Site
    getAllSites:[Site!]!
    
}
type Mutation{
    createGroup(id:ID!,name:String!): Group
    createOrg(name:String!):Org
    createSite(name:String!):Site
    
}
type Group{
    id:ID!
    name:String!
    
}
type Org{
    id:ID!
    name:String!
    
}
type Site{
    id:ID!
    name:String!
    location:Float!
}


`
module.exports = typeDefs