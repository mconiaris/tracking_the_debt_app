# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141027183200) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "fiscal_years", force: true do |t|
    t.integer  "fiscal_year"
    t.float    "receipts_current_dollars"
    t.float    "outlays_current_dollars"
    t.float    "surplus_deficit_current_dollars"
    t.float    "receipts_constant"
    t.float    "outlays_constant"
    t.float    "surplus_deficit_constant"
    t.float    "gdp_receipts"
    t.float    "gdp_outlays"
    t.float    "gdp_surplus_deficit"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
