class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render json: @reviews, except: [:created_at, :updated_at]
  end
  # small edit
end
