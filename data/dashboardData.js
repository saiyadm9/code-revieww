export const menuData = [
  {
    "id" : "1",
    "name" : "Dashboard",
    "address" : "/dashboard",
    "icon" : "ic:round-home",
    "icon-name" : "",
    "children" : "",
  },
  {
    "id" : "2",
    "name" : "Cricket API",
    "address" : "/dashboard/cricket/requests",
    "icon" : "boxicons:cricket-ball-filled",
    "icon-name" : "",
    "children" : [
      {
        "id" : "1",
        "name" : "Requests",
        "icon" : "circum:server",
        "address" : "/dashboard/cricket/requests",
      },
      {
        "id" : "2",
        "name" : "Live Demo",
        "icon" : "fluent:live-16-filled",
        "address" : "/dashboard/cricket/tester",
      },
      {
        "id" : "3",
        "name" : "Subscription",
        "icon" : "streamline-plump:bill-1-remix",
        "address" : "/dashboard/subscription/cricket",
      },
      {
        "id" : "4",
        "name" : "Documentation",
        "icon" : "hugeicons:google-doc",
        "address" : "#",
      },
      {
        "id" : "5",
        "name" : "Ids",
        "icon" : "material-symbols:api-rounded",
        "address" : "/dashboard/cricket/ids/leagues",
      }
    ],
  },
  {
    "id" : "3",
    "name" : "Football API",
    "address" : "/dashboard/football/requests",
    "icon" : "at-icons:football",
    "icon-name" : "",
    "children" : [
      {
        "id" : "1",
        "name" : "Requests",
        "icon" : "circum:server",
        "address" : "/dashboard/football/requests",
      },
      {
        "id" : "2",
        "name" : "Live Demo",
        "icon" : "fluent:live-16-filled",
        "address" : "/dashboard/football/tester",
      },
      {
        "id" : "3",
        "name" : "Subscription",
        "icon" : "streamline-plump:bill-1-remix",
        "address" : "/dashboard/subscription/football",
      },
      {
        "id" : "4",
        "name" : "Documentation",
        "icon" : "hugeicons:google-doc",
        "address" : "#",
      },
      {
        "id" : "5",
        "name" : "Ids",
        "icon" : "material-symbols:api-rounded",
        "address" : "/dashboard/football/ids/leagues",
      }
    ],
  },
  {
    "id" : "4",
    "name" : "Subscription",
    "address" : "/dashboard/subscription",
    "icon" : "streamline-plump:bill-1-remix",
    "icon-name" : "",
    "children" : [
      {
        "id" : "1",
        "name" : "Cricket",
        "icon" : "at-icons:football",
        "address" : "/dashboard/subscription/cricket",
      },
      {
        "id" : "2",
        "name" : "Football",
        "icon" : "boxicons:cricket-ball-filled",
        "address" : "/dashboard/subscription/football",
      }
    ],
  },
  {
    "id" : "5",
    "name" : "FAQ",
    "address" : "/dashboard/faq",
    "icon" : "mingcute:question-fill",
    "icon-name" : "",
    "children" : "",
  },
  {
    "id" : "6",
    "name" : "Account",
    "address" : "/dashboard/account",
    "icon" : "mdi:account",
    "icon-name" : "",
    "children" : [
      {
        "id" : "1",
        "name" : "My Profile",
        "icon" : "ix:user-profile",
        "address" : "/dashboard/account/profile",
      },
      {
        "id" : "2",
        "name" : "My Access",
        "icon" : "tabler:user-key",
        "address" : "/dashboard/account/access",
      },
      {
        "id" : "3",
        "name" : "Transactions",
        "icon" : "icon-park-outline:transaction-order",
        "address" : "/dashboard/account/transactions",
      },
      {
        "id" : "4",
        "name" : "Quota Alerts",
        "icon" : "mdi:bell-outline",
        "address" : "/dashboard/account/alerts",
      },
    ],
  },
]


export const activityData = [
  {
    "id" : "1",
    "time": "09:41 AM",
    "endpoint" : "/v3/fixures",
    "method" : "GET",
    "status" : "200",
    "duration" : "120ms",
  },
  {
    "id" : "2",
    "time": "09:40 AM",
    "endpoint" : "/v3/teams",
    "method" : "GET",
    "status" : "200",
    "duration" : "100ms",
  },
  {
    "id" : "3",
    "time": "09:38 AM",
    "endpoint" : "/v3/playerssss",
    "method" : "GET",
    "status" : "200",
    "duration" : "90ms",
  },
   {
    "id" : "4",
    "time": "09:38 AM",
    "endpoint" : "/v3/players",
    "method" : "GET",
    "status" : "200",
    "duration" : "90ms",
  },
   {
    "id" : "5",
    "time": "09:38 AM",
    "endpoint" : "/v3/players",
    "method" : "GET",
    "status" : "200",
    "duration" : "90ms",
  },
]

export const quickActionData = [
  {
    "id" : "1",
    "title" : "API Documentation",
    "subtitle" : "Explore endpoints",
    "icon" : "solar:document-bold",
    "color" : "green",
    "url" : "",
  },
  {
    "id" : "2",
    "title" : "API Explorer",
    "subtitle" : "Test APIs online",
    "icon" : "mingcute:code-fill",
    "color" : "blue",
    "url" : "",
  },
  {
    "id" : "3",
    "title" : "Authentication Guide",
    "subtitle" : "Setup & auth docs",
    "icon" : "ic:sharp-security",
    "color" : "purple",
    "url" : "",
  },
  {
    "id" : "4",
    "title" : "Football Endpoints",
    "subtitle" : "View all endpoints",
    "icon" : "at-icons:football",
    "color" : "green",
    "url" : "",
  },
  {
    "id" : "5",
    "title" : "Cricket Endpoints",
    "subtitle" : "View all endpoints",
    "icon" : "boxicons:cricket-ball-filled",
    "color" : "orange",
    "url" : "",
  },
]



