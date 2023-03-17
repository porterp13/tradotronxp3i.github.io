import alpaca_trade_api as tradeapi
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def get_equity():
    api = tradeapi.REST('PKBVI6JTQCTV01OYSSQ6', '6MZxiuNxE7Lg6fgxJVgY1xNmhaoK00FyeGWMhX47', base_url='https://paper-api.alpaca.markets')
    
    # Get account information
    account = api.get_account()

    netProfit = account - 100
    
    accountInfo = [netProfit]
    
    return render_template('index.html', accountInfo=accountInfo)


if __name__ == "__main__":
  app.run(debug=True)