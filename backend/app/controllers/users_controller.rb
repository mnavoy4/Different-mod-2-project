class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users, except: [:updated_at, :created_at]
  end
end
