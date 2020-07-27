# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

michael = User.create(
  username: "michael",
  password: "michael"
)
gerald = User.create(
  username: "gerald",
  password: "gerald"
)
billy = User.create(
  username: "billy",
  password: "billy"
)

quote1 = Quote.create(
  source: "philosopher 1",
  philosophy: "philosophy 1",
  quote: "quote 1"
)
quote2 = Quote.create(
  source: "philosopher 2",
  philosophy: "philosophy 2",
  quote: "quote 2"
)
quote3 = Quote.create(
  source: "philosopher 3",
  philosophy: "philosophy 3",
  quote: "quote 3"
)

review1 = Review.create(
  user_review: "I dont like this quote.",
  rating: 1,
  user: michael,
  quote: quote1
)
review2 = Review.create(
  user_review: "This quote is alright.",
  rating: 3,
  user: gerald,
  quote: quote2
)
review3 = Review.create(
  user_review: "I love this quote",
  rating: 5,
  user: billy,
  quote: quote3
)




