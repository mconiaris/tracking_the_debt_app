require 'rails_helper'

RSpec.describe "FiscalYears", :type => :request do
  describe "GET /fiscal_years" do
    it "works! (now write some real specs)" do
      get fiscal_years_path
      expect(response.status).to be(200)
    end
  end
end
