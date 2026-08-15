export const site={name:"Bible Nexus",url:import.meta.env.SITE,description:"Simple, hopeful Bible messages, prayers, devotionals, sermons, and studies for everyday life.",bibleTranslation:"World English Bible (public domain)"} as const;
export const sections=[
{slug:"sermons",label:"Sermons",description:"Warm Bible messages for the days when you need faith, courage, and hope."},
{slug:"devotionals",label:"Devotionals",description:"Quiet moments with God for busy mornings, tired evenings, and ordinary days."},
{slug:"bible-verses",label:"Bible Verses",description:"Carefully gathered Bible passages for real questions and difficult moments."},
{slug:"prayers",label:"Prayers",description:"Simple prayers you can make your own when words are hard to find."},
{slug:"bible-characters",label:"Bible Characters",description:"The people of the Bible, their stories, their struggles, and what they teach us."},
{slug:"bible-studies",label:"Bible Studies",description:"Clear studies that help you understand Scripture without making faith feel complicated."},
{slug:"bible-questions",label:"Questions",description:"Straightforward answers to sincere questions about the Bible and Christian faith."},
{slug:"bible-dictionary",label:"Bible Dictionary",description:"Plain-English explanations of important Bible words, ideas, places, and practices."}] as const;
export type SectionSlug=(typeof sections)[number]["slug"];
export const sectionBySlug=new Map(sections.map(s=>[s.slug,s]));
const basePath=import.meta.env.BASE_URL;
export const withBase=(path="/")=>{
  const normalized=`/${path.replace(/^\/+/,"")}`;
  if(basePath!=="/"&&(normalized===basePath.slice(0,-1)||normalized.startsWith(basePath)))return normalized;
  return `${basePath}${normalized.slice(1)}`;
};
export const absoluteUrl=(path:string)=>new URL(withBase(path),site.url).toString();
