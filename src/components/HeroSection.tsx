
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Agriculture Ecosystem Fund
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Platform pendanaan pertanian berbasis blockchain dengan token Agri Coins ($AGC) 
            di jaringan Solana. Investasi cerdas untuk masa depan pertanian yang berkelanjutan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              Mulai Investasi
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-3">
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Token Info */}
          <Card className="max-w-2xl mx-auto border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="text-green-700">Agri Coins ($AGC)</CardTitle>
              <CardDescription>Token utility untuk ekosistem pertanian</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-600">$0.45</p>
                  <p className="text-sm text-gray-600">Current Price</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">+12.5%</p>
                  <p className="text-sm text-gray-600">24h Change</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">$2.5M</p>
                  <p className="text-sm text-gray-600">Market Cap</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">Solana</p>
                  <p className="text-sm text-gray-600">Blockchain</p>
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
