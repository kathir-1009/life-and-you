 

LIFE & YOU 

UI Architecture Document 

Complete Web Application — Client · Coach · Admin 

Version 1.0  •  March 2026  •  Confidential 

lifeandyou.com 

NLP & ICF Certified Coaching Platform — UAE 

 

3 Portals  •  30+ Pages  •  Client + Coach + Admin 

 

Table of Contents 

​​ 

​​ 

 

1. Platform Overview 

Life & You is a wellness coaching platform serving three distinct user groups through a single web application. The platform is role-gated — one URL, three completely different experiences based on authentication role. 

 

This document defines the UI architecture for all three portals: the Client (Patient) Portal, the Coach (Doctor) Portal, and the Admin Portal. It covers every page, its purpose, core components, user interactions, and navigation structure. 

 

1.1 Portal Summary 

Portal 

Users 

Pages 

Key Function 

Client Portal 

Patients / Clients 

12 pages 

Booking, sessions, progress, library 

Coach Portal 

Practitioners / Coaches 

10 pages 

Schedule, client management, notes, earnings 

Admin Portal 

Platform Administrators 

8 pages 

User management, analytics, content, billing 

 

1.2 URL Structure 

lifeandyou.com/ 

Public marketing website (unauthenticated) 

lifeandyou.com/portal 

Client portal (PATIENT role) 

lifeandyou.com/coach 

Coach portal (DOCTOR role) 

lifeandyou.com/admin 

Admin portal (ADMIN role) 

lifeandyou.com/book 

Public booking page 

lifeandyou.com/assessment 

Free self-assessment tool 

lifeandyou.com/resources 

Public resource library preview 

lifeandyou.com/pricing 

Pricing & packages page 

 

1.3 Navigation Roles 

Each authenticated role loads a separate navigation shell. Shared components (auth, notifications, messaging) adapt their UI based on role context. React Router v6 handles all routing with route guards enforcing role-based access control. 

 

2. Public Website Pages 

These pages are accessible without authentication. They serve as the marketing and discovery surface for the Life & You platform. All 8 public pages share the same global navigation bar and footer. 

 

Public Website — 8 Pages  •  All unauthenticated users 

 

2.1 Global Navigation Bar 

Shared across all 8 public pages. Collapses to hamburger on mobile. Includes: Logo, Nav Links (Home, About, Programs, Book a Session, Resources, Pricing, Contact), Sign In button, Book Now CTA. 

 

Element 

Specification 

Logo 

Life & You wordmark + leaf icon (SVG). Links to homepage. 

Primary nav links 

Home, About, Programs, Book a Session (NEW badge), Resources (NEW badge), Pricing, Contact 

Sign In 

Ghost button — routes to /auth/login 

Book Now 

Sage filled CTA — routes to /book 

Announcement bar 

Scrolling banner above nav: certifications, anonymity note, free discovery call 

 

2.2 Page 1 — Homepage 

ROUTE: / 

Purpose 

Primary landing page. Converts visitors to bookings or portal signups. 

Auth Required 

None 

Primary CTA 

Book Your First Session → /book 

Secondary CTA 

Take Free Assessment → /assessment 

 

Sections 

Hero Section — Headline 'Be Heard. Heal Anonymously. Live Better.', subheadline, dual CTAs, hero stats (500+ sessions, 98% satisfaction, 100% anonymity), phone mockup illustration with floating stat cards 

Trust Bar — 5 trust signals: NLP Certified, ICF Member, 100% Anonymous, UAE & Global, 4.9/5.0 rating 

Programs Preview — 3 program cards (1-on-1, Monthly Transformation, Breakthrough). 'View All Programs' link to /programs 

Testimonials Strip — 3 anonymous client testimonials with dark background, privacy badges 

CTA Strip — Gold banner: 'Start with a free 20-minute discovery call'. Book Free Call button 

Footer — Brand description, certifications, social links, 4-column footer links, copyright 

 

2.3 Page 2 — About Us 

ROUTE: /ABOUT-US 

Purpose 

Brand story, coach philosophy, certifications, and team profiles. 

Auth Required 

None 

Primary CTA 

Meet Our Coaches → anchors to coach profiles section 

Sections 

About Hero — Split 50/50 layout. Left: dark background with story copy, 3 fact blocks (No Group Sessions, Anonymous by Design, UAE-Based). Right: 4 certification cards (NLP, ICF, Universal Coaching, Perspective) 

Coach Profiles — 3 coach cards (Coach A, B, C) each with avatar, name, specialty title, star rating, description, specialty tags, cert badges, Book button 

Footer (abbreviated) 

 

2.4 Page 3 — Programs & Services 

ROUTE: /PROGRAMS 

Purpose 

Full program catalogue with 6 offering cards and specialty type breakdown. 

Auth Required 

None 

Primary CTA 

Take Free Assessment → /assessment 

Sections 

Programs Hero — Dark full-width header. Left: headline, intro, CTA. Right: 2x2 specialty grid (NLP, Career, Relationship, Anxiety) 

Programs Grid — 6 program cards: Discovery Call (Free), Explorer Session (AED 399), Monthly Journey (AED 1,499 — Popular), Breakthrough 3M (AED 3,999), NLP Deep Dive (AED 599), Team Wellbeing Package (Custom) 

 

2.5 Page 4 — Book a Session 

ROUTE: /BOOK 

Purpose 

Primary booking flow. 3-step wizard: Session Type → Date & Time → Confirm & Pay. 

Auth Required 

None (anonymous bookings supported) 

Primary CTA 

Confirm Booking + Stripe payment 

