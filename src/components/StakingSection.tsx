
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const StakingSection = () => {
  const [stakedAmount, setStakedAmount] = useState(0);
  const [availableBalance, setAvailableBalance] = useState(1000);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">AGC Staking</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stake your AGC tokens and earn attractive returns. Contribute to network security while earning passive income.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Staking Stats */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-600">Staking Overview</CardTitle>
            <CardDescription>Your current staking position</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">{stakedAmount} AGC</p>
                <p className="text-sm text-gray-600">Currently Staked</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">15.2%</p>
                <p className="text-sm text-gray-600">Current APY</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Available Balance:</span>
                <span className="font-semibold">{availableBalance} AGC</span>
              </div>
              <div className="flex justify-between">
                <span>Pending Rewards:</span>
                <span className="font-semibold text-green-600">12.5 AGC</span>
              </div>
              <div className="flex justify-between">
                <span>Lock Period:</span>
                <span className="font-semibold">30 Days</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Staking Action */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-600">Stake AGC Tokens</CardTitle>
            <CardDescription>Start earning rewards by staking your tokens</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Amount to Stake</label>
              <div className="flex space-x-2">
                <input 
                  type="number" 
                  placeholder="Enter amount"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Button variant="outline" size="sm">Max</Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Staking Period</label>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" size="sm">30 Days</Button>
                <Button variant="outline" size="sm">90 Days</Button>
                <Button variant="outline" size="sm">180 Days</Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Estimated Rewards:</span>
                <span className="font-semibold text-green-600">~45.6 AGC</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>APY:</span>
                <span className="font-semibold">15.2%</span>
              </div>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700">
              Stake AGC Tokens
            </Button>
            
            <Button variant="outline" className="w-full border-green-600 text-green-600">
              Claim Rewards
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Staking Pools */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-green-600">Available Staking Pools</CardTitle>
          <CardDescription>Choose from different staking options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-green-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Flexible Pool</h3>
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <p className="text-2xl font-bold text-green-600 mb-1">8.5% APY</p>
              <p className="text-sm text-gray-600 mb-3">No lock period</p>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">Join Pool</Button>
            </div>

            <div className="p-4 border border-green-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">30-Day Lock</h3>
                <Badge className="bg-green-100 text-green-800">Popular</Badge>
              </div>
              <p className="text-2xl font-bold text-green-600 mb-1">15.2% APY</p>
              <p className="text-sm text-gray-600 mb-3">30 days lock</p>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">Join Pool</Button>
            </div>

            <div className="p-4 border border-green-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">90-Day Lock</h3>
                <Badge className="bg-green-100 text-green-800">Best Rate</Badge>
              </div>
              <p className="text-2xl font-bold text-green-600 mb-1">22.8% APY</p>
              <p className="text-sm text-gray-600 mb-3">90 days lock</p>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">Join Pool</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StakingSection;
