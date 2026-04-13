/*
  # Create contact_submissions table

  ## Summary
  Creates a table to store contact form submissions from the LRVLC website.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key, auto-generated)
    - `name` (text, required) - Submitter's full name
    - `email` (text, required) - Submitter's email address
    - `phone` (text, optional) - Submitter's phone number
    - `service` (text, required) - The service they are enquiring about
    - `message` (text, required) - Their message
    - `created_at` (timestamptz) - Submission timestamp

  ## Security
  - RLS enabled on the table
  - Public INSERT policy: allows anyone to submit the contact form (no auth required)
  - No SELECT/UPDATE/DELETE policies for public users — only internal/admin access via service role
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    name <> '' AND
    email <> '' AND
    service <> '' AND
    message <> ''
  );
