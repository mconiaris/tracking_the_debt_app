class FiscalYear < ActiveRecord::Base
  validates :fiscal_year, presence: true, uniqueness: true
  validates :receipts_current_dollars, presence: true
  validates :outlays_current_dollars, presence: true
  validates :surplus_deficit_current_dollars, presence: true
  validates :receipts_constant, presence: true
  validates :outlays_constant, presence: true
  validates :surplus_deficit_constant, presence: true
  validates :gdp_receipts, presence: true
  validates :gdp_outlays, presence: true
  validates :gdp_surplus_deficit, presence: true
end
