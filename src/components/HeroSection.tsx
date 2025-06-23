
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            Agriculture Ecosystem Fund
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Platform pendanaan pertanian berbasis blockchain dengan token Agri Coins ($AGC) 
            di jaringan Solana. Investasi cerdas untuk masa depan pertanian yang berkelanjutan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 shadow-lg shadow-blue-600/30">
              Mulai Investasi
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500/40 text-blue-300 hover:bg-blue-600/20 text-lg px-8 py-3">
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Token Info */}
          <Card className="max-w-2xl mx-auto border-blue-500/20 bg-slate-800/60 backdrop-blur-sm shadow-xl shadow-blue-500/10">
            <CardHeader>
              <CardTitle className="text-blue-400">Agri Coins ($AGC)</CardTitle>
              <CardDescription className="text-slate-300">Token utility untuk ekosistem pertanian</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-400">$0.45</p>
                  <p className="text-sm text-slate-400">Current Price</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400">+12.5%</p>
                  <p className="text-sm text-slate-400">24h Change</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-400">$2.5M</p>
                  <p className="text-sm text-slate-400">Market Cap</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-400">Solana</p>
                  <p className="text-sm text-slate-400">Blockchain</p>
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
