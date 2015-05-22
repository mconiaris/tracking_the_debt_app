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
  describe "create FiscalYear" do
    it "has none to begin with" do
      expect(FiscalYear.count).to eq 0
    end
    it "has one after create" do
      FiscalYear.create({
        :fiscal_year => 2012,
        :receipts_current_dollars => 2450.2,
        :outlays_current_dollars => 3537.1,
        :surplus_deficit_current_dollars => -1087.0,
        :receipts_constant => 2331.0,
        :outlays_constant => 3365.2,
        :surplus_deficit_constant => -1034.1,
        :gdp_receipts => 15.2,
        :gdp_outlays => 22.0,
        :gdp_surplus_deficit => -6.8
        })
      expect(FiscalYear.count).to eq 1
    end
  end
end
