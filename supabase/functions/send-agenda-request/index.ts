import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface AgendaRequestData {
  courseTitle: string
  firstName: string
  lastName: string
  email: string
  company: string
  jobTitle: string
  industry: string
  phone?: string
  specificInterests?: string
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

    const { data }: { data: AgendaRequestData } = await req.json()

    // Store in database
    const { error: dbError } = await supabase
      .from('agenda_requests')
      .insert({
        course_title: data.courseTitle,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        company: data.company,
        job_title: data.jobTitle,
        industry: data.industry,
        phone: data.phone,
        specific_interests: data.specificInterests
      })

    if (dbError) {
      throw dbError
    }

    // Send email notification
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
          subject: `New Agenda Request - ${data.courseTitle}`,
          html: `
            <h2>New Course Agenda Request</h2>
            <p><strong>Course:</strong> ${data.courseTitle}</p>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Job Title:</strong> ${data.jobTitle}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
            <p><strong>Specific Interests:</strong> ${data.specificInterests || 'None specified'}</p>
            <hr>
            <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
          `
        }),
      })

      // Send confirmation to user
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@synovatraining.com',
          to: [data.email],
          subject: `Course Agenda Request Received - ${data.courseTitle}`,
          html: `
            <h2>Thank you for your agenda request!</h2>
            <p>Dear ${data.firstName},</p>
            <p>We have received your request for the detailed agenda of "<strong>${data.courseTitle}</strong>".</p>
            <p>Our team will send you the comprehensive course agenda within 24 hours.</p>
            <p>If you have any questions in the meantime, please don't hesitate to contact us.</p>
            <br>
            <p>Best regards,<br>The Synova Training Team</p>
            <hr>
            <p><em>This is an automated confirmation email.</em></p>
          `
        }),
      })
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Agenda request submitted successfully' }),
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