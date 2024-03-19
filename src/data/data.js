export const brands = [
  {
    id: 1,
    "name": "Wix",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968770.png",
    "selected": false,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi?",
    "members": [
      "https://avatar.iran.liara.run/public/boy?username=dk",
      "https://avatar.iran.liara.run/public/boy?username=fffsk",
      "https://avatar.iran.liara.run/public/boy?username=cqce"
    ],
    "categories": [{ "title": "Automation", color: "text-[#ff0000]", bgColor: "bg-[#ff000036]" }],
    "tags": ["#insider", "#seo", "#creative"],
    "scheduledMeeting": "2024-03-28T20:00:00"
  },
  {
    id: 2,
    "name": "Another Project",
    logo: "https://i.pinimg.com/736x/4d/ea/a3/4deaa39501af2022e38fa775c4b56748.jpg",
    "selected": false,
    "description": "Another project description.",
    "members": [
      "https://avatar.iran.liara.run/public/boy?username=dgr",
      "https://avatar.iran.liara.run/public/boy?username=eark",
      "https://avatar.iran.liara.run/public/boy?username=dzsk",
      "https://avatar.iran.liara.run/public/boy?username=12",
      "https://avatar.iran.liara.run/public/boy?username=dwewf"
    ],
    "categories": [{ "title": "Development", "color": "text-[#00ff00]", bgColor: "bg-[#00ff0036]" }],
    "tags": ["#technology"],
    "scheduledMeeting": "2024-04-15T12:00:00"
  },
  {
    id: 3,
    "name": "Project X",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReM7dkSteHY2dju6NMlVc8Qm3E0TrmgjwafA&usqp=CAU",
    "selected": false,
    "description": "Project X description.",
    "members": [
      "https://avatar.iran.liara.run/public/boy?username=dcck",
      "https://avatar.iran.liara.run/public/boy?username=ddfk",
      "https://avatar.iran.liara.run/public/boy?username=ggfk"
    ],
    "categories": [{ "title": "Design", "color": "text-[#0000ff]", bgColor: "bg-[#0000ff36]" }],
    "tags": ["#creative"],
    "scheduledMeeting": "2024-03-22T16:00:00"
  },
  {
    id: 4,
    "name": "Project Y",
    logo: "https://images-platform.99static.com//lGYf44CwRJaKuUOAqxNViAGC7Xs=/317x303:1642x1628/fit-in/500x500/99designs-contests-attachments/108/108957/attachment_108957822",
    "selected": false,
    "description": "Project Y description.",
    "members": [
      "https://avatar.iran.liara.run/public/boy?username=fk",
      "https://avatar.iran.liara.run/public/boy?username=das",
      "https://avatar.iran.liara.run/public/boy?username=re",
      "https://avatar.iran.liara.run/public/boy?username=e",
    ],
    "categories": [{ "title": "Marketing", "color": "text-[#ff00ff]", bgColor: "bg-[#ff00ff36]" }],
    "tags": ["#business", "#technology"],
    "scheduledMeeting": "2024-04-18T11:00:00"
  }
];

export const teams = [
  { icon: "", title: "", shortcut: 1 },
  { icon: "", title: "", shortcut: 2 },
  { icon: "", title: "", shortcut: 3 }
];

export const tags = ["#business", "#technology", "#creative", "#insider", "#seo",];

export const files = {
  children: [
    {
      name: "Products",
      children: [
        {
          name: "Brands",
          children: [
            { name: "Wix" },
            { name: "Another Project" },
            { name: "Project X" },
          ]
        },
        { name: "Roadmap" },
        { name: "Feedback" },
        { name: "Performance" },
        { name: "Term" },
        { name: "Analytics" }
      ]
    },
    {
      name: "Sales",
      children: [
        { name: "Survey" },
        { name: "Analysis" },
      ]
    },
    {
      name: "Design",
      children: [
        { name: "Research" },
        { name: "Methodology" },
      ]
    },
    {
      name: "Office",
      children: [
        { name: "Timings" },
        { name: "Holidays" },
        { name: "Projects" },
        {
          name: "Staff",
          children: [
            { name: "Senior" },
            { name: "Junior" },
          ]
        },
      ]
    },
    {
      name: "Legal",
      children: [
        { name: "Copyright" }
      ]
    },
  ]
};