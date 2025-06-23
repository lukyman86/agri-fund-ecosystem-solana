
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
    <nav className="bg-green-900/95 backdrop-blur-md shadow-lg border-b border-green-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Agriculture Ecosystem Fund</h1>
                <p className="text-sm text-green-300">Powered by Solana Blockchain</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-green-300 border-green-500/40 bg-green-800/60">
              AGC Price: $0.45
            </Badge>
            <Badge variant="outline" className="text-green-300 border-green-500/40 bg-green-800/60">
              Network: Solana
            </Badge>
            
            {isConnected ? (
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-600/20 text-green-300 border border-green-500/40">
                  Connected: {walletAddress}
                </Badge>
                <Button variant="outline" size="sm" className="border-green-500/40 text-green-300 hover:bg-green-600/20">
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button 
                onClick={connectWallet}
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/30"
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
