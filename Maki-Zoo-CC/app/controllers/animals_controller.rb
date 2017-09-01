class AnimalsController < ApplicationController
  def index
    @animals = Animal.all.order(name: :asc)
  end

  def new
  end

  def create
    # TODO: Adjust the logic to send an error message if submission is invalid.

    @animal = Animal.create(
      name: params[:animalName]
    )

    render json: {
      message: "success!"
    }, status: 200
  end
end
