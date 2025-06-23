
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from "lucide-react";

const TradingInterface = () => {
  const [tradingPair, setTradingPair] = useState("AGC/USDT");
  const [orderType, setOrderType] = useState("buy");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const tradingPairs = [
    { pair: "AGC/USDT", price: "0.45", change: "+12.5%", volume: "125,000" },
    { pair: "AGC/SOL", price: "0.0045", change: "+8.2%", volume: "89,500" }
  ];

  const recentTrades = [
    { time: "14:23:15", pair: "AGC/USDT", type: "BUY", amount: "1,250", price: "0.45" },
    { time: "14:22:48", pair: "AGC/USDT", type: "SELL", amount: "2,100", price: "0.449" },
    { time: "14:22:12", pair: "AGC/SOL", type: "BUY", amount: "5,000", price: "0.0045" },
    { time: "14:21:55", pair: "AGC/USDT", type: "BUY", amount: "850", price: "0.448" },
  ];

  const executeOrder = () => {
    console.log(`Executing ${orderType} order: ${amount} ${tradingPair} at ${price}`);
    // Here would be the actual trading logic
  };

  return (
    <div className="space-y-8">
      {/* Trading Pairs Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tradingPairs.map((pair) => (
          <Card key={pair.pair} className="border-green-200 hover:border-green-400 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{pair.pair}</CardTitle>
                <Badge className={pair.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                  {pair.change.startsWith('+') ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                  {pair.change}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-green-600">${pair.price}</p>
                  <p className="text-sm text-gray-600">Current Price</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{pair.volume}</p>
                  <p className="text-sm text-gray-600">24h Volume</p>
                </div>
              </div>
              <Button 
                className="w-full mt-4 bg-green-600 hover:bg-green-700"
                onClick={() => setTradingPair(pair.pair)}
              >
                Trade {pair.pair}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Trading Form */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle>Trade {tradingPair}</CardTitle>
            <CardDescription>Place buy or sell orders for AGC tokens</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs value={orderType} onValueChange={setOrderType}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="buy" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Buy AGC
                </TabsTrigger>
                <TabsTrigger value="sell" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                  Sell AGC
                </TabsTrigger>
              </TabsList>

              <TabsContent value="buy" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="buy-amount">Amount (AGC)</Label>
                  <Input
                    id="buy-amount"
                    placeholder="Enter amount to buy"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="buy-price">Price ({tradingPair.split('/')[1]})</Label>
                  <Input
                    id="buy-price"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={executeOrder}
                >
                  Buy AGC
                </Button>
              </TabsContent>

              <TabsContent value="sell" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sell-amount">Amount (AGC)</Label>
                  <Input
                    id="sell-amount"
                    placeholder="Enter amount to sell"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sell-price">Price ({tradingPair.split('/')[1]})</Label>
                  <Input
                    id="sell-price"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={executeOrder}
                >
                  Sell AGC
                </Button>
              </TabsContent>
            </Tabs>

            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700">
                <strong>Trading Fee:</strong> 0.1% per transaction<br />
                <strong>Available Balance:</strong> 2,500 AGC | 1,200 USDT
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Trades */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle>Recent Trades</CardTitle>
            <CardDescription>Latest trading activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTrades.map((trade, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Badge className={trade.type === 'BUY' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                      {trade.type}
                    </Badge>
                    <div>
                      <p className="font-semibold">{trade.pair}</p>
                      <p className="text-sm text-gray-600">{trade.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{trade.amount} AGC</p>
                    <p className="text-sm text-gray-600">${trade.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TradingInterface;