Step Progress Bar 

Step 1: Session Type  |  Step 2: Date & Time  |  Step 3: Confirm & Pay 

Active step highlighted in sage. Inactive steps muted with outlined number badges 

Page Components 

Anonymous Mode Toggle — Slide toggle with lock icon. ON = name hidden from all records 

Session Type Selector — Dropdown: Initial Discovery (Free 20min), Individual Coaching (60min), NLP Deep Dive (90min), Follow-up 

Calendar Widget — Month grid, available slots highlighted with gold dot. Unavailable days dimmed 

Time Slot Picker — 4-column grid of time chips. Booked = disabled grey. Selected = sage fill 

Coach Preference — Dropdown: Any Coach (Recommended), Coach A, Coach B, Coach C 

Name/Alias Input — Optional. 'You can stay anonymous' placeholder 

Contact Input — Email or WhatsApp, optional 

Concern Chips — Multi-select tag chips: Anxiety, Relationships, Career, Self-Worth, Grief, Stress, Parenting, Identity, Work-Life 

Notes Textarea — Free text, fully optional 

Booking Summary Sidebar — Session type, date/time, duration, total AED amount 

Confirm Booking CTA — Full-width sage button. Triggers Stripe checkout 

Trust note — '🔒 Your data is encrypted and never shared' 

 

2.6 Page 5 — Booking Confirmation 

ROUTE: /BOOKING/CONFIRMED 

Purpose 

Post-payment confirmation. Shows booking summary and next steps. 

Auth Required 

None (accessible via booking token) 

Trigger 

Rendered after successful Stripe payment 

Components 

Success Icon — Large green checkmark in sage-bordered circle 

Heading — 'You're Booked! 🌿' 

Booking Detail Card — Date/Time, Session Type, Booking ID, Privacy Mode, Total Paid 

Next Steps Grid — 3 cards: Check Email, Explore Resources, Set Up Portal 

CTAs — Go to My Portal (primary), Explore Resources (ghost) 

 

2.7 Page 6 — Resource Library (Public) 

ROUTE: /RESOURCES 

Purpose 

Public preview of coaching resources. Gated content drives portal signup. 

Auth Required 

No (some items show lock icon requiring portal login) 

Components 

Search input — 'Search resources...' 

Filter Pills — All, Articles, Audio, Video, Worksheets 

Topic Dropdown — All Topics, Anxiety, Self-Worth, Career, Relationships 

4-Column Resource Grid — Cards with thumbnail gradient, type badge, title, duration/format, topic tag. Locked items show 🔒 

 

2.8 Page 7 — Self-Assessment Tool 

ROUTE: /ASSESSMENT 

Purpose 

Free 12-question anonymous quiz. Outputs coaching program recommendation. 

Auth Required 

None. No data stored per privacy policy. 

Components 

Left Panel — Eyebrow text, headline, stats (5 min / 12 questions / 100% anonymous), 'What you'll receive' info box 

Assessment Widget (Right) — Progress bar (filled by percent complete), Step counter (e.g. 'Question 5 of 12'), Question in Cormorant Garamond display font, 4 radio option cards (hover + selected states), Back / dot progress / Next footer 

Results Screen (after Q12) — Programme recommendation card, matched resources, Book Session CTA 

 

2.9 Page 8 — Pricing & Packages 

ROUTE: /PRICING 

Purpose 

Transparent pricing. Three tiers. FAQ strip. Drives bookings. 

Auth Required 

None 

Primary CTA 

Book Free Call (gold strip at bottom) 

Components 

Pricing Grid — 3 columns in a bordered table: Explorer (AED 399/session), Journey (AED 1,499/month — featured dark), Breakthrough (AED 3,999/3 months) 

Each column: tier label, plan name, price + period, description, feature checklist (✓), CTA button 

FAQ Strip — 3 FAQ cards: Anonymous mode?, Refund policy?, How do sessions work? 

CTA Strip — Gold background. 'Start with a free discovery call'. Book Free Call CTA 

 

2.10 Page 9 — Contact Us 

ROUTE: /CONTACT 

Purpose 

Inquiry form + contact details. Supports anonymous enquiries. 

Auth Required 

None 

Components 

Split Layout — Left: sage green, headline, intro copy, 4 contact info blocks (Email, WhatsApp, Book Free Call, Sessions Available). Right: white form panel 

Contact Form — Name/Alias (optional), Email/WhatsApp (optional), Subject dropdown, Message textarea, Privacy note banner ('Your message is confidential'), Submit CTA 

 

3. Authentication Pages 

Shared auth pages serve all three user roles. Role detection after login routes to the correct portal. Social auth (Google, Apple) is required for iOS App Store compliance. 

 

Authentication — 5 Pages  •  All roles 

 

Page 

Route 

Key Components 

Sign In 

auth/login 

Email + password, Google/Apple OAuth, 'Forgot Password' link, 'Create Account' link 

Create Account 

auth/register 

Name/alias (optional), email, password, role selector (I'm a Client / I'm a Coach), T&C acceptance, Social auth 

Forgot Password 

auth/forgot-password 

Email input, submit, confirmation message 

Reset Password 

auth/reset-password 

New password + confirm, token from email link 

Email Verification 

auth/verify-email 

'Check your inbox' confirmation state, Resend link, Auto-redirect on token click 

 

3.1 Onboarding Flow (Post-Registration) 

Triggered once on first login. Multi-step wizard before landing on the portal dashboard. 

 

Step 

Name 

Content 

1 

What brings you here? 

