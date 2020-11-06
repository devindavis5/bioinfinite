class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :description
      t.string :correct_answer
      t.string :wrong_answer_one
      t.string :wrong_answer_two
      t.string :wrong_answer_three
      t.integer :category_id
      t.integer :quiz_id

      t.timestamps
    end
  end
end
