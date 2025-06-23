
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import Navigation from "@/components/Navigation";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    adminCode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle admin login logic here
    console.log("Admin login data:", formData);
  };

  return (
    <div className="min-h-screen professional-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-md mx-auto">
          <Card className="dark-card professional-glow border-amber-500/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-amber-400">Admin Access</CardTitle>
              <CardDescription className="text-gray-300">
                Secure administrator login portal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-amber-300">Admin Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="dark-card border-amber-500/30 text-white placeholder-gray-400 focus:border-amber-400"
                    placeholder="Enter admin email"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-amber-300">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="dark-card border-amber-500/30 text-white placeholder-gray-400 focus:border-amber-400"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="adminCode" className="text-amber-300">Admin Code</Label>
                  <Input
                    id="adminCode"
                    name="adminCode"
                    type="password"
                    value={formData.adminCode}
                    onChange={handleInputChange}
                    className="dark-card border-amber-500/30 text-white placeholder-gray-400 focus:border-amber-400"
                    placeholder="Enter admin security code"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-xl shadow-amber-600/30 hover:shadow-amber-500/40 transition-all duration-300"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Access Admin Panel
                </Button>
              </form>
              <div className="mt-6 text-center">
                <Link to="/login" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                  ← Back to Member Login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
