require 'rails_helper'

RSpec.describe FiscalYearsController, :type => :controller do
  it "renders the index template" do
    get :index
    expect(response).to render_template("index")
  end
end
