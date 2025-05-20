import Section from "@/components/Section";

import ProjectCards from "./ProjectCards";

const getRepos = async () => {
  // Revalidate at most every hour
  const res = await fetch("https://api.github.com/users/fabianwaller/repos", {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  data.push(...getClosedSourceProjects());
  data.sort(compare);
  return data;
};

const getClosedSourceProjects = () => {
  return [
    // {
    //   type: "closed",
    //   full_name: "Squadmanager",
    //   html_url: "https://www.squadmanagerapp.com",
    //   description: "A mobile app to manage your sports team.",
    //   topics: ["react native", "expo", "supabase", "typescript"],
    //   pushed_at: new Date().toISOString(),
    // },
    {
      type: "closed",
      full_name: "Website SSV Oppen",
      html_url: "https://ssvoppen.fabianwaller.de/",
      description: "Vereinswebsite Design",
      topics: ["nextjs", "typescript", "tailwindcss", "payloadcms"],
      pushed_at: new Date().toISOString(),
    },
    {
      type: "closed",
      full_name: "Website FC Düppenweiler",
      html_url: "https://www.fcdüppenweiler.de",
      description: "Vereinswebsite",
      topics: ["nextjs", "typescript", "css"],
      pushed_at: "2021-11-22T09:54:02Z",
    },
  ];
};

const compare = (a: any, b: any) => {
  if (new Date(a.pushed_at) < new Date(b.pushed_at)) {
    return 1;
  }
  if (new Date(a.pushed_at) > new Date(b.pushed_at)) {
    return -1;
  }
  return 0;
};

const Projects = async () => {
  const data: any[] = await getRepos();

  return (
    <Section
      name="projects"
      title="Projects"
      subtitle="my private projects and public code repos"
    >
      <ProjectCards data={data} />
    </Section>
  );
};

export default Projects;
