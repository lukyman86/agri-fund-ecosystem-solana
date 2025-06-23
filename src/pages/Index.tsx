
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      {activeTab === "overview" && (
        <>
          <HeroSection />
          
          {/* Key Statistics */}
          <section className="py-16 bg-slate-800/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <Card className="text-center border-blue-500/20 bg-slate-800/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-blue-400">$2.5M+</CardTitle>
                    <CardDescription className="text-slate-300">Total Value Locked</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center border-blue-500/20 bg-slate-800/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-blue-400">15,000+</CardTitle>
                    <CardDescription className="text-slate-300">Active Users</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center border-blue-500/20 bg-slate-800/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-blue-400">85</CardTitle>
                    <CardDescription className="text-slate-300">Funded Projects</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center border-blue-500/20 bg-slate-800/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-blue-400">12.5%</CardTitle>
                    <CardDescription className="text-slate-300">Average APY</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border-blue-500/20 bg-slate-800/60 backdrop-blur-sm hover:border-blue-400/40">
                  <CardHeader>
                    <CardTitle className="text-blue-400">AGC Trading</CardTitle>
                    <CardDescription className="text-slate-300">Trade AGC/USDT & AGC/SOL pairs with low fees</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => setActiveTab("trading")} 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Start Trading
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border-blue-500/20 bg-slate-800/60 backdrop-blur-sm hover:border-blue-400/40">
                  <CardHeader>
                    <CardTitle className="text-blue-400">AGC Staking</CardTitle>
                    <CardDescription className="text-slate-300">Stake your AGC tokens and earn up to 15% APY</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => setActiveTab("staking")} 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Start Staking
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border-blue-500/20 bg-slate-800/60 backdrop-blur-sm hover:border-blue-400/40">
                  <CardHeader>
                    <CardTitle className="text-blue-400">Project Funding</CardTitle>
                    <CardDescription className="text-slate-300">Fund agricultural projects and earn returns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => setActiveTab("funding")} 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Explore Projects
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border-blue-500/20 bg-slate-800/60 backdrop-blur-sm hover:border-blue-400/40">
                  <CardHeader>
                    <CardTitle className="text-blue-400">Referral Program</CardTitle>
                    <CardDescription className="text-slate-300">Earn bonuses by referring friends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => setActiveTab("referral")} 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-slate-800/80 backdrop-blur-sm border border-blue-500/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300">Overview</TabsTrigger>
            <TabsTrigger value="trading" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300">Trading</TabsTrigger>
            <TabsTrigger value="staking" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300">Staking</TabsTrigger>
            <TabsTrigger value="funding" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300">Funding</TabsTrigger>
            <TabsTrigger value="referral" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300">Referral</TabsTrigger>
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
