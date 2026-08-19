export const statistics = [
  {
    "id" : 1,
    "title" : "Requests Today",
    "data" : "1,320",
    "unit" : "",
    "changes" : "14%",
    "increasing" : true,
    "comparision" : "vs yesterday",
    "color" : "green",
    "icon" : "streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow",
  },
  {
    "id" : 2,
    "title" : "Requests This Month",
    "data" : "23,120",
    "unit" : "",
    "changes" : "8%",
    "increasing" : false,
    "comparision" : "Total Request",
    "color" : "blue",
    "icon" : "material-symbols:calendar-month-outline-rounded",
  },
  {
    "id" : 3,
    "title" : "Success Rate",
    "data" : "99.98%",
    "unit" : "",
    "changes" : "0.01%",
    "increasing" : true,
    "comparision" : "Last 30 days",
    "color" : "green",
    "icon" : "iconamoon:shield-yes",
  },
  {
    "id" : 4,
    "title" : "Current Plan",
    "data" : "Pro Plan",
    "unit" : "",
    "changes" : "",
    "increasing" : false,
    "comparision" : "Next Billing 12 Aug, 2026",
    "color" : "purple",
    "icon" : "material-symbols:crown-rounded",
  }
]

export const sportsData = [
  {
    "id": 1,
    "name": "Football API",
    "type": "football",
    "status": "Active",
    "plan" : {
      "name" : "Free Plan",
      "limit" : 1000,
      "duration" : "month"
    },
    "usages": {
      "percentage": 30,
      "used": 300,
      "limit": 1000
    },
    "resetDate": "1785542400",
  },
  {
    "id": 2,
    "name": "Cricket API",
    "type": "cricket",
    "status": "Active",
    "plan" : {
      "name" : "Free Plan",
      "limit" : 1000,
      "duration" : "month"
    },
    "usages": {
      "percentage": 60,
      "used": 600,
      "limit": 1000
    },
    "resetDate": "1785542400",
  }
]

export const changelogData = [
  {
    date: "Aug 1, 2026",
    badge: "",
    title: "Player Statistics Added",
    description: "Added new player statistics endpoints and advanced filtering options.",
  },
  {
    date: "Jul 28, 2026",
    badge: "",
    title: "Faster Response Times",
    description: "Optimized backend infrastructure for faster API responses.",
  },
  {
    date: "Jul 24, 2026",
    badge: "",
    title: "Fixed Live Match Status",
    description: "Resolved issue with live match status not updating in realtime.",
  },
  {
    date: "Jul 20, 2026",
    badge: "",
    title: "Predictions API Released",
    description: "Introduced prediction endpoints powered by ML models.",
  },
];

export const footballData = [
  {
    "id" : "1",
    "icon" : "boxicons:gift",
    "type" : "plan",
    "title" : "Free Plan",
    "info" : "100",
    "subtitle" : "Requests per day",
    "usage" : "60/100",
    "usage_text" : "used",
    "percentage" : "60%",
    "quota_reset" : "",
  },
  {
    "id" : "2",
    "icon" : "streamline-sharp:reset-clock-solid",
    "type" : "quota",
    "title" : "Quota Reset In",
    "info" : "18h 45m",
    "subtitle" : "00h00 UTC time",
    "usage" : "",
    "usage_text" : "",
    "percentage" : "30%",
    "quota_reset" : "Resets daily at 00:00 UTC",
  },
  {
    "id" : "3",
    "icon" : "charm:swap-horizontal",
    "type" : "requests",
    "title" : "Daily Requests",
    "info" : "60%",
    "subtitle" : "Used today",
    "usage" : "60/100",
    "usage_text" : "used",
    "percentage" : "60%",
    "quota_reset" : "",
  },
  {
    "id" : "4",
    "icon" : "streamline:graph-remix",
    "type" : "remaining",
    "title" : "Remaining Requests",
    "info" : "40",
    "subtitle" : "Remaining Requests",
    "usage" : "40/100",
    "usage_text" : "remaining",
    "percentage" : "40%",
    "quota_reset" : "",
  },
]

export const endPointsData = [
  {
    "id" : 1,
    "label" : "selected",
    "endpoints" : [
      {
        "id" : 1,
        "name" : "status",
        "slug" : "status",
        "params" : [
          {
            "id" : 1,
            "name" : "id",
            "type" : "text",
          },
          {
            "id" : 2,
            "name" : "league",
            "type" : "text",
          },
          {
            "id" : 3,
            "name" : "season",
            "type" : "text",
          },
        ]
      },
    ]
  },
  {
    "id" : 2,
    "label" : "available",
    "endpoints" : [
      {
        "id" : 1,
        "name" : "timezone",
        "slug" : "timezone",
        "params" : [
          {
            "id" : 1,
            "name" : "id",
            "type" : "text",
          },
          {
            "id" : 2,
            "name" : "league",
            "type" : "text",
          },
        ]
      },
    ]
  },
]


