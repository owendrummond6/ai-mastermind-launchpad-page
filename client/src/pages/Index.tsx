

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const handleApplyNow = () => {
    window.open('https://your-typeform-url-here', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-hidden relative">
      {/* Fixed CTA Button */}
      <div className="fixed top-6 right-6 z-50">
        <Button 
          onClick={handleApplyNow}
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all shadow-lg"
        >
          Book Your Call →
        </Button>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/3 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-red-400/2 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-red-600/3 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-red-500/2 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500/2 to-red-700/2 rounded-full animate-spin-slow"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-20 pb-8 text-center border-b border-black">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build Your AI Agency to
            <span className="text-red-400 block">$20K/Month</span>
            in 60 Days
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn the exact system we used to scale from scratch to making over 
            <span className="text-red-400 font-semibold"> $1M+ per year </span>
            selling AI services to businesses
          </p>
          <Button 
            onClick={handleApplyNow}
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-lg font-semibold transform hover:scale-105 transition-all"
          >
            Book Your AI Agency Gameplan Call →
          </Button>
        </div>
      </section>

      {/* VSL Section */}
      <section className="relative z-10 container mx-auto px-4 py-16 border-b border-black">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/-EfcTq7IkdM"
              title="The REAL way to start an AI Agency in 2025"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center mt-8">
            <Button 
              onClick={handleApplyNow}
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all"
            >
              Apply to Work With Us →
            </Button>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="relative z-10 py-20 border-b border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
              Student Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-fade-in">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                    src="https://www.youtube.com/embed/gzk3Nve3jko"
                    title="Student Success Story 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="animate-fade-in delay-100">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                    src="https://www.youtube.com/embed/BrByOBF03vI"
                    title="Student Success Story 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Results Collage Section */}
      <section className="relative z-10 py-20 border-b border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
              Real Results From Real Students
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-fade-in">
              {/* Row 1 */}
              <div className="col-span-2 row-span-2">
                <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Upload Student Result 1</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Result 2</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Result 3</span>
                </div>
              </div>
              <div className="col-span-1 row-span-2">
                <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Result 4</span>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="col-span-1">
                <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Result 5</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Result 6</span>
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="col-span-1">
                <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Result 7</span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Result 8</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Result 9</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Result 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agency Mastermind Section */}
      <section className="relative z-10 py-20 border-b border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              The AI Agency Mastermind
            </h2>
            <p className="text-xl text-gray-300 mb-12 animate-fade-in">
              Join the exclusive mastermind where we personally mentor you to build your AI empire
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/30 p-8 rounded-lg backdrop-blur-sm animate-fade-in">
                <h3 className="text-2xl font-bold mb-4">What You'll Master:</h3>
                <ul className="text-left space-y-3 text-gray-300">
                  <li>✅ The exact AI services that generate $10K+/month</li>
                  <li>✅ How to land your first $3K/month client in 30 days</li>
                  <li>✅ The master offer that sells itself</li>
                  <li>✅ Sales scripts that close 80%+ of calls</li>
                  <li>✅ How to scale to $20K/month systematically</li>
                  <li>✅ Building systems that run without you</li>
                </ul>
              </div>
              <div className="bg-gray-900/30 p-8 rounded-lg backdrop-blur-sm animate-fade-in delay-100">
                <h3 className="text-2xl font-bold mb-4">What You Get:</h3>
                <ul className="text-left space-y-3 text-gray-300">
                  <li>🎯 Weekly group coaching calls</li>
                  <li>🎯 Private mastermind community access</li>
                  <li>🎯 Done-for-you templates & scripts</li>
                  <li>🎯 1-on-1 strategy sessions</li>
                  <li>🎯 Live case study breakdowns</li>
                  <li>🎯 Direct access to our network</li>
                </ul>
              </div>
            </div>
            <div className="mt-12">
              <Button 
                onClick={handleApplyNow}
                className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6 rounded-lg font-semibold transform hover:scale-105 transition-all animate-fade-in"
              >
                Book Your Strategy Call Now →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-20 border-b border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              Ready to Build Your AI Empire?
            </h2>
            <p className="text-xl text-gray-300 mb-12 animate-fade-in">
              This isn't for everyone. We only work with serious entrepreneurs ready to invest in their future.
            </p>
            <div className="bg-gray-900/40 p-12 rounded-lg backdrop-blur-sm animate-fade-in">
              <h3 className="text-3xl font-bold mb-6">Book Your AI Agency Gameplan Call</h3>
              <p className="text-lg text-gray-300 mb-8">
                Get on a strategy call with our team to discuss your AI agency goals
              </p>
              <Button 
                onClick={handleApplyNow}
                className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6 rounded-lg font-semibold transform hover:scale-105 transition-all"
              >
                Apply Now - Limited Spots Available →
              </Button>
              <p className="text-sm text-gray-400 mt-6">
                Warning: Only apply if you're serious about building a $20K/month AI agency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 text-sm text-left ml-8">
            © 2025 AI Agency Mastermind. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
