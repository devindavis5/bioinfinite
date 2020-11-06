class CreateQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :quizzes do |t|
      t.integer :score
      t.integer :user_id
      t.integer :category_id

      t.timestamps
    end
  end
end
