require 'rails_helper'

# TODO: Un-comment tests to research & make pass
RSpec.describe "fiscal_years/edit", :type => :view do
  # before(:each) do
  #   @fiscal_year = assign(:fiscal_year, FiscalYear.create!())
  # end

  # it "renders the edit fiscal_year form" do
  #   render

  #   assert_select "form[action=?][method=?]", fiscal_year_path(@fiscal_year), "post" do
  #   end
  # end
  # Test to confirm 'Home is in the <title> tag'
  it "to render 'Edit' in the page" do
    render :template => "layouts/application.html.erb"
    expect(rendered).to match /Edit/
  end
end
