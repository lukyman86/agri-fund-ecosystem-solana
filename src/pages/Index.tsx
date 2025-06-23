
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navigation />
      
      {activeTab === "overview" && (
        <>
          <HeroSection />
          
          {/* Key Statistics */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <Card className="text-center border-green-200">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-green-600">$2.5M+</CardTitle>
                    <CardDescription>Total Value Locked</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center border-green-200">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-green-600">15,000+</CardTitle>
                    <CardDescription>Active Users</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center border-green-200">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-green-600">85</CardTitle>
                    <CardDescription>Funded Projects</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center border-green-200">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-green-600">12.5%</CardTitle>
                    <CardDescription>Average APY</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="hover:shadow-lg transition-shadow border-green-200 hover:border-green-400">
                  <CardHeader>
                    <CardTitle className="text-green-600">AGC Trading</CardTitle>
                    <CardDescription>Trade AGC/USDT & AGC/SOL pairs with low fees</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => setActiveTab("trading")} 
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Start Trading
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-green-200 hover:border-green-400">
                  <CardHeader>
                    <CardTitle className="text-green-600">AGC Staking</CardTitle>
                    <CardDescription>Stake your AGC tokens and earn up to 15% APY</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => setActiveTab("staking")} 
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Start Staking
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-green-200 hover:border-green-400">
                  <CardHeader>
                    <CardTitle className="text-green-600">Project Funding</CardTitle>
                    <CardDescription>Fund agricultural projects and earn returns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => setActiveTab("funding")} 
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Explore Projects
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-green-200 hover:border-green-400">
                  <CardHeader>
                    <CardTitle className="text-green-600">Referral Program</CardTitle>
                    <CardDescription>Earn bonuses by referring friends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => setActiveTab("referral")} 
                      className="w-full bg-green-600 hover:bg-green-700"
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
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
            <TabsTrigger value="staking">Staking</TabsTrigger>
            <TabsTrigger value="funding">Funding</TabsTrigger>
            <TabsTrigger value="referral">Referral</TabsTrigger>
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
