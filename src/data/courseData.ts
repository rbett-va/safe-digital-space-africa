export const courseData = {
  "Online Privacy Fundamentals": {
    modules: [
      {
        id: "module1",
        title: "Password Security",
        subtopics: [
          {
            id: "1-1",
            title: "Creating Strong Passwords",
            content: `Creating strong passwords is your first line of defense in protecting your digital identity.

KEY PRINCIPLES:
• Use at least 12 characters (longer is stronger)
• Combine uppercase, lowercase, numbers, and symbols
• Avoid personal information (names, birthdays, addresses)
• Never reuse passwords across different accounts

GOOD PASSWORD EXAMPLES:
• Tr0p!c@lSunr!s3#2024
• M0unt@inBr33ze$Sky
• Oce@nW@ve#Bl00m99

BAD PASSWORD EXAMPLES:
• password123 (too common)
• JohnDoe1990 (uses personal info)
• 12345678 (sequential numbers)

PASSWORD MANAGERS:
Consider using password managers like Bitwarden, 1Password, or LastPass to securely store and generate strong passwords for all your accounts.`,
            quiz: [
              {
                question: "What is the minimum recommended password length?",
                options: ["6 characters", "8 characters", "12 characters", "16 characters"],
                correctAnswer: 2
              },
              {
                question: "Which of these is a strong password?",
                options: ["password123", "JohnSmith1990", "Tr0p!c@lSunr!s3#", "12345678"],
                correctAnswer: 2
              },
              {
                question: "Why should you avoid using personal information in passwords?",
                options: ["It's easy to remember", "Hackers can guess it from social media", "It's too short", "It's illegal"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "1-2",
            title: "Two-Factor Authentication",
            content: `Two-Factor Authentication (2FA) adds an extra layer of security by requiring two forms of verification.

WHAT IS 2FA?
2FA requires something you know (password) plus something you have (phone, security key) or something you are (fingerprint, face).

TYPES OF 2FA:
1. SMS Codes - Sent to your phone
2. Authenticator Apps - Google Authenticator, Authy
3. Security Keys - Physical USB devices
4. Biometric - Fingerprint or facial recognition

HOW TO ENABLE 2FA:
1. Go to account security settings
2. Find "Two-Factor Authentication" or "2FA"
3. Choose your preferred method
4. Follow setup instructions
5. Save backup codes in a safe place

IMPORTANT: Always save your backup codes in case you lose access to your 2FA device!`,
            quiz: [
              {
                question: "What does 2FA stand for?",
                options: ["Two-Factor Analysis", "Two-Factor Authentication", "Two-Form Access", "Two-File Archive"],
                correctAnswer: 1
              },
              {
                question: "Which is the most secure form of 2FA?",
                options: ["SMS codes", "Email codes", "Authenticator apps", "Password only"],
                correctAnswer: 2
              },
              {
                question: "What should you always save when setting up 2FA?",
                options: ["Your password", "Backup codes", "Your email", "Your phone number"],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: "module2",
        title: "Data Protection Basics",
        subtopics: [
          {
            id: "2-1",
            title: "Understanding Your Digital Footprint",
            content: `Your digital footprint is the trail of data you leave behind when using the internet.

TYPES OF DIGITAL FOOTPRINTS:
1. Active Footprint - Information you intentionally share
   • Social media posts
   • Online reviews
   • Comments and likes
   • Forum discussions

2. Passive Footprint - Information collected without you knowing
   • Browser history
   • Location data
   • IP address
   • Cookie tracking

WHY IT MATTERS:
• Employers may research your online presence
• Personal information can be used for identity theft
• Your data is valuable to advertisers and companies
• Once shared online, it's difficult to completely remove

HOW TO MANAGE YOUR FOOTPRINT:
• Search for yourself regularly to see what others can find
• Review privacy settings on all accounts
• Be mindful of what you share publicly
• Use privacy-focused search engines and browsers

REMEMBER: You have the right to control your digital presence!`,
            quiz: [
              {
                question: "What is a digital footprint?",
                options: ["Your computer's memory", "The trail of data you leave online", "Your internet speed", "Your email address"],
                correctAnswer: 1
              },
              {
                question: "Which is an example of active digital footprint?",
                options: ["Browsing history", "Social media posts", "IP address", "Cookie data"],
                correctAnswer: 1
              },
              {
                question: "Why should you monitor your digital footprint?",
                options: ["To slow down your internet", "To see what others can find about you", "To save money", "To make friends"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "2-2",
            title: "Privacy Settings and Controls",
            content: `Privacy settings are tools that help you control who can see your information and how it's used.

MAJOR PLATFORM PRIVACY SETTINGS:

FACEBOOK:
• Settings & Privacy → Privacy Checkup
• Who can see your posts: Friends
• Who can find you via search: Friends
• Timeline and Tagging: Review before tags appear

INSTAGRAM:
• Settings → Privacy and Security
• Private Account: Enable for full control
• Story Settings: Hide from specific people
• Mentions: Choose who can mention you

TWITTER/X:
• Settings and Privacy → Privacy and Safety
• Protect your posts: Make account private
• Discoverability: Control who can find you
• Photo tagging: Require permission

GOOGLE:
• myaccount.google.com → Privacy & Personalization
• Activity Controls: Manage what Google saves
• Ad Settings: Control personalized ads
• Location History: Turn off if not needed

BEST PRACTICES:
• Review settings quarterly
• Use privacy checkup tools
• Enable two-factor authentication
• Be selective with app permissions

TIP: If you're unsure about a setting, choose the more private option. You can always make things more public later!`,
            quiz: [
              {
                question: "How often should you review privacy settings?",
                options: ["Never", "Every year", "Every 3 months", "Every week"],
                correctAnswer: 2
              },
              {
                question: "What does a private account mean?",
                options: ["Your posts are hidden from everyone", "Only approved followers can see your posts", "Your account is deleted", "Your password is hidden"],
                correctAnswer: 1
              },
              {
                question: "What should you do if unsure about privacy settings?",
                options: ["Make everything public", "Choose the more private option", "Ask random strangers", "Delete the account"],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: "module3",
        title: "Secure Browsing",
        subtopics: [
          {
            id: "3-1",
            title: "Safe Web Browsing Practices",
            content: `Safe browsing protects you from malicious websites, scams, and data theft.

IDENTIFYING SECURE WEBSITES:
• Look for "https://" at the beginning of URLs
• Check for a padlock icon in the address bar
• Verify the website domain is correct
• Be wary of misspelled URLs

SUSPICIOUS WEBSITE WARNING SIGNS:
• Pop-up ads that won't close
• Requests for unnecessary personal information
• Offers that seem too good to be true
• Urgent messages demanding immediate action
• Downloads that start automatically
• Poor grammar and spelling

SECURE BROWSING TIPS:
• Keep your browser updated
• Use ad blockers to reduce malicious ads
• Clear browsing history regularly
• Don't save passwords in browsers on shared computers
• Use private/incognito mode on public computers
• Be cautious with public Wi-Fi

BROWSER SECURITY FEATURES:
• Enable pop-up blockers
• Activate phishing protection
• Use secure DNS settings
• Install reputable security extensions

REMEMBER: If something feels wrong, trust your instincts and leave the site!`,
            quiz: [
              {
                question: "What does 'https://' indicate?",
                options: ["Fast website", "Secure connection", "Free website", "Popular website"],
                correctAnswer: 1
              },
              {
                question: "What should you do if a website asks for unnecessary personal info?",
                options: ["Provide it anyway", "Leave the site immediately", "Ask friends first", "Call the police"],
                correctAnswer: 1
              },
              {
                question: "When should you use private/incognito mode?",
                options: ["Always", "Only on your own computer", "On public/shared computers", "Never"],
                correctAnswer: 2
              }
            ]
          },
          {
            id: "3-2",
            title: "Browser Security and Extensions",
            content: `Browser security features and extensions add extra protection while you surf the web.

ESSENTIAL BROWSER SETTINGS:
• Enable automatic updates
• Turn on phishing and malware protection
• Block pop-ups and unwanted redirects
• Clear browsing data regularly
• Use strong default search engine

RECOMMENDED SECURITY EXTENSIONS:

1. AD BLOCKERS:
   • uBlock Origin - Blocks ads and trackers
   • AdBlock Plus - Popular ad blocking
   • Protects against malicious ads

2. PASSWORD MANAGERS:
   • LastPass - Secure password storage
   • 1Password - Cross-platform syncing
   • Bitwarden - Open-source option

3. PRIVACY PROTECTORS:
   • Privacy Badger - Blocks invisible trackers
   • DuckDuckGo Privacy Essentials
   • Ghostery - Tracker blocking

4. SECURITY SCANNERS:
   • WOT (Web of Trust) - Website reputation
   • Norton Safe Web - Threat detection
   • McAfee WebAdvisor - Security warnings

EXTENSION SAFETY TIPS:
• Only install extensions from official stores
• Read reviews and check permissions
• Remove extensions you don't use
• Keep extensions updated

NEVER INSTALL:
• Extensions promising to "fix" your computer
• Free software from unknown sources
• Anything that asks for admin rights unnecessarily`,
            quiz: [
              {
                question: "What should you check before installing browser extensions?",
                options: ["The color", "Reviews and permissions", "The price", "The size"],
                correctAnswer: 1
              },
              {
                question: "Which extension helps block ads and trackers?",
                options: ["Password managers", "Ad blockers", "Search engines", "Game extensions"],
                correctAnswer: 1
              },
              {
                question: "Where should you download browser extensions from?",
                options: ["Any website", "Official browser stores", "Email links", "Random downloads"],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: "module4",
        title: "Data Encryption and Storage",
        subtopics: [
          {
            id: "4-1",
            title: "Understanding Encryption",
            content: `Encryption protects your data by converting it into unreadable code that can only be decoded with the right key.

WHAT IS ENCRYPTION?
Encryption is like putting your data in a locked safe. Only people with the correct key can unlock and read it.

TYPES OF ENCRYPTION:

1. DATA AT REST - Encrypts stored data
   • Hard drives and USB sticks
   • Cloud storage files
   • Database information
   • Protects against theft

2. DATA IN TRANSIT - Encrypts moving data
   • Emails while sending
   • Credit card transactions
   • Messaging apps
   • Web browsing (HTTPS)

COMMON ENCRYPTION TOOLS:

END-TO-END ENCRYPTED MESSAGING:
• Signal - Most secure messaging
• WhatsApp - Encrypted by default
• Telegram - Secret chats only
• iMessage - Apple ecosystem

FILE ENCRYPTION:
• VeraCrypt - Free disk encryption
• BitLocker - Windows built-in
• FileVault - Mac built-in
• 7-Zip - File compression + encryption

EMAIL ENCRYPTION:
• ProtonMail - Encrypted email service
• PGP/GPG - Email encryption standard
• Outlook/Office 365 - Built-in options

SYMMETRIC VS ASYMMETRIC:
• Symmetric: Same key to encrypt/decrypt (faster)
• Asymmetric: Public key to encrypt, private key to decrypt (more secure)

REMEMBER: Even with encryption, use strong passwords and enable 2FA!`,
            quiz: [
              {
                question: "What is the main purpose of encryption?",
                options: ["To speed up data", "To make data unreadable to unauthorized users", "To delete data", "To share data easily"],
                correctAnswer: 1
              },
              {
                question: "Which messaging app uses end-to-end encryption by default?",
                options: ["Signal", "Email", "SMS", "Postal mail"],
                correctAnswer: 0
              },
              {
                question: "What does end-to-end encryption mean?",
                options: ["Only the sender can read messages", "Only the receiver can read messages", "Only the service provider can read messages", "Only the government can read messages"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "4-2",
            title: "Secure File Storage",
            content: `Secure file storage protects your important documents and personal information from unauthorized access.

CLOUD STORAGE SECURITY:

TRUSTED CLOUD SERVICES:
• Google Drive - Good encryption, 2FA available
• Dropbox - Strong security, remote wipe
• OneDrive - Microsoft ecosystem, encryption
• iCloud - Apple devices, end-to-end for some data

SECURITY FEATURES TO ENABLE:
• Two-factor authentication
• Encryption for stored files
• Automatic backups
• Access monitoring and alerts
• Remote device wipe capability

BEST PRACTICES FOR FILE STORAGE:

1. ORGANIZE AND CATEGORIZE:
   • Separate personal and work files
   • Use descriptive folder names
   • Regular cleanup of old files

2. BACKUP STRATEGY:
   • Follow 3-2-1 rule: 3 copies, 2 different media, 1 offsite
   • Automatic cloud backups
   • Regular local backups

3. ACCESS CONTROL:
   • Share files only when necessary
   • Set expiration dates for shared links
   • Use password-protected links
   • Monitor shared file access

4. DELETION AND RECOVERY:
   • Permanently delete when no longer needed
   • Empty recycle bins/trash
   • Know how to recover deleted files

WARNING SIGNS OF COMPROMISED STORAGE:
• Unusual login locations
• Files modified without your knowledge
• Unexpected sharing notifications
• Storage quota exceeded unexpectedly

RED FLAGS: If you notice suspicious activity, change passwords immediately and check your security settings!`,
            quiz: [
              {
                question: "What is the 3-2-1 backup rule?",
                options: ["3 copies, 2 different media, 1 offsite", "3 passwords, 2 devices, 1 account", "3 files, 2 folders, 1 computer", "3 attempts, 2 minutes, 1 chance"],
                correctAnswer: 0
              },
              {
                question: "What should you do if you notice suspicious file activity?",
                options: ["Ignore it", "Wait to see what happens", "Change passwords immediately", "Share it on social media"],
                correctAnswer: 2
              },
              {
                question: "When should you delete files permanently?",
                options: ["Never", "When they are no longer needed", "Only when storage is full", "Every week"],
                correctAnswer: 1
              }
            ]
          }
        ]
      }
    ]
  },
  "Social Media Safety": {
    modules: [
      {
        id: "module1",
        title: "Profile Privacy",
        subtopics: [
          {
            id: "1-1",
            title: "Privacy Settings Basics",
            content: `Protecting your privacy on social media starts with understanding and configuring your privacy settings.

ESSENTIAL PRIVACY SETTINGS:
• Profile Visibility - Control who can see your profile
• Post Audience - Choose who sees your posts (Friends, Public, Custom)
• Contact Information - Hide phone number and email
• Search Visibility - Limit who can find you via search
• Tagging Controls - Approve tags before they appear

PLATFORM-SPECIFIC SETTINGS:

FACEBOOK:
Settings → Privacy → Who can see your posts?
Settings → Timeline and Tagging → Review tags

INSTAGRAM:
Settings → Privacy → Private Account
Settings → Privacy → Story → Hide story from

TWITTER/X:
Settings → Privacy and Safety → Protect your posts
Settings → Privacy and Safety → Photo tagging

BEST PRACTICES:
• Review privacy settings every 3 months
• Be selective with friend/follower requests
• Check what information is publicly visible
• Use platform privacy checkup tools`,
            quiz: [
              {
                question: "How often should you review your privacy settings?",
                options: ["Never", "Once a year", "Every 3 months", "Every day"],
                correctAnswer: 2
              },
              {
                question: "What's the safest post audience setting?",
                options: ["Public", "Friends", "Friends of Friends", "Everyone"],
                correctAnswer: 1
              },
              {
                question: "Should you accept friend requests from strangers?",
                options: ["Yes, always", "No, be selective", "Only if they look nice", "Only on weekends"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "1-2",
            title: "Personal Information Protection",
            content: `What you share on social media can be used by criminals, advertisers, and even affect your job prospects.

INFORMATION YOU SHOULD NEVER SHARE:
• Home address
• Phone number
• Email address
• Date of birth
• Financial information
• Vacation plans
• Children's schools or daily routines
• Current location in real-time

INFORMATION TO SHARE CAREFULLY:
• Full name (use nicknames when possible)
• Relationship status
• Family members' names
• Workplace information
• Political or religious views

PROFESSIONAL IMPACT:
• 70% of employers check social media
• Posts can affect job opportunities
• Professional image matters online
• Consider how posts reflect on you

PRACTICAL TIPS:
• Use privacy settings to limit audience
• Think before you post - would you want your boss to see this?
• Remove location data from photos
• Be cautious with check-ins
• Use strong passwords and 2FA

LOCATION PRIVACY:
• Turn off location services for apps
• Don't post photos in real-time from home
• Remove location metadata from photos
• Be careful with "check-in" features

REMEMBER: Once something is online, it's very difficult to completely remove it!`,
            quiz: [
              {
                question: "What percentage of employers check social media?",
                options: ["20%", "30%", "50%", "70%"],
                correctAnswer: 3
              },
              {
                question: "Should you post your vacation plans?",
                options: ["Yes, to show off", "Yes, for friends", "No, wait until you return", "Only to close friends"],
                correctAnswer: 2
              },
              {
                question: "Why should you be careful with location data?",
                options: ["It slows down your phone", "It tells criminals where you are", "It costs money", "It breaks the app"],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: "module2",
        title: "Content Sharing Safety",
        subtopics: [
          {
            id: "2-1",
            title: "Safe Posting Practices",
            content: `Every post you make creates a permanent digital record that can impact your reputation and safety.

THINK BEFORE YOU POST:
Consider the "BRAIN" method:
• B - Is it Beneficial to share?
• R - Is it Respectful to others?
• A - Is it Accurate information?
• I - Is it Inspiring or positive?
• N - Is it Necessary to post?

TYPES OF CONTENT TO AVOID:
• Photos of important documents
• Screenshots of private messages
• Content showing expensive items in your home
• Negative comments about employers
• Arguments or conflicts
• Under the influence photos
• Content that could embarrass you later

TYPES OF CONTENT TO SHARE:
• Positive achievements and experiences
• Educational and informative content
• Supportive messages for friends
• Creative works you're proud of
• Community involvement
• Professional accomplishments

PHOTO SAFETY:
• Review what's visible in the background
• Remove location metadata
• Be cautious with group photos (ask permission)
• Consider how photos might be interpreted
• Avoid photos with identifying information

TIMING CONSIDERATIONS:
• Don't post when emotional
• Avoid posts during work hours if unprofessional
• Consider timing for maximum positive impact
• Be mindful of different time zones

FRIEND AND FAMILY SAFETY:
• Ask permission before posting photos of others
• Consider their privacy preferences
• Respect workplace social media policies
• Be mindful of children's privacy

Remember: Your social media footprint can last for years and affect opportunities you haven't even thought of yet!`,
            quiz: [
              {
                question: "What does the BRAIN method help you decide?",
                options: ["What to eat", "What to post", "Where to go", "Who to call"],
                correctAnswer: 1
              },
              {
                question: "Should you post when you're emotional?",
                options: ["Yes, to express feelings", "No, wait until calm", "Only if positive", "Only if work-related"],
                correctAnswer: 1
              },
              {
                question: "What should you check before posting photos?",
                options: ["Your hair", "Background and metadata", "The weather", "Your schedule"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "2-2",
            title: "Managing Tags and Mentions",
            content: `Tags and mentions can expose you to a wider audience than you intended, potentially compromising your privacy.

UNDERSTANDING TAGS AND MENTIONS:
• Tags: When someone links your name to content
• Mentions: When someone uses @yourusername
• Both can make your profile visible to new audiences

TAG CONTROLS ON DIFFERENT PLATFORMS:

FACEBOOK:
• Settings → Timeline and Tagging
• Review tags before they appear on your timeline
• Who can see posts you're tagged in
• Limit who can tag you

INSTAGRAM:
• Settings → Privacy → Tags
• Require approval for tags
• Manually approve tags
• Limit who can tag you

TWITTER/X:
• Settings → Privacy and Safety
• Photo tagging settings
• Discoverability settings
• Mute notifications from certain accounts

BEST PRACTICES:
• Enable tag review/approval
• Check tagged photos regularly
• Remove tags you're uncomfortable with
• Use the "hide from profile" feature
• Block users who tag inappropriately

MENTION MANAGEMENT:
• Monitor who mentions your username
• Use mute or block for harassment
• Enable notifications for important accounts
• Consider making your handle less obvious

RESPONDING TO TAGS:
• Politely ask people not to tag you if uncomfortable
• Remove tags you're not comfortable with
• Report inappropriate tags to the platform
• Have a plan for unwanted tags

RED FLAGS - WHEN TO REMOVE TAGS:
• Photos you wouldn't have posted yourself
• Content that misrepresents you
• Posts from people you don't know well
• Content that could be professionally damaging
• Photos from events you want to keep private

Remember: You have the right to control what content is associated with your name and image!`,
            quiz: [
              {
                question: "What should you do if someone tags you in an uncomfortable photo?",
                options: ["Ignore it", "Remove the tag", "Call the police", "Post something negative"],
                correctAnswer: 1
              },
              {
                question: "Where do you find tag controls on Instagram?",
                options: ["Profile settings", "Privacy settings", "Tag settings", "Notification settings"],
                correctAnswer: 1
              },
              {
                question: "What can happen if you ignore tags and mentions?",
                options: ["They disappear", "Your account gets deleted", "Uncomfortable content can become public", "You get more followers"],
                correctAnswer: 2
              }
            ]
          }
        ]
      },
      {
        id: "module3",
        title: "Online Relationships and Safety",
        subtopics: [
          {
            id: "3-1",
            title: "Identifying Fake Profiles",
            content: `Fake profiles are created to scam, steal information, or deceive users. Learning to spot them protects you from harm.

WARNING SIGNS OF FAKE PROFILES:

PROFILE INFORMATION:
• No profile picture or stock photos
• Minimal personal information
• Generic or incomplete bio
• Suspiciously perfect photos
• Recently created account
• Few genuine-looking posts

ACTIVITY PATTERNS:
• Posts are all promotional or commercial
• No interaction with friends' content
• Inconsistent posting patterns
• Only reposts from others
• Suspiciously high follower count for new accounts

COMMUNICATION RED FLAGS:
• Asks for money or personal information quickly
• Claims to be traveling or working abroad
• Avoids video calls or meeting in person
• Uses poor grammar despite claiming education
• Pressures for private communication (email, phone)

COMMON FAKE PROFILE TYPES:

ROMANCE SCAMS:
• Claim to be widowed or divorced
• Say they have a child living elsewhere
• Ask for money for emergencies
• Want to visit but need travel money

BUSINESS SCAMS:
• Promise easy money opportunities
• Ask for bank details for "investments"
• Pressure to join "exclusive" programs
• Request upfront payments

CATFISHING SIGNS:
• Won't video chat despite long conversations
• Photos look professionally taken
• Stories don't add up over time
• Avoids talking about their location

VERIFICATION STEPS:
• Reverse image search their photos
• Check mutual friends or connections
• Look for consistency in their story
• Ask specific questions about their claimed background
• Use social media verification tools

IF YOU SUSPECT A FAKE PROFILE:
• Don't engage further
• Report to the platform
• Block the account
• Don't provide any personal information
• Warn mutual friends if appropriate

Remember: It's better to be safe than sorry. Trust your instincts if something feels off!`,
            quiz: [
              {
                question: "What should you do if you suspect a fake profile?",
                options: ["Engage to prove they're fake", "Ignore them", "Don't engage, report and block", "Send them money to test them"],
                correctAnswer: 2
              },
              {
                question: "What is a common sign of romance scams?",
                options: ["Asking for money quickly", "Living nearby", "Having few photos", "Using correct grammar"],
                correctAnswer: 0
              },
              {
                question: "What can you use to verify if profile photos are fake?",
                options: ["Social media search", "Image reverse search", "Phone number lookup", "GPS location"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "3-2",
            title: "Handling Harassment and Bullying",
            content: `Online harassment can be emotionally harmful. Knowing how to respond protects your mental health and safety.

TYPES OF ONLINE HARASSMENT:

DIRECT HARASSMENT:
• Threatening messages
• Repeated unwanted contact
• Doxxing (sharing private information)
• Impersonation
• Sexual harassment

CYBERBULLYING:
• Mean comments or posts
• Spreading rumors
• Excluding from online groups
• Public shaming
• Sharing private photos without consent

IMMEDIATE SAFETY STEPS:
1. Document everything (screenshots, timestamps)
2. Block the harasser immediately
3. Report to the platform
4. Tell trusted friends or family
5. Don't engage or respond

HOW TO DOCUMENT HARASSMENT:
• Take screenshots of messages/posts
• Save URLs and timestamps
• Keep records of blocking attempts
• Note any threats made
• Record witness interactions

REPORTING TO PLATFORMS:

FACEBOOK:
• Report posts, profiles, or messages
• Use "Report" button on content
• Block user after reporting
• Follow up on report status

INSTAGRAM:
• Report posts, comments, or profiles
• Use "Report" button or long-press option
• Request account verification
• Document case numbers

TWITTER/X:
• Report tweets or accounts
• Use "Report Tweet" option
• Block and mute users
• Save tweet URLs and screenshots

WHEN TO SEEK HELP:
• Threats of physical violence
• Stalking behavior
• Doxxing or doxxing threats
• Sexual harassment
• Harassment affecting your daily life

EXTERNAL SUPPORT:
• Local law enforcement for threats
• National helplines for harassment
• Legal advice for serious cases
• Mental health support for trauma
• Digital rights organizations

PROTECTING YOUR MENTAL HEALTH:
• Take breaks from social media
• Talk to trusted friends or counselors
• Remember it's not your fault
• Practice self-care activities
• Consider temporary account deletion

Remember: You have the right to feel safe online. Don't hesitate to seek help or report harassment!`,
            quiz: [
              {
                question: "What should you do first when experiencing harassment?",
                options: ["Respond angrily", "Document everything", "Delete your account", "Post about it publicly"],
                correctAnswer: 1
              },
              {
                question: "What is doxxing?",
                options: ["Sending viruses", "Sharing private information", "Hacking accounts", "Stealing passwords"],
                correctAnswer: 1
              },
              {
                question: "When should you contact law enforcement?",
                options: ["For all harassment", "Only for physical threats", "Never, handle it yourself", "Only on weekends"],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: "module4",
        title: "Reporting and Recovery",
        subtopics: [
          {
            id: "4-1",
            title: "Reporting Abuse and Scams",
            content: `Reporting helps protect not just you, but other users from the same harmful behavior or scams.

WHEN TO REPORT:
• Harassment or bullying
• Scam attempts or fraud
• Fake profiles
• Impersonation accounts
• Inappropriate content
• Threats or intimidation
• Doxxing attempts
• Child safety concerns

HOW TO REPORT ON DIFFERENT PLATFORMS:

FACEBOOK:
1. Click the three dots (...) on the content
2. Select "Find support or report"
3. Choose the reason for reporting
4. Follow the prompts to provide details
5. Submit the report

INSTAGRAM:
1. Tap the three dots (...) on posts or profiles
2. Select "Report"
3. Choose "It's inappropriate" or specific reason
4. Provide additional context if needed
5. Submit the report

TWITTER/X:
1. Click the three dots (...) on tweets
2. Select "Report tweet"
3. Choose harassment, spam, or other reason
4. Add specific details
5. Submit the report

WHAT INFORMATION TO INCLUDE:
• Screenshots of the problematic content
• URLs and timestamps
• Description of the issue
• Impact on your safety or well-being
• Any prior interactions with the user
• Evidence of pattern behavior

FOLLOWING UP ON REPORTS:
• Keep records of your reports
• Save confirmation numbers
• Follow up if no action is taken
• Report to multiple platforms if needed
• Contact law enforcement when appropriate

EXTERNAL REPORTING:
• Internet Crime Complaint Center (IC3)
• Better Business Bureau for scams
• Local law enforcement for threats
• National consumer protection agencies
• Digital rights organizations

PREVENTIVE ACTIONS:
• Block users after reporting
• Adjust privacy settings
• Enable two-factor authentication
• Be cautious with new connections
• Educate friends about the risks

REPORTING SCAMS:
• Report to platform immediately
• Warn friends who might be targeted
• Contact your bank if financial info was shared
• Report to scam reporting websites
• Share information in community groups

Remember: Reporting not only protects you but helps create a safer online community for everyone!`,
            quiz: [
              {
                question: "What should you do before reporting?",
                options: ["Nothing", "Take screenshots and document everything", "Post about it publicly", "Call the user first"],
                correctAnswer: 1
              },
              {
                question: "Why is reporting important?",
                options: ["To get revenge", "To protect yourself and other users", "To get followers", "To close accounts"],
                correctAnswer: 1
              },
              {
                question: "What should you do after reporting to a platform?",
                options: ["Wait for results", "Block the user", "Both block and keep records", "Post about it"],
                correctAnswer: 2
              }
            ]
          },
          {
            id: "4-2",
            title: "Account Recovery and Security",
            content: `If your account is compromised, quick action can prevent further damage and help you regain control.

SIGNS YOUR ACCOUNT IS COMPROMISED:
• You can't log in with your password
• Friends receive strange messages from you
• You see posts you didn't make
• Your email or phone number was changed
• Unusual login notifications
• New friend requests you didn't make

IMMEDIATE STEPS:
1. Try to change your password immediately
2. Check your email for security notifications
3. Review recent login activity
4. Log out of all devices
5. Enable two-factor authentication
6. Scan your devices for malware

RECOVERING A HACKED ACCOUNT:

FACEBOOK:
1. Go to facebook.com/hacked
2. Select "My account is compromised"
3. Follow password reset instructions
4. Review recent activity
5. Remove suspicious apps
6. Update security settings

INSTAGRAM:
1. Use "Forgot password" option
2. Check email for reset link
3. Change password immediately
4. Review connected apps
5. Enable 2FA
6. Report hacked account if needed

TWITTER/X:
1. Use password reset function
2. Check email for reset instructions
3. Change password and security questions
4. Revoke app access
5. Enable login verification

PREVENTING FUTURE COMPROMISES:
• Use strong, unique passwords
• Enable two-factor authentication
• Regularly review security settings
• Be cautious with third-party apps
• Keep your contact information updated
• Monitor account activity regularly

PASSWORD SECURITY:
• Use 12+ character passwords
• Don't reuse passwords across sites
• Use a password manager
• Change passwords if breach suspected
• Use different passwords for email vs social media

REVIEWING APP PERMISSIONS:
• Check which apps have account access
• Remove apps you don't use or recognize
• Regularly audit third-party connections
• Limit permissions to only what's needed
• Revoke access from suspicious apps

SUPPORT RESOURCES:
• Platform-specific help centers
• Digital security organizations
• Tech support from your device manufacturer
• Local law enforcement for serious cases
• Mental health support for trauma

Remember: Quick action and prevention are key to protecting your digital identity!`,
            quiz: [
              {
                question: "What should you do first if your account is hacked?",
                options: ["Post about it", "Change your password immediately", "Call friends", "Delete the account"],
                correctAnswer: 1
              },
              {
                question: "What is the most important security measure?",
                options: ["Strong passwords", "Two-factor authentication", "Regular monitoring", "All of the above"],
                correctAnswer: 3
              },
              {
                question: "How often should you review app permissions?",
                options: ["Never", "Only when hacked", "Regularly", "Only on weekends"],
                correctAnswer: 2
              }
            ]
          }
        ]
      }
    ]
  },
  "Digital Communication Security": {
    modules: [
      {
        id: "module1",
        title: "Encrypted Messaging",
        subtopics: [
          {
            id: "1-1",
            title: "Understanding Encrypted Messaging",
            content: `Encrypted messaging ensures your private conversations remain private, protecting you from eavesdropping and surveillance.

WHAT IS END-TO-END ENCRYPTION?
End-to-end encryption means only you and the recipient can read your messages - not even the service provider can see them.

WHY ENCRYPTED MESSAGING MATTERS:
• Protects your privacy from hackers
• Prevents government surveillance
• Shields conversations from service providers
• Keeps sensitive information secure
• Essential for activists and journalists
• Protects business communications

HOW IT WORKS:
1. Your message is encrypted on your device
2. Only the recipient's device can decrypt it
3. The encrypted message travels through servers
4. Messages appear scrambled to anyone intercepting them
5. The recipient's device uses their private key to decrypt

LEVELS OF ENCRYPTION:

NO ENCRYPTION:
• SMS/Text messages
• Standard email
• Unencrypted chat apps
• Public social media messages

SERVER-SIDE ENCRYPTION:
• Messages encrypted in transit
• Service provider can see messages
• Protects against external interception
• Example: Some email services

END-TO-END ENCRYPTION:
• Only sender and recipient can read
• Service provider cannot access content
• Most secure option available
• Example: Signal, WhatsApp, iMessage

SECURE DELETION:
• Self-destructing messages
• Disappearing chat features
• Ability to delete message history
• Remote deletion capabilities

WARNING SIGNS OF UNENCRYPTED MESSAGING:
• Service provider offers to "scan" your messages
• You can access messages from multiple devices seamlessly
• Customer service can "help you find" old messages
• No mention of encryption in privacy policy

REMEMBER: Even with encryption, never share passwords or sensitive information unnecessarily!`,
            quiz: [
              {
                question: "What does end-to-end encryption mean?",
                options: ["Messages are saved forever", "Only sender and recipient can read messages", "Messages are deleted immediately", "Messages are posted publicly"],
                correctAnswer: 1
              },
              {
                question: "Which type of messaging is most secure?",
                options: ["SMS", "Email", "End-to-end encrypted apps", "Social media direct messages"],
                correctAnswer: 2
              },
              {
                question: "Who can read end-to-end encrypted messages?",
                options: ["The service provider", "Hackers", "Only the sender and recipient", "Government agencies"],
                correctAnswer: 2
              }
            ]
          },
          {
            id: "1-2",
            title: "Secure Messaging Apps Guide",
            content: `Different messaging apps offer different levels of security. Choose the right one for your communication needs.

MOST SECURE MESSAGING APPS:

SIGNAL (Most Recommended):
• Open-source code
• End-to-end encryption by default
• Self-destructing messages
• Screen security features
• No ads or tracking
• Free to use
• Works on all devices

WHATSAPP:
• End-to-end encryption by default
• 2 billion+ users worldwide
• Group messaging support
• Voice and video calls
• Business integration
• Backups may not be encrypted

APPLE IMESSAGE:
• End-to-end encryption for Apple users
• Integrated with iOS devices
• Rich media support
• iCloud backup (can be disabled)
• Limited to Apple ecosystem

TELEGRAM:
• Secret chats use encryption
• Regular chats are not end-to-end encrypted
• Cloud-based (less secure)
• Popular in some regions
• Self-destructing messages in secret mode

LESS SECURE OPTIONS:
• Facebook Messenger (limited encryption)
• Snapchat (ephemeral but not truly secure)
• Discord (not designed for secure messaging)
• Standard SMS/Text messages

SECURE MESSAGING BEST PRACTICES:

SETTING UP SECURE APPS:
• Download from official app stores only
• Verify developer identity
• Read privacy policies
• Enable all security features
• Set up disappearing messages when appropriate

USAGE SAFETY:
• Verify contacts' identities
• Use disappearing messages for sensitive topics
• Don't screenshot sensitive conversations
• Be cautious with backup settings
• Regularly update the app

DEVICE SECURITY:
• Use screen locks and biometrics
• Keep apps updated
• Don't jailbreak/root your device
• Use secure device storage
• Enable remote wipe capabilities

CONVERSATION SAFETY:
• Verify you're talking to the right person
• Be suspicious of urgent requests
• Don't share passwords via messaging
• Use secure channels for critical information
• Delete sensitive conversations when done

CHOOSING THE RIGHT APP:
• Consider your threat model
• Think about who might want to access your messages
• Consider ease of use vs. security level
• Check if your contacts use the same app
• Factor in device compatibility

Remember: The most secure messaging app is the one you'll actually use consistently!`,
            quiz: [
              {
                question: "Which messaging app is most recommended for security?",
                options: ["WhatsApp", "Signal", "Facebook Messenger", "Telegram"],
                correctAnswer: 1
              },
              {
                question: "Why is Signal considered the most secure?",
                options: ["It's the most popular", "It's open-source and has end-to-end encryption", "It's free", "It's made by Google"],
                correctAnswer: 1
              },
              {
                question: "What should you do before sharing sensitive information?",
                options: ["Post it publicly", "Verify the person's identity", "Save it to your cloud", "Print it out"],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: "module2",
        title: "Email Security",
        subtopics: [
          {
            id: "2-1",
            title: "Securing Your Email Account",
            content: `Email accounts are central to your digital identity. Securing them protects all your other accounts and personal information.

EMAIL SECURITY FUNDAMENTALS:

PASSWORD STRENGTH:
• Use unique, strong passwords for email
• Enable two-factor authentication immediately
• Don't reuse email passwords anywhere else
• Consider using a password manager
• Change passwords if breach suspected

TWO-FACTOR AUTHENTICATION:
• Enable on all email accounts
• Use authenticator apps over SMS when possible
• Save backup codes in a secure location
• Consider hardware security keys for high-value accounts
• Review 2FA settings monthly

EMAIL PROVIDER SECURITY FEATURES:

GMAIL SECURITY:
• Security Checkup tool
• Suspicious login alerts
• App passwords for less secure apps
• Recovery email and phone setup
• Privacy and security dashboard

OUTLOOK/HOTMAIL:
• Security dashboard
• Recent activity view
• App passwords for older apps
• Recovery information setup
• Linked account management

APPLE ID/ICLOUD:
• Two-factor authentication by default
• App-specific passwords
• Trusted devices management
• iCloud security recommendations
• Account recovery setup

SECURE EMAIL SETTINGS:

LOGIN MONITORING:
• Enable login alerts
• Check recent login activity regularly
• Note unfamiliar devices or locations
• Review authorized apps and websites
• Remove old or unused authorizations

RECOVERY INFORMATION:
• Keep recovery email updated
• Ensure phone number is current
• Add security questions (if available)
• Register trusted devices
• Set up account recovery options

PRIVACY SETTINGS:
• Review what data Google/Microsoft/Apple collects
• Disable unnecessary data collection
• Control ad personalization
• Manage third-party app access
• Review sharing settings

EMAIL SECURITY TIPS:

SAFE EMAIL PRACTICES:
• Verify sender addresses carefully
• Don't click suspicious links
• Use "Report Phishing" for suspicious emails
• Be cautious with email attachments
• Use email aliases for different purposes

ACCOUNT RECOVERY PLANNING:
• Document your recovery process
• Keep recovery information updated
• Use multiple recovery methods
• Practice account recovery steps
• Consider account recovery services

WARNING SIGNS OF COMPROMISED EMAIL:
• Friends receive spam from your account
• Password no longer works
• Unusual login location alerts
• Password reset emails you didn't request
• Emails marked as read that you didn't read
• Forwarding rules you didn't create

EMERGENCY RESPONSE:
If you suspect email compromise:
1. Change password immediately
2. Check and remove forwarding rules
3. Review recent sent emails
4. Enable two-factor authentication
5. Run security scans on your devices
6. Contact email provider support

Remember: Your email account is the key to all your other accounts - protect it like gold!`,
            quiz: [
              {
                question: "Why is email security crucial?",
                options: ["It's required by law", "It's the key to all your other accounts", "It's free", "It's private"],
                correctAnswer: 1
              },
              {
                question: "What should you do if you suspect email compromise?",
                options: ["Ignore it", "Change password immediately", "Post about it online", "Delete the account"],
                correctAnswer: 1
              },
              {
                question: "Which is more secure for 2FA?",
                options: ["SMS codes", "Authenticator apps", "Email codes", "Security questions"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "2-2",
            title: "Encrypted Email Solutions",
            content: `Encrypted email protects your sensitive communications from being read by unauthorized parties, including email service providers.

WHEN TO USE ENCRYPTED EMAIL:
• Business communications with sensitive data
• Legal discussions and documents
• Financial information sharing
• Personal privacy protection
• Activism and journalism
• Medical information
• Whistleblowing

ENCRYPTED EMAIL OPTIONS:

PROTONMAIL (Recommended):
• End-to-end encryption built-in
• Free tier available
• Based in privacy-friendly Switzerland
• No ads or tracking
• Self-destructing messages
• Anonymous signup possible

TUTANOTA:
• End-to-end encrypted emails
• Secure calendar integration
• Encrypted contacts
• Open-source codebase
• Affordable paid plans
• German-based company

FASTMAIL:
• Strong encryption options
• Good user interface
• Aliases and custom domains
• No tracking or ads
• Australian company
• Good for business use

GPG/PGP ENCRYPTION:
• Works with any email provider
• Requires setup and learning curve
• Free and open-source
• Highest level of security
• Compatible across all platforms
• Technical knowledge required

HOW ENCRYPTED EMAIL WORKS:

SETUP PROCESS:
1. Create account with encrypted email provider
2. Generate encryption keys (or use provider's keys)
3. Share your public key with contacts
4. Import contacts' public keys
5. Compose encrypted messages

SENDING ENCRYPTED MESSAGES:
• Recipients must have compatible email setup
• Some services allow password-protected messages
• Subject lines may not be encrypted
• Attachments are encrypted
• Read receipts may be blocked

RECEIVING ENCRYPTED MESSAGES:
• Automatic decryption with private key
• May need passphrase to unlock
• Some services offer temporary inbox
• Verification of sender's identity important

LIMITATIONS OF ENCRYPTED EMAIL:
• Recipients need compatible software/setup
• May be flagged as spam
• Limited mobile app support
• Learning curve for setup
• Slower than regular email
• Some email features may not work

MIGRATION STRATEGIES:
• Start with a secondary encrypted email
• Gradually migrate important contacts
• Use both encrypted and regular email
• Educate contacts about benefits
• Test thoroughly before relying on it

INTEGRATION WITH EXISTING EMAIL:
• Email forwarding from regular accounts
• Separate encrypted account for sensitive topics
• Use aliases for different purposes
• Maintain regular email for less sensitive use

Remember: Encrypted email is like sending a letter in a sealed envelope that only the recipient can open!`,
            quiz: [
              {
                question: "What is the main benefit of encrypted email?",
                options: ["It's faster", "It's free", "Only intended recipient can read it", "It's easier to use"],
                correctAnswer: 2
              },
              {
                question: "Which is a recommended encrypted email service?",
                options: ["Gmail", "Yahoo Mail", "ProtonMail", "Outlook"],
                correctAnswer: 2
              },
              {
                question: "What do recipients need to read encrypted emails?",
                options: ["Nothing special", "A special email client", "Compatible encryption setup", "A premium account"],
                correctAnswer: 2
              }
            ]
          }
        ]
      },
      {
        id: "module3",
        title: "Video Call Security",
        subtopics: [
          {
            id: "3-1",
            title: "Secure Video Calling Practices",
            content: `Video calls have become essential for work and personal communication. Secure practices protect your privacy and prevent unauthorized access.

UNDERSTANDING VIDEO CALL SECURITY:
• Encryption protects call content from interception
• Access controls prevent unwanted participants
• Recording policies affect privacy
• Device security impacts call safety
• Network security matters for call quality

SECURE VIDEO CALL PLATFORMS:

ZOOM SECURITY FEATURES:
• End-to-end encryption (paid plans)
• Waiting room functionality
• Host controls for participants
• Meeting passwords required
• Disable participant annotation
• Lock meetings after start

MICROSOFT TEAMS:
• Enterprise-grade encryption
• Meeting recordings with consent
• Screen sharing controls
• Participant management
• Integration with Office 365
• Compliance certifications

GOOGLE MEET:
• Encryption in transit and at rest
• Meeting links with expiration
• Host controls and permissions
• Recording to Google Drive
• Integration with Google Workspace
• Mobile app security

APPLE FACETIME:
• End-to-end encryption by default
• Limited to Apple devices
• Secure by design architecture
• No meeting recording option
• Simple privacy controls
• No cloud storage of calls

SECURE MEETING PRACTICES:

BEFORE THE MEETING:
• Use unique meeting IDs
• Enable meeting passwords
• Set up waiting rooms
• Disable join before host option
• Prepare secure meeting environment
• Test audio and video quality

DURING THE MEETING:
• Lock meeting once all participants joined
• Control screen sharing permissions
• Monitor participant list
• Avoid sharing sensitive information
• Be aware of background visibility
• Use headphones to prevent eavesdropping

MEETING SECURITY CHECKLIST:
✓ Private, quiet space for calls
✓ Strong password on meeting
✓ Waiting room enabled
✓ Host controls active
✓ No unnecessary screen sharing
✓ Background information secured

PRIVACY PROTECTION:
• Review what participants can see
• Check reflection points in background
• Remove sensitive documents from view
• Consider virtual backgrounds
• Control microphone and camera access
• Be mindful of who might overhear

RECORDING CONSIDERATIONS:
• Inform all participants before recording
• Understand recording storage location
• Control who can start recordings
• Secure recorded file storage
• Set recording retention policies
• Delete recordings when no longer needed

DEVICE SECURITY:
• Keep video call apps updated
• Use latest operating system version
• Install security patches promptly
• Use strong device passwords
• Enable automatic screen locks
• Scan for malware regularly

NETWORK SECURITY:
• Use secure, private Wi-Fi networks
• Avoid public Wi-Fi for sensitive calls
• Consider VPN for additional security
• Monitor network performance
• Report suspicious network activity
• Use cellular data for sensitive calls when needed

ATTENDEE VERIFICATION:
• Verify identity of participants
• Use screen names that match real identities
• Question unexpected participants
• Use breakout rooms for sensitive discussions
• Enable participant verification
• Have plan for removing disruptive users

Remember: Even encrypted calls can be compromised through device or network security weaknesses!`,
            quiz: [
              {
                question: "What should you do before starting a sensitive video call?",
                options: ["Nothing special", "Enable meeting passwords and waiting rooms", "Call from a coffee shop", "Share your screen"],
                correctAnswer: 1
              },
              {
                question: "Why should you avoid public Wi-Fi for video calls?",
                options: ["It's slow", "It's expensive", "It can compromise security", "It uses too much data"],
                correctAnswer: 2
              },
              {
                question: "What should you do if you see an unexpected participant?",
                options: ["Ignore them", "Ask them to identify themselves", "End the meeting", "Continue normally"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "3-2",
            title: "Protecting Privacy in Video Calls",
            content: `Video calls expose more than just your face - they can reveal sensitive information about your home, workplace, and personal life.

VISUAL PRIVACY PROTECTION:

BACKGROUND SECURITY:
• Scan what's visible in camera view
• Remove sensitive documents or items
• Check what's on computer screens
• Be aware of family members in background
• Consider lighting that obscures background details
• Use virtual backgrounds when appropriate

PHYSICAL ENVIRONMENT:
• Choose location away from windows
• Secure entry points before calls
• Inform family members about important calls
• Remove or cover personal photos
• Secure valuable or sensitive items
• Control what reflection might show

DIGITAL BACKGROUND CHECK:
• Close unnecessary browser tabs
• Clear desktop icons and files
• Turn off desktop notifications
• Silence phone and other devices
• Check what's visible on secondary monitors
• Disable screen savers that might activate

AUDIO PRIVACY PROTECTION:
• Use headphones to prevent audio leakage
• Choose quiet, private location
• Inform others about important calls
• Consider noise-canceling headphones
• Be aware of background conversations
• Control microphone sensitivity

PARTICIPANT PRIVACY:
• Respect others' background privacy
• Don't share screenshots without permission
• Ask before recording meetings
• Be mindful of others' personal information visible
• Don't tag or identify others in recordings
• Protect confidential information about colleagues

BUSINESS MEETING PRIVACY:
• Verify all participants have authorization
• Use secure meeting platforms
• Control document sharing permissions
• Avoid discussing sensitive information openly
• Use private channels for confidential topics
• Implement need-to-know access principles

PERSONAL MEETING SAFETY:
• Verify participant identities
• Be cautious about sharing personal information
• Use appropriate lighting and framing
• Consider professional vs. personal setting
• Manage expectations about privacy
• Have clear boundaries about recording

VULNERABILITY AWARENESS:

COMMON PRIVACY RISKS:
• Unexpected household members appearing
• Sensitive documents accidentally visible
• Confidential work information in background
• Personal identification in view
• Security system displays or cameras
• Unsecured devices or networks

MITIGATION STRATEGIES:
• Always check camera view before joining
• Have backup plan if privacy compromised
• Use "blur" or virtual background features
• Position camera to minimize background exposure
• Practice calls to test privacy settings
• Establish family protocols for work calls

RECORDING PRIVACY:
• Only record when legally permissible
• Get explicit consent from all participants
• Secure storage of recorded content
• Clear retention and deletion policies
• Limit access to recordings
• Watermark recordings for tracking

MOBILE DEVICE CONSIDERATIONS:
• Be aware of background when moving
• Secure mobile device location
• Consider portrait vs. landscape orientation
• Check what's reflected in device surface
• Manage notification pop-ups
• Secure device when not in use

INTERNATIONAL CONSIDERATIONS:
• Respect different privacy laws
• Understand cross-border data concerns
• Be aware of surveillance laws
• Consider cultural privacy expectations
• Navigate timezone privacy concerns
• Address language and communication barriers

Remember: Video calls are like having a window into your private space - control what others can see!`,
            quiz: [
              {
                question: "What should you always check before joining a video call?",
                options: ["Your makeup", "What's visible in the camera view", "Your schedule", "Your email"],
                correctAnswer: 1
              },
              {
                question: "Why are headphones important for video calls?",
                options: ["They look professional", "They prevent audio leakage", "They improve sound quality", "They block noise"],
                correctAnswer: 1
              },
              {
                question: "What should you do before recording a meeting?",
                options: ["Record anyway", "Get explicit consent from all participants", "Only ask the host", "It's always okay"],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: "module4",
        title: "Secure File Sharing",
        subtopics: [
          {
            id: "4-1",
            title: "Safe File Transfer Methods",
            content: `Secure file sharing protects your documents, photos, and sensitive information during transfer and storage.

UNDERSTANDING SECURE FILE SHARING:
• Protection during transmission (encryption in transit)
• Protection during storage (encryption at rest)
• Access control and permissions
• Secure deletion capabilities
• Audit trails and activity monitoring

SECURE FILE SHARING PLATFORMS:

DROPBOX SECURITY:
• Encryption in transit and at rest
• Two-factor authentication available
• File versioning and recovery
• Granular sharing controls
• Security dashboard for admins
• Compliance certifications (HIPAA, GDPR)

GOOGLE DRIVE SECURITY:
• Google Workspace encryption
• Granular sharing permissions
• Two-step verification
• Data loss prevention tools
• Audit logging (Enterprise)
• Access monitoring and alerts

ONEDRIVE SECURITY:
• Microsoft 365 encryption
• Personal vault for sensitive files
• Sharing link management
• Two-factor authentication
• Compliance certifications
• Activity monitoring

BOX SECURITY:
• Enterprise-grade security
• Advanced threat protection
• Granular access controls
• Encryption key management
• Compliance and governance features
• Detailed audit logging

SECURE PEER-TO-PEER SHARING:

WIRE (Recommended):
• End-to-end encrypted file sharing
• Secure messaging integration
• No file size limits
• Cross-platform support
• Open-source codebase
• European data protection

SIGNAL:
• Secure file transfer
• Disappearing file options
• End-to-end encryption
• Self-destructing media
• Cross-platform support
• Minimal metadata collection

THREATPOST:
• Secure, anonymous file sharing
• End-to-end encryption
• No account required for basic use
• File expiration options
• No logs or tracking
• Anonymous usage possible

FILE SHARING SECURITY BEST PRACTICES:

BEFORE SHARING:
• Scan files for malware
• Remove sensitive metadata
• Use strong passwords for archives
• Consider file encryption
• Verify recipient identity
• Plan file retention period

DURING SHARING:
• Use encrypted connections (https)
• Monitor access and downloads
• Set appropriate permission levels
• Avoid public sharing when possible
• Use time-limited sharing links
• Track sharing activity

SHARING CONTROLS:
• Limit who can view files
• Control download permissions
• Set expiration dates for links
• Use password protection when possible
• Monitor access logs regularly
• Revoke access when no longer needed

SENSITIVE FILE HANDLING:

FINANCIAL DOCUMENTS:
• Use bank-grade encryption
• Verify recipient's identity
• Set short expiration times
• Avoid email for sensitive transfers
• Use secure business platforms
• Keep audit records

LEGAL DOCUMENTS:
• Use legal-grade secure platforms
• Implement access controls
• Document sharing permissions
• Use electronic signatures
• Maintain chain of custody
• Secure storage after transfer

PERSONAL PHOTOS:
• Consider privacy implications
• Avoid sharing identifying information
• Use private sharing links
• Set appropriate privacy levels
• Be aware of metadata (location, date)
• Remember images can be downloaded

COMMON FILE SHARING MISTAKES:
• Sharing public links for sensitive files
• Not setting expiration dates
• Forgetting to revoke access later
• Using unsecured email for large files
• Not verifying recipient identity
• Ignoring access logs and monitoring

MOBILE FILE SHARING:
• Use secure mobile apps
• Be aware of device security
• Monitor background uploads
• Secure mobile device access
• Clear temporary files regularly
• Use device encryption

CLOUD STORAGE SECURITY:
• Enable two-factor authentication
• Use strong account passwords
• Monitor connected devices
• Review sharing permissions regularly
• Enable activity notifications
• Keep software updated

Remember: Files shared online can live forever - think carefully about what you share and with whom!`,
            quiz: [
              {
                question: "What should you do before sharing sensitive files?",
                options: ["Nothing special", "Scan for malware and verify recipient identity", "Compress them first", "Copy them to USB"],
                correctAnswer: 1
              },
              {
                question: "Which is most important for secure file sharing?",
                options: ["File size", "Encryption and access controls", "File format", "Upload speed"],
                correctAnswer: 1
              },
              {
                question: "What should you do with sharing links after use?",
                options: ["Leave them active", "Revoke access when done", "Delete the files", "Change the password"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "4-2",
            title: "File Encryption and Password Protection",
            content: `File encryption and password protection add essential security layers to your shared files, ensuring only authorized people can access them.

WHY ENCRYPT FILES?
• Protects sensitive data during transfer
• Secures files stored in cloud services
• Prevents unauthorized access to archives
• Adds security to email attachments
• Protects against service provider access
• Essential for compliance requirements

ENCRYPTION METHODS:

BUILT-IN PLATFORM ENCRYPTION:
• Cloud service provider encryption
• Automatic for supported platforms
• Easy to use but limited control
• Provider may hold encryption keys
• Suitable for general business use
• May not meet strict compliance needs

FILE-LEVEL ENCRYPTION:
• Encrypt individual files before sharing
• Use your own encryption keys
• Works with any storage platform
• Maximum control and security
• Requires additional setup and tools
• Essential for highly sensitive data

PASSWORD PROTECTION:

ARCHIVE PASSWORD PROTECTION:
• Password-protect ZIP/RAR files
• Built into most archive software
• Easy to implement
• Moderate security level
• May not be suitable for highly sensitive data
• Password recovery can be difficult

ENCRYPTED ARCHIVE SOFTWARE:

7-ZIP (Free and Open-Source):
• Strong AES-256 encryption
• Cross-platform support
• Compresses and encrypts simultaneously
• Open-source codebase
• No backdoors or hidden features
• Command-line options for automation

WINRAR (Windows):
• Strong encryption options
• Good compression ratios
• Self-extracting archives
• Repair and recovery features
• Widely supported format
• Password recovery options

FILE ENCRYPTION SOFTWARE:

VERACRYPT (Recommended):
• Full disk encryption support
• Encrypted file containers
• Plausible deniability features
• Open-source and audited
• Cross-platform support
• Enterprise-grade security

AXCRYPT:
• User-friendly file encryption
• Cloud storage integration
• Automatic encryption/decryption
• Sharing features with trusted contacts
• Mobile app support
• Good for non-technical users

ELECTRONIC SIGNATURES:
• Proves document authenticity
• Legal validity in many jurisdictions
• Maintains document integrity
• Time-stamping capabilities
• Chain of custody tracking
• Required for many business processes

DOCUMENT SIGNING SERVICES:
• DocuSign, Adobe Sign, HelloSign
• Strong authentication methods
• Audit trails and certificates
• Integration with business systems
• Legal compliance features
• Mobile signing options

ENCRYPTION BEST PRACTICES:

PASSWORD STRENGTH:
• Use strong, unique passwords
• Minimum 12+ characters
• Mix of character types
• Avoid dictionary words
• Don't reuse passwords
• Consider password managers

KEY MANAGEMENT:
• Protect encryption keys carefully
• Use different keys for different purposes
• Backup recovery keys securely
• Limit access to encryption keys
• Rotate keys regularly
• Document key management procedures

ENCRYPTED FILE HANDLING:
• Secure deletion of original files
• Temporary file cleanup
• Secure deletion of decrypted versions
• Avoid printing sensitive encrypted files
• Monitor who has access to encrypted files
• Regular security audits

BUSINESS CONSIDERATIONS:
• Meet compliance requirements (GDPR, HIPAA)
• Employee training on encryption
• Standardized encryption procedures
• Legal hold procedures for encrypted data
• Disaster recovery planning
• Regular security assessments

MOBILE DEVICE CONSIDERATIONS:
• Encrypt device storage
• Use secure file sharing apps
• Avoid saving encrypted files locally
• Use device-level authentication
• Keep mobile apps updated
• Report lost devices immediately

RECOVERY AND BACKUP:
• Plan for password recovery
• Secure backup of encrypted files
• Test recovery procedures regularly
• Multiple recovery methods
• Secure storage of recovery information
• Document recovery processes

WARNING SIGNS OF COMPROMISE:
• Unusual access times to encrypted files
• Passwords stopped working
• Corrupted encrypted files
• Unexpected file modifications
• Unusual network activity
• Failed login attempts

Remember: Encrypted files are only as secure as your encryption passwords and key management practices!`,
            quiz: [
              {
                question: "What is the strongest password protection method?",
                options: ["Simple password", "Birthdate", "AES-256 encryption", "4-digit PIN"],
                correctAnswer: 2
              },
              {
                question: "What should you do with original files after encryption?",
                options: ["Keep them", "Securely delete them", "Email them", "Print them"],
                correctAnswer: 1
              },
              {
                question: "Why is password recovery planning important?",
                options: ["It's not important", "It helps if passwords are forgotten", "It's required by law", "It saves time"],
                correctAnswer: 1
              }
            ]
          }
        ]
      }
    ]
  },
  "Identifying Online Threats": {
    modules: [
      {
        id: "module1",
        title: "Phishing and Social Engineering",
        subtopics: [
          {
            id: "1-1",
            title: "Recognizing Phishing Attacks",
            content: `Phishing is a cyber attack that tricks you into revealing sensitive information by pretending to be a trustworthy entity.

WHAT IS PHISHING?
Phishing uses fake communications (usually emails or messages) that appear to come from legitimate sources to steal personal information, passwords, or install malware.

TYPES OF PHISHING:

EMAIL PHISHING:
• Fake bank or credit card alerts
• Impersonated social media notifications
• Fake package delivery notifications
• Urgent account security messages
• Fake invoices or payment requests

SMS PHISHING (SMISHING):
• Fake bank security codes
• Package delivery notifications
• Account verification requests
• Emergency family messages
• Prize or lottery winnings

VOICE PHISHING (VISHING):
• Phone calls pretending to be banks
• Government agency impersonation
• Tech support scams
• Emergency family situations
• Investment opportunity calls

SPEAR PHISHING:
• Targeted attacks using personal information
• Fake emails from "colleagues"
• Business email compromise
• Personalized attack messages
• Research-based social engineering

WHALING:
• Targeting high-profile individuals
• CEO/fraudulent executive emails
• High-value business compromises
• Sophisticated attack methods
• Custom-tailored approaches

RED FLAGS IN PHISHING MESSAGES:

URGENCY AND PRESSURE:
• "Act now or account will be closed"
• "Immediate action required"
• "Limited time offer"
• "Final warning"
• "Your account will be suspended"

SUSPICIOUS SENDER INFORMATION:
• Email addresses that don't match organization
• Misspelled sender names
• Generic greetings like "Dear Customer"
• Poor grammar and spelling
• Unusual sender domains

LINK AND ATTACHMENT DANGERS:
• Links that don't match the supposed sender
• Shortened URLs (bit.ly, tinyurl)
• Unexpected attachments
• Links to unfamiliar websites
• Requests to "verify" information via links

COMMON PHISHING SCENARIOS:

FINANCIAL INSTITUTIONS:
• "Your account has been compromised"
• "Unusual activity detected"
• "Verify your identity"
• "Update payment information"
• "Account suspension notice"

SOCIAL MEDIA:
• "Someone tried to log into your account"
• "New login from unusual device"
• "You've been tagged in a photo"
• "Your password has been reset"
• "Account violation notice"

GOVERNMENT AGENCIES:
• IRS tax refund notifications
• Social Security Administration issues
• DMV license suspension notices
• Court summons notifications
• Immigration status warnings

PACKAGE DELIVERY:
• "Package delivery failed"
• "Address confirmation needed"
• "Customs fees required"
• "Delivery address update"
• "Package waiting for pickup"

TECHNICAL SUPPORT:
• "Your computer has viruses"
• "Microsoft detected issues"
• "Your warranty has expired"
• "Security updates required"
• "Critical system errors"

PROTECTION STRATEGIES:

EMAIL SECURITY:
• Verify sender addresses carefully
• Don't click links in suspicious emails
• Hover over links to check destinations
• Use spam filters
• Keep email client updated

LINK VERIFICATION:
• Type URLs directly in browser
• Check for HTTPS and padlock icons
• Look for misspellings in domain names
• Use link expanders for shortened URLs
• Be suspicious of unexpected links

ATTACHMENT SAFETY:
• Don't open unexpected attachments
• Scan attachments with antivirus
• Be wary of ZIP or EXE files
• Verify sender independently if unsure
• Use cloud-based email when possible

REMEMBER: Legitimate organizations never ask for passwords, social security numbers, or banking information via email or text!`,
            quiz: [
              {
                question: "What is the main goal of phishing?",
                options: ["To steal personal information", "To spread viruses", "To crash websites", "To steal internet bandwidth"],
                correctAnswer: 0
              },
              {
                question: "What should you do if you receive an urgent email asking for your password?",
                options: ["Provide it quickly", "Click the link to verify", "Delete it and contact the company directly", "Forward it to friends"],
                correctAnswer: 2
              },
              {
                question: "What is a red flag in phishing emails?",
                options: ["Professional formatting", "Urgent demands for action", "Company logo", "Correct grammar"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "1-2",
            title: "Social Engineering Tactics",
            content: `Social engineering exploits human psychology to trick people into revealing confidential information or performing actions that compromise security.

WHAT IS SOCIAL ENGINEERING?
Social engineering manipulates people into breaking normal security procedures to gain unauthorized access to systems or information.

PSYCHOLOGICAL MANIPULATION TECHNIQUES:

AUTHORITY:
• Impersonating law enforcement
• Posing as company executives
• Claiming to be government officials
• Using intimidating language
• Demanding immediate compliance

URGENCY:
• Creating false deadlines
• Claiming immediate action required
• Using fear of consequences
• Time-sensitive offers
• Emergency situations

TRUST:
• Building rapport over time
• Referencing mutual connections
• Mimicking familiar communication styles
• Using personal information
• Appearing helpful and trustworthy

SCARCITY:
• "Limited time only" offers
• Exclusive opportunities
• Few remaining spots
• One-time offers
• Special pricing

LIKING:
• Compliments and flattery
• Shared interests or backgrounds
• Similar goals or values
• Building emotional connections
• Creating false intimacy

COMMON SOCIAL ENGINEERING SCENARIOS:

PRETEXTING:
• Creating elaborate false scenarios
• Gathering personal information first
• Building credibility before attack
• Using multiple communication channels
• Detailed background research

BAITING:
• Leaving infected USB drives
• Offering free downloads
• Promising prizes or rewards
• Creating tempting offers
• Exploiting curiosity or greed

TAILGATING:
• Following authorized person through secure door
• Asking for help with "hands full"
• Posing as delivery person
• Claiming to be new employee
• Exploiting politeness or helpfulness

QUID PRO QUO:
• Offering help in exchange for information
• Tech support scams
• Survey or research requests
• Fake service opportunities
• Mutual benefit claims

PROTECTION AGAINST SOCIAL ENGINEERING:

INFORMATION SECURITY:
• Never share passwords or sensitive information
• Verify identities before providing access
• Limit personal information on social media
• Be cautious about what you post publicly
• Use security questions with unknown answers

COMMUNICATION VERIFICATION:
• Use known contact methods
• Call back on official numbers
• Verify requests through multiple channels
• Be suspicious of urgent requests
• Question unusual requests from authority figures

PHYSICAL SECURITY:
• Challenge unknown individuals in secure areas
• Don't let strangers follow you through secure doors
• Verify visitor credentials
• Report suspicious behavior
• Maintain professional skepticism

DIGITAL SECURITY:
• Keep software and systems updated
• Use multi-factor authentication
• Be cautious with email attachments
• Verify website security before entering information
• Use secure networks for sensitive activities

ORGANIZATIONAL POLICIES:
• Follow company security procedures
• Report suspicious activities immediately
• Don't bypass security for convenience
• Participate in security training
• Understand and follow data protection policies

WARNING SIGNS OF SOCIAL ENGINEERING:

UNUSUAL REQUESTS:
• Requests that break normal procedures
• Urgent requests for sensitive information
• Requests from unknown individuals
• Pressure to act quickly
• Requests that seem too good to be true

COMMUNICATION PATTERNS:
• Unusual communication timing
• Requests outside normal channels
• Lack of proper identification
• Inconsistent information
• Emotional manipulation attempts

PERSONAL INFORMATION GATHERING:
• Too many personal questions
• Information that seems irrelevant
• Requests for information you shouldn't have
• Information gathering for future attacks
• Building detailed profiles

RECOGNIZING MANIPULATION:
• Feeling pressured to comply
• Being made to feel important or special
• Urgent deadlines without clear reason
• Requests that bypass normal procedures
• Emotional appeals rather than logical reasoning

RESPONSE STRATEGIES:
• Take time to think and verify
• Consult with colleagues or supervisors
• Use established verification procedures
• Trust your instincts if something feels wrong
• Report suspicious activities immediately

Remember: Social engineering attacks exploit trust and helpfulness - it's okay to be cautious and verify requests!`,
            quiz: [
              {
                question: "What is the main technique used in social engineering?",
                options: ["Technical hacking", "Manipulating human psychology", "Breaking encryption", "Malware installation"],
                correctAnswer: 1
              },
              {
                question: "What should you do if someone requests sensitive information urgently?",
                options: ["Provide it quickly", "Ignore the request", "Verify their identity through official channels", "Ask for their personal information first"],
                correctAnswer: 2
              },
              {
                question: "Which of these is a social engineering red flag?",
                options: ["Polite communication", "Proper identification", "Pressure to act quickly", "Professional appearance"],
                correctAnswer: 2
              }
            ]
          }
        ]
      },
      {
        id: "module2",
        title: "Scams and Fraud Prevention",
        subtopics: [
          {
            id: "2-1",
            title: "Common Online Scams",
            content: `Online scams are deceptive schemes designed to steal money or personal information. Understanding common scam types helps protect you and others.

INVESTMENT SCAMS:

CRYPTOCURRENCY SCAMS:
• Fake cryptocurrency exchanges
• Ponzi schemes disguised as investments
• Fake initial coin offerings (ICOs)
• Cryptocurrency mining scams
• Romance crypto scams

FOREX TRADING SCAMS:
• Guaranteed high returns claims
• Pressure to invest quickly
• Fake trading platforms
• Unlicensed forex brokers
• Romance forex scams

REAL ESTATE INVESTMENT:
• Fake property opportunities
• Overseas investment fraud
• Real estate crowdfunding scams
• Timeshare resale scams
• Land banking fraud

SHOPPING AND RETAIL SCAMS:

FAKE ONLINE STORES:
• Too-good-to-be-true pricing
• Poor website security
• No contact information
• Fake reviews and ratings
• Stolen product images

AUCTION FRAUD:
• Bid shielding schemes
• Fake seller accounts
• Non-delivery of items
• Item switching/scamming
• Fake escrow services

DIGITAL PRODUCT SCAMS:
• Fake software licenses
• Non-delivery of digital goods
• Subscription traps
• Fake antivirus software
• Bogus online courses

FINANCIAL SCAMS:

LOAN SCAMS:
• Advance fee fraud
• Fake loan forgiveness
• Payday loan traps
• Student loan relief scams
• Credit repair scams

BANKING FRAUD:
• Fake bank emails (phishing)
• Unauthorized account access
• Check fraud schemes
• Wire transfer fraud
• ATM skimming

CREDIT CARD FRAUD:
• Card-not-present fraud
• Data breaches and sales
• Fake payment processors
• Subscription traps
• Card cloning scams

ROMANCE AND RELATIONSHIP SCAMS:

ONLINE DATING FRAUD:
• Catfishing for money
• Long-distance relationship scams
• Emergency situation requests
• Travel visa scams
• Marriage fraud

SOCIAL MEDIA SCAMS:
• Fake profiles for romance
• Friend request fraud
• Relationship triangulation
• Emotional manipulation
• Identity theft for romance

COMMUNICATION SCAMS:

PHONE SCAMS:
• Tech support scams
• Government grant scams
• Charity scams
• Prize and lottery scams
• Robocall fraud

EMAIL SCAMS:
• Advance fee fraud (Nigerian prince)
• Business opportunity scams
• Charity scams
• Fake invoices
• Account takeover attempts

IDENTITY THEFT SCAMS:
• Pre-approved credit offers
• Tax refund scams
• Medical identity theft
• Social Security fraud
• Synthetic identity theft

PROTECTION STRATEGIES:

VERIFY BEFORE TRUSTING:
• Research companies and individuals
• Check for proper licensing
• Look for independent reviews
• Verify contact information
• Cross-reference multiple sources

SECURE YOUR FINANCES:
• Use secure payment methods
• Monitor bank and credit statements
• Set up account alerts
• Use strong, unique passwords
• Enable two-factor authentication

SUSPICIOUS ACTIVITY DETECTION:
• Unusual account activity
• Unexpected charges
• Missing mail or statements
• Credit report discrepancies
• Collection calls for unknown debts

REPORTING SCAMS:
• Federal Trade Commission (FTC)
• Internet Crime Complaint Center (IC3)
• Local law enforcement
• State attorney general's office
• Better Business Bureau

EDUCATIONAL RESOURCES:
• Consumer protection websites
• Financial literacy resources
• Senior fraud prevention programs
• Youth education initiatives
• Community awareness programs

Remember: If an offer seems too good to be true, it probably is! Take time to research and verify before committing to anything.`,
            quiz: [
              {
                question: "What is a common warning sign of investment scams?",
                options: ["Professional website", "Guaranteed high returns", "Proper licensing", "Multiple contact methods"],
                correctAnswer: 1
              },
              {
                question: "What should you do if someone you've never met asks for money online?",
                options: ["Help them out", "Report it as potential scam", "Ask for more details", "Ignore it"],
                correctAnswer: 1
              },
              {
                question: "Which payment method is safest for online purchases?",
                options: ["Wire transfers", "Cash", "Credit cards with fraud protection", "Personal checks"],
                correctAnswer: 2
              }
            ]
          },
          {
            id: "2-2",
            title: "Financial Fraud Protection",
            content: `Financial fraud can devastate your financial security and credit. Proactive protection strategies and quick response to suspicious activity are essential.

TYPES OF FINANCIAL FRAUD:

CREDIT CARD FRAUD:
• Unauthorized charges
• Card-not-present transactions
• Account takeover attempts
• Card skimming and cloning
• Synthetic identity fraud

IDENTITY THEFT:
• Opening accounts in your name
• Tax refund theft
• Medical identity theft
• Social Security fraud
• Employment identity theft

BANKING FRAUD:
• Unauthorized transfers
• Check fraud
• Online banking compromises
• ATM fraud
• Deposit fraud

MOBILE PAYMENT FRAUD:
• Unauthorized transactions
• App-based payment fraud
• Contactless payment theft
• Digital wallet fraud
• Peer-to-peer payment scams

PREVENTION STRATEGIES:

MONITORING AND SURVEILLANCE:
• Check bank and credit statements regularly
• Review credit reports quarterly
• Set up account alerts for all transactions
• Monitor credit card activity online
• Review insurance and medical statements

SECURE PASSWORD PRACTICES:
• Use unique passwords for each account
• Enable two-factor authentication
• Use password managers
• Change passwords after suspicious activity
• Avoid using easily guessable information

PHYSICAL SECURITY:
• Protect mail from theft
• Shred sensitive documents
• Secure wallets and purses
• Be cautious with PIN entry
• Monitor mailbox for suspicious activity

DIGITAL SECURITY:
• Use secure networks for banking
• Keep software updated
• Install reputable antivirus software
• Use encrypted connections (https)
• Be cautious with public Wi-Fi

CREDIT MONITORING:

CREDIT REPORT ACCESS:
• AnnualCreditReport.com (free reports)
• Review all three credit bureaus
• Look for unauthorized accounts
• Check for incorrect personal information
• Monitor credit inquiries

CREDIT FREEZING:
• Freeze credit with all three bureaus
• Prevents new account opening
• Free to place and lift freezes
• Can be done online or by phone
• Still allows existing account access

FRAUD ALERTS:
• Place initial fraud alerts
• Extended fraud alerts for victims
• Credit monitoring services
• Identity theft protection services
• Bank-provided monitoring

DETECTION AND RESPONSE:

WARNING SIGNS:
• Unexpected account activity
• Missing statements or mail
• Collection calls for unknown debts
• Credit report discrepancies
• Denial of credit for unknown reasons

IMMEDIATE RESPONSE STEPS:
1. Contact banks and credit card companies
2. Place fraud alerts on credit reports
3. File police report if identity theft
4. Document all communications
5. Monitor accounts closely

DISPUTE PROCESSES:
• Follow bank dispute procedures
• Provide required documentation
• Keep detailed records of communications
• Follow up regularly on disputes
• Escalate if necessary

RECOVERY AND RESTORATION:
• Work with fraud departments
• Provide supporting documentation
• Monitor credit improvement
• Consider identity theft insurance
• Regular follow-up on recovery

SUPPORT RESOURCES:

GOVERNMENT AGENCIES:
• Federal Trade Commission (FTC)
• Consumer Financial Protection Bureau (CFPB)
• Social Security Administration (SSA)
• IRS identity protection
• State attorney general offices

CREDIT BUREAUS:
• Equifax, Experian, TransUnion
• Fraud departments
• Dispute processes
• Credit monitoring services
• Identity theft protection

BANKING RESOURCES:
• Bank fraud departments
• Consumer protection services
• Dispute resolution processes
• Security education resources
• Account monitoring tools

LEGAL ASSISTANCE:
• Legal aid organizations
• Identity theft lawyers
• Consumer protection attorneys
• Bar association referrals
• Pro bono services

REMEMBER: Quick action is crucial in fraud cases - the faster you respond, the less damage the fraudster can cause!`,
            quiz: [
              {
                question: "How often should you check your credit reports?",
                options: ["Never", "Once a year", "Quarterly", "Only when applying for credit"],
                correctAnswer: 2
              },
              {
                question: "What should you do first if you notice unauthorized transactions?",
                options: ["Wait to see if more appear", "Contact your bank immediately", "Post about it on social media", "Ignore small amounts"],
                correctAnswer: 1
              },
              {
                question: "What is a credit freeze?",
                options: ["Freezing your credit cards", "Preventing new accounts from being opened", "Closing your credit accounts", "Making minimum payments"],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: "module3",
        title: "Cyberbullying and Harassment",
        subtopics: [
          {
            id: "3-1",
            title: "Recognizing and Addressing Cyberbullying",
            content: `Cyberbullying uses digital technology to harass, threaten, embarrass, or target another person. Recognizing and responding to it is crucial for your mental health and safety.

UNDERSTANDING CYBERBULLYING:

DEFINITION:
Cyberbullying involves the use of digital platforms to harass, threaten, or embarrass someone, often repeatedly and with the intent to cause emotional harm.

TYPES OF CYBERBULLYING:

HARASSMENT:
• Repeatedly sending offensive messages
• Constantly targeting someone online
• Sending threats via digital platforms
• Spamming someone with unwanted messages
• Digital stalking behavior

DENIGRATION:
• Spreading rumors or false information
• Sharing embarrassing photos or videos
• Creating fake profiles to mock someone
• Posting mean comments or reviews
• Damaging someone's online reputation

IMPERSONATION:
• Posing as someone else online
• Stealing someone's identity
• Posting inappropriate content as that person
• Harassing others while pretending to be victim
• Damaging relationships through impersonation

EXCLUSION:
• Deliberately leaving someone out of online groups
• Blocking someone from social activities
• Excluding from digital communications
• Creating exclusive groups without certain people
• Social isolation through technology

CYBERBULLYING PLATFORMS:
• Social media (Facebook, Instagram, Twitter)
• Text messaging and messaging apps
• Email harassment
• Online gaming platforms
• Dating apps and websites
• Forums and comment sections

WARNING SIGNS OF CYBERBULLYING:

EMOTIONAL SIGNS:
• Sudden withdrawal from social activities
• Changes in mood or behavior
• Reluctance to use devices
• Sleep disturbances or nightmares
• Anxiety about going online
• Loss of interest in hobbies

PHYSICAL SIGNS:
• Changes in eating habits
• Headaches or stomachaches
• Fatigue or exhaustion
• Self-harm behaviors
• Substance abuse
• Academic performance decline

BEHAVIORAL SIGNS:
• Secretive about online activities
• Hiding or destroying devices
• Avoiding school or work
• Changes in friend groups
• Decreased self-confidence
• Increased irritability or anger

RESPONSE STRATEGIES:

IMMEDIATE SAFETY STEPS:
• Document all harassment (screenshots, timestamps)
• Block the bully on all platforms
• Report to the platform immediately
• Tell trusted friends or family
• Consider taking a break from social media

DOCUMENTATION TECHNIQUES:
• Take screenshots of all abusive content
• Record dates, times, and platform names
• Save URLs and any metadata
• Keep records of reporting attempts
• Note any witnesses or supporters

REPORTING TO PLATFORMS:
Each platform has reporting mechanisms:
• Facebook/Meta: Report button on posts/profiles
• Instagram: Report option in app
• Twitter/X: Report tweet functionality
• TikTok: In-app reporting system
• YouTube: Flag and report options

INVOLVING AUTHORITIES:
• School administrators for student bullying
• Workplace HR for employment-related bullying
• Law enforcement for threats or harassment
• Legal counsel for serious cases
• Professional counseling services

LONG-TERM PROTECTION:

PRIVACY SETTINGS:
• Review and strengthen all privacy controls
• Limit who can tag or mention you
• Control who can see your posts
• Set up follower approval processes
• Regular privacy setting audits

DIGITAL FOOTPRINT MANAGEMENT:
• Search for yourself regularly
• Remove or hide negative content
• Build positive online presence
• Monitor what's associated with your name
• Consider online reputation services

SUPPORT NETWORKS:
• Maintain trusted friend relationships
• Join support groups or communities
• Seek professional counseling
• Engage with anti-bullying organizations
• Build offline social connections

WORKPLACE CYBERBULLYING:
• Document all incidents thoroughly
• Report to HR or supervisors
• Understand company policies
• Preserve evidence of harassment
• Consider legal action if necessary

CHILDREN AND TEENS:
• Monitor online activities appropriately
• Educate about digital citizenship
• Encourage open communication
• Set clear internet use guidelines
• Build trust so they report problems

LEGAL CONSIDERATIONS:
• Some jurisdictions have cyberbullying laws
• Evidence requirements for legal action
• Harassment vs. free speech boundaries
• Defamation and libel concerns
• Law enforcement involvement thresholds

GETTING HELP:
• National suicide prevention lifeline
• Crisis text lines
• Mental health professionals
• Victim support services
• Legal aid organizations

Remember: You don't have to face cyberbullying alone - help and support are available, and you have the right to feel safe online.`,
            quiz: [
              {
                question: "What is the first step when experiencing cyberbullying?",
                options: ["Respond angrily", "Document everything and block the bully", "Ignore it completely", "Post about it publicly"],
                correctAnswer: 1
              },
              {
                question: "What should you never do when being cyberbullied?",
                options: ["Tell someone you trust", "Block the bully", "Respond with anger", "Take screenshots"],
                correctAnswer: 2
              },
              {
                question: "When should you involve law enforcement?",
                options: ["For all online conflicts", "Only when there are threats or serious harassment", "Never, handle it yourself", "Only on weekends"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "3-2",
            title: "Building Digital Resilience",
            content: `Digital resilience helps you recover from online harassment and prevents future victimization through strong support systems and coping strategies.

BUILDING RESILIENCE:

UNDERSTANDING RESILIENCE:
Resilience is your ability to adapt, recover, and grow stronger from difficult experiences, including online harassment and cyberbullying.

EMOTIONAL RESILIENCE:
• Acknowledge your feelings are valid
• Practice self-compassion and self-care
• Develop healthy coping mechanisms
• Seek professional support when needed
• Build emotional regulation skills

SOCIAL RESILIENCE:
• Maintain strong offline relationships
• Build supportive online communities
• Practice empathy and compassion
• Help others who face similar challenges
• Develop healthy communication skills

COGNITIVE RESILIENCE:
• Challenge negative thought patterns
• Focus on facts rather than emotions
• Practice mindfulness and meditation
• Develop problem-solving skills
• Learn from difficult experiences

PRACTICAL RESILIENCE STRATEGIES:

DIGITAL WELLNESS:
• Set healthy boundaries with technology
• Practice digital detox when needed
• Curate positive online content
• Limit exposure to negative interactions
• Use technology purposefully

SELF-CARE PRACTICES:
• Maintain regular sleep schedules
• Exercise and eat healthily
• Engage in hobbies and interests
• Spend time in nature
• Practice relaxation techniques

SUPPORT SYSTEM BUILDING:
• Cultivate trusted relationships
• Join support groups or communities
• Engage with mental health professionals
• Participate in anti-bullying advocacy
• Build mentor relationships

RECOVERY AND HEALING:

PROCESSING TRAUMA:
• Understand trauma responses are normal
• Allow time for healing and recovery
• Process emotions in healthy ways
• Seek professional trauma counseling
• Practice patience with yourself

REBUILDING CONFIDENCE:
• Recognize your worth and value
• Focus on your strengths and achievements
• Set realistic and achievable goals
• Celebrate small victories
• Surround yourself with positive influences

LEARNING AND GROWTH:
• Extract lessons from difficult experiences
• Develop empathy for others' struggles
• Use experiences to help others
• Become an advocate for positive change
• Transform pain into purpose

PROFESSIONAL SUPPORT:

COUNSELING AND THERAPY:
• Individual therapy for personal processing
• Group therapy for shared experiences
• Family therapy for relationship healing
• Trauma-informed counseling approaches
• Specialized cyberbullying support programs

PEER SUPPORT GROUPS:
• Online support communities
• Local support groups
• Survivor networks and advocacy groups
• Anonymous sharing platforms
• Professional facilitation options

EDUCATIONAL RESOURCES:
• Digital citizenship education
• Media literacy programs
• Social-emotional learning curricula
• Anti-bullying workshops
• Resilience training programs

EMPOWERING OTHERS:

ADVOCACY AND ACTIVISM:
• Share your story to help others
• Participate in anti-bullying campaigns
• Support policy changes
• Volunteer with relevant organizations
• Mentor others facing similar challenges

EDUCATIONAL OUTREACH:
• Speak at schools or organizations
• Create content about digital resilience
• Train others in online safety
• Develop peer support programs
• Participate in awareness campaigns

ADVANCED DIGITAL SAFETY:

ONLINE REPUTATION MANAGEMENT:
• Monitor your digital footprint
• Create positive content to overshadow negative
• Use professional reputation services when needed
• Engage in positive online activities
• Build authentic professional profiles

PRIVACY AND SECURITY MASTERY:
• Become an expert in privacy settings
• Teach others about online safety
• Stay updated on security threats
• Practice good digital hygiene
• Help others secure their accounts

LONG-TERM RESILIENCE PLANNING:

PERSONAL DEVELOPMENT:
• Continue building emotional intelligence
• Develop leadership and communication skills
• Pursue education and skill development
• Build financial security and independence
• Create fulfilling life goals and relationships

COMMUNITY BUILDING:
• Create safe spaces online and offline
• Build inclusive and supportive communities
• Practice digital kindness and empathy
• Address systemic issues contributing to bullying
• Model positive digital citizenship

LEGAL AND POLICY ADVOCACY:
• Understand legal rights and protections
• Advocate for stronger cyberbullying laws
• Support victim-centered policies
• Work with schools and employers on policies
• Participate in legislative advocacy

REMEMBER: Building resilience is a journey, not a destination. Every small step toward healing and growth makes you stronger and helps create a safer online environment for everyone.`,
            quiz: [
              {
                question: "What is the most important aspect of building digital resilience?",
                options: ["Getting revenge", "Building strong support systems", "Avoiding all online interactions", "Confronting bullies"],
                correctAnswer: 1
              },
              {
                question: "Why is it important to help others facing similar challenges?",
                options: ["To make yourself feel better", "To build communities and prevent future bullying", "To get attention", "To become famous"],
                correctAnswer: 1
              },
              {
                question: "What should you do if you're struggling with recovery from cyberbullying?",
                options: ["Deal with it alone", "Seek professional support and counseling", "Ignore the feelings", "Retaliate against the bully"],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: "module4",
        title: "Fake Profiles and Identity Verification",
        subtopics: [
          {
            id: "4-1",
            title: "Identifying Fake Profiles",
            content: `Fake profiles are created to deceive, scam, or harm others. Learning to spot them protects you from fraud, harassment, and emotional manipulation.

WHY FAKE PROFILES EXIST:
• Financial scams and fraud
• Identity theft and impersonation
• Harassment and stalking
• Political manipulation
• Corporate espionage
• Romantic deception (catfishing)

TYPES OF FAKE PROFILES:

SCAM ACCOUNTS:
• Investment fraud schemes
• Romance scams
• Online dating fraud
• Business opportunity scams
• Charity scams
• Loan and financial scams

CATFISHING ACCOUNTS:
• Romantic deception
• Emotional manipulation
• Identity theft for relationships
• Financial exploitation
• Photo theft and misrepresentation
• Long-term deception schemes

HARASSMENT ACCOUNTS:
• Bullying and intimidation
• Stalking behavior
• Revenge or spite
• Coordinated attacks
• Anonymous harassment
• Extortion attempts

POLITICAL/MANIPULATIVE ACCOUNTS:
• Disinformation campaigns
• Polarization and division
• Influence operations
• Fake activism
• Astroturfing (fake grassroots)
• Disinformation spreading

COMMERCIAL FRAUD ACCOUNTS:
• Fake business pages
• Product scams
• Service fraud
• Subscription traps
• Fake reviews and ratings
• Counterfeit goods

WARNING SIGNS OF FAKE PROFILES:

PROFILE INFORMATION RED FLAGS:
• No profile picture or stock photos
• Recently created account
• Minimal personal information
• Generic or incomplete bio
• Perfect or suspicious photos
• Inconsistent personal details

ACTIVITY PATTERNS:
• No or few authentic interactions
• Only promotional or commercial content
• Follows many but has few followers
• No genuine friends or connections
• Suspicious posting times/patterns
• Only reposts from other accounts

COMMUNICATION RED FLAGS:
• Asks for money or personal information quickly
• Avoids video calls or meetings
• Claims to be traveling or working abroad
• Uses poor grammar despite claimed education
• Pressures for private communication
• Inconsistent stories over time

PHOTO AND CONTENT ANALYSIS:
• Reverse image search results
• Professional-looking photos
• Mismatched location and culture clues
• Photos seem too perfect or staged
• Background inconsistencies in photos
• Lack of personal or candid moments

ADVANCED VERIFICATION TECHNIQUES:

REVERSE IMAGE SEARCH:
• Use Google Images, TinEye, or Yandex
• Search for profile pictures
• Check for multiple profile use
• Look for stolen photos
• Verify image authenticity
• Cross-reference across platforms

MUTUAL CONNECTION CHECKING:
• Look for mutual friends
• Check follower/following ratios
• Verify through other channels
• Ask mutual connections
• Check for artificial connections
• Look for engagement patterns

BEHAVIORAL ANALYSIS:
• Posting patterns and timing
• Engagement with others' content
• Comment and interaction style
• Response time patterns
• Language and communication style
• Consistency over time

TECHNICAL VERIFICATION:
• Account creation date
• IP location verification
• Device fingerprinting
• Account verification badges
• Social media cross-referencing
• Professional profile verification

PLATFORM-SPECIFIC WARNING SIGNS:

FACEBOOK:
• Few friends but high friend requests
• Incomplete profile information
• No tagged photos from others
• Recent account creation
• Only business-related posts

INSTAGRAM:
• Perfect, professional photos
• Following many, followed by few
• No captions or generic captions
• Stories only promote products
• No interaction with followers

TWITTER/X:
• Few followers but many follows
• Only retweets or promotional content
• No personal tweets or interactions
• Newly created account
• Profile verification suspicious

LINKEDIN:
• Suspicious employment history
• Incomplete professional information
• Few connections or recommendations
• Only connection requests
• No activity on professional posts

PROTECTION STRATEGIES:

PRIVACY SETTINGS:
• Limit who can find or contact you
• Review friend/follower requests carefully
• Control who can tag you in photos
• Manage privacy for all platforms
• Regular privacy setting reviews

COMMUNICATION SAFETY:
• Be cautious with new connections
• Don't share personal information immediately
• Verify identity through multiple channels
• Avoid sending money to online contacts
• Be suspicious of romantic relationships that develop quickly

ENGAGEMENT PATTERNS:
• Look for genuine interactions
• Check consistency with claimed identity
• Be wary of sudden friendship or relationship
• Verify through mutual connections
• Trust your instincts about authenticity

REPORTING AND RESPONSE:
• Report suspicious profiles immediately
• Block users who exhibit fake behavior
• Don't engage or confront fake accounts
• Document evidence of fake behavior
• Share information to warn others

SPECIAL CONSIDERATIONS FOR VULNERABLE GROUPS:
• Single people seeking relationships
• Elderly individuals
• People experiencing loneliness
• Those in emotional distress
• Individuals new to social media
• People dealing with financial difficulties

EDUCATIONAL RESOURCES:
• Platform safety guides
• Scam awareness training
• Digital literacy programs
• Community safety workshops
• Senior fraud prevention
• Youth digital citizenship education

Remember: If something seems too good to be true or doesn't feel right, trust your instincts and verify before trusting.`,
            quiz: [
              {
                question: "What is the most common reason for fake profiles?",
                options: ["Making friends", "Scamming and fraud", "Business networking", "Social activism"],
                correctAnswer: 1
              },
              {
                question: "What should you do if you suspect a fake profile?",
                options: ["Confront them publicly", "Don't engage, report and block", "Send them money to test them", "Ignore them"],
                correctAnswer: 1
              },
              {
                question: "What tool can help verify if profile photos are fake?",
                options: ["Photo filters", "Reverse image search", "Email verification", "Phone verification"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "4-2",
            title: "Identity Verification and Protection",
            content: `Protecting your identity online prevents others from impersonating you and reduces your risk of becoming a target for scams and harassment.

UNDERSTANDING IDENTITY PROTECTION:

WHAT IS IDENTITY PROTECTION?
Identity protection involves safeguarding your personal information and verifying the identities of others to prevent impersonation, fraud, and unauthorized access.

PERSONAL INFORMATION CATEGORIES:

HIGH-RISK INFORMATION:
• Social Security number
• Date of birth
• Home address
• Phone numbers
• Email addresses
• Bank account information
• Credit card numbers
• Driver's license number

MODERATE-RISK INFORMATION:
• Full name
• Educational background
• Employment history
• Family member names
• Relationship status
• Previous addresses
• Pet names
• Favorite things

LOW-RISK INFORMATION (Usually safe to share):
• First name
• City or general location
• Interests and hobbies
• Public achievements
• General age range
• Broad demographics

PROTECTING YOUR OWN IDENTITY:

SOCIAL MEDIA PRIVACY:
• Use privacy settings to limit information
• Be selective about friend/follower requests
• Don't share detailed personal information
• Review what friends can see about you
• Regular privacy setting audits

PASSWORD AND ACCOUNT SECURITY:
• Use unique, strong passwords
• Enable two-factor authentication
• Use different emails for different purposes
• Regular password updates
• Secure password storage

INFORMATION SHARING PRACTICES:
• Minimize public information sharing
• Be cautious about location sharing
• Don't post real-time location updates
• Avoid sharing travel plans publicly
• Limit information about daily routines

PHOTO AND CONTENT SECURITY:
• Remove metadata from photos before sharing
• Be cautious about background information
• Don't post documents or identification
• Review photos for sensitive information
• Control who can tag you in photos

VERIFYING OTHERS' IDENTITIES:

BASIC VERIFICATION STEPS:
• Cross-reference information across platforms
• Look for consistency in personal details
• Check mutual connections or friends
• Verify through multiple communication channels
• Ask specific questions about their claimed background

ADVANCED VERIFICATION:
• Reverse image search profile photos
• Video calls for relationship verification
• Check professional profiles on LinkedIn
• Verify employment information independently
• Look for third-party confirmations

RED FLAGS IN VERIFICATION:
• Avoiding video calls or meetings
• Inconsistent personal stories
• Reluctance to verify identity
• Pressure to move communication off-platform
• Requests for your personal information first

WHEN TO VERIFY:
• Before meeting in person
• Before sharing sensitive information
• When someone asks for money
• Before entering business relationships
• When forming romantic relationships online
• Before providing services or employment

PROFESSIONAL VERIFICATION TOOLS:

BUSINESS VERIFICATION:
• Better Business Bureau checks
• Business license verification
• Professional licensing boards
• Company registration searches
• Credit reporting agencies
• Industry-specific databases

EDUCATIONAL VERIFICATION:
• Alumni association checks
• Professional certification verification
• School website verification
• Graduation verification services
• Professional organization membership
• Academic transcript verification

PREVENTING IDENTITY IMPERSONATION:

MONITORING YOUR DIGITAL PRESENCE:
• Regular searches for your name
• Google Alerts for your personal information
• Social media monitoring tools
• Image searches for your photos
• Brand or name monitoring services

DOMAIN AND WEBSITE MONITORING:
• Register variations of your name
• Monitor for fake websites or profiles
• Set up brand protection services
• Regular domain monitoring
• Trademark protection if applicable

CREDIT AND FINANCIAL MONITORING:
• Regular credit report checks
• Bank account monitoring
• Credit card statement reviews
• Identity theft protection services
• Financial account alerts

RESPONDING TO IDENTITY THEFT:

IMMEDIATE ACTIONS:
• Contact credit bureaus
• File police report if necessary
• Notify financial institutions
• Document all unauthorized activities
• Change passwords on all accounts

RECOVERY STEPS:
• Place fraud alerts on credit reports
• Freeze credit accounts if necessary
• Work with credit monitoring services
• Follow up on all reported incidents
• Keep detailed records of recovery process

LEGAL PROTECTIONS:

RIGHTS AND LAWS:
• Fair Credit Reporting Act (FCRA)
• Identity theft laws by state
• Consumer protection laws
• Data breach notification laws
• Right to privacy laws

REPORTING AGENCIES:
• Federal Trade Commission (FTC)
• Consumer Financial Protection Bureau (CFPB)
• Local law enforcement
• State attorney general offices
• Federal Trade Commission identity theft hotline

LEGAL ASSISTANCE:
• Identity theft lawyers
• Consumer protection attorneys
• Legal aid organizations
• Bar association referrals
• Pro bono legal services

PROFESSIONAL RESOURCES:
• Identity theft protection services
• Credit monitoring companies
• Cyber security professionals
• Legal counsel
• Mental health support for identity theft victims

Remember: Your identity is valuable and unique - protect it as carefully as you would protect your most precious possessions!`,
            quiz: [
              {
                question: "What type of information should you never share publicly online?",
                options: ["Your hobbies", "Your full name", "Your Social Security number", "Your interests"],
                correctAnswer: 2
              },
              {
                question: "What should you do if someone refuses to verify their identity?",
                options: ["Trust them anyway", "Stop communication and be cautious", "Ask for more personal information", "Confront them angrily"],
                correctAnswer: 1
              },
              {
                question: "Why is monitoring your digital presence important?",
                options: ["To see how popular you are", "To detect fake profiles using your identity", "To count your followers", "To check your posts"],
                correctAnswer: 1
              }
            ]
          }
        ]
      }
    ]
  }
};