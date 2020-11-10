# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Category.destroy_all
Quiz.destroy_all
Question.destroy_all
SubCategory.destroy_all

bree = User.create(name: "Bree", email: "bree@gmail.com", password: "3693" )

# metabolism
# macromolecules
# botany
# dna_replication

cells = Category.create(name: "Cells", img_url: "https://www.coolaboo.com/wp-content/uploads/2018/11/animal-cell-300x242.jpg", introduction: "test introduction", conclusion: "test conclusion")

cell_quiz = Quiz.create(score: 10, user_id: bree.id, category_id: cells.id)

cell_question_one = Question.create(description: "Which organelle is the powerhouse of energy?", correct_answer: "Mitochondria", wrong_answer_one: "Rough ER", wrong_answer_two: "Nucleus", wrong_answer_three: "Golgi Apparatus", category_id: cells.id, quiz_id: cell_quiz.id)

cell_subcategory_one = SubCategory.create(name: "Cells Subcategory 1 Name", description: "Cells Subcategory 1 Description", category_id: cells.id)

puts "Good to go!"