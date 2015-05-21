require "rails_helper"

describe ApplicationHelper do
  describe "#full_title" do
    it "returns the default title" do
      expect(helper.full_title).to eq("Tracking the Debt")
    end
  end
end
