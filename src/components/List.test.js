import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
});

const events = [
  {
    "id": "6532632663",
    "type": "WatchEvent",
    "actor": {
      "id": 296619,
      "login": "jvrmaia",
      "display_login": "jvrmaia",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jvrmaia",
      "avatar_url": "https://avatars.githubusercontent.com/u/296619?"
    },
    "repo": {
      "id": 36692045,
      "name": "zackify/react-fetch",
      "url": "https://api.github.com/repos/zackify/react-fetch"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-08-31T00:24:19Z"
  },
  {
    "id": "6503748778",
    "type": "WatchEvent",
    "actor": {
      "id": 1720729,
      "login": "ronaldroe",
      "display_login": "ronaldroe",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ronaldroe",
      "avatar_url": "https://avatars.githubusercontent.com/u/1720729?"
    },
    "repo": {
      "id": 36692045,
      "name": "zackify/react-fetch",
      "url": "https://api.github.com/repos/zackify/react-fetch"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-08-23T18:05:19Z"
  },
  {
    "id": "6448574015",
    "type": "ForkEvent",
    "actor": {
      "id": 5415997,
      "login": "udeelo",
      "display_login": "udeelo",
      "gravatar_id": "",
      "url": "https://api.github.com/users/udeelo",
      "avatar_url": "https://avatars.githubusercontent.com/u/5415997?"
    },
    "repo": {
      "id": 36692045,
      "name": "zackify/react-fetch",
      "url": "https://api.github.com/repos/zackify/react-fetch"
    },
    "payload": {
      "forkee": {
        "id": 100267549,
        "name": "react-fetch",
        "full_name": "udeelo/react-fetch",
        "owner": {
          "login": "udeelo",
          "id": 5415997,
          "avatar_url": "https://avatars3.githubusercontent.com/u/5415997?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/udeelo",
          "html_url": "https://github.com/udeelo",
          "followers_url": "https://api.github.com/users/udeelo/followers",
          "following_url": "https://api.github.com/users/udeelo/following{/other_user}",
          "gists_url": "https://api.github.com/users/udeelo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/udeelo/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/udeelo/subscriptions",
          "organizations_url": "https://api.github.com/users/udeelo/orgs",
          "repos_url": "https://api.github.com/users/udeelo/repos",
          "events_url": "https://api.github.com/users/udeelo/events{/privacy}",
          "received_events_url": "https://api.github.com/users/udeelo/received_events",
          "type": "User",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/udeelo/react-fetch",
        "description": "Component wrapper for isomorphic-fetch, passes response to children",
        "fork": true,
        "url": "https://api.github.com/repos/udeelo/react-fetch",
        "forks_url": "https://api.github.com/repos/udeelo/react-fetch/forks",
        "keys_url": "https://api.github.com/repos/udeelo/react-fetch/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/udeelo/react-fetch/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/udeelo/react-fetch/teams",
        "hooks_url": "https://api.github.com/repos/udeelo/react-fetch/hooks",
        "issue_events_url": "https://api.github.com/repos/udeelo/react-fetch/issues/events{/number}",
        "events_url": "https://api.github.com/repos/udeelo/react-fetch/events",
        "assignees_url": "https://api.github.com/repos/udeelo/react-fetch/assignees{/user}",
        "branches_url": "https://api.github.com/repos/udeelo/react-fetch/branches{/branch}",
        "tags_url": "https://api.github.com/repos/udeelo/react-fetch/tags",
        "blobs_url": "https://api.github.com/repos/udeelo/react-fetch/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/udeelo/react-fetch/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/udeelo/react-fetch/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/udeelo/react-fetch/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/udeelo/react-fetch/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/udeelo/react-fetch/languages",
        "stargazers_url": "https://api.github.com/repos/udeelo/react-fetch/stargazers",
        "contributors_url": "https://api.github.com/repos/udeelo/react-fetch/contributors",
        "subscribers_url": "https://api.github.com/repos/udeelo/react-fetch/subscribers",
        "subscription_url": "https://api.github.com/repos/udeelo/react-fetch/subscription",
        "commits_url": "https://api.github.com/repos/udeelo/react-fetch/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/udeelo/react-fetch/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/udeelo/react-fetch/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/udeelo/react-fetch/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/udeelo/react-fetch/contents/{+path}",
        "compare_url": "https://api.github.com/repos/udeelo/react-fetch/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/udeelo/react-fetch/merges",
        "archive_url": "https://api.github.com/repos/udeelo/react-fetch/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/udeelo/react-fetch/downloads",
        "issues_url": "https://api.github.com/repos/udeelo/react-fetch/issues{/number}",
        "pulls_url": "https://api.github.com/repos/udeelo/react-fetch/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/udeelo/react-fetch/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/udeelo/react-fetch/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/udeelo/react-fetch/labels{/name}",
        "releases_url": "https://api.github.com/repos/udeelo/react-fetch/releases{/id}",
        "deployments_url": "https://api.github.com/repos/udeelo/react-fetch/deployments",
        "created_at": "2017-08-14T12:55:54Z",
        "updated_at": "2017-07-30T16:14:08Z",
        "pushed_at": "2017-05-25T15:44:22Z",
        "git_url": "git://github.com/udeelo/react-fetch.git",
        "ssh_url": "git@github.com:udeelo/react-fetch.git",
        "clone_url": "https://github.com/udeelo/react-fetch.git",
        "svn_url": "https://github.com/udeelo/react-fetch",
        "homepage": "http://zach.codes/react-fetch/example/dist/",
        "size": 2235,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": false,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master",
        "public": true
      }
    },
    "public": true,
    "created_at": "2017-08-14T12:55:54Z"
  },
  {
    "id": "6357354109",
    "type": "WatchEvent",
    "actor": {
      "id": 80440,
      "login": "woss",
      "display_login": "woss",
      "gravatar_id": "",
      "url": "https://api.github.com/users/woss",
      "avatar_url": "https://avatars.githubusercontent.com/u/80440?"
    },
    "repo": {
      "id": 36692045,
      "name": "zackify/react-fetch",
      "url": "https://api.github.com/repos/zackify/react-fetch"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-07-30T16:14:08Z"
  },
  {
    "id": "6219482145",
    "type": "WatchEvent",
    "actor": {
      "id": 2274844,
      "login": "kevinyan",
      "display_login": "kevinyan",
      "gravatar_id": "",
      "url": "https://api.github.com/users/kevinyan",
      "avatar_url": "https://avatars.githubusercontent.com/u/2274844?"
    },
    "repo": {
      "id": 36692045,
      "name": "zackify/react-fetch",
      "url": "https://api.github.com/repos/zackify/react-fetch"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-07-09T14:10:19Z"
  },
  {
    "id": "6181968534",
    "type": "WatchEvent",
    "actor": {
      "id": 12086860,
      "login": "Archakov06",
      "display_login": "Archakov06",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Archakov06",
      "avatar_url": "https://avatars.githubusercontent.com/u/12086860?"
    },
    "repo": {
      "id": 36692045,
      "name": "zackify/react-fetch",
      "url": "https://api.github.com/repos/zackify/react-fetch"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-07-03T10:36:29Z"
  },
  {
    "id": "6114877297",
    "type": "WatchEvent",
    "actor": {
      "id": 11396467,
      "login": "seokirill",
      "display_login": "seokirill",
      "gravatar_id": "",
      "url": "https://api.github.com/users/seokirill",
      "avatar_url": "https://avatars.githubusercontent.com/u/11396467?"
    },
    "repo": {
      "id": 36692045,
      "name": "zackify/react-fetch",
      "url": "https://api.github.com/repos/zackify/react-fetch"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-06-22T03:20:05Z"
  },
  {
    "id": "6080382392",
    "type": "WatchEvent",
    "actor": {
      "id": 27205894,
      "login": "ZXC09",
      "display_login": "ZXC09",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ZXC09",
      "avatar_url": "https://avatars.githubusercontent.com/u/27205894?"
    },
    "repo": {
      "id": 36692045,
      "name": "zackify/react-fetch",
      "url": "https://api.github.com/repos/zackify/react-fetch"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-06-16T13:54:04Z"
  }
]

it('renders a list of items', () => {
    const div = document.createElement('div');

    ReactDOM.render(<List {...events} />, div);
})
