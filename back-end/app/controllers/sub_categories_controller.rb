class SubCategoriesController < ApplicationController

    def index
        sub_categories = SubCategory.all
        render json: sub_categories
    end

end
