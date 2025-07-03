
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const handleApplyNow = () => {
    // This will be updated with the actual Typeform URL
    window.open('https://your-typeform-url-here', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 border-4 border-red-500/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border-2 border-red-400/15 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 border-3 border-red-600/10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-red-500/25 rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-12 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build Your AI Agency to
            <span className="text-red-500 block">$100K/Month</span>
            in 90 Days
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn the exact system Wyatt Roderick used to scale from 15 years old to making over 
            <span className="text-red-400 font-semibold"> $1M+ per year </span>
            selling AI services to businesses
          </p>
          <Button 
            onClick={handleApplyNow}
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-lg font-semibold"
          >
            Book Your AI Agency Gameplan Call →
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            Limited spots available - Qualify yourself in 2 minutes
          </p>
        </div>
      </section>

      {/* VSL Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Watch: The REAL Way to Start an AI Agency in 2025
          </h2>
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
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-lg font-semibold"
            >
              Apply to Work With Wyatt →
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Agitation Section */}
      <section className="relative z-10 bg-gray-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Are You Stuck Building Someone Else's Dream?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Can't Scale Past $5K/Month</h3>
                <p className="text-gray-300">You're stuck trading time for money, working 60+ hour weeks with no clear path to scale</p>
              </div>
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Don't Know The Master Offer</h3>
                <p className="text-gray-300">You're confused about what services to sell and how to package them for maximum profit</p>
              </div>
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Can't Convert Sales Calls</h3>
                <p className="text-gray-300">You get on calls but struggle to close deals and land those high-value $3K+ monthly clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The AI Agency Mastermind
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join the exclusive mastermind where Wyatt personally mentors you to build your AI empire
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-900/20 to-black p-8 rounded-lg border border-red-500/20">
                <h3 className="text-2xl font-bold mb-4">What You'll Master:</h3>
                <ul className="text-left space-y-3 text-gray-300">
                  <li>✅ The exact AI services that generate $10K+/month</li>
                  <li>✅ How to land your first $3K/month client in 30 days</li>
                  <li>✅ The master offer that sells itself</li>
                  <li>✅ Sales scripts that close 80%+ of calls</li>
                  <li>✅ How to scale to $100K/month systematically</li>
                  <li>✅ Building systems that run without you</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-black p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">What You Get:</h3>
                <ul className="text-left space-y-3 text-gray-300">
                  <li>🎯 Weekly group coaching calls with Wyatt</li>
                  <li>🎯 Private mastermind community access</li>
                  <li>🎯 Done-for-you templates & scripts</li>
                  <li>🎯 1-on-1 strategy sessions</li>
                  <li>🎯 Live case study breakdowns</li>
                  <li>🎯 Direct access to Wyatt's network</li>
                </ul>
              </div>
            </div>
            <div className="mt-12">
              <Button 
                onClick={handleApplyNow}
                className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6 rounded-lg font-semibold"
              >
                Book Your Strategy Call Now →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative z-10 bg-gray-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Real Results From Real Students
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-red-400 mb-2">$12K/Month</div>
                  <p className="text-gray-300 mb-4">"Scaled from $2K to $12K/month in just 60 days using Wyatt's exact system"</p>
                  <p className="text-sm text-gray-400">- Sarah M., AI Agency Owner</p>
                </CardContent>
              </Card>
              <Card className="bg-black/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-red-400 mb-2">$25K/Month</div>
                  <p className="text-gray-300 mb-4">"Landed 3 clients at $8K/month each after implementing the master offer"</p>
                  <p className="text-sm text-gray-400">- Michael R., Growth Partner</p>
                </CardContent>
              </Card>
              <Card className="bg-black/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-red-400 mb-2">$50K/Month</div>
                  <p className="text-gray-300 mb-4">"Quit my 9-5 and now run a fully automated AI agency that runs itself"</p>
                  <p className="text-sm text-gray-400">- Jessica L., Former Corporate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Wyatt Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Meet Your Mentor: Wyatt Roderick
            </h2>
            <div className="bg-gradient-to-r from-red-900/20 to-black p-8 rounded-lg border border-red-500/20">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                "My name is Wyatt Roderick, I started this journey when I was 15 years old. Watch me go from starting my first AI agency at 15 to now making over <span className="text-red-400 font-semibold">$1M per year</span> selling AI to businesses at just 19 years old."
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                "Instead of being some B.S course selling 'Guru' that scams for a living - I created the AI Agency Mastermind to document everything I know about selling AI so you can replicate my success."
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                "Through my company 100kaiagency, I've helped hundreds of entrepreneurs build their own AI empires using the exact strategies that took me from broke teenager to millionaire."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="relative z-10 bg-gray-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              What Students Are Saying
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-black/50 border-gray-800">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-300 mb-4 italic">
                    "Wyatt's mastermind completely changed my business. I went from struggling to close deals to having a waitlist of clients wanting to work with me."
                  </p>
                  <p className="text-red-400 font-semibold">- Alex K., $18K/Month</p>
                </CardContent>
              </Card>
              <Card className="bg-black/50 border-gray-800">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-300 mb-4 italic">
                    "The community alone is worth the investment. Being around other high-level entrepreneurs pushes you to think bigger."
                  </p>
                  <p className="text-red-400 font-semibold">- Maria S., $35K/Month</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Build Your AI Empire?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              This isn't for everyone. We only work with serious entrepreneurs ready to invest in their future.
            </p>
            <div className="bg-gradient-to-r from-red-900/30 to-black p-12 rounded-lg border-2 border-red-500/30">
              <h3 className="text-3xl font-bold mb-6">Book Your AI Agency Gameplan Call</h3>
              <p className="text-lg text-gray-300 mb-8">
                Get on a strategy call with our team to see if you qualify for the AI Agency Mastermind
              </p>
              <Button 
                onClick={handleApplyNow}
                className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6 rounded-lg font-semibold transform hover:scale-105 transition-all"
              >
                Apply Now - Limited Spots Available →
              </Button>
              <p className="text-sm text-gray-400 mt-6">
                Warning: Only apply if you're serious about building a $100K/month AI agency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 AI Agency Mastermind. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
