module FiscalYearsHelper

  def data_to_csv(data)
    @csv_line = data.first.fiscal_year.to_s + "," +
      data.first.receipts_current_dollars.to_s + "," +
      data.first.outlays_current_dollars.to_s + "\n"
  end

end
