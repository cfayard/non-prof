// src/pages/Post.jsx
import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";
import RichPost from "../components/RichPost";

export default function Post() {
  const { slug } = useParams();
  const post = useMemo(() => posts.find((p) => p.slug === slug), [slug]);

  if (!post) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Post not found</h1>
        <Link to="/news">← Back to News</Link>
      </div>
    );
  }

  return (
    <article style={{ padding: 24, maxWidth: 860, margin: "0 auto" }}>
      <Link to="/news" style={{ color: "#2C733C" }}>
        ← Back to News
      </Link>
      <h1 style={{ marginTop: 8 }}>{post.title}</h1>
      <div style={{ color: "#666" }}>
        {new Date(post.date).toLocaleDateString()} • {post.author} •{" "}
        {post.category}
      </div>

      {post.cover && (
        <img
          src={post.cover}
          alt={post.title}
          style={{ width: "100%", marginTop: 12, borderRadius: 12 }}
        />
      )}

      <div style={{ marginTop: 16 }}>
        <RichPost blocks={post.content} />
      </div>

      {post.tags?.length ? (
        <div
          style={{ marginTop: 16, display: "flex", gap: 6, flexWrap: "wrap" }}
        >
          {post.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12,
                background: "#eee",
                borderRadius: 999,
                padding: "3px 8px",
              }}
            >
              #{t}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
