class SubCategoriesController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

    def index
        sub_categories = SubCategory.all
        render json: sub_categories, include: [:category]
    end

    def show
        sub_categories = SubCategory.where(category_id: params[:id])
        render json: sub_categories
    end

end
