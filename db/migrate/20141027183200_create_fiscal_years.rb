class CreateFiscalYears < ActiveRecord::Migration
  def change
    create_table :fiscal_years do |t|
      t.integer :fiscal_year
      t.float :receipts_current_dollars
      t.float :outlays_current_dollars
      t.float :surplus_deficit_current_dollars
      t.float :receipts_constant
      t.float :outlays_constant
      t.float :surplus_deficit_constant
      t.float :gdp_receipts
      t.float :gdp_outlays
      t.float :gdp_surplus_deficit

      t.timestamps
    end
  end
end
