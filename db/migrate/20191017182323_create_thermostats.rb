class CreateThermostats < ActiveRecord::Migration[6.0]
  def change
    create_table :thermostats do |t|
      t.integer :temperature, default: 20
      t.boolean :psm, default: true
    end
  end
end