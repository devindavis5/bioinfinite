class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :show, :update]

    def index
        users = User.all
        render json: users
    end

    def profile
        render json: { user: current_user }, status: :accepted
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
          @token = encode_token(user_id: @user.id)
          render json: { user: @user, jwt: @token }, status: :created
        else
          render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end

    def update
        user = User.find(params[:id])
        user.update(img_url: params[:img_url])
        render json: user
    end
     
    private
     
    def user_params
        params.require(:user).permit(:name, :email, :password, :img_url)
    end

end
