const singleResolvers = require("./singleUpload");

const {GraphQLUpload} = require("graphql-upload");

const customResolvers = {
    Upload: GraphQLUpload
}

module.exports = { singleResolvers, singleResolvers};