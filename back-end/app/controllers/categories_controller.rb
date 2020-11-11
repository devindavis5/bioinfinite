class CategoriesController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

    def index
        categories = Category.all
        render json: categories
    end
    
    def show
        category = Category.find(params[:id])
        render json: category
    end

end
