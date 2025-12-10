'use client';

import { useState } from 'react';
import { SOPForm } from '@/components/SOPForm';
import { SOPOutput } from '@/components/SOPOutput';

export default function GeneratePage() {
  const [generatedSOP, setGeneratedSOP] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [processName, setProcessName] = useState('');

  const handleGenerate = async (data: {
    processName: string;
    department: string;
    complexityLevel: 'quick' | 'standard' | 'comprehensive';
    messyNotes: string;
    targetAudience: string;
    specialRequirements: string;
  }) => {
    setProcessName(data.processName);
    setIsLoading(true);
    setGeneratedSOP('');

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const complexityDetails = {
      quick: {
        sections: 'Essential steps only with minimal detail',
        format: 'Brief procedure overview',
      },
      standard: {
        sections: 'Complete procedure with clear steps and quality checks',
        format: 'Balanced detail with examples',
      },
      comprehensive: {
        sections: 'Detailed procedure with examples, warnings, and contingencies',
        format: 'Maximum detail with troubleshooting',
      },
    };

    const details = complexityDetails[data.complexityLevel];

    const mockSOP = `# ${data.processName}

## Purpose
This document outlines the standard operating procedure for ${data.processName}. This SOP ensures consistency, quality, and efficiency in executing this process.

## Scope
This SOP applies to ${data.department || 'all team members'} responsible for ${data.processName.toLowerCase()}.

${data.targetAudience ? `## Target Audience\nThis procedure is designed for: ${data.targetAudience}` : ''}

## Prerequisites
Before beginning this procedure, ensure you have:
- Access to all required systems and tools
- Completion of initial training for this process
- Understanding of company policies and guidelines
- Necessary permissions and authorizations

## Procedure

### Step 1: Preparation and Setup
Begin by ensuring all necessary materials, tools, and resources are prepared and accessible. Verify that you have the appropriate access rights and that all systems are operational.

**Key Actions:**
- Review the task requirements
- Gather all necessary materials
- Verify system access and availability
- Confirm no conflicts with other scheduled activities

### Step 2: Execution Phase
Follow these detailed instructions to complete the main workflow steps. Pay careful attention to each sub-step and verify completion before proceeding.

**Key Actions:**
- Execute the primary task according to specifications
- Monitor progress and quality throughout
- Document any deviations or issues encountered
- Maintain clear communication with relevant stakeholders

### Step 3: Quality Verification
Conduct a thorough review to verify all steps have been completed correctly and meet quality standards. This is a critical checkpoint before finalizing the process.

**Key Actions:**
- Review all completed work against quality standards
- Verify all required data has been captured
- Check for any errors or inconsistencies
- Confirm all documentation is accurate and complete

### Step 4: Completion and Documentation
Record the completion of the procedure and document any notable observations, issues, or improvements for future reference.

**Key Actions:**
- Update relevant tracking systems
- File all documentation appropriately
- Notify relevant parties of completion
- Record any lessons learned or improvement suggestions

${data.specialRequirements ? `\n## Special Requirements\n${data.specialRequirements}` : ''}

## ⚠️ Important Warnings and Considerations

**Safety and Compliance:**
- Always follow safety protocols and guidelines
- Ensure compliance with all regulatory requirements
- Never skip quality verification steps
- Escalate any issues immediately to your supervisor

**Common Pitfalls to Avoid:**
- Rushing through steps without proper verification
- Failing to document deviations or issues
- Not communicating problems in a timely manner
- Skipping required approvals or sign-offs

## Quality Checklist

Use this checklist to ensure all requirements have been met:

- [ ] All steps completed in the correct order
- [ ] All required documentation updated
- [ ] Quality standards verified and met
- [ ] All stakeholders properly notified
- [ ] Any issues or deviations properly documented
- [ ] Supervisor notified if any problems arose
- [ ] All systems updated with current status

## Troubleshooting

| Issue | Possible Cause | Solution |
|-------|---------------|----------|
| Process delayed | Resource unavailability | Check resource schedule, reschedule if needed |
| Quality issues | Incomplete preparation | Review prerequisites, restart from Step 1 |
| System errors | Access or connectivity | Contact IT support, document downtime |
| Unclear requirements | Missing information | Contact supervisor for clarification |

## Performance Metrics

Track these key performance indicators to measure process efficiency:
- **Completion Time:** Target time vs. actual time
- **Quality Score:** First-time accuracy rate
- **Error Rate:** Number of defects or corrections needed
- **Stakeholder Satisfaction:** Feedback from process consumers

## Related Documents
- Company Policy Handbook
- Quality Standards Manual
- Safety Guidelines
- Training Materials for ${data.processName}

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | ${new Date().toLocaleDateString()} | System Generated | Initial creation based on provided inputs |

---

**Document Control:**
- **Complexity Level:** ${data.complexityLevel.charAt(0).toUpperCase() + data.complexityLevel.slice(1)}
- **Generated:** ${new Date().toLocaleString()}
- **Department:** ${data.department || 'Not specified'}

*This SOP should be reviewed and updated regularly to ensure accuracy and relevance.*
`;

    setGeneratedSOP(mockSOP);
    setIsLoading(false);
  };

  const handleReset = () => {
    setGeneratedSOP('');
    setProcessName('');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            SOP Generator
          </h1>
          <p className="text-lg text-slate-600">
            Transform your messy notes into professional documentation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:sticky lg:top-24 h-fit">
            <SOPForm onGenerate={handleGenerate} isLoading={isLoading} />
          </div>

          <div className="lg:h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <SOPOutput
              generatedSOP={generatedSOP}
              isLoading={isLoading}
              processName={processName}
              onReset={handleReset}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
