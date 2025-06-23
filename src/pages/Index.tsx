
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, ArrowDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import TradingInterface from "@/components/TradingInterface";
import StakingSection from "@/components/StakingSection";
import ReferralProgram from "@/components/ReferralProgram";
import ProjectFunding from "@/components/ProjectFunding";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen professional-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-teal-500/5 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <Navigation />
      
      {activeTab === "overview" && (
        <>
          <HeroSection />
          
          {/* Key Statistics */}
          <section className="py-20 relative z-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="dark-card professional-glow hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-4xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">$2.5M+</CardTitle>
                    <CardDescription className="text-gray-300 font-medium">Total Value Locked</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="dark-card professional-glow hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-4xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">15,000+</CardTitle>
                    <CardDescription className="text-gray-300 font-medium">Active Users</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="dark-card professional-glow hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-4xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">85</CardTitle>
                    <CardDescription className="text-gray-300 font-medium">Funded Projects</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="dark-card professional-glow hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-4xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">12.5%</CardTitle>
                    <CardDescription className="text-gray-300 font-medium">Average APY</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-20 relative z-10">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-16 gradient-text neon-green">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="dark-card professional-glow hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-green-400 text-xl group-hover:text-green-300 transition-colors">AGC Trading</CardTitle>
                    <CardDescription className="text-gray-300">Trade AGC/USDT & AGC/SOL pairs with low fees</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => setActiveTab("trading")} 
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white shadow-xl shadow-green-600/25 hover:shadow-green-500/30 transition-all duration-300"
                    >
                      Start Trading
                    </Button>
                  </CardContent>
                </Card>

                <Card className="dark-card professional-glow hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-green-400 text-xl group-hover:text-green-300 transition-colors">AGC Staking</CardTitle>
                    <CardDescription className="text-gray-300">Stake your AGC tokens and earn up to 15% APY</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => setActiveTab("staking")} 
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white shadow-xl shadow-green-600/25 hover:shadow-green-500/30 transition-all duration-300"
                    >
                      Start Staking
                    </Button>
                  </CardContent>
                </Card>

                <Card className="dark-card professional-glow hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-green-400 text-xl group-hover:text-green-300 transition-colors">Project Funding</CardTitle>
                    <CardDescription className="text-gray-300">Fund agricultural projects and earn returns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => setActiveTab("funding")} 
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white shadow-xl shadow-green-600/25 hover:shadow-green-500/30 transition-all duration-300"
                    >
                      Explore Projects
                    </Button>
                  </CardContent>
                </Card>

                <Card className="dark-card professional-glow hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-green-400 text-xl group-hover:text-green-300 transition-colors">Referral Program</CardTitle>
                    <CardDescription className="text-gray-300">Earn bonuses by referring friends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => setActiveTab("referral")} 
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white shadow-xl shadow-green-600/25 hover:shadow-green-500/30 transition-all duration-300"
                    >
                      Join Program
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Main Application Tabs */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 glass-effect p-2 h-14">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">Overview</TabsTrigger>
            <TabsTrigger value="trading" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">Trading</TabsTrigger>
            <TabsTrigger value="staking" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">Staking</TabsTrigger>
            <TabsTrigger value="funding" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">Funding</TabsTrigger>
            <TabsTrigger value="referral" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white text-gray-300 hover:text-white transition-all duration-300 h-10">Referral</TabsTrigger>
          </TabsList>

          <TabsContent value="trading">
            <TradingInterface />
          </TabsContent>

          <TabsContent value="staking">
            <StakingSection />
          </TabsContent>

          <TabsContent value="funding">
            <ProjectFunding />
          </TabsContent>

          <TabsContent value="referral">
            <ReferralProgram />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
