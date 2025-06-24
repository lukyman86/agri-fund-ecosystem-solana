
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = () => {
    // Simulate wallet connection
    setIsConnected(true);
    setWalletAddress("7xKX...9mN2");
  };

  return (
    <nav className="glass-effect shadow-2xl border-b border-green-500/10 relative z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/ae966878-e338-41d7-b4d1-bdc0ae4e09ea.png" 
                alt="AGC Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold gradient-text neon-green">Agriculture Ecosystem Fund</h2>
                <p className="text-sm text-gray-400 font-medium">Powered by Solana Blockchain</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Badge variant="outline" className="text-green-300 border-green-500/30 bg-green-900/40 backdrop-blur-sm px-4 py-2 text-sm font-medium">
              AGC Price: $0.3
            </Badge>
            
            <Link to="/login">
              <Button variant="outline" className="border-green-500/30 text-green-300 hover:bg-green-900/60 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300">
                Login
              </Button>
            </Link>
            
            <Link to="/register">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white shadow-xl shadow-green-600/30 hover:shadow-green-500/40 px-6 py-2 transition-all duration-300 hover:scale-105">
                Register
              </Button>
            </Link>
            
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <Badge className="bg-green-900/60 text-green-300 border border-green-500/30 px-4 py-2 backdrop-blur-sm">
                  Connected: {walletAddress}
                </Badge>
                <Button variant="outline" size="sm" className="border-green-500/30 text-green-300 hover:bg-green-900/60 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300">
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button 
                onClick={connectWallet}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white shadow-xl shadow-green-600/30 hover:shadow-green-500/40 px-6 py-2 transition-all duration-300 hover:scale-105"
              >
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
