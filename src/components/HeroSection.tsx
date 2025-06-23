
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Agriculture Ecosystem Fund
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
            Platform pendanaan pertanian berbasis blockchain dengan token Agri Coins ($AGC) 
            di jaringan Solana. Investasi cerdas untuk masa depan pertanian yang berkelanjutan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 shadow-lg shadow-green-600/30">
              Mulai Investasi
            </Button>
            <Button size="lg" variant="outline" className="border-green-500/40 text-green-300 hover:bg-green-600/20 text-lg px-8 py-3">
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Token Info */}
          <Card className="max-w-2xl mx-auto border-green-500/20 bg-green-800/60 backdrop-blur-sm shadow-xl shadow-green-500/10">
            <CardHeader>
              <CardTitle className="text-green-400">Agri Coins ($AGC)</CardTitle>
              <CardDescription className="text-green-200">Token utility untuk ekosistem pertanian</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-400">$0.45</p>
                  <p className="text-sm text-green-300">Current Price</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400">+12.5%</p>
                  <p className="text-sm text-green-300">24h Change</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-400">$2.5M</p>
                  <p className="text-sm text-green-300">Market Cap</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-teal-400">Solana</p>
                  <p className="text-sm text-green-300">Blockchain</p>
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
