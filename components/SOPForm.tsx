'use client';

import { useState } from 'react';
import { FileText, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SOPFormProps {
  onGenerate: (data: {
    processName: string;
    department: string;
    complexityLevel: 'quick' | 'standard' | 'comprehensive';
    messyNotes: string;
    targetAudience: string;
    specialRequirements: string;
  }) => void;
  isLoading: boolean;
}

export function SOPForm({ onGenerate, isLoading }: SOPFormProps) {
  const [processName, setProcessName] = useState('');
  const [department, setDepartment] = useState('Not specified');
  const [complexityLevel, setComplexityLevel] = useState<
    'quick' | 'standard' | 'comprehensive'
  >('standard');
  const [messyNotes, setMessyNotes] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (processName.trim() && messyNotes.trim()) {
      onGenerate({
        processName,
        department,
        complexityLevel,
        messyNotes,
        targetAudience,
        specialRequirements,
      });
    }
  };

  const isFormValid = processName.trim() && messyNotes.trim();

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Create Your SOP
            </h2>
            <p className="text-sm text-slate-600">
              Fill in the details below to generate your professional SOP
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="processName" className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-slate-500" />
              What process are you documenting?
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="processName"
              placeholder="e.g., Client Onboarding, Employee Training, Order Fulfillment"
              value={processName}
              onChange={(e) => setProcessName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">Which team will use this?</Label>
            <Select value={department} onValueChange={setDepartment}>
              <SelectTrigger id="department">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Not specified">Not specified</SelectItem>
                <SelectItem value="Operations">Operations</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
                <SelectItem value="HR">HR</SelectItem>
                <SelectItem value="Customer Service">
                  Customer Service
                </SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="IT">IT</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>How detailed should it be?</Label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setComplexityLevel('quick')}
                className={`p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                  complexityLevel === 'quick'
                    ? 'border-blue-800 bg-blue-50 text-blue-900'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                Quick Reference
              </button>
              <button
                type="button"
                onClick={() => setComplexityLevel('standard')}
                className={`p-3 border-2 rounded-lg text-sm font-medium transition-all relative ${
                  complexityLevel === 'standard'
                    ? 'border-blue-800 bg-blue-50 text-blue-900'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                Standard
                <Badge className="absolute -top-2 -right-2 bg-emerald-600 text-xs">
                  Recommended
                </Badge>
              </button>
              <button
                type="button"
                onClick={() => setComplexityLevel('comprehensive')}
                className={`p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                  complexityLevel === 'comprehensive'
                    ? 'border-blue-800 bg-blue-50 text-blue-900'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                Comprehensive
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {complexityLevel === 'quick' &&
                'Brief, essential steps only'}
              {complexityLevel === 'standard' &&
                'Balanced detail with clear structure'}
              {complexityLevel === 'comprehensive' &&
                'Maximum detail with examples and warnings'}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="messyNotes">
              Paste your messy notes here
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <Textarea
              id="messyNotes"
              placeholder={`Paste your unorganized notes here. This can be:
• Bullet points from a meeting
• Voice-to-text transcripts
• Rough instructions from your head
• Copy-pasted chat messages

Don't worry about formatting - that's our job!`}
              value={messyNotes}
              onChange={(e) => setMessyNotes(e.target.value)}
              rows={8}
              required
              className="resize-none"
            />
            <div className="flex justify-end">
              <span className="text-xs text-slate-500">
                {messyNotes.length} characters
              </span>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-800 transition-colors"
            >
              {showAdvanced ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
              Add more context (optional)
            </button>

            {showAdvanced && (
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="targetAudience">
                    Who will follow this SOP?
                  </Label>
                  <Input
                    id="targetAudience"
                    placeholder="e.g., New employees, Managers, Field technicians"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequirements">
                    Any formatting needs, warnings, or compliance requirements?
                  </Label>
                  <Textarea
                    id="specialRequirements"
                    placeholder="e.g., Include safety warnings, Add quality checkpoints, Must follow ISO standards"
                    value={specialRequirements}
                    onChange={(e) => setSpecialRequirements(e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            )}
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating your SOP...
              </>
            ) : (
              'Generate Professional SOP'
            )}
          </Button>

          <p className="text-xs text-center text-slate-500">
            ✨ Powered by AI • Your data is not stored
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
