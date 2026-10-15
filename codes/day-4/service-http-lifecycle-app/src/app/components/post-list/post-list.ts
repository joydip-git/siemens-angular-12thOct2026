import { Component, effect, EffectCleanupRegisterFn, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { SERVICE_TOKEN } from '../../config/constants';
import { Repository } from '../../services/repository';
import { Post } from '../../models/post';
import { Subscription } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-post-list',
  styleUrl: './post-list.css',
  templateUrl: './post-list.html',
})
/*
export class PostList implements OnInit, OnDestroy {

private repository: Repository<Post> = inject(SERVICE_TOKEN)
private fetchSubscription?: Subscription;

isRequestOver = signal(false)
errorMessage = signal('')
posts = signal<Post[]>([])

ngOnInit(): void {
  this.fetchSubscription = this.repository
    .getAll()
    .subscribe({
      next: (response) => {
        this.posts.set(response)
        this.errorMessage.set('')
        this.isRequestOver.set(true)          
      },
      error: (err) => {
        this.posts.set([])
        this.errorMessage.set(err.message)
        this.isRequestOver.set(true)
      }
    })
}
ngOnDestroy(): void {
  this.fetchSubscription?.unsubscribe()
}
}
*/
export class PostList {

  private repository: Repository<Post> = inject(SERVICE_TOKEN)
  private fetchSubscription?: Subscription;

  isRequestOver = signal(false)
  errorMessage = signal('')
  posts = signal<Post[]>([])

  constructor() {
    effect(
      (cleanUpFn: EffectCleanupRegisterFn) => {
        this.fetchData(cleanUpFn)
      }
    )
  }

  private fetchData(cleanUpFn: EffectCleanupRegisterFn): void {
    this.fetchSubscription = this.repository
      .getAll()
      .subscribe({
        next: (response) => {
          this.posts.set(response)
          this.errorMessage.set('')
          this.isRequestOver.set(true)
        },
        error: (err) => {
          this.posts.set([])
          this.errorMessage.set(err.message)
          this.isRequestOver.set(true)
        }
      })
    //this.fetchSubscription?.unsubscribe()
    cleanUpFn(
      () => {
        this.fetchSubscription?.unsubscribe()
      }
    )
  }
}
