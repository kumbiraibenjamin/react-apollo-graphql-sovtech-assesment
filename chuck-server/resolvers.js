const axios = require("axios")

const resolvers = {
  Query: {
    getJoke: async (parent, args, context, info) => {
      try {
        const joke = await axios.get(`https://api.chucknorris.io/jokes/random?category=${args.category}`)
          return joke.data
      } catch (error) {
        throw error
      }
    },

    categories: async () => {
      try {
          const categories = await axios.get("https://api.chucknorris.io/jokes/categories")
        return categories.data
      } catch (error) {
        throw error
      }
    },
  },

};

module.exports = resolvers;