Multi-select concern chips: Anxiety, Career, Relationships, Personal Growth, Grief, Stress, Parenting, Identity 

2 

Preferred mode 

Anonymous vs Named toggle with explanation of each 

3 

Notification prefs 

Session reminders (Push/Email/SMS), Coach messages, Milestone alerts 

4 

Complete 

Profile created — routes to Client Dashboard 

 

4. Client Portal 

The Client Portal is accessible to all authenticated PATIENT role users. It provides session management, progress tracking, resource access, and coach communication within a private, optionally anonymous environment. 

 

Client Portal — 12 Pages  •  PATIENT Role Required 

 

4.1 Client Navigation Shell 

The sidebar/bottom navigation persists across all portal pages. On desktop: left sidebar (240px). On mobile: bottom tab bar (5 tabs). 

 

Nav Item 

Route 

Description 

Home (Dashboard) 

/portal 

Overview, next session, stats, quick library 

My Sessions 

/portal/sessions 

Session history and upcoming sessions 

Book Session 

/portal/book 

Internal booking flow (same as /book) 

My Progress 

/portal/progress 

Mood chart, milestones, growth areas 

Resource Library 

/portal/library 

Full library with portal-unlocked content 

Secure Messages 

/portal/messages 

Coach chat with encryption notice 

Profile & Settings 

/portal/profile 

Account, anonymous mode, billing, notifs 

Notifications 

/portal/notifications 

Session alerts, coach messages, milestones 

 

4.2 Page 1 — Client Dashboard 

ROUTE: /PORTAL 

Purpose 

Central hub. Shows journey status, next session, key stats, and library preview. 

Components 

Header greeting, stats row, upcoming session banner, resource preview cards 

Component Breakdown 

Portal Header — 'Good afternoon, [Name/Alias]', Week counter badge (e.g. 'Week 6 · 8 Sessions Completed'), Notification bell (with unread dot), Avatar 

Upcoming Session Banner — Sage card: Next session date/time, coach name, mode (video/phone), 'Join →' gold button. If none: 'Book your next session' CTA 

Stats Row (2 cols) — Mood Average (current week avg + change delta), Sessions Done (total + monthly change). Both animate on load 

Progress Overview Card — Sage mini bar chart showing weekly mood trend with day labels 

Library Snippet — 'From Your Library' heading + 'View All →' link. 2 resource cards (icon, title, meta) relevant to user's selected concerns 

Download Summary Button — Exports progress as PDF via BullMQ background job 

 

4.3 Page 2 — My Sessions 

ROUTE: /PORTAL/SESSIONS 

Purpose 

Full session history and upcoming sessions. Supports reschedule/cancel. 

Tabs 

Upcoming — Session cards with: date, time, coach name, type, Join/Reschedule/Cancel actions 

Past — Completed sessions with: date, duration, coach, type, 'View Notes' link, feedback prompt (stars) 

Session Card Actions 

Join — Opens Daily.co video room in new tab (enabled 15 min before session) 

Reschedule — Opens date/time picker modal. Books new slot, cancels old 

Cancel — Confirmation modal. Refund eligibility shown. Reason dropdown 

View Notes — Slide-out panel with encrypted session notes from coach 

Leave Feedback — 5-star + comment. Anonymous submission 

 

4.4 Page 3 — Book a Session (Portal) 

ROUTE: /PORTAL/BOOK 

Identical booking flow as the public /book page but pre-fills user preferences, existing coach relationship, and saved anonymous mode preference. Progress steps and Stripe integration identical. 

 

4.5 Page 4 — My Journey Progress 

ROUTE: /PORTAL/PROGRESS 

Purpose 

Visual progress tracking across mood, growth areas, and milestones. 

Components 

Progress Header — Sage gradient. Title, current week badge, Mood This Week bar chart (7 bars, current day highlighted gold) 

Milestones Section — Gold-tinted milestone cards: '6 Weeks In!', '10+ Resources Read', 'Streak: 7 Days'. Trophy/badge icons. Timestamp below 

Growth Areas — Progress bars for each coaching dimension: Self-Awareness (72%), Communication (81%), Emotional Resilience (58%), Mindset Shift (64%). Each with percentage, gradient fill bar, descriptor text 

Mood Log — Expandable list of daily mood entries with 1–10 score, journal note excerpt, date 

Export Progress — Button to download PDF summary of full journey 

 

4.6 Page 5 — Resource Library (Portal) 

ROUTE: /PORTAL/LIBRARY 

Purpose 

Full access to all coach-uploaded and platform resources. No lock icons for subscribed users. 

Components 

Filter Tabs — All, Articles, Audio, Video, Worksheets 

Topic Dropdown — All, Anxiety, Self-Worth, Career, Relationships, Mindfulness, NLP 

Search Input — Live search across title + tags 

Featured Resource Banner — Coach-highlighted item (audio/video) in sage card with play/download button 

Resource Grid (4-col) — Card: gradient thumbnail, type badge, title, meta (duration/size), topic chip. Click opens resource viewer/player 

Resource Viewer — Inline PDF viewer (react-pdf), HTML5 audio player with seek/progress, video player (CloudFront HLS). All with close button 

'Added by Coach' attribution shown on coach-assigned resources 

 

4.7 Page 6 — Secure Messaging 

ROUTE: /PORTAL/MESSAGES 

Purpose 

Encrypted 1-on-1 messaging between client and assigned coach. 

Tech 

Socket.io real-time, end-to-end encryption notice, zero-retention mode 

Components 

Chat Header — Coach name, online status (green dot), coach avatar, back arrow 

Encryption Notice Bar — '🔒 End-to-end encrypted · Zero retention mode ON' 

