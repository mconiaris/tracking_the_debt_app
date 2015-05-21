require "rails_helper"

describe ApplicationHelper do
  describe "#full_title" do
    it "returns 'Tracking the Debt' as the default title" do
      expect(helper.full_title).to eq("Tracking the Debt")
    end
    it "returns 'Home | Tracking the Debt' when it is passed 'Home'" do
      expect(helper.full_title('Home')).to eq("Home | Tracking the Debt")
    end
  end
end
