import { makeRequest } from '@/api/requests'
const contentHeader = 'application/vnd.github.v3.html+json'

export const starRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'PUT',
  headers: {
    accept: contentHeader
  }
})

export const unStarRepo = ({ owner, repo }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'DELETE'
})