Message Thread — Date dividers, received bubbles (white, left-aligned), sent bubbles (sage, right-aligned). Delivery tick. Timestamps 

Input Area — Text input, send button. Planned: file/resource attachment icon 

Conversation List (if multiple coaches) — Left sidebar on desktop with coach list and unread counts 

 

4.8 Page 7 — Profile & Settings 

ROUTE: /PORTAL/PROFILE 

Sections 

Profile Hero — Sage gradient, avatar (editable), display name or 'Anonymous Client', anonymous mode status badge, gamification badges (Journey Member, Sessions count) 

Stats Strip — 3 stat tiles: Sessions, Resources Read, Weeks Active 

My Account Group — My Sessions link, Journey Progress link, Billing & Invoices link 

Privacy Group — Anonymous Mode toggle (live switch), Notification Preferences, Account Settings 

Support Group — FAQ, Privacy Policy, Help, Contact Us 

Sign Out — Red-tinted destructive button 

 

4.9 Page 8 — Notifications 

ROUTE: /PORTAL/NOTIFICATIONS 

Components 

Header — 'Notifications 🔔', 'Mark all read' link 

Date Groups — Today, Yesterday, Earlier This Week, Older 

Notification Item (unread) — Sage-pale background, coloured icon tile, title (bold), description, timestamp, gold unread dot 

Notification Types — Session Confirmed (green), Coach Message (sage), New Resource (gold), Session Reminder (green), Milestone Reached (terra), Feedback Request (charcoal) 

Swipe to dismiss (mobile) / X button (desktop) 

 

4.10 Page 9 — Billing & Invoices 

ROUTE: /PORTAL/BILLING 

Components 

Current Plan Card — Plan name, next billing date, price, Manage Plan button (→ Stripe Customer Portal) 

Payment Method — Saved card with last 4 digits, expiry, Update Card button 

Invoice Table — Date, description, amount, status (Paid/Refunded), Download PDF icon 

Refund Request — Link appears on eligible bookings within refund window 

 

4.11 Page 10 — Account Settings 

ROUTE: /PORTAL/SETTINGS 

Sections 

Display Preferences — Name/Alias, Avatar upload, Timezone, Language 

Privacy — Anonymous mode toggle, data export (GDPR), delete account 

Notifications — Per-channel toggles: Session reminders, Coach messages, Milestones, Newsletter (Email/Push/SMS) 

Security — Change password, 2FA setup (TOTP or SMS via Twilio), active sessions list 

 

4.12 Page 11 — Session Room 

ROUTE: /PORTAL/SESSION/:ID/JOIN 

Purpose 

Live 1-on-1 video/audio session powered by Daily.co WebRTC SDK. 

Auth 

Session-scoped token. Room expires 30min after scheduled end time 

Components 

Daily.co Embedded Room — Full-screen video tiles. Remote (coach) + local (client) 

Controls Bar — Mic toggle, Camera toggle, Screen share, Leave call 

Anonymous Shield — If anonymous mode ON, local video starts blurred. One-click 'Show face' toggle 

Session Notes Sidebar — Slide-in panel: client-side pre-session notes (private, not shared with coach) 

Timer — Countdown from 60:00 displayed in corner. Alert at 5 min remaining 

Post-Session Screen — 'Session Complete', duration, Feedback prompt, 'Back to Portal' CTA 

 

4.13 Page 12 — Personal Journal 

ROUTE: /PORTAL/JOURNAL 

Components 

Journal Entry List — Cards with date, mood score badge, first 100 chars of entry, edit icon 

New Entry Form — Date (auto), Mood Slider (1–10 with emoji labels), Rich text area, Tags (private, encrypted) 

Privacy Notice — 'Your journal is private and encrypted. Only you can read these entries.' 

 

5. Coach (Doctor) Portal 

The Coach Portal is accessible to authenticated DOCTOR role users. It enables practitioners to manage their schedule, handle client relationships, conduct sessions, and upload resources. The portal is distributed as a separate mobile app (Doctor App) that shares this web codebase. 

 

Coach Portal — 10 Pages  •  DOCTOR Role Required 

 

5.1 Coach Navigation Shell 

Left sidebar on desktop (240px wide). Persistent across all coach portal pages. Shows coach avatar, name, anonymous client count, and unread message badge. 

 

Nav Item 

Route 

Description 

Dashboard 

/coach 

Today's schedule, upcoming sessions, client activity 

My Schedule 

/coach/schedule 

Calendar-based availability & bookings 

Clients 

/coach/clients 

Client list with activity status 

Sessions 

/coach/sessions 

All sessions: upcoming, active, completed 

Messages 

/coach/messages 

Client messaging (same encrypted UI) 

Resources 

/coach/resources 

Upload & manage coaching resources 

Session Notes 

/coach/notes 

Rich-text notes editor per session 

Earnings 

/coach/earnings 

Revenue, invoices, payout history 

Profile 

/coach/profile 

Bio, specialties, certifications, availability 

Settings 

/coach/settings 

Notifications, calendar sync, account security 

 

5.2 Page 1 — Coach Dashboard 

ROUTE: /COACH 

Purpose 

At-a-glance view of today, this week's load, and client activity. 

Components 

Header — 'Good morning, Coach [Name]', current date, 'Book Session +' button, 'Download Summary' button 

Stats Row (4 tiles) — Sessions Today, Sessions This Week, Active Clients, Average Rating (star icon) 

Today's Schedule — Compact timeline list of today's sessions with client alias, time, type, Join/Prepare actions 

