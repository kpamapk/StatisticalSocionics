export const SITE = {
  website: "https://statisticalsocionics.vercel.app/", // replace this with your deployed domain
  author: "Mapk",
  profile: "",
  desc: "Modern statisitical methodology applied to Socionics",
  title: "Statistical Socionics",
  ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/kpamapk/StatisticalSocionics/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
