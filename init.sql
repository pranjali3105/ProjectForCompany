-- Run this against your Postgres instance
CREATE TABLE IF NOT EXISTS links (
  code varchar(8) PRIMARY KEY,
  target_url text NOT NULL,
  clicks integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_clicked timestamptz,
  deleted boolean NOT NULL DEFAULT false
);

CREATE INDEX IF NOT EXISTS idx_links_deleted ON links(deleted);
