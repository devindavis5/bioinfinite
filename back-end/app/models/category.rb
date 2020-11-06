class Category < ApplicationRecord
    has_many :quizzes
    has_many :users, through: :quizzes
    has_many :questions
    has_many :subcategories
end