Upcoming Sessions Widget — Next 5 sessions in a table: client alias, date/time, type, status badge 

Client Activity Feed — Recent client actions: new bookings, messages, resource reads, mood entries (anonymised as 'Client #4821 logged a mood of 7'). Helps coaches prepare 

Quick Actions Strip — New Availability Slot, Upload Resource, Add Session Note, Message Client 

 

5.3 Page 2 — My Schedule 

ROUTE: /COACH/SCHEDULE 

Purpose 

Full calendar management. Set availability and view booked slots. 

Integration 

Cal.com or Nylas API for calendar sync 

Views 

Month View — Standard grid calendar with booking count per day badge 

Week View — Time-blocked grid (primary view). Each booking shown as a coloured block with client alias and type. Green = available, sage = booked, grey = unavailable 

Day View — Hourly breakdown for detailed daily planning 

Actions 

Add Availability — Click/drag on time slot → opens 'Add Availability' modal with start time, end time, repeat option (one-time / weekly) 

Block Time — Mark time as unavailable (no new bookings) 

Session Block Click — Opens session detail slide-out: client alias, concern tags, previous session count, messaging link, Join button 

Sync Toggle — Connect Google Calendar / Outlook for two-way sync 

 

5.4 Page 3 — Client Management 

ROUTE: /COACH/CLIENTS 

Components 

Client List — Table: Client Alias, Concern Tags, Sessions Completed, Last Session, Next Session, Status (Active/Inactive), Message icon 

Search & Filter — Filter by concern area, status, date range 

Client Detail Slide-out (or /coach/clients/:id) — Full profile with: session history timeline, assigned resources, shared notes, mood trend (anonymised), messaging link 

Anonymous Protection — If anonymous mode is ON for a client, name field shows pseudonym (e.g. 'Wellness Seeker #4821'). Coach cannot unilaterally deanonymise 

 

5.5 Page 4 — Session Notes 

ROUTE: /COACH/NOTES, /COACH/NOTES/:SESSIONID 

Purpose 

Rich-text encrypted session notes. Editable during and after sessions. 

Privacy 

Notes encrypted at rest (AES-256). Only the coach and admin can access. 

Components 

Note List — Left panel: sessions sorted by date. Click to open note 

Rich Text Editor — TipTap or Quill editor: bold, italic, bullet list, heading, highlight. Auto-save every 30s 

Note Fields — Pre-session prep notes (coach only), in-session observations, post-session summary, action items for client, next session goal 

Attach to Session — Dropdown to link note to a specific session 

Share with Client — Toggle to share selected sections as a 'Session Summary' visible in client portal 

 

5.6 Page 5 — Resource Management 

ROUTE: /COACH/RESOURCES 

Components 

Upload Panel — Drag-and-drop zone supporting PDF, MP3, MP4, JPEG. Files upload to AWS S3 via presigned URL 

Resource Form — Title, description, type (Article/Audio/Video/Worksheet), category tags, target client(s) or 'All clients', visibility (Public / Portal-only / Specific clients) 

Resource Library Table — Title, type, upload date, views, assigned clients, edit/delete actions 

Assign to Client — Multi-select client dropdown. Resource appears in their portal library 

 

5.7 Page 6 — Earnings & Payouts 

ROUTE: /COACH/EARNINGS 

Components 

Earnings Summary Cards — This Month Revenue, This Month Sessions, YTD Revenue, Pending Payout 

Revenue Chart — Monthly bar chart for last 12 months 

Session Earnings Table — Date, client alias, session type, amount, status (Paid/Pending/Refunded) 

Payout Schedule — Next payout date, bank account last 4 digits, Stripe Express dashboard link 

Invoice Download — Per-session PDF invoices 

 

5.8 Page 7 — Coach Profile (Public-Facing) 

ROUTE: /COACH/PROFILE 

Purpose 

Editable version of the profile shown to clients on the booking page. 

Editable Fields 

Display Name (e.g. 'Coach B'), Professional Title, Bio (500 chars max), Avatar (upload), Specialties (multi-select tags), Certifications (text fields), Years Experience 

Availability — Default session duration (30/60/90 min), Buffer time between sessions, Timezone 

Preview Mode — 'Preview as client' toggle shows how the profile appears on /book 

 

5.9 Page 8 — Session Room (Coach View) 

ROUTE: /COACH/SESSION/:ID/JOIN 

Purpose 

Coach-side video session with client info panel. 

Components 

Daily.co Embedded Room — Full-screen video. Remote (client) + local (coach) 

Client Info Side Panel — Client alias, concern tags, last session summary, quick note input. Collapsible to maximise video 

Live Note Taking — Inline notepad synced to session notes. Auto-links to current session 

Controls — Mic, camera, screenshare, leave. Host controls: mute client (emergency only) 

Session Timer — Countdown. Option to extend by 15 min (if next slot is free) 

 

6. Admin Portal 

The Admin Portal is accessible only to ADMIN role users. It provides platform-wide oversight including user management, content moderation, analytics, billing configuration, and compliance controls. The admin portal is web-only (no mobile app). 

 

Admin Portal — 8 Pages  •  ADMIN Role Required  •  Web Only 

 

Admin users access the portal at lifeandyou.com/admin. Admin accounts are created via database seeding only — there is no public signup for admin roles. 2FA is mandatory for all admin accounts. 

 

6.1 Admin Navigation Shell 

Nav Item 

Route 

Description 

Dashboard 

/admin 

Platform KPIs, revenue overview, activity feed 

Users 

/admin/users 

All clients + coaches. View, suspend, deanonymise 

