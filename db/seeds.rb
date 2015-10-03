# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Subject.destroy_all
Card.destroy_all

ruby = Subject.create({title: "Rails", definition: "Rails Commands"})
js = Subject.create({title:"Javascript", definition: "Array Methods"})
css = Subject.create({title:"CSS", definition: "Cascading Style Sheets"})

Card.create({question: "Are models plural or singular", answer:"singular", subject:ruby})
Card.create({question: "What is a Boolean", answer:"True or False", subject:js})
Card.create({question: "Where can you put your CSS", answer:"External Stylesheet, Head, Inline", subject:css})
