class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :img_url
      t.string :introduction
      t.string :conclusion

      t.timestamps
    end
  end
end