Coaches 

/admin/coaches 

Coach verification, profiles, earnings oversight 

Sessions 

/admin/sessions 

All bookings and sessions. Status, refunds, disputes 

Content 

/admin/content 

Resource library moderation and uploads 

Analytics 

/admin/analytics 

User growth, retention, revenue, funnel data 

Billing 

/admin/billing 

Stripe dashboard, payouts, pricing config 

Settings 

/admin/settings 

Platform config, email templates, feature flags 

 

6.2 Page 1 — Admin Dashboard 

ROUTE: /ADMIN 

Components 

KPI Row (6 tiles) — Total Users, Total Coaches, Sessions This Month, Revenue This Month (AED), Avg Session Rating, Active Subscriptions 

Revenue Chart — Line chart: 12-month MRR trend with booking volume overlay 

Real-Time Activity Feed — Live socket events: new bookings, session completions, new user signups, payment events 

Coach Utilisation Table — Coach name, sessions this week, utilisation %, avg rating, status 

Quick Actions — Add Admin User, Create Promo Code, Send Platform Announcement, Export Report 

 

6.3 Page 2 — User Management 

ROUTE: /ADMIN/USERS 

Components 

User Table — Columns: ID, Display Name/Alias, Email (if provided), Role, Registration Date, Sessions, Status (Active/Suspended), Actions 

Search & Filter — By role, date range, anonymous status, subscription plan 

User Detail Panel — Booking history, session count, progress data, messages (metadata only, not content), subscription status 

Actions — Suspend account, Restore account, Force password reset, Export user data (GDPR), Delete user (with confirmation modal) 

Deanonymise — Only available with two-admin approval (dual-control). Requires documented legal/safety grounds. Full audit log entry created 

 

6.4 Page 3 — Coach Management 

ROUTE: /ADMIN/COACHES 

Components 

Coach Table — Name, specialties, sessions (total/month), rating, earnings (YTD), verification status, actions 

Verification Workflow — Upload certification documents → Admin reviews → Approve/Reject with note 

Coach Detail Page — Full profile preview, session history, client list (anonymised), earnings breakdown, notes 

Earnings Override — Admin can manually add/subtract earnings (for refunds or bonuses). Full audit log 

 

6.5 Page 4 — Session & Booking Management 

ROUTE: /ADMIN/SESSIONS 

Components 

Session Table — Booking ID, date/time, client alias, coach, type, duration, amount, payment status, session status 

Filter — By coach, status (upcoming/completed/cancelled/disputed), date range, payment status 

Session Detail — Full booking data, payment intent ID, refund eligibility, dispute status 

Refund Processing — Issue full/partial refund via Stripe API. Refund reason required. Audit log 

Dispute Resolution — Mark as disputed, add admin note, resolve with outcome (refunded/upheld) 

 

6.6 Page 5 — Content Management 

ROUTE: /ADMIN/CONTENT 

Components 

Resource Table — Title, type, uploader (coach/admin), upload date, visibility, views, status (Active/Hidden) 

Upload Resource — Same form as coach uploader but can assign to all clients or specific coaches 

Hide/Show Toggle — Instantly hides resource platform-wide (for moderation) 

Bulk Actions — Select multiple → bulk hide, bulk assign, bulk delete 

Blog/Article Editor — Simple rich-text editor for platform-wide articles (shows in public /resources) 

 

6.7 Page 6 — Analytics & Reporting 

ROUTE: /ADMIN/ANALYTICS 

Tabs 

Overview — Active users (WAU/MAU), session completion rate, booking conversion funnel 

Revenue — MRR, ARR, new vs returning revenue, plan breakdown pie chart, churn rate 

Retention — Cohort retention table, session frequency distribution, drop-off points 

Funnel — Public site visits → assessment completions → booking starts → booking completions 

PostHog Integration — Embedded PostHog dashboard for real-time product analytics 

Export Options 

CSV export for all data tables. Date range picker. Schedule weekly email report 

 

6.8 Page 7 — Platform Billing 

ROUTE: /ADMIN/BILLING 

Components 

Stripe Dashboard Embed — Revenue, subscription MRR, dispute rate, payout status 

Pricing Config — Update plan prices (AED), session prices. Changes apply to new bookings only 

Promo Codes — Create discount codes (%, fixed AED, free sessions). Set expiry and usage limits 

Coach Payout Config — Platform commission rate, payout frequency (weekly/biweekly), minimum threshold 

Refund Queue — Pending refund requests from clients. Admin approval required above AED 500 

 

6.9 Page 8 — Platform Settings 

ROUTE: /ADMIN/SETTINGS 

Sections 

Email Templates — Edit transactional email templates (Resend/SendGrid). Preview mode 

Feature Flags — Toggle features on/off: Anonymous Mode, Resource Library, Self-Assessment, Journal, Group Sessions (future) 

Platform Text — Edit marketing copy: homepage headline, trust bar, pricing descriptions 

Maintenance Mode — Toggle to show maintenance banner. Option to block new bookings 

Admin Users — List of admin accounts. Add admin (requires 2FA enrollment), revoke access, view audit log per admin 

Audit Log — Immutable log of all admin actions: user deanonymisation, refunds, setting changes, coach verification decisions 

 

7. Shared UI Components 

These components are defined in /packages/ui and used across Client, Coach, and Admin portals. They adapt their visual presentation to the active role context via theming props. 

 

Component 

Used In 

Description 

<SessionCard> 

Client, Coach, Admin 

Displays a single session's date, coach/client, type, status badge, and action buttons. Adapts to role context 

<ResourceCard> 

