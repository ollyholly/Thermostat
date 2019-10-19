class AddCities < ActiveRecord::Migration[6.0]
  def change
    add_column :thermostats, :city, :text
  end
end
