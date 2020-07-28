class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render json: @reviews, except: [:created_at, :updated_at]
  end

  def create
    user_id = User.find_by(username: params[:username])
    @review = Review.create({
      user_review: params[:user_review],
      rating: params[:rating],
      user_id: user_id.id,
      quote_id: params[:quote]
    })
    redirect_to "http://localhost:3001/create-review.html?username=#{params[:username]}"
  end
end
