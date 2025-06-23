
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, DollarSign, TrendingUp, Settings, Shield, LogOut, Activity } from "lucide-react";
import Navigation from "@/components/Navigation";

const AdminArea = () => {
  const [adminData] = useState({
    totalMembers: 15234,
    totalInvestments: "$2,485,940",
    monthlyGrowth: "+18.5%",
    activeProjects: 47,
    pendingWithdrawals: 23,
    systemStatus: "All Systems Operational"
  });

  const [recentMembers] = useState([
    { name: "John Smith", email: "john@example.com", joined: "2 hours ago", status: "Active" },
    { name: "Sarah Johnson", email: "sarah@example.com", joined: "5 hours ago", status: "Pending" },
    { name: "Mike Wilson", email: "mike@example.com", joined: "1 day ago", status: "Active" },
  ]);

  const [recentTransactions] = useState([
    { user: "Alice Brown", type: "Investment", amount: "$1,250", status: "Completed" },
    { user: "Bob Davis", type: "Withdrawal", amount: "$750", status: "Pending" },
    { user: "Carol White", type: "Investment", amount: "$2,100", status: "Completed" },
  ]);

  return (
    <div className="min-h-screen professional-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-amber-400">Admin Dashboard</h1>
                <p className="text-gray-400">Agriculture Ecosystem Fund Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-900/60 text-green-300 border border-green-500/30">
                <Activity className="w-3 h-3 mr-1" />
                {adminData.systemStatus}
              </Badge>
              <Button variant="outline" className="border-red-500/30 text-red-300 hover:bg-red-900/60">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="dark-card professional-glow border-amber-500/20">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-amber-400">{adminData.totalMembers.toLocaleString()}</CardTitle>
              <CardDescription className="text-gray-300">Total Members</CardDescription>
            </CardHeader>
          </Card>
          <Card className="dark-card professional-glow border-amber-500/20">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-amber-400">{adminData.totalInvestments}</CardTitle>
              <CardDescription className="text-gray-300">Total Investments</CardDescription>
            </CardHeader>
          </Card>
          <Card className="dark-card professional-glow border-amber-500/20">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-amber-400">{adminData.monthlyGrowth}</CardTitle>
              <CardDescription className="text-gray-300">Monthly Growth</CardDescription>
            </CardHeader>
          </Card>
          <Card className="dark-card professional-glow border-amber-500/20">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-amber-400">{adminData.activeProjects}</CardTitle>
              <CardDescription className="text-gray-300">Active Projects</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 glass-effect p-2 h-14">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-600 data-[state=active]:to-orange-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">
              <TrendingUp className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="members" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-600 data-[state=active]:to-orange-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">
              <Users className="w-4 h-4 mr-2" />
              Members
            </TabsTrigger>
            <TabsTrigger value="transactions" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-600 data-[state=active]:to-orange-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">
              <DollarSign className="w-4 h-4 mr-2" />
              Transactions
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-600 data-[state=active]:to-orange-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="dark-card professional-glow border-amber-500/20">
                <CardHeader>
                  <CardTitle className="text-amber-400">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-amber-900/20 rounded-lg">
                      <div>
                        <p className="text-white font-medium">New member registration</p>
                        <p className="text-gray-400 text-sm">John Smith joined</p>
                      </div>
                      <Badge className="bg-green-600">New</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-900/20 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Large investment</p>
                        <p className="text-gray-400 text-sm">$5,000 investment received</p>
                      </div>
                      <Badge className="bg-blue-600">Investment</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-900/20 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Withdrawal request</p>
                        <p className="text-gray-400 text-sm">Pending approval</p>
                      </div>
                      <Badge className="bg-orange-600">Pending</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="dark-card professional-glow border-amber-500/20">
                <CardHeader>
                  <CardTitle className="text-amber-400">System Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pending Withdrawals</span>
                      <span className="text-amber-400 font-bold">{adminData.pendingWithdrawals}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Active Projects</span>
                      <span className="text-amber-400 font-bold">{adminData.activeProjects}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">System Uptime</span>
                      <span className="text-green-400 font-bold">99.9%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Server Load</span>
                      <span className="text-green-400 font-bold">Low</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="members">
            <Card className="dark-card professional-glow border-amber-500/20">
              <CardHeader>
                <CardTitle className="text-amber-400">Member Management</CardTitle>
                <CardDescription className="text-gray-300">
                  View and manage platform members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMembers.map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-amber-900/20 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{member.name}</p>
                        <p className="text-gray-400 text-sm">{member.email}</p>
                        <p className="text-gray-500 text-xs">Joined {member.joined}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={member.status === 'Active' ? 'bg-green-600' : 'bg-orange-600'}>
                          {member.status}
                        </Badge>
                        <Button size="sm" variant="outline" className="border-amber-500/30 text-amber-300">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions">
            <Card className="dark-card professional-glow border-amber-500/20">
              <CardHeader>
                <CardTitle className="text-amber-400">Transaction Management</CardTitle>
                <CardDescription className="text-gray-300">
                  Monitor and manage all transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-amber-900/20 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{transaction.user}</p>
                        <p className="text-gray-400 text-sm">{transaction.type}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-amber-400 font-bold">{transaction.amount}</span>
                        <Badge className={transaction.status === 'Completed' ? 'bg-green-600' : 'bg-orange-600'}>
                          {transaction.status}
                        </Badge>
                        <Button size="sm" variant="outline" className="border-amber-500/30 text-amber-300">
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="dark-card professional-glow border-amber-500/20">
              <CardHeader>
                <CardTitle className="text-amber-400">System Settings</CardTitle>
                <CardDescription className="text-gray-300">
                  Configure platform settings and parameters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="bg-gradient-to-r from-amber-600 to-orange-600 h-12">
                      Platform Configuration
                    </Button>
                    <Button className="bg-gradient-to-r from-amber-600 to-orange-600 h-12">
                      User Management
                    </Button>
                    <Button className="bg-gradient-to-r from-amber-600 to-orange-600 h-12">
                      Financial Settings
                    </Button>
                    <Button className="bg-gradient-to-r from-amber-600 to-orange-600 h-12">
                      Security Settings
                    </Button>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-amber-400 font-medium mb-4">System Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Platform Version</span>
                        <span className="text-white">v2.1.4</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Last Update</span>
                        <span className="text-white">2024-01-15</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Database Status</span>
                        <span className="text-green-400">Healthy</span>
                      </div>
                    </div>
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

export default AdminArea;
