
class Category < ApplicationRecord
    has_many :quizzes
    has_many :users, through: :quizzes
    has_many :questions
    has_many :subcategories

    # def subcategories(id)
    #     SubCategory.all.select {|s| s.category_id == id}
    # end
end