export const subscriptionData = [
  {
    "id": 1,
    "title": "PRO Plan",
    "description": "Perfect for started",
    "price": "19.00",
    "currency": "$",
    "billing": "/month",
    "isPopular": false,
    "features": [
      "500 API requests / day",
      "Api-Football",
      "All Endpoints",
      "Community support",
      "3 Seats",
    ],
  },
  {
    "id": 2,
    "title": "ULTRA Plan",
    "description": "Best value for growing teams",
    "price": "29.00",
    "currency": "$",
    "billing": "/month",
    "isPopular": true,
    "features": [
      "10,000 API requests / day",
      "Api-Football",
      "All Endpoints",
      "Priority support",
      "3 Seats",
    ],
  },
  {
    "id": 3,
    "title": "MEGA Plan",
    "description": "For high usage & larger teams",
    "price": "39.00",
    "currency": "$",
    "billing": "/month",
    "isPopular": false,
    "features": [
      "100,000 API requests / day",
      "Api-Football",
      "All Endpoints & odds",
      "24/7 support",
      "3 Seats",
    ],
  }
]

export const tableData = [
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 29.99,
    "inStock": "Yes",
    "rating": 4.5
  },
  {
    "id": 2,
    "name": "Bluetooth Keyboard",
    "category": "Electronics",
    "price": 49.99,
    "inStock": "Yes",
    "rating": 4.0
  },
  {
    "id": 3,
    "name": "HD Monitor",
    "category": "Electronics",
    "price": 199.99,
    "inStock": "No",
    "rating": 4.8
  },
  {
    "id": 4,
    "name": "Office Chair",
    "category": "Furniture",
    "price": 150.0,
    "inStock": "Yes",
    "rating": 4.3
  },
  {
    "id": 5,
    "name": "Desk Lamp",
    "category": "Furniture",
    "price": 25.99,
    "inStock": "No",
    "rating": 4.7
  }
]

export const faqData = [
  {
    "id": 1,
    "type": "General",
    "faqs": [
      {
        "id": 1,
        "title": "What is Sports API?",
        "details": "Sports API provides real-time and historical sports data for football, cricket, basketball, tennis, and more through REST API endpoints."
      },
      {
        "id": 2,
        "title": "How can I contact support?",
        "details": "You can contact our support team through the dashboard or by email. Paid plans receive priority support during business hours."
      },
      {
        "id": 3,
        "title": "Do you offer a free plan?",
        "details": "Yes. Our free plan gives you access to all API features with limited requests and selected competitions."
      },
      {
        "id": 4,
        "title": "Can I use the API for commercial projects?",
        "details": "Yes. All paid plans allow commercial usage according to our terms of service."
      },
      {
        "id": 5,
        "title": "Which sports do you cover?",
        "details": "We currently provide data for football, cricket, basketball, tennis, baseball, hockey, and additional sports with new leagues added regularly."
      },
      {
        "id": 6,
        "title": "What is Sports API?",
        "details": "Sports API provides real-time and historical sports data for football, cricket, basketball, tennis, and more through REST API endpoints."
      },
      {
        "id": 7,
        "title": "How can I contact support?",
        "details": "You can contact our support team through the dashboard or by email. Paid plans receive priority support during business hours."
      },
      {
        "id": 8,
        "title": "Do you offer a free plan?",
        "details": "Yes. Our free plan gives you access to all API features with limited requests and selected competitions."
      },
      {
        "id": 9,
        "title": "Can I use the API for commercial projects?",
        "details": "Yes. All paid plans allow commercial usage according to our terms of service."
      },
      {
        "id": 10,
        "title": "Which sports do you cover?",
        "details": "We currently provide data for football, cricket, basketball, tennis, baseball, hockey, and additional sports with new leagues added regularly."
      }
    ]
  },
  {
    "id": 2,
    "type": "Getting started",
    "faqs": [
      {
        "id": 1,
        "title": "How do I start using the API?",
        "details": "Create an account, generate your API key from the dashboard, and start making requests using our documentation."
      },
      {
        "id": 2,
        "title": "Where can I find my API key?",
        "details": "Your API key is available in your dashboard immediately after creating an account."
      },
      {
        "id": 3,
        "title": "Do you provide code examples?",
        "details": "Yes. Our documentation includes examples for JavaScript, PHP, Python, Laravel, Node.js, and cURL."
      },
      {
        "id": 4,
        "title": "Do I need a credit card for the free plan?",
        "details": "No. You can sign up and start using the free plan without providing payment information."
      },
      {
        "id": 5,
        "title": "How can I test API endpoints?",
        "details": "You can test every endpoint directly from our documentation or import our Postman collection."
      }
    ]
  },
  {
    "id": 3,
    "type": "Technical questions",
    "faqs": [
      {
        "id": 1,
        "title": "What response format does the API use?",
        "details": "All API responses are returned in JSON format with consistent field names and HTTP status codes."
      },
      {
        "id": 2,
        "title": "How is authentication handled?",
        "details": "Authentication is performed using your unique API key sent in the request headers."
      },
      {
        "id": 3,
        "title": "Do you support live match updates?",
        "details": "Yes. Live endpoints are updated frequently during matches depending on the sport and competition."
      },
      {
        "id": 4,
        "title": "Is there a rate limit?",
        "details": "Yes. Every plan includes a request limit based on your subscription. Higher plans include larger limits."
      },
      {
        "id": 5,
        "title": "Do you provide historical data?",
        "details": "Yes. Historical seasons and match data are available depending on your subscription plan."
      }
    ]
  },
  {
    "id": 4,
    "type": "Pricing and plans",
    "faqs": [
      {
        "id": 1,
        "title": "Can I upgrade my subscription anytime?",
        "details": "Yes. You can upgrade your plan instantly from your dashboard without interrupting your service."
      },
      {
        "id": 2,
        "title": "Can I downgrade or cancel my plan?",
        "details": "Yes. You can change or cancel your subscription at any time from your billing settings."
      },
      {
        "id": 3,
        "title": "What payment methods do you accept?",
        "details": "We accept major credit cards and additional payment methods depending on your region."
      },
      {
        "id": 4,
        "title": "Do unused requests roll over?",
        "details": "No. Monthly request limits reset at the beginning of each billing cycle."
      },
      {
        "id": 5,
        "title": "Do you offer custom enterprise plans?",
        "details": "Yes. Contact our sales team for custom request limits, dedicated support, and enterprise pricing."
      }
    ]
  },
  {
    "id": 6,
    "type": "Billing",
    "faqs": [
      {
        "id": 1,
        "title": "When will I be charged?",
        "details": "Your subscription is billed automatically at the beginning of each billing cycle."
      },
      {
        "id": 2,
        "title": "Can I download invoices?",
        "details": "Yes. All invoices are available from your billing dashboard."
      },
      {
        "id": 3,
        "title": "What happens if my payment fails?",
        "details": "We'll notify you and retry the payment. If it continues to fail, your account may be downgraded."
      },
      {
        "id": 4,
        "title": "Do you offer refunds?",
        "details": "Refund requests are handled according to our refund policy available in our Terms of Service."
      },
      {
        "id": 5,
        "title": "Can I switch between monthly and yearly plans?",
        "details": "Yes. You can change your billing cycle at any time from your account settings."
      }
    ]
  },
  {
    "id": 7,
    "type": "Account",
    "faqs": [
      {
        "id": 1,
        "title": "How do I reset my password?",
        "details": "Use the 'Forgot Password' option on the login page and follow the instructions sent to your email."
      },
      {
        "id": 2,
        "title": "Can I regenerate my API key?",
        "details": "Yes. You can generate a new API key from your dashboard whenever necessary."
      },
      {
        "id": 3,
        "title": "Can multiple developers use one account?",
        "details": "Yes. Team and enterprise plans support multiple users with different permissions."
      },
      {
        "id": 4,
        "title": "How do I delete my account?",
        "details": "You can request permanent account deletion by contacting our support team."
      },
      {
        "id": 5,
        "title": "Is my account secure?",
        "details": "Yes. We use encrypted connections, secure authentication, and industry best practices to protect your account."
      }
    ]
  }
];

