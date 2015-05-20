require 'rails_helper'

RSpec.describe "fiscal_years/show", :type => :view do
  before(:each) do
    @fiscal_year = assign(:fiscal_year, FiscalYear.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
