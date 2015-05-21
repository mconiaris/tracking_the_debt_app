require 'rails_helper'

# Specs in this file have access to a helper object that includes
# the FiscalYearHelper. For example:
#
# describe FiscalYearHelper do
#   describe "string concat" do
#     it "concats two strings with spaces" do
#       expect(helper.concat_strings("this","that")).to eq("this that")
#     end
#   end
# end
RSpec.describe FiscalYearsHelper, :type => :helper do
  describe "#current_dollars" do
    it "returns an array" do
      expect(helper.current_dollars.class).to eq(Array)
    end
    it "array's size is 80" do
      expect(helper.current_dollars.size).to eq(80)
    end
    it "current_dollars[0].size returns 3" do
      expect(helper.current_dollars[0].size).to eq(3)
    end
    it "current_dollars[0][0] returns 1940" do
      expect(helper.current_dollars[0][0]).to eq(1940)
    end
    it "current_dollars[10][1] returns 39.4" do
      expect(helper.current_dollars[10][1]).to eq(39.4)
    end
    it "current_dollars[20][2] returns 92.2" do
      expect(helper.current_dollars[20][2]).to eq(92.2)
    end
  end

  describe "#constant_dollars" do
    it "returns an array" do
      expect(helper.constant_dollars.class).to eq(Array)
    end
    it "array's size is 80" do
      expect(helper.constant_dollars.size).to eq(80)
    end
    it "constant_dollars[10].size returns 3" do
      expect(helper.constant_dollars[0].size).to eq(3)
    end
    it "constant_dollars[10][0] returns 1950" do
      expect(helper.constant_dollars[10][0]).to eq(1950)
    end
    it "constant_dollars[11][1] returns 39.4" do
      expect(helper.constant_dollars[11][1]).to eq(513.1)
    end
    it "constant_dollars[21][2] returns 92.2" do
      expect(helper.constant_dollars[21][2]).to eq(678.2)
    end
  end

  describe "#gdp_dollars" do
    it "returns an array" do
      expect(helper.gdp_dollars.class).to eq(Array)
    end
    it "array's size is 80" do
      expect(helper.gdp_dollars.size).to eq(80)
    end
    it "gdp_dollars[20].size returns 3" do
      expect(helper.gdp_dollars[0].size).to eq(3)
    end
    it "gdp_dollars[20][0] returns 1960" do
      expect(helper.gdp_dollars[20][0]).to eq(1960)
    end
    it "gdp_dollars[31][1] returns 16.7" do
      expect(helper.gdp_dollars[31][1]).to eq(16.7)
    end
    it "gdp_dollars[41][2] returns 21.6" do
      expect(helper.gdp_dollars[41][2]).to eq(21.6)
    end
  end

  describe "#surplus_deficit_current_dollars" do
    it "returns an array" do
      expect(helper.surplus_deficit_current_dollars.class).to eq(Array)
    end
    it "array's size is 80" do
      expect(helper.surplus_deficit_current_dollars.size).to eq(80)
    end
    it "surplus_deficit_current_dollars[30].size returns 2" do
      expect(helper.surplus_deficit_current_dollars[0].size).to eq(2)
    end
    it "surplus_deficit_current_dollars[30][0] returns 1970" do
      expect(helper.surplus_deficit_current_dollars[30][0]).to eq(1970)
    end
    it "surplus_deficit_current_dollars[51][1] returns 16.7" do
      expect(helper.surplus_deficit_current_dollars[51][1]).to eq(-269.2)
    end
  end
      # binding.pry
end
