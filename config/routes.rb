Rails.application.routes.draw do
  resources :subjects do
    resources :cards
  end
  root to: "subjects#index"

end
