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

  def javascript(*files)
    content_for(:head) { javascript_include_tag(*files) }
  end
end
