Rails.application.routes.draw do
  resources :subjects, except: [:new, :edit] do
    resources :cards, except: [:new, :edit]
  end
  root to: redirect('/subjects')
end
