# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_18_132733) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "thermostats", force: :cascade do |t|
    t.integer "temperature", default: 20
    t.boolean "psm", default: true
    t.text "city"
  end

end
