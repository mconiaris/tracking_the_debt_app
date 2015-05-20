require 'rails_helper'

RSpec.describe FiscalYearsController, :type => :controller do
  describe "index page" do
    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end
  end
  describe "home page" do
    it "renders the home template" do
      get :home
      expect(response).to render_template("home")
    end
  end
  describe "about page" do
    it "renders the about template" do
      get :about
      expect(response).to render_template("about")
    end
  end
end
