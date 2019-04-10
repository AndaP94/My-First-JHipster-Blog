import { Moment } from 'moment';
import { IBlog } from 'app/shared/model/blog.model';
import { ITag } from 'app/shared/model/tag.model';

export interface IEntry {
  id?: number;
  title?: string;
  content?: string;
  date?: Moment;
  blog?: IBlog;
  tags?: ITag[];
}

export const defaultValue: Readonly<IEntry> = {};
