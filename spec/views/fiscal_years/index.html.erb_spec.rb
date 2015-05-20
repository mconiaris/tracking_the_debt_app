require 'rails_helper'

RSpec.describe "fiscal_years/index", :type => :view do
  before(:each) do
    assign(:fiscal_years, [
      FiscalYear.create!(),
      FiscalYear.create!()
    ])
  end

  it "renders a list of fiscal_years" do
    render
  end
end
