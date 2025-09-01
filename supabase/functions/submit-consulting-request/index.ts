import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ConsultingRequestData {
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  department?: string
  company: string
  industry: string
  companySize: string
  consultingType: string
  duration: string
  urgency: string
  preferredStartDate?: string
  selectedServices: string[]
  projectBackground: string
  objectives: string
  challenges: string
  scopeOfWork?: string
  budgetRange?: string
  additionalInfo?: string
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data }: { data: ConsultingRequestData } = await req.json()

    // Store in database
    const { error: dbError } = await supabase
      .from('consulting_requests')
      .insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        job_title: data.jobTitle,
        department: data.department,
        company: data.company,
        industry: data.industry,
        company_size: data.companySize,
        consulting_type: data.consultingType,
        duration: data.duration,
        urgency: data.urgency,
        preferred_start_date: data.preferredStartDate,
        selected_services: data.selectedServices,
        project_background: data.projectBackground,
        objectives: data.objectives,
        challenges: data.challenges,
        scope_of_work: data.scopeOfWork,
        budget_range: data.budgetRange,
        additional_info: data.additionalInfo
      })

    if (dbError) {
      throw dbError
    }

    // Send email notifications
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (RESEND_API_KEY) {
      // Send notification to admin
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@synovatraining.com',
          to: ['info@synovatraining.com'],
          subject: `New Consulting Request - ${data.consultingType}`,
          html: `
            <h2>New Consulting Request</h2>
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Job Title:</strong> ${data.jobTitle}</p>
            <p><strong>Department:</strong> ${data.department || 'Not specified'}</p>
            
            <h3>Company Information</h3>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Company Size:</strong> ${data.companySize}</p>
            
            <h3>Consulting Requirements</h3>
            <p><strong>Type:</strong> ${data.consultingType}</p>
            <p><strong>Duration:</strong> ${data.duration}</p>
            <p><strong>Urgency:</strong> ${data.urgency}</p>
            <p><strong>Preferred Start:</strong> ${data.preferredStartDate || 'Not specified'}</p>
            <p><strong>Budget Range:</strong> ${data.budgetRange || 'Not specified'}</p>
            
            <h3>Services Needed</h3>
            <ul>
              ${data.selectedServices.map(service => `<li>${service}</li>`).join('')}
            </ul>
            
            <h3>Project Details</h3>
            <p><strong>Background:</strong> ${data.projectBackground}</p>
            <p><strong>Objectives:</strong> ${data.objectives}</p>
            <p><strong>Challenges:</strong> ${data.challenges}</p>
            ${data.scopeOfWork ? `<p><strong>Scope of Work:</strong> ${data.scopeOfWork}</p>` : ''}
            ${data.additionalInfo ? `<p><strong>Additional Info:</strong> ${data.additionalInfo}</p>` : ''}
            
            <hr>
            <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
          `
        }),
      })

      // Send confirmation to client
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@synovatraining.com',
          to: [data.email],
          subject: 'Consulting Request Received - Synova Training',
          html: `
            <h2>Thank you for your consulting inquiry!</h2>
            <p>Dear ${data.firstName},</p>
            <p>We have received your consulting request and our expert team will review it shortly.</p>
            
            <h3>Your Request Summary:</h3>
            <p><strong>Consulting Type:</strong> ${data.consultingType}</p>
            <p><strong>Urgency Level:</strong> ${data.urgency}</p>
            <p><strong>Expected Duration:</strong> ${data.duration}</p>
            
            <h3>Next Steps:</h3>
            <ul>
              <li>Our consulting team will review your requirements within 24 hours</li>
              <li>We'll contact you to discuss your needs in detail</li>
              <li>We'll provide a customized proposal with timeline and pricing</li>
            </ul>
            
            <p>If you have any urgent questions, please contact us directly at info@synovatraining.com or call us.</p>
            <br>
            <p>Best regards,<br>The Synova Training Consulting Team</p>
            <hr>
            <p><em>This is an automated confirmation email.</em></p>
          `
        }),
      })
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Consulting request submitted successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})