Client, Coach, Admin 

Resource thumbnail card with type badge, lock overlay for restricted content 

<CalendarWidget> 

Client, Coach 

Month/week calendar with available slot markers and selection state 

<TimeSlotGrid> 

Client, Coach 

Grid of time chips with available/booked/selected states 

<AnonymousToggle> 

Client, Coach, Admin 

Privacy toggle with label and description. ON = sage green 

<ConcernChips> 

Client, Booking 

Multi-select chip group for concern areas 

<MoodChart> 

Client, Coach 

Bar chart of 7-day mood with day labels 

<ProgressBar> 

Client, Coach 

Labelled gradient progress bar with % label 

<NotifItem> 

Client, Coach 

Notification row with icon tile, title, description, time, unread dot 

<MessageBubble> 

Client, Coach 

Chat bubble with sent/received variants and delivery status 

<AnonBadge> 

Client, Coach, Admin 

🔒 Anonymous Mode indicator pill 

<StatTile> 

All portals 

KPI card with label, value (Cormorant Garamond), delta badge 

<PricingCard> 

Public, Admin 

Pricing tier card with feature list and CTA button 

<CoachCard> 

Public, Admin 

Coach profile card with avatar, name, title, rating, specialties 

 

8. Complete Page Inventory 

All pages across the three portals and public website, listed with route, role requirement, and page type. 

 

8.1 Public Pages (9 pages) 

Page 

Route 

Type 

Homepage 

/ 

Marketing / Landing 

About Us 

/about-us 

Brand / Team 

Programs 

/programs 

Service Catalogue 

Book a Session 

/book 

Transactional / Booking 

Booking Confirmed 

/booking/confirmed 

Post-Transaction 

Resource Library 

/resources 

Content Preview 

Self-Assessment 

/assessment 

Interactive Tool 

Pricing 

/pricing 

Transactional 

Contact Us 

/contact 

Lead Generation 

 

8.2 Auth Pages (5 pages) 

Page 

Route 

Type 

Sign In 

/auth/login 

Authentication 

Create Account 

/auth/register 

Authentication 

Forgot Password 

/auth/forgot-password 

Authentication 

Reset Password 

/auth/reset-password 

Authentication 

Email Verification 

/auth/verify-email 

Authentication 

 

8.3 Client Portal Pages (13 pages) 

Page 

Route 

Type 

Dashboard 

/portal 

Portal Home 

My Sessions 

/portal/sessions 

Session Management 

Book Session 

/portal/book 

Booking 

Progress Tracker 

/portal/progress 

Analytics / Progress 

Resource Library 

/portal/library 

Content 

Secure Messaging 

/portal/messages 

Communication 

Profile & Settings 

/portal/profile 

Account 

Notifications 

/portal/notifications 

Notifications 

Billing & Invoices 

/portal/billing 

Finance 

Account Settings 

/portal/settings 

Account 

Session Room 

/portal/session/:id/join 

Live Session 

Personal Journal 

/portal/journal 

Wellness Tool 

Onboarding Flow 

/portal/onboarding 

Onboarding (first login) 

 

8.4 Coach Portal Pages (10 pages) 

Page 

Route 

Type 

Coach Dashboard 

/coach 

Portal Home 

Schedule 

/coach/schedule 

Calendar Management 

Client Management 

/coach/clients 

Client Overview 

Session Notes 

/coach/notes 

Note-Taking 

Resource Management 

/coach/resources 

Content Management 

Earnings 

/coach/earnings 

Finance 

Coach Profile 

/coach/profile 

Profile Editing 

Sessions 

/coach/sessions 

Session Management 

Messages 

/coach/messages 

Communication 

Session Room 

/coach/session/:id/join 

Live Session 

 

8.5 Admin Portal Pages (8 pages) 

Page 

Route 

Type 

Admin Dashboard 

/admin 

Platform Overview 

User Management 

/admin/users 

CRUD / Moderation 

Coach Management 

/admin/coaches 

CRUD / Verification 

Session Management 

/admin/sessions 

Oversight / Refunds 

Content Management 

/admin/content 

CMS 

Analytics 

/admin/analytics 

Reporting 

Billing 

/admin/billing 

Finance Config 

Platform Settings 

/admin/settings 

Config / Feature Flags 

 

Total Pages Across All Portals 

45 pages  (9 public + 5 auth + 13 client + 10 coach + 8 admin) 

 

9. Design System Reference 

All pages use the tokens established in the HTML mockup files. These must be encoded in Tailwind's theme config and as CSS custom properties for use in non-Tailwind contexts. 

 

9.1 Colour Palette 

Token 

Hex 

Role 

Usage 

--sage 

#3D5247 

Primary 

CTAs, headers, nav, progress bars 

--sage-mid 

#5A7265 

Secondary 

Hover states, subheadings 

--sage-light 

#B5C4BA 

Tertiary 

Borders, inactive states 

--sage-pale 

#EDF2EE 

Background 

Card fills, selected states 

--gold 

#C4A35A 

Accent 

CTAs alt, badges, ornaments 

--gold-pale 

#FBF5E6 

Background 

Gold tinted card fills 

--cream 

#F5EFE6 

Background 

Page background, card bg 

--charcoal 

#1C2320 

Text/Dark 

Dark headers, nav backgrounds 

--terra 

#B5735A 

Warning/Alt 

Error states, admin accents 

 

9.2 Typography 

Font 

Context 

Weights 

Use Case 

Cormorant Garamond 

Both web + app 

400, 600, 700 

Display headings, brand name, hero titles, testimonials, prices 

