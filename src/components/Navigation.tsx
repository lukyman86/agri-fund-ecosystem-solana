
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/40 hover:shadow-green-400/50 transition-all duration-300 hover:scale-105">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text neon-green">Agriculture Ecosystem Fund</h1>
                <p className="text-sm text-gray-400 font-medium">Powered by Solana Blockchain</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Badge variant="outline" className="text-green-300 border-green-500/30 bg-green-900/40 backdrop-blur-sm px-4 py-2 text-sm font-medium">
              AGC Price: $0.45
            </Badge>
            <Badge variant="outline" className="text-emerald-300 border-emerald-500/30 bg-emerald-900/40 backdrop-blur-sm px-4 py-2 text-sm font-medium">
              Network: Solana
            </Badge>
            
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
