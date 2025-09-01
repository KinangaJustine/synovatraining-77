import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface CourseRegistrationData {
  courseTitle: string
  courseId: string
  coursePrice: number
  totalPrice: number
  vatAmount: number
  paymentMethod: string
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  company: string
  country: string
  industry: string
  specialRequirements?: string
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

    const { data }: { data: CourseRegistrationData } = await req.json()

    // Store in database
    const { error: dbError } = await supabase
      .from('course_registrations')
      .insert({
        course_title: data.courseTitle,
        course_id: data.courseId,
        course_price: data.coursePrice,
        total_price: data.totalPrice,
        vat_amount: data.vatAmount,
        payment_method: data.paymentMethod,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        job_title: data.jobTitle,
        company: data.company,
        country: data.country,
        industry: data.industry,
        special_requirements: data.specialRequirements
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
          subject: `New Course Registration - ${data.courseTitle}`,
          html: `
            <h2>New Course Registration</h2>
            <p><strong>Course:</strong> ${data.courseTitle}</p>
            <p><strong>Participant:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Job Title:</strong> ${data.jobTitle}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Country:</strong> ${data.country}</p>
            <hr>
            <h3>Payment Details</h3>
            <p><strong>Course Price:</strong> $${data.coursePrice}</p>
            <p><strong>VAT Amount:</strong> $${data.vatAmount}</p>
            <p><strong>Total Price:</strong> $${data.totalPrice}</p>
            <p><strong>Payment Method:</strong> ${data.paymentMethod === 'credit_card' ? 'Credit/Debit Card' : 'Bank Transfer'}</p>
            ${data.specialRequirements ? `<p><strong>Special Requirements:</strong> ${data.specialRequirements}</p>` : ''}
            <hr>
            <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
          `
        }),
      })

      // Send confirmation to participant
      const confirmationEmailContent = data.paymentMethod === 'credit_card' 
        ? `
          <p>We have received your course registration and will process your payment shortly.</p>
          <p>You will receive further instructions for payment processing via email.</p>
        `
        : `
          <p>We have received your course registration with bank transfer payment method.</p>
          <p>You will receive bank transfer details within 30 minutes to complete your payment.</p>
        `

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@synovatraining.com',
          to: [data.email],
          subject: `Registration Confirmation - ${data.courseTitle}`,
          html: `
            <h2>Course Registration Confirmation</h2>
            <p>Dear ${data.firstName},</p>
            <p>Thank you for registering for "<strong>${data.courseTitle}</strong>"!</p>
            ${confirmationEmailContent}
            
            <h3>Registration Details:</h3>
            <p><strong>Course:</strong> ${data.courseTitle}</p>
            <p><strong>Total Amount:</strong> $${data.totalPrice}</p>
            <p><strong>Payment Method:</strong> ${data.paymentMethod === 'credit_card' ? 'Credit/Debit Card' : 'Bank Transfer'}</p>
            
            <p>If you have any questions, please contact us at info@synovatraining.com</p>
            <br>
            <p>Best regards,<br>The Synova Training Team</p>
            <hr>
            <p><em>This is an automated confirmation email.</em></p>
          `
        }),
      })
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Course registration submitted successfully',
        paymentMethod: data.paymentMethod 
      }),
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