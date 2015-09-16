class SubjectsController < ApplicationController

  def index
    @subjects = Subject.all

    render json: @subjects.to_json, status: :ok
  end
  def show
    @subject = Subject.find(params[:id])
    render json: @subject.to_json, status: :ok
  end

  def create
    @subject = Subject.new(subject_params)

    if @subject.save
      render json: @subject.to_json, status: :created
    else
      render json: @subject.errors, status: :unprocessable_entity
    end
  end

  def update
    @subject = Subject.find(params[:id])
    if @subject.update(subject_params)
      render json: @subject.to_json, status: :ok
    else
      render json: @subject.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @subject = Subject.find(params[:id])
    @subject.destroy
    render json: {message: "success"}, status: :ok
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def subject_params
      params.require(:subject).permit(:title, :definition)
    end

end
