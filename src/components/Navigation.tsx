
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
    <nav className="bg-white shadow-sm border-b border-green-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Agriculture Ecosystem Fund</h1>
                <p className="text-sm text-gray-600">Powered by Solana Blockchain</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-green-600 border-green-200">
              AGC Price: $0.45
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-200">
              Network: Solana
            </Badge>
            
            {isConnected ? (
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-100 text-green-800">
                  Connected: {walletAddress}
                </Badge>
                <Button variant="outline" size="sm">
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button 
                onClick={connectWallet}
                className="bg-green-600 hover:bg-green-700"
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
