require 'rails_helper'

RSpec.describe "fiscal_years/new", :type => :view do
  before(:each) do
    assign(:fiscal_year, FiscalYear.new())
  end

  it "renders new fiscal_year form" do
    render

    assert_select "form[action=?][method=?]", fiscal_years_path, "post" do
    end
  end
end
