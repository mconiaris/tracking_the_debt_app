require 'rails_helper'

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

  # Test to confirm 'Home is in the <title> tag'
  it "to render 'Home' in the page" do
    render :template => "layouts/application.html.erb"
    expect(rendered).to match /Home/
  end
  it "to render 'Select a chart:' in the home view" do
    expect(rendered).to match /Select a chart:/
  end
  it "current_dollars[72][0] equals 2012" do
    expect(view.current_dollars[72][0]).to match(2012)
  end
end
