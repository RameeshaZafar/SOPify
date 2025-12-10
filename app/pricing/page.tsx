import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600">
              Start free, upgrade when you need more
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="border-b border-slate-200 pb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Starter
                </h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-slate-900">$0</span>
                  <span className="text-slate-600 ml-2">/month</span>
                </div>
                <p className="text-slate-600">Perfect for trying it out</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">3 SOP generations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Basic formatting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Markdown export</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Standard complexity level</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/generate">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-blue-800 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-blue-800 text-white px-4 py-1 text-sm">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="border-b border-slate-200 pb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-slate-900">$19</span>
                  <span className="text-slate-600 ml-2">/month</span>
                </div>
                <p className="text-slate-600">For professionals and teams</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>50 generations/month</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Advanced formatting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      PDF export (coming soon)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Custom branding (coming soon)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      All complexity levels
                    </span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/generate">Upgrade to Pro</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="border-b border-slate-200 pb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Team</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-slate-900">$49</span>
                  <span className="text-slate-600 ml-2">/month</span>
                </div>
                <p className="text-slate-600">For growing organizations</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Unlimited generations</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Team collaboration (coming soon)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Custom templates (coming soon)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      API access (coming soon)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Everything in Pro</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/generate">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-slate-900">
                    What counts as one generation?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  One generation is counted each time you submit your notes and
                  create a new SOP document. You can copy, download, and modify
                  the generated SOP as many times as you want without using
                  additional generations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-slate-900">
                    Can I cancel anytime?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, you can cancel your subscription at any time with no
                  questions asked. Your access will continue until the end of
                  your current billing period. There are no cancellation fees or
                  penalties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-slate-900">
                    Do you offer refunds?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We offer a 30-day money-back guarantee for all paid plans. If
                  you&apos;re not satisfied with SOPify for any reason, contact
                  us within 30 days of your purchase for a full refund. Try the
                  free plan first to ensure it meets your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-slate-900">
                    Is my data secure?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Absolutely. We take data security seriously. Your notes and
                  generated SOPs are processed securely and are not stored on
                  our servers after generation. We use industry-standard
                  encryption for all data transmission, and we never share your
                  data with third parties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-slate-900">
                    What happens if I exceed my generation limit?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  If you reach your monthly generation limit, you&apos;ll be
                  notified and given the option to upgrade to a higher plan. Your
                  generation count resets at the start of each billing cycle. You
                  can also purchase additional generations as needed without
                  upgrading your entire plan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-slate-900">
                    Can I upgrade or downgrade my plan?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, you can change your plan at any time. When upgrading,
                  you&apos;ll get immediate access to new features and be charged
                  the prorated difference. When downgrading, changes take effect
                  at the start of your next billing cycle.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Start with 3 free generations. No credit card required.
          </p>
          <Button asChild size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700">
            <Link href="/generate">Try SOPify Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
