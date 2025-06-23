
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, Users, Gift, TrendingUp, Crown } from "lucide-react";

const ReferralProgram = () => {
  const [referralCode] = useState("AGC-REF-7X9M2N");
  const [totalReferrals] = useState(12);
  const [totalEarnings] = useState(284.5);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://agc-ecosystem.com/ref/${referralCode}`);
    // In real app, show toast notification
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Referral Program</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Earn bonuses by inviting friends to join the Agriculture Ecosystem Fund. 
          Get rewards for every successful referral across 5 levels and leadership bonuses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Referral Stats */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-600">Your Referral Statistics</CardTitle>
            <CardDescription>Track your referral performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{totalReferrals}</p>
                <p className="text-sm text-gray-600">Total Referrals</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Gift className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{totalEarnings} AGC</p>
                <p className="text-sm text-gray-600">Total Earnings</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>This Month:</span>
                <span className="font-semibold text-green-600">45.2 AGC</span>
              </div>
              <div className="flex justify-between">
                <span>Leadership Bonus:</span>
                <span className="font-semibold text-green-600">25.0 AGC</span>
              </div>
              <div className="flex justify-between">
                <span>Current Level:</span>
                <Badge className="bg-green-100 text-green-800">Gold Leader</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Referral Link */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-600">Your Referral Link</CardTitle>
            <CardDescription>Share this link to earn referral bonuses</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Referral Code</label>
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  value={referralCode}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
                <Button onClick={copyToClipboard} size="sm">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Referral URL</label>
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  value={`https://agc-ecosystem.com/ref/${referralCode}`}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                />
                <Button onClick={copyToClipboard} size="sm">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700">
              Share Referral Link
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Commission Structure */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-green-600">Commission Structure</CardTitle>
          <CardDescription>Earn from 5 levels of referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center p-4 border border-green-200 rounded-lg">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                1
              </div>
              <p className="font-semibold text-green-600">Level 1</p>
              <p className="text-2xl font-bold text-green-600">10%</p>
              <p className="text-xs text-gray-600">Direct Referrals</p>
            </div>

            <div className="text-center p-4 border border-green-200 rounded-lg">
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                2
              </div>
              <p className="font-semibold text-green-600">Level 2</p>
              <p className="text-2xl font-bold text-green-600">5%</p>
              <p className="text-xs text-gray-600">2nd Generation</p>
            </div>

            <div className="text-center p-4 border border-green-200 rounded-lg">
              <div className="w-10 h-10 bg-green-400 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                3
              </div>
              <p className="font-semibold text-green-600">Level 3</p>
              <p className="text-2xl font-bold text-green-600">3%</p>
              <p className="text-xs text-gray-600">3rd Generation</p>
            </div>

            <div className="text-center p-4 border border-green-200 rounded-lg">
              <div className="w-10 h-10 bg-green-300 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                4
              </div>
              <p className="font-semibold text-green-600">Level 4</p>
              <p className="text-2xl font-bold text-green-600">2%</p>
              <p className="text-xs text-gray-600">4th Generation</p>
            </div>

            <div className="text-center p-4 border border-green-200 rounded-lg">
              <div className="w-10 h-10 bg-green-200 text-green-800 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                5
              </div>
              <p className="font-semibold text-green-600">Level 5</p>
              <p className="text-2xl font-bold text-green-600">1%</p>
              <p className="text-xs text-gray-600">5th Generation</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leadership Levels */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-green-600 flex items-center">
            <Crown className="w-5 h-5 mr-2" />
            Leadership Bonus Program
          </CardTitle>
          <CardDescription>Unlock additional bonuses based on team performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Silver Leader</h3>
                <TrendingUp className="w-4 h-4 text-gray-500" />
              </div>
              <p className="text-lg font-bold text-green-600 mb-1">+2% Bonus</p>
              <p className="text-sm text-gray-600">5+ Active Referrals</p>
            </div>

            <div className="p-4 border-2 border-green-400 rounded-lg bg-green-50">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Gold Leader</h3>
                <Crown className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-lg font-bold text-green-600 mb-1">+5% Bonus</p>
              <p className="text-sm text-gray-600">10+ Active Referrals</p>
              <Badge className="mt-2 bg-green-100 text-green-800">Current Level</Badge>
            </div>

            <div className="p-4 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Diamond Leader</h3>
                <Crown className="w-4 h-4 text-purple-500" />
              </div>
              <p className="text-lg font-bold text-green-600 mb-1">+10% Bonus</p>
              <p className="text-sm text-gray-600">25+ Active Referrals</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralProgram;
