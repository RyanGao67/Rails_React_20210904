class Currency < ApplicationRecord
  def calculate_value(amount)
    current_price.to_f * amount.to_f
  end
  def current_price
    url = "https://api.lunarcrush.com/v2?data=assets&key=jlj9iaa8pzdj6b6qbrk48o&symbol=#{self.currency_symbol}"
    request = HTTParty.get(url)
    response = JSON.parse(request.body)
    response["data"][0]["price"]
  end
end
