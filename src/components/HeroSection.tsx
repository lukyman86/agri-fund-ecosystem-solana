
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 gradient-text neon-green leading-tight">
            Agriculture Ecosystem Fund
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            Platform pendanaan pertanian berbasis blockchain dengan token Agri Coins ($AGC) 
            di jaringan Solana. Investasi cerdas untuk masa depan pertanian yang berkelanjutan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white text-lg px-10 py-4 shadow-2xl shadow-green-600/30 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105">
              Mulai Investasi
            </Button>
            <Button size="lg" variant="outline" className="border-green-500/30 text-green-300 hover:bg-green-900/60 backdrop-blur-sm text-lg px-10 py-4 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Enhanced Token Info */}
          <Card className="max-w-4xl mx-auto dark-card professional-glow hover:shadow-2xl transition-all duration-500">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl gradient-text neon-green">Agri Coins ($AGC)</CardTitle>
              <CardDescription className="text-gray-300 text-lg font-medium">Token utility untuk ekosistem pertanian</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group hover:scale-105 transition-transform duration-300">
                  <p className="text-3xl font-bold gradient-text mb-2">$0.45</p>
                  <p className="text-sm text-gray-400 font-medium">Current Price</p>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <p className="text-3xl font-bold text-emerald-400 mb-2">+12.5%</p>
                  <p className="text-sm text-gray-400 font-medium">24h Change</p>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <p className="text-3xl font-bold gradient-text mb-2">$2.5M</p>
                  <p className="text-sm text-gray-400 font-medium">Market Cap</p>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <p className="text-3xl font-bold text-teal-400 mb-2">Solana</p>
                  <p className="text-sm text-gray-400 font-medium">Blockchain</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
