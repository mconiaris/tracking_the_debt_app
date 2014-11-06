require 'rails_helper'

    # t.integer  "fiscal_year"
    # t.float    "receipts_current_dollars"
    # t.float    "outlays_current_dollars"
    # t.float    "surplus_deficit_current_dollars"
    # t.float    "receipts_constant"
    # t.float    "outlays_constant"
    # t.float    "surplus_deficit_constant"
    # t.float    "gdp_receipts"
    # t.float    "gdp_outlays"
    # t.float    "gdp_surplus_deficit"
    # t.datetime "created_at"
    # t.datetime "updated_at"

RSpec.describe FiscalYear, :type => :model do
  it { should validate_presence_of(:fiscal_year) }
  it { should validate_presence_of(:receipts_current_dollars) }
  it { should validate_presence_of(:outlays_current_dollars) }
  it { should validate_presence_of(:surplus_deficit_current_dollars) }
  it { should validate_presence_of(:receipts_constant) }
  it { should validate_presence_of(:outlays_constant) }
  it { should validate_presence_of(:surplus_deficit_constant) }
  it { should validate_presence_of(:gdp_receipts) }
  it { should validate_presence_of(:gdp_outlays) }
  it { should validate_presence_of(:gdp_surplus_deficit) }
  it { should validate_presence_of(:fiscal_year) }
  it { should validate_presence_of(:fiscal_year) }
  it { should validate_presence_of(:fiscal_year) }
  it { should validate_presence_of(:fiscal_year) }
  it { should validate_presence_of(:fiscal_year) }
  it { should validate_presence_of(:fiscal_year) }
  it { should validate_presence_of(:fiscal_year) }
end
