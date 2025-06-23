
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Users, TrendingUp, Leaf, Droplets, Sun } from "lucide-react";

const ProjectFunding = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Smart Irrigation System for Rice Farmers",
      description: "IoT-based irrigation system to optimize water usage and increase crop yield in West Java rice fields.",
      location: "West Java, Indonesia",
      category: "Technology",
      icon: <Droplets className="w-6 h-6" />,
      targetAmount: 50000,
      currentAmount: 32500,
      investors: 127,
      expectedReturn: "15-18%",
      duration: "12 months",
      riskLevel: "Medium",
      status: "Active"
    },
    {
      id: 2,
      title: "Organic Vegetable Farm Expansion",
      description: "Expanding organic vegetable production with modern greenhouse facilities and sustainable farming practices.",
      location: "East Java, Indonesia",
      category: "Organic Farming",
      icon: <Leaf className="w-6 h-6" />,
      targetAmount: 75000,
      currentAmount: 45000,
      investors: 89,
      expectedReturn: "12-15%",
      duration: "18 months",
      riskLevel: "Low",
      status: "Active"
    },
    {
      id: 3,
      title: "Solar-Powered Greenhouse Complex",
      description: "Renewable energy-powered greenhouse for year-round vegetable production with climate control systems.",
      location: "Central Java, Indonesia",
      category: "Renewable Energy",
      icon: <Sun className="w-6 h-6" />,
      targetAmount: 100000,
      currentAmount: 85000,
      investors: 156,
      expectedReturn: "18-22%",
      duration: "24 months",
      riskLevel: "Medium",
      status: "Nearly Funded"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Funding</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Invest in sustainable agricultural projects and earn attractive returns while supporting food security and environmental sustainability.
        </p>
      </div>

      {/* Funding Overview */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-green-600">Funding Overview</CardTitle>
          <CardDescription>Platform statistics and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">85</p>
              <p className="text-sm text-gray-600">Total Projects Funded</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">$2.5M</p>
              <p className="text-sm text-gray-600">Total Investment</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">16.2%</p>
              <p className="text-sm text-gray-600">Average Returns</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">1,247</p>
              <p className="text-sm text-gray-600">Active Investors</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Projects */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Active Investment Opportunities</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                      {project.icon}
                    </div>
                    <div>
                      <Badge 
                        className={`${
                          project.status === 'Nearly Funded' 
                            ? 'bg-orange-100 text-orange-800' 
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{Math.round((project.currentAmount / project.targetAmount) * 100)}%</span>
                  </div>
                  <Progress 
                    value={(project.currentAmount / project.targetAmount) * 100} 
                    className="h-2"
                  />
                  <div className="flex justify-between text-sm mt-1 text-gray-600">
                    <span>${project.currentAmount.toLocaleString()} raised</span>
                    <span>${project.targetAmount.toLocaleString()} goal</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Investors:
                    </span>
                    <span className="font-semibold">{project.investors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Expected Return:
                    </span>
                    <span className="font-semibold text-green-600">{project.expectedReturn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Duration:
                    </span>
                    <span className="font-semibold">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Risk Level:</span>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        project.riskLevel === 'Low' 
                          ? 'border-green-300 text-green-700' 
                          : 'border-orange-300 text-orange-700'
                      }`}
                    >
                      {project.riskLevel}
                    </Badge>
                  </div>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Invest Now
                </Button>
                <Button variant="outline" className="w-full border-green-600 text-green-600">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Investment Guide */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-green-600">How It Works</CardTitle>
          <CardDescription>Simple steps to start investing in agricultural projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Choose Project</h3>
              <p className="text-sm text-gray-600">Browse and select agricultural projects that match your investment goals</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Invest AGC</h3>
              <p className="text-sm text-gray-600">Use your AGC tokens to fund the project and become an investor</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Track Progress</h3>
              <p className="text-sm text-gray-600">Monitor project development and receive regular updates</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Earn Returns</h3>
              <p className="text-sm text-gray-600">Receive your returns in AGC tokens once the project succeeds</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectFunding;
