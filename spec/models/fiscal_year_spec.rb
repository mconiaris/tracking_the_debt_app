require 'rails_helper'

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
end
