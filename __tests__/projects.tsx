import ProjectCards from "@/app/(website)/projects/ProjectCards";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

export const mockProjectData = [
  {
    id: 260796404,
    node_id: "MDEwOlJlcG9zaXRvcnkyNjA3OTY0MDQ=",
    name: "Aura",
    full_name: "fabianwaller/Aura",
    private: false,
    owner: {
      login: "fabianwaller",
      id: 62184437,
      node_id: "MDQ6VXNlcjYyMTg0NDM3",
      avatar_url: "https://avatars.githubusercontent.com/u/62184437?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/fabianwaller",
      html_url: "https://github.com/fabianwaller",
      followers_url: "https://api.github.com/users/fabianwaller/followers",
      following_url:
        "https://api.github.com/users/fabianwaller/following{/other_user}",
      gists_url: "https://api.github.com/users/fabianwaller/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/fabianwaller/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/fabianwaller/subscriptions",
      organizations_url: "https://api.github.com/users/fabianwaller/orgs",
      repos_url: "https://api.github.com/users/fabianwaller/repos",
      events_url: "https://api.github.com/users/fabianwaller/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/fabianwaller/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/fabianwaller/Aura",
    description: "AuraPvP plugin",
    fork: false,
    url: "https://api.github.com/repos/fabianwaller/Aura",
    forks_url: "https://api.github.com/repos/fabianwaller/Aura/forks",
    keys_url: "https://api.github.com/repos/fabianwaller/Aura/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/fabianwaller/Aura/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/fabianwaller/Aura/teams",
    hooks_url: "https://api.github.com/repos/fabianwaller/Aura/hooks",
    issue_events_url:
      "https://api.github.com/repos/fabianwaller/Aura/issues/events{/number}",
    events_url: "https://api.github.com/repos/fabianwaller/Aura/events",
    assignees_url:
      "https://api.github.com/repos/fabianwaller/Aura/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/fabianwaller/Aura/branches{/branch}",
    tags_url: "https://api.github.com/repos/fabianwaller/Aura/tags",
    blobs_url: "https://api.github.com/repos/fabianwaller/Aura/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/fabianwaller/Aura/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/fabianwaller/Aura/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/fabianwaller/Aura/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/fabianwaller/Aura/statuses/{sha}",
    languages_url: "https://api.github.com/repos/fabianwaller/Aura/languages",
    stargazers_url: "https://api.github.com/repos/fabianwaller/Aura/stargazers",
    contributors_url:
      "https://api.github.com/repos/fabianwaller/Aura/contributors",
    subscribers_url:
      "https://api.github.com/repos/fabianwaller/Aura/subscribers",
    subscription_url:
      "https://api.github.com/repos/fabianwaller/Aura/subscription",
    commits_url: "https://api.github.com/repos/fabianwaller/Aura/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/fabianwaller/Aura/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/fabianwaller/Aura/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/fabianwaller/Aura/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/fabianwaller/Aura/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/fabianwaller/Aura/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/fabianwaller/Aura/merges",
    archive_url:
      "https://api.github.com/repos/fabianwaller/Aura/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/fabianwaller/Aura/downloads",
    issues_url:
      "https://api.github.com/repos/fabianwaller/Aura/issues{/number}",
    pulls_url: "https://api.github.com/repos/fabianwaller/Aura/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/fabianwaller/Aura/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/fabianwaller/Aura/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/fabianwaller/Aura/labels{/name}",
    releases_url:
      "https://api.github.com/repos/fabianwaller/Aura/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/fabianwaller/Aura/deployments",
    created_at: "2020-05-02T23:52:53Z",
    updated_at: "2024-01-17T11:02:22Z",
    pushed_at: "2020-05-08T17:48:47Z",
    git_url: "git://github.com/fabianwaller/Aura.git",
    ssh_url: "git@github.com:fabianwaller/Aura.git",
    clone_url: "https://github.com/fabianwaller/Aura.git",
    svn_url: "https://github.com/fabianwaller/Aura",
    homepage: null,
    size: 27,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 1,
    watchers: 0,
    default_branch: "master",
  },
];

describe("Projects", () => {
  it("renders projects page unchanged", async () => {
    const component = render(<ProjectCards data={mockProjectData} />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