DM Sans 

Web only 

300, 400, 500, 600, 700 

Body copy, labels, buttons, form inputs on web pages 

Nunito 

App only 

300, 400, 600, 700, 800 

Body copy, labels, buttons in Capacitor mobile app builds 

System UI fallback 

Both 

auto 

Fallback if Google Fonts unavailable 

 

9.3 Core Component States 

Component 

States 

Notes 

Buttons 

Default, Hover, Active, Disabled, Loading 

Sage = primary, Gold = accent, Ghost = outline, Destructive = red 

Form Inputs 

Default, Focus, Error, Disabled 

Focus border: --gold. Error border: --terra with helper text 

Cards 

Default, Hover, Selected 

Box shadow on hover. Border highlight on selected 

Toggles 

Off (grey), On (sage) 

Switch knob is white circle, right = ON 

Chips / Tags 

Default, Selected, Disabled 

Selected = sage fill, white text. Rounded pill shape 

 

10. Key User Flows 

 

10.1 New Client — Booking Flow 

# 

Step 

Page / Action 

1 

Discover platform 

Lands on lifeandyou.com (Homepage) 

2 

Takes assessment 

Completes 12-question quiz (/assessment) 

3 

Views programs 

Browses /programs for coaching options 

4 

Starts booking 

Clicks 'Book a Session' → /book 

5 

Selects slot 

Picks date/time from calendar widget 

6 

Opts in to anonymity 

Enables Anonymous Mode toggle 

7 

Enters concern chips 

Selects Anxiety + Self-Worth 

8 

Confirms + pays 

Stripe checkout modal. Payment processed 

9 

Sees confirmation 

/booking/confirmed page with session details 

10 

Creates portal account 

Clicks 'Go to My Portal' → /auth/register 

11 

Completes onboarding 

4-step onboarding wizard 

12 

Arrives at dashboard 

/portal with next session card shown 

 

10.2 Returning Client — Session Day Flow 

# 

Step 

Page / Action 

1 

Receives push notification 

'Your session starts in 30 minutes' 

2 

Opens portal 

/portal — sees 'Join Session' button active 

3 

Joins session 

Navigates to /portal/session/:id/join 

4 

Conducts session 

Daily.co video room. 60 min timer 

5 

Post-session screen 

Feedback prompt. Star rating + comment 

6 

Reads coach notes 

Coach shares session summary → visible in /portal/sessions 

7 

Opens resource 

Coach assigned new worksheet → opens in /portal/library 

8 

Logs mood 

Adds mood entry in /portal/journal or progress page 

 

10.3 Coach — Session Preparation Flow 

# 

Step 

Page / Action 

1 

Checks schedule 

/coach → today's schedule list 

2 

Reviews client 

/coach/clients/:id — reads last session note, mood trend 

3 

Writes prep notes 

/coach/notes — pre-session field 

4 

Assigns resource 

/coach/resources — assigns worksheet to client 

5 

Joins session 

/coach/session/:id/join — client info panel visible 

6 

Live notes 

In-session notepad syncs to /coach/notes 

7 

Post-session summary 

Writes post-session note. Toggles 'Share with client' 

8 

Reviews earnings 

/coach/earnings — confirms session payment recorded 

 

11. Privacy & Compliance UI Elements 

Anonymous mode is a differentiating feature of Life & You. Every page that handles personal data must surface the following privacy UI elements consistently. 

 

UI Element 

Pages 

Behaviour 

Anonymous Mode Toggle 

Booking, Profile, Settings 

Sage toggle. ON = name hidden from all records. Pseudonym auto-generated 

🔒 Anonymous Mode Badge 

Portal header, booking confirmation, profile hero 

Shows 'Anonymous Mode Active' when enabled 

Encryption Notice 

Messaging screen 

'End-to-end encrypted · Zero retention mode ON' bar 

Privacy Note (Forms) 

Booking, Contact, Assessment 

'Your message is confidential. We never share your details.' 

Cookie Consent Banner 

Homepage (first visit) 

GDPR-compliant: Accept All / Manage Preferences / Reject Non-essential 

Data Export 

Client Settings, Admin Users 

GDPR Article 20 right to portability. Exports as JSON 

Delete Account 

Client Settings, Admin 

Soft delete (30-day window) then hard purge. Confirmation required 

Deanonymise Audit 

Admin Settings → Audit Log 

Dual-admin approval. Immutable log entry with reason and admin IDs 

 

12. Document Summary 

 

Section 

Summary 

Public Website 

9 pages: Homepage, About, Programs, Book, Confirmation, Resources, Assessment, Pricing, Contact 

Authentication 

5 pages: Sign In, Register, Forgot/Reset Password, Email Verify + 4-step Onboarding 

Client Portal 

13 pages: Dashboard, Sessions, Booking, Progress, Library, Messaging, Profile, Notifications, Billing, Settings, Session Room, Journal, Onboarding 

Coach Portal 

10 pages: Dashboard, Schedule, Clients, Notes, Resources, Earnings, Profile, Sessions, Messages, Session Room 

Admin Portal 

8 pages: Dashboard, Users, Coaches, Sessions, Content, Analytics, Billing, Settings 

Shared Components 

15 reusable components from /packages/ui 

Design System 

4 colour groups, 3 fonts, 5 component state sets 

Total Pages 

45 pages across all portals and public site 

 

This document is the single source of truth for the Life & You web application UI architecture. It should be updated as new pages are added or designs evolve. Version control this document alongside the codebase. 

 

 

Life & You  ·  UI Architecture Document  ·  Version 1.0  ·  March 2026 