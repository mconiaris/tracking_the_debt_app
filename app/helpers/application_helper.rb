module ApplicationHelper

  # Changes title of page
  def full_title(page_title = '')
    base_title = "Tracking the Debt"
    if page_title.empty?
      base_title
    else
      "#{page_title} | #{base_title}"
    end
  end

end
