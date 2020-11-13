class User < ApplicationRecord
    has_many :quizzes
    has_many :categories, through: :quizzes
    has_secure_password
    validates :name, uniqueness: { case_sensitive: false }
    validates :email, uniqueness: { case_sensitive: false }

end
