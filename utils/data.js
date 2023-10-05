import db from "./prismaUtil";
import qs from "qs";


export const initialPosts = await db.Post.findMany({
  orderBy: {
    publishedAt: 'desc',
  },
  take: 10,
})

export const postCount = async () => await db.Post.count()

export default async function getPosts(slug) {
  const currentPost = await db.Post.findFirst({
    where: {
      slug: slug,
    },
    include: {
      Tag: true,
      User: true,
      Category: true,
    }
  })
  const [
    nextPost,
    prevPost,
    postCount
  ] = await db.$transaction([
    db.Post.findMany({
      orderBy: {
        publishedAt: "desc",
      },
      cursor: {
        id: currentPost.id
      },
      take: -1,
      skip: 1,
    }),
    db.Post.findMany({
      orderBy: {
        publishedAt: "desc",
      },
      cursor: {
        id: currentPost.id
      },
      take: 1,
      skip: 1,
    }),
    db.Post.count()
  ])

  return {currentPost, nextPost, prevPost, postCount}
}

export const stringifiedQuery = (query) => qs.stringify(
  {
    where: query,
  },
  {addQueryPrefix: true}
);

export const getPost = async(postSlug) => await fetch(
  `https://payload-cms-production-6f3d.up.railway.app/api/posts${postSlug}`
)
