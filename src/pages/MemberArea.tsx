
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Wallet, TrendingUp, Gift, LogOut } from "lucide-react";
import Navigation from "@/components/Navigation";

const MemberArea = () => {
  const [memberData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "January 2024",
    agcBalance: "1,250.50",
    totalInvested: "$5,240.00",
    totalReturns: "$847.30",
    referralCode: "AGC-JD2024",
    referralCount: 12,
  });

  return (
    <div className="min-h-screen professional-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/ae966878-e338-41d7-b4d1-bdc0ae4e09ea.png" 
                alt="AGC Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-3xl font-bold gradient-text">Welcome back, {memberData.name}!</h1>
                <p className="text-gray-400">Member since {memberData.memberSince}</p>
              </div>
            </div>
            <Button variant="outline" className="border-red-500/30 text-red-300 hover:bg-red-900/60">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="dark-card professional-glow">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold gradient-text">{memberData.agcBalance}</CardTitle>
              <CardDescription className="text-gray-300">AGC Balance</CardDescription>
            </CardHeader>
          </Card>
          <Card className="dark-card professional-glow">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold gradient-text">{memberData.totalInvested}</CardTitle>
              <CardDescription className="text-gray-300">Total Invested</CardDescription>
            </CardHeader>
          </Card>
          <Card className="dark-card professional-glow">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold gradient-text">{memberData.totalReturns}</CardTitle>
              <CardDescription className="text-gray-300">Total Returns</CardDescription>
            </CardHeader>
          </Card>
          <Card className="dark-card professional-glow">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold gradient-text">{memberData.referralCount}</CardTitle>
              <CardDescription className="text-gray-300">Referrals</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 glass-effect p-2 h-14">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">
              <TrendingUp className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="wallet" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">
              <Wallet className="w-4 h-4 mr-2" />
              Wallet
            </TabsTrigger>
            <TabsTrigger value="referral" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">
              <Gift className="w-4 h-4 mr-2" />
              Referral
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="dark-card professional-glow">
                <CardHeader>
                  <CardTitle className="text-green-400">Recent Investments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-900/20 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Organic Farm Project #12</p>
                        <p className="text-gray-400 text-sm">Invested 3 days ago</p>
                      </div>
                      <Badge className="bg-green-600">$1,200</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-900/20 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Solar Agriculture #8</p>
                        <p className="text-gray-400 text-sm">Invested 1 week ago</p>
                      </div>
                      <Badge className="bg-green-600">$800</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="dark-card professional-glow">
                <CardHeader>
                  <CardTitle className="text-green-400">Portfolio Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">This Month</span>
                      <span className="text-green-400 font-bold">+12.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last 3 Months</span>
                      <span className="text-green-400 font-bold">+28.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">This Year</span>
                      <span className="text-green-400 font-bold">+45.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wallet">
            <Card className="dark-card professional-glow">
              <CardHeader>
                <CardTitle className="text-green-400">Wallet Management</CardTitle>
                <CardDescription className="text-gray-300">
                  Manage your AGC tokens and transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-green-900/20 rounded-lg">
                    <div>
                      <p className="text-white font-medium">AGC Token Balance</p>
                      <p className="text-gray-400">{memberData.agcBalance} AGC</p>
                    </div>
                    <Button className="bg-gradient-to-r from-green-600 to-green-700">
                      Buy More AGC
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="border-green-500/30 text-green-300">
                      Send AGC
                    </Button>
                    <Button variant="outline" className="border-green-500/30 text-green-300">
                      Receive AGC
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="referral">
            <Card className="dark-card professional-glow">
              <CardHeader>
                <CardTitle className="text-green-400">Referral Program</CardTitle>
                <CardDescription className="text-gray-300">
                  Earn rewards by inviting friends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-green-900/20 rounded-lg">
                    <p className="text-white font-medium mb-2">Your Referral Code</p>
                    <div className="flex items-center space-x-2">
                      <code className="bg-green-800/50 px-3 py-2 rounded text-green-300 font-mono">
                        {memberData.referralCode}
                      </code>
                      <Button size="sm" className="bg-gradient-to-r from-green-600 to-green-700">
                        Copy
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold gradient-text">{memberData.referralCount}</p>
                      <p className="text-gray-400">Total Referrals</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold gradient-text">$347.50</p>
                      <p className="text-gray-400">Referral Earnings</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="dark-card professional-glow">
              <CardHeader>
                <CardTitle className="text-green-400">Profile Settings</CardTitle>
                <CardDescription className="text-gray-300">
                  Manage your account information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Full Name</p>
                    <p className="text-white font-medium">{memberData.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email Address</p>
                    <p className="text-white font-medium">{memberData.email}</p>
                  </div>
                  <div className="pt-4">
                    <Button className="bg-gradient-to-r from-green-600 to-green-700">
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MemberArea;
