import { Expose } from 'class-transformer';
import { PostType, PostStatus } from '@project/core';
import { VideoPostContent, TextPostContent, QuotePostContent, PhotoPostContent, LinkPostContent } from '@project/core';

export class PostRdo {
  @Expose()
  public id: string;

  @Expose()
  public type: PostType;

  @Expose()
  public authorId: string;

  @Expose()
  public status: PostStatus;

  @Expose()
  public originalAuthorId?: string;

  @Expose()
  public originalPostId?: string;

  @Expose()
  public isRepost: boolean;

  @Expose()
  public createdAt: Date;

  @Expose()
  public publishedAt: Date;

  @Expose()
  public content: VideoPostContent | TextPostContent | QuotePostContent | PhotoPostContent | LinkPostContent;

  @Expose()
  public tags: string[];

  @Expose()
  public commentsCount: number;

  @Expose()
  public likesCount: number;
}
