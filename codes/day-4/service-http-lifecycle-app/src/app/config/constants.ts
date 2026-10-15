import { InjectionToken } from "@angular/core";
import { PostService } from "../services/post-service";
import { Repository } from "../services/repository";
import { Post } from "../models/post";

export const SERVICE_TOKEN = new InjectionToken<Repository<Post>>('POST_SERVICE_TOKEN');
export const SERVICE_CLASS = PostService

export const BASE_API_URL ='https://jsonplaceholder.typicode.com/'