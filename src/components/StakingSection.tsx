
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
        <h2 className="text-3xl font-bold text-white mb-4">AGC Staking</h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Stake your AGC tokens and earn attractive returns. Contribute to network security while earning passive income.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Staking Stats */}
        <Card className="border-blue-500/20 bg-slate-800/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-blue-400">Staking Overview</CardTitle>
            <CardDescription className="text-slate-300">Your current staking position</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <p className="text-2xl font-bold text-blue-400">{stakedAmount} AGC</p>
                <p className="text-sm text-slate-400">Currently Staked</p>
              </div>
              <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <p className="text-2xl font-bold text-blue-400">15.2%</p>
                <p className="text-sm text-slate-400">Current APY</p>
              </div>
            </div>
            
            <Separator className="bg-blue-500/20" />
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-300">Available Balance:</span>
                <span className="font-semibold text-white">{availableBalance} AGC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Pending Rewards:</span>
                <span className="font-semibold text-emerald-400">12.5 AGC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Lock Period:</span>
                <span className="font-semibold text-white">30 Days</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Staking Action */}
        <Card className="border-blue-500/20 bg-slate-800/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-blue-400">Stake AGC Tokens</CardTitle>
            <CardDescription className="text-slate-300">Start earning rewards by staking your tokens</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Amount to Stake</label>
              <div className="flex space-x-2">
                <input 
                  type="number" 
                  placeholder="Enter amount"
                  className="flex-1 px-3 py-2 border border-blue-500/20 bg-slate-700/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                />
                <Button variant="outline" size="sm" className="border-blue-500/40 text-blue-300 hover:bg-blue-600/20">Max</Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Staking Period</label>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" size="sm" className="border-blue-500/40 text-blue-300 hover:bg-blue-600/20">30 Days</Button>
                <Button variant="outline" size="sm" className="border-blue-500/40 text-blue-300 hover:bg-blue-600/20">90 Days</Button>
                <Button variant="outline" size="sm" className="border-blue-500/40 text-blue-300 hover:bg-blue-600/20">180 Days</Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Estimated Rewards:</span>
                <span className="font-semibold text-emerald-400">~45.6 AGC</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">APY:</span>
                <span className="font-semibold text-blue-400">15.2%</span>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30">
              Stake AGC Tokens
            </Button>
            
            <Button variant="outline" className="w-full border-blue-500/40 text-blue-300 hover:bg-blue-600/20">
              Claim Rewards
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Staking Pools */}
      <Card className="border-blue-500/20 bg-slate-800/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-blue-400">Available Staking Pools</CardTitle>
          <CardDescription className="text-slate-300">Choose from different staking options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-blue-500/20 bg-slate-700/30 rounded-lg hover:shadow-md hover:shadow-blue-500/20 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-white">Flexible Pool</h3>
                <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">Active</Badge>
              </div>
              <p className="text-2xl font-bold text-blue-400 mb-1">8.5% APY</p>
              <p className="text-sm text-slate-400 mb-3">No lock period</p>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Join Pool</Button>
            </div>

            <div className="p-4 border border-blue-500/20 bg-slate-700/30 rounded-lg hover:shadow-md hover:shadow-blue-500/20 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-white">30-Day Lock</h3>
                <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/40">Popular</Badge>
              </div>
              <p className="text-2xl font-bold text-blue-400 mb-1">15.2% APY</p>
              <p className="text-sm text-slate-400 mb-3">30 days lock</p>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Join Pool</Button>
            </div>

            <div className="p-4 border border-blue-500/20 bg-slate-700/30 rounded-lg hover:shadow-md hover:shadow-blue-500/20 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-white">90-Day Lock</h3>
                <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/40">Best Rate</Badge>
              </div>
              <p className="text-2xl font-bold text-blue-400 mb-1">22.8% APY</p>
              <p className="text-sm text-slate-400 mb-3">90 days lock</p>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Join Pool</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StakingSection;
