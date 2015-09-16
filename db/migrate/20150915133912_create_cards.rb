class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :question
      t.text :answer
      t.references :subject, index: true, foreign_key: true
    end
  end
end
