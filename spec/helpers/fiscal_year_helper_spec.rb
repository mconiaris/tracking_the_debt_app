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
      # binding.pry
  end
end
