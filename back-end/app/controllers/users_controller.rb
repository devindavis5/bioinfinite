class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    # def create
    #     user = User.find_or_create_by(name: params[:name])
    #     pers_scores = user.top_five
    #     user_data = {username: user, scores: pers_scores}
    #     render json: user_data
    # end

    def create
        user = User.find_or_create_by(name: params[:name])
        user_data = {name: user.name, quizzes: user.quizzes}
        render json: user_data
    end

end
