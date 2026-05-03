create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  preferred_channel text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.testimony_submissions (
  id uuid primary key default gen_random_uuid(),
  testimony text not null,
  segment text,
  channel text,
  receipt text not null unique,
  created_at timestamptz not null default now()
);
