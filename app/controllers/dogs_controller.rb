class DogsController < ApplicationController
  def index
    @dogs = Dog.page(params[:page])
    respond_to do |format|
      format.html { render :index => @dogs }
      format.json {
        render :json => {
          models: @dogs,
          page_number: params[:page],
          total_pages: @dogs.total_pages
        }
      }
    end
  end
  def show
    @dog = Dog.find(params[:id])
  end
end