export const accessData = [
  {
    id: 1,
    api: "Football",
    icon: "at-icons:football",
    slug: "football",
    plan: "Free",
    requestsUsed: 0,
    dailyLimit: 100,
    subscriptionEnd: "2027-07-14 00:00:00 UTC",
    status: "Active",
    url: "v3.football.api-sports.io",
    action: "Subscribe",
  },
  {
    id: 2,
    api: "Cricket",
    icon: "boxicons:cricket-ball-filled",
    slug: "cricket",
    plan: "Free",
    requestsUsed: 0,
    dailyLimit: 100,
    subscriptionEnd: "2027-07-14 00:00:00 UTC",
    status: "Active",
    url: "v1.baseball.api-sports.io",
    action: "Subscribe",
  },
];

export const transactionsData = [
  {
    "id": 1,
    "date": "May 14, 2026",
    "time": "03:36 AM",
    "api": "API-FOOTBALL",
    "apiIcon": "at-icons:football",
    "plan": "Pro",
    "months": 1,
    "amount": 29,
    "discount": 0,
    "status": "Paid",
    "invoice": ""
  },
  {
    "id": 2,
    "date": "Apr 14, 2026",
    "time": "03:36 AM",
    "api": "API-CRICKET",
    "apiIcon": "boxicons:cricket-ball-filled",
    "plan": "Pro",
    "months": 1,
    "amount": 29,
    "discount": 0,
    "status": "Paid",
    "invoice": ""
  },
]

export const quotaAlertData = [
  {
    "id": 1,
    "api": "API-FOOTBALL",
    "icon": "at-icons:football",
    "usage": 90,
    "status": "OFF",
    "lastEmail": "Never sent",
    "progress": 0,
  },
  {
    "id": 2,
    "api": "API-CRICKET",
    "icon": "boxicons:cricket-ball-filled",
    "usage": 100,
    "status": "OFF",
    "lastEmail": "Never sent",
    "progress": 0,
  },
]