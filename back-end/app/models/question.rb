class Question < ApplicationRecord
    belongs_to :quiz
    belongs_to :category
end
