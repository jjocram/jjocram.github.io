# Marco Ferrati | Portfolio

Hi everyone, this is my portfolio website. It is developed with Vue.js and Bulma. Check it out:

- Automatic deployed on GitLab: [Marco Ferrati | Portfolio](https://jjocram.gitlab.io)
- Automatic deployed on GitHub: [Marco Ferrati | Portfolio](https://jjocram.github.io)

## Info about the build phase
1. When a new modification is added I create a commit `git add . && git commit -m "Commit message"`
2. Then I push on the two remotes `git push all`. To do that I modified `.git/config` adding a new remote with two url:
```
[remote "all"]
    url = git@gitlab.com:jjocram/jjocram.gitlab.io.git
    url = git@github.com:jjocram/jjocram.github.io.git
```
3. Based on which CI is build (GitLab or GitHub) differentiated by an environment variable, Vue.js uses different paths for the public directory:
```JS
function getPublicPath() {
  switch(process.env.NODE_ENV) {
    case 'gh-production':
      return '/jjocram.github.io/';
    case 'glab-production':
      return '/';
    default:
      return '/';
  }
}
```
