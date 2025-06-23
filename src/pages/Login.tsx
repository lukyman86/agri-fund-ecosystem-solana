
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login data:", formData);
  };

  return (
    <div className="min-h-screen professional-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-md mx-auto">
          <Card className="dark-card professional-glow">
            <CardHeader className="text-center">
              <img 
                src="/lovable-uploads/ae966878-e338-41d7-b4d1-bdc0ae4e09ea.png" 
                alt="AGC Logo" 
                className="w-20 h-20 object-contain mx-auto mb-4"
              />
              <CardTitle className="text-2xl font-bold gradient-text">Member Login</CardTitle>
              <CardDescription className="text-gray-300">
                Access your Agriculture Ecosystem Fund account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-green-300">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="dark-card border-green-500/30 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-green-300">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="dark-card border-green-500/30 text-white placeholder-gray-400"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white shadow-xl shadow-green-600/30 hover:shadow-green-500/40 transition-all duration-300"
                >
                  Sign In
                </Button>
              </form>
              <div className="mt-6 space-y-4">
                <div className="text-center">
                  <Link to="/forgot-password" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                    Forgot your password?
                  </Link>
                </div>
                <div className="text-center">
                  <p className="text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-green-400 hover:text-green-300 transition-colors">
                      Create one here
                    </Link>
                  </p>
                </div>
                <div className="text-center">
                  <Link to="/admin/login" className="text-amber-400 hover:text-amber-300 transition-colors text-sm">
                    Admin Login
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
