import Home from "../../containers/tab/Home"//money

export default [
    {
        path: "home",
        label: "Daily",
        icon: 'calendar-o',
        component: Home
    },
    {
        path: "stats",
        label: "Stat",
        icon: 'line-chart',
        component: Home
    },
    {
        path: "budget",
        label: "Budget",
        icon: 'money',
        component: Home
    },
    {
        path: "profile",
        label: "Profile",
        icon: 'user-o',
        component: Home
    },
]
