require 'rails_helper'

# TODO: Un-comment tests to research & make pass
RSpec.describe "fiscal_years/home", :type => :view do

  before(:each) do
    assign(:fiscal_years, [
      FiscalYear.create!({
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
    ])
    render
  end

  # TODO: write test to confirm 'Home is in the <title> tag'
  it "to render 'Select a chart:' in the page" do
    expect(rendered).to match /Select a chart:/
  end
  it "has '2012' the page" do
    expect(rendered).to match /2012/
  end
end
