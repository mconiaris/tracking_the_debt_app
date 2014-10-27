json.array!(@fiscal_years) do |fiscal_year|
  json.extract! fiscal_year, :id, :fiscal_year, :receipts_current_dollars, :outlays_current_dollars, :surplus_deficit_current_dollars, :receipts_constant, :outlays_constant, :surplus_deficit_constant, :gdp_receipts, :gdp_outlays, :gdp_surplus_deficit
  json.url fiscal_year_url(fiscal_year, format: :json)
end
