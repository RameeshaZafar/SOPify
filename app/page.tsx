import Link from 'next/link';
import {
  Clock,
  Users,
  RefreshCw,
  FileText,
  ArrowRight,
  CheckCircle2,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Turn Messy Notes Into Professional SOPs in{' '}
              <span className="text-blue-800">60 Seconds</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Stop wasting hours formatting documentation. Our AI transforms
              your rough notes, voice memos, and bullet points into polished
              Standard Operating Procedures your team can actually follow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/generate">
                  Generate Your First SOP — Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Link
                href="#how-it-works"
                className="text-blue-800 font-medium hover:text-blue-900 transition-colors"
              >
                See how it works ↓
              </Link>
            </div>

            <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <div className="text-sm font-semibold text-slate-500 mb-2">
                    BEFORE
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm text-slate-700 font-mono">
                    <div className="space-y-1">
                      <p>- client calls</p>
                      <p>- ask about project</p>
                      <p>- send proposal</p>
                      <p>- follow up in 2 days??</p>
                      <p>- get contract signed</p>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-emerald-600 mb-2">
                    AFTER
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-4 rounded-lg border border-blue-200 text-sm">
                    <h3 className="font-bold text-slate-900 mb-2">
                      # Client Onboarding Process
                    </h3>
                    <div className="space-y-1 text-slate-700">
                      <p className="font-semibold">## Step 1: Initial Contact</p>
                      <p>Schedule discovery call...</p>
                      <p className="font-semibold mt-2">## Step 2: Proposal</p>
                      <p>Send detailed proposal within 24h...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Documentation Shouldn&apos;t Take Hours
            </h2>
            <p className="text-xl text-slate-600">
              Your time is too valuable for manual formatting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  SOPs take 2-4 hours to write properly
                </h3>
                <p className="text-slate-600">
                  Between formatting, structuring, and ensuring clarity, creating
                  documentation eats up your entire afternoon.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  New employees wait days for training docs
                </h3>
                <p className="text-slate-600">
                  Without proper SOPs, onboarding is chaotic and inconsistent,
                  leading to confusion and mistakes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Outdated procedures cause costly mistakes
                </h3>
                <p className="text-slate-600">
                  When updating documentation is a pain, processes become
                  outdated and teams make avoidable errors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              From Chaos to Clarity in 3 Steps
            </h2>
            <p className="text-xl text-slate-600">
              Professional documentation without the headache
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <Card className="pt-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    Paste Your Notes
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Dump your messy bullet points, voice-to-text transcripts, or
                    rough instructions. No formatting needed.
                  </p>
                  <div className="bg-slate-100 p-4 rounded-lg text-sm text-slate-700 font-mono">
                    <p>- first do this</p>
                    <p>- then that</p>
                    <p>- remember to check...</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <Card className="pt-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    AI Structures It
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Our AI organizes, clarifies, and formats everything
                    professionally with proper sections and clear steps.
                  </p>
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-pulse">
                      <FileText className="h-16 w-16 text-blue-800" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <Card className="pt-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    Download & Share
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Get a ready-to-use SOP document in Markdown or PDF format.
                    Share it with your team immediately.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <span>Professional formatting</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <span>Clear structure</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <span>Ready to use</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Built for Teams Who Value Their Time
            </h2>
            <p className="text-xl text-slate-600">
              Trusted across industries for fast, professional documentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Marketing Agencies
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Client onboarding</li>
                  <li>• Campaign workflows</li>
                  <li>• Reporting procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Operations Teams
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Employee training</li>
                  <li>• Quality control</li>
                  <li>• Safety protocols</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Service Businesses
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Customer service scripts</li>
                  <li>• Maintenance checklists</li>
                  <li>• Booking procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  E-commerce
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Order fulfillment</li>
                  <li>• Returns handling</li>
                  <li>• Inventory management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by Operations Teams
            </h2>
            <p className="text-xl text-slate-600">
              See what busy professionals are saying
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">
                  &quot;Cut our documentation time from 3 hours to 15 minutes.
                  This is a game-changer for our agency onboarding process.&quot;
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-slate-900">Sarah Chen</p>
                  <p className="text-slate-600">
                    Operations Manager at a Marketing Agency
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">
                  &quot;Finally, my field team has clear, consistent procedures.
                  No more confusion about how things should be done.&quot;
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-slate-900">Mike Rodriguez</p>
                  <p className="text-slate-600">Founder of a Cleaning Company</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">
                  &quot;New hires are productive faster because they have
                  professional SOPs from day one. Worth every penny.&quot;
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-slate-900">
                    Jennifer Martinez
                  </p>
                  <p className="text-slate-600">Team Lead at a Logistics Firm</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Creating Professional SOPs Today
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            No credit card required. Get 3 free generations.
          </p>
          <Button asChild size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700">
            <Link href="/generate">
              Try It Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
