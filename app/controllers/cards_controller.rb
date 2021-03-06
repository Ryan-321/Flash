class CardsController < ApplicationController
  def index
  @subject = Subject.find(params[:subject_id])
  @cards = @subject.cards

  render json: @cards.to_json, status: :ok
end
def show
  @subject = Subject.find(params[:subject_id])
  @card = Card.find(params[:id])
  render json: @card.to_json, status: :ok
end

def create
  @subject = Subject.find(params[:subject_id])
  @card = @subject.cards.build(card_params)

  if @subject.save
    render json: @subject.to_json, status: :created
  else
    render json: @subject.errors, status: :unprocessable_entity
  end
end

def update
  @subject = Subject.find(params[:subject_id])
  @card = Card.find(params[:id])

  if @card.update(card_params)
    render json: @card.to_json, status: :ok
  else
    render json: @card.errors, status: :unprocessable_entity
  end
end

def destroy
  @subject = Subject.find(params[:subject_id])
  @card = Card.find(params[:id])
  @card.destroy
  render json: {message: "success"}, status: :ok
end

private
  # Never trust parameters from the scary internet, only allow the white list through.
  def card_params
    params.require(:card).permit(:question, :answer, :subject_id)
  end


